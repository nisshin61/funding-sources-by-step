const cron = require('node-cron');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');
const { extractGrantDetails } = require('./services/aiExtractor');

// Load environment variables
dotenv.config();

// Initialize Supabase Client
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://your-supabase-project.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || 'your-supabase-anon-key';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log('AI Grant Aggregator Background Worker Starting...');

/**
 * MOCK FUNCTION: Simulates a web crawler / scraper that checks registered funding websites
 * (such as วช., บพข., NIA) and returns unstructured raw text announcements.
 */
async function scrapeFundingWebsites() {
    console.log('Starting Web Scraper module to crawl registered sites...');
    
    // Simulating delay for network scraping requests
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Return mock raw texts of newly discovered announcements
    return [
        {
            sourceUrl: 'https://nriis.go.th/announcement/pmuc-netzero-2026',
            rawContent: `
                ประกาศทุน บพข. ประจำปีงบประมาณ 2569
                หัวข้อ: ทุนสนับสนุนโครงการพัฒนาเทคโนโลยีสะอาดเพื่อขับเคลื่อนเป้าหมาย Net Zero ในกลุ่มอุตสาหกรรมท่องเที่ยว
                หน่วยงานผู้มอบทุน: หน่วยบริหารและจัดการทุนด้านการเพิ่มความสามารถในการแข่งขันของประเทศ (บพข.)
                หมวดหมู่วิจัย: Agriculture (หมวดสิ่งแวดล้อมและการท่องเที่ยวเชิงเกษตร)
                
                วัตถุประสงค์:
                - เพื่อวิจัยพัฒนาระบบ AI และ IoT ตรวจวัดคาร์บอนฟุตพริ้นท์การท่องเที่ยวในชุมชน
                - สนับสนุนนวัตกรรมพลังงานสะอาดและการลดของเสียสำหรับผู้ประกอบการโรงแรมขนาดเล็ก
                - สร้างโมเดลการประเมินการท่องเที่ยวสีเขียวที่เป็นมิตรต่อสิ่งแวดล้อมในระดับชาติ
                
                กลุ่มเป้าหมาย:
                สถาบันการศึกษาร่วมกับสมาคมโรงแรมไทย และกลุ่มวิสาหกิจชุมชนการท่องเที่ยว
                
                เกณฑ์คุณสมบัติ:
                1. ต้องเป็นข้อเสนอแผนงานที่มีผู้ร่วมวิจัยจากมหาวิทยาลัยและมีผู้ประกอบการเอกชนร่วมสมทบทุนอย่างน้อย 15%
                2. หัวหน้าโครงการต้องสังกัดมหาวิทยาลัยของรัฐหรือเอกชน
                3. ระยะเวลาดำเนินโครงการไม่เกิน 18 เดือน
                
                งบประมาณสนับสนุนสูงสุด:
                ไม่เกิน 8,000,000 บาท ต่อแผนงาน
                
                ระยะเวลาเปิดรับสมัคร:
                ตั้งแต่บัดนี้ จนถึงวันที่ 12 ตุลาคม พ.ศ. 2569 (ปิดรับเวลา 16.30 น.)
            `
        },
        {
            sourceUrl: 'https://nrct.go.th/grants/ai-cybersecurity-2026',
            rawContent: `
                สำนักงานการวิจัยแห่งชาติ (วช.) ประกาศรับข้อเสนอโครงการวิจัยเร่งด่วน ประจำปี 2569
                เรื่อง: การพัฒนาระบบความมั่นคงปลอดภัยทางไซเบอร์อัจฉริยะด้วยปัญญาประดิษฐ์ (AI-Powered Cybersecurity for Critical Infrastructures)
                หน่วยงาน: สำนักงานการวิจัยแห่งชาติ (วช.)
                หมวดหมู่: Deep Tech
                
                เป้าหมายหลัก:
                - พัฒนาอัลกอริทึมปัญญาประดิษฐ์เพื่อดักจับและวิเคราะห์ภัยคุกคามไซเบอร์ในโครงสร้างพื้นฐานสำคัญ เช่น ระบบประปาและพลังงาน
                - ยกระดับขีดความสามารถการรับมือภัยคุกคามอัจฉริยะ (Threat Intelligence)
                
                ผู้มีสิทธิ์สมัคร:
                ทีมนักวิจัยสถาบันการศึกษาของรัฐ และหน่วยงานสารสนเทศภาครัฐที่เป็นเจ้าของโครงสร้างพื้นฐาน
                
                เงื่อนไขสำคัญ:
                - ข้อเสนอต้องผ่านการอนุมัติเบื้องต้นจากคณะทำงานด้านความมั่นคงไซเบอร์แห่งชาติ
                - หัวหน้าโครงการต้องไม่มีภาระงานวิจัยค้างส่ง วช.
                
                วงเงินงบประมาณ:
                สูงสุดไม่เกิน 6,500,000 บาท
                
                วันสิ้นสุดรับสมัคร:
                หมดเขตรับข้อเสนอวันที่ 28 สิงหาคม พ.ศ. 2569 เวลา 16.30 น. (ระบบ NRIIS ปิดอัตโนมัติ)
            `
        }
    ];
}

/**
 * Main database upsert utility function
 */
