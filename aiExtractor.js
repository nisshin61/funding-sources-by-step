const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini Client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/**
 * Extracts structured grant information from unstructured text using Gemini LLM.
 * 
 * @param {string} rawText - Scraped text from web pages or extracted from PDF.
 * @returns {Promise<Object>} Structured JSON matching database schema.
 */
async function extractGrantDetails(rawText) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY is not defined in environment variables. Please add it to your api/.env file.');
    }

    if (!rawText || rawText.trim() === '') {
        throw new Error('Raw text input is empty.');
    }

    // Initialize Generative Model with Structured JSON schemas
    const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: {
                type: 'OBJECT',
                properties: {
                    title: { type: 'STRING', description: 'ชื่อประกาศทุนภาษาไทยที่สรุปได้ใจความสั้นกระชับ' },
                    agency_name: { type: 'STRING', description: 'ชื่อหน่วยงานย่อผู้มอบทุน เช่น บพข., วช., NIA, หรือหน่วยงานสากล' },
                    category: { type: 'STRING', description: 'ประเภททุนภาษาอังกฤษสั้นๆ เช่น Deep Tech, Medical, Agriculture, Research, Social Impact, Commercialization' },
                    summary: { type: 'STRING', description: 'สรุปคำอธิบายหลักเกณฑ์เด่นและขอบเขตของทุนในภาษาไทยไม่เกิน 3 ประโยค' },
                    key_objectives: {
                        type: 'ARRAY',
                        items: { type: 'STRING' },
                        description: 'รายการวัตถุประสงค์หลักของโครงงานที่สนับสนุน (ภาษาไทย)'
                    },
                    target_group: { type: 'STRING', description: 'กลุ่มเป้าหมายผู้รับทุน เช่น ผู้ประกอบการ, มหาวิทยาลัย, นักวิจัย, สตาร์ทอัพ' },
                    eligibility: { type: 'STRING', description: 'คุณสมบัติหลักเกณฑ์ผู้สมัครโดยละเอียดเป็นประเด็นหลักในภาษาไทย' },
                    deadline: { type: 'STRING', description: 'วันปิดรับสมัครในรูปแบบ YYYY-MM-DD เท่านั้น (หากระบุเป็น พ.ศ. ให้แปลงเป็น ค.ศ.) หรือระบุ null หากไม่พบ' },
                    funding_limit: { type: 'NUMBER', description: 'วงเงินสนับสนุนสูงสุดต่อโครงการเป็นตัวเลขจำนวนเต็มหลักสิบหลักร้อยล้าน หรือ 0 หากไม่ระบุ' }
                },
                required: ['title', 'agency_name', 'category', 'summary', 'key_objectives', 'target_group', 'eligibility']
            }
        }
    });

    const prompt = `
    Analyze the following raw scraped text from a research grant announcement or official document.
    Extract the key information and structure it into the requested JSON schema.
    
    CRITICAL INSTRUCTIONS:
    1. Translate all structural descriptions (title, summary, key_objectives, target_group, eligibility) into professional, formal Thai language.
    2. Normalize dates to Gregorian YYYY-MM-DD. For example, if the text mentions Thai Buddhist Era years like "2569" (e.g. "8 สิงหาคม 2569"), convert it to "2026-08-08".
    3. Normalize budget currencies to numeric THB value (e.g., "5 ล้านบาท" or "5,000,000 บาท" becomes 5000000. "€250,000" becomes 9500000). If it represents a maximum cap, capture it as a positive floating number.
    4. Ensure the output strictly conforms to the requested JSON structure. DO NOT return any text outside of the JSON block.

    Raw Document Announcement Text:
    ---
    ${rawText}
    ---
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const responseText = response.text();

        const parsed = JSON.parse(responseText);

        // Basic verification for structural data completeness
        if (!parsed.title || parsed.title.trim() === '') {
            throw new Error('AI extraction succeeded but did not return a valid title.');
        }

        return parsed;
    } catch (err) {
        console.error('Gemini extraction failed:', err);
        throw new Error(`AI Extraction process failed: ${err.message}`);
    }
}

module.exports = { extractGrantDetails };