async function upsertGrant(payload) {
    // Check if a grant with the same title already exists to prevent duplicate entries
    const { data: existing, error: selectErr } = await supabase
        .from('grants')
        .select('id')
        .eq('title', payload.title)
        .maybeSingle();

    if (selectErr) throw selectErr;

    if (existing) {
        // Update existing record
        const { data: updated, error: updateErr } = await supabase
            .from('grants')
            .update(payload)
            .eq('id', existing.id)
            .select()
            .single();
        
        if (updateErr) throw updateErr;
        return { action: 'UPDATE', data: updated };
    } else {
        // Insert new record
        const { data: inserted, error: insertErr } = await supabase
            .from('grants')
            .insert([payload])
            .select()
            .single();

        if (insertErr) throw insertErr;
        return { action: 'INSERT', data: inserted };
    }
}

/**
 * Main Workflow Execution containing Scrape -> Extract -> Upsert -> Notify
 */
async function runScheduledWorkflow() {
    console.log(`[${new Date().toISOString()}] Executing weekly Grant Aggregation job...`);
    
    const results = [];
    let successes = 0;
    let failures = 0;

    try {
        // 1. Trigger Scraper
        const newAnnouncements = await scrapeFundingWebsites();
        console.log(`Discovered ${newAnnouncements.length} new announcements to process.`);

        // 2. Iterate and process through AI Extractor
        for (const item of newAnnouncements) {
            try {
                console.log(`Processing link: ${item.sourceUrl}...`);
                
                // Trigger AI Extractor (Phase 3 LLM prompt)
                const extracted = await extractGrantDetails(item.rawContent);
                console.log(`AI successfully extracted structure for: "${extracted.title}"`);

                // 3. Map extracted JSON to database schema payload
                const dbPayload = {
                    title: extracted.title,
                    agency_name: extracted.agency_name,
                    category: extracted.category,
                    description: extracted.summary,
                    key_objectives: extracted.key_objectives,
                    target_group: extracted.target_group,
                    eligibility_criteria: extracted.eligibility,
                    max_funding_amount: extracted.funding_limit || 0.00,
                    deadline_date: extracted.deadline || null,
                    source_url: item.sourceUrl,
                    status: extracted.deadline && new Date(extracted.deadline) < new Date() ? 'Closed' : 'Active',
                    start_date: new Date().toISOString()
                };

                // 4. Upsert into Supabase database
                const { action, data: record } = await upsertGrant(dbPayload);
                console.log(`Database sync complete [${action}]: UUID ${record.id}`);

                results.push({
                    title: record.title,
                    agency: record.agency_name,
                    funding: record.max_funding_amount,
                    deadline: record.deadline_date,
                    action: action
                });
                successes++;

            } catch (innerErr) {
                console.error(`Failed to process announcement (${item.sourceUrl}):`, innerErr.message);
                failures++;
            }
        }

        // 5. Generate and dispatch Internal Notification Summary
        generateNotificationSummary(successes, failures, results);

    } catch (err) {
        console.error('Scheduled workflow encountered a critical error:', err.message);
    }
}

/**
 * Format and trigger notification logs (simulates Slack/Email notifications)
 */
function generateNotificationSummary(successes, failures, results) {
    const totalProcessed = successes + failures;
    
    // Construct Slack/Teams markdown summary payload
    const payload = {
        title: '📢 Weekly AI Grant Aggregator Digest',
        timestamp: new Date().toISOString(),
        summary: `Weekly scanning completed. Total announcements processed: ${totalProcessed} (${successes} Synced, ${failures} Failed).`,
        color: failures > 0 ? '#f59e0b' : '#10b981', // Amber/Green accent
        new_grants: results.map(r => ({
            label: `[${r.action}] ${r.title} (${r.agency})`,
            funding_limit: r.funding > 0 ? `${parseFloat(r.funding).toLocaleString()} บาท` : 'ไม่ระบุงบสนับสนุน',
            deadline: r.deadline ? new Date(r.deadline).toLocaleDateString('th-TH') : 'ไม่ระบุวันหมดเขต'
        }))
    };

    console.log('\n==================================================');
    console.log('GENERATE INTERNAL NOTIFICATION SUMMARY PAYLOAD:');
    console.log(JSON.stringify(payload, null, 2));
    console.log('==================================================\n');
    
    // In production, we would call an HTTP webhook to Slack or send an Email:
    // fetch(process.env.SLACK_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(payload) });
}

// --- CRON SCHEDULER CONFIGURATION ---
// Cron expression: 0 8 * * 1 (Every Monday at 08:00 AM)
const CRON_EXPRESSION = '0 8 * * 1';

if (cron.validate(CRON_EXPRESSION)) {
    cron.schedule(CRON_EXPRESSION, () => {
        runScheduledWorkflow();
    });
    console.log(`Cron scheduler active. Workflow is scheduled to run: Every Monday at 08:00 AM (${CRON_EXPRESSION})`);
} else {
    console.error('Invalid Cron expression configured.');
}

// --- ON-DEMAND CLI RUNNER TRIGGER ---
// Allows manual trigger by executing `node worker.js --run`
if (process.argv.includes('--run')) {
    console.log('Manual trigger override detected.');
    runScheduledWorkflow();
}
