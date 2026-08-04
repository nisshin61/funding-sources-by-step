// State Management
const STATE = {
  grants: [
    {
      id: "grant-001",
      title: "ทุนบุกเบิกเทคโนโลยี AI เพื่ออุตสาหกรรมเป้าหมาย (Deep Tech for Industries)",
      agency: "บพข.",
      category: "Deep Tech",
      status: "Active",
      audience: "SMEs, Startups & Universities",
      fundingAmount: "สูงสุด 15,000,000 บาท (ต่อโครงการ)",
      fundingRange: 15000000,
      deadline: "2026-08-08", // 4 days from Aug 4
      objectives: [
        "สนับสนุนโครงการวิจัยพัฒนาเทคโนโลยีเชิงลึก (Deep Tech) ด้านปัญญาประดิษฐ์ที่มีศักยภาพเชิงพาณิชย์",
        "สร้างขีดความสามารถการแข่งขันของอุตสาหกรรมไทยในระดับสากล",
        "ส่งเสริมความร่วมมือระหว่างภาครัฐ เอกชน และสถาบันการศึกษาระบบบูรณาการ"
      ],
      eligibility: [
        "จดทะเบียนเป็นนิติบุคคลในประเทศไทย มีสัดส่วนผู้ถือหุ้นไทยมากกว่า 51%",
        "มีข้อตกลงร่วมมือวิจัยการถ่ายทอดเทคโนโลยีร่วมกับสถาบันการศึกษาหรือสถาบันวิจัยวิชาการ",
        "มีทุนจดทะเบียนชำระแล้วไม่ต่ำกว่า 1,000,000 บาท หรือมีพันธมิตรร่วมลงทุนชัดเจน"
      ],
      guidelines: [
        "ยื่นข้อเสนอโครงการผ่านระบบ NRIIS ภายในเวลา 16:30 น. ของวันปิดรับสมัคร",
        "แนบแผนธุรกิจ (Pitch Deck) และเอกสารแสดงข้อตกลงทรัพย์สินทางปัญญา (IP Agreement)",
        "โครงการต้องมีระยะเวลาดำเนินการไม่เกิน 24 เดือน"
      ],
      pdfUrl: "https://nriis.go.th/www/announcements/pmuc-ai-2026.pdf",
      aiConfidence: 98,
      extractedAt: "2026-08-03 09:12",
      criteriaSummary: "เน้นวิจัยปัญญาประดิษฐ์ประยุกต์ใช้ในอุตสาหกรรมบริการ การผลิต หรือการเกษตร ต้องร่วมมือกับมหาวิทยาลัยและมีผู้ร่วมลงทุนอย่างน้อย 20%"
    },
    {
      id: "grant-002",
      title: "ทุนวิจัยพัฒนาปัญญาประดิษฐ์เชิงรุกเพื่อการแพทย์อนาคต (AI for Medical & Healthcare Diagnostics)",
      agency: "วช.",
      category: "Medical",
      status: "Active",
      audience: "Academic Researchers & Medical Schools",
      fundingAmount: "สูงสุด 5,000,000 บาท",
      fundingRange: 5000000,
      deadline: "2026-08-10", // 6 days from Aug 4
      objectives: [
        "พัฒนานวัตกรรมปัญญาประดิษฐ์เพื่อช่วยวินิจฉัยโรคและประเมินความเสี่ยงสุขภาพ",
        "ยกระดับการให้บริการทางการแพทย์และการเข้าถึงระบบสาธารณสุขของประชาชนในพื้นที่ห่างไกล",
        "สนับสนุนงานวิจัยที่สามารถนำไปทดลองใช้งานจริงในโรงพยาบาลระดับรัฐและชุมชน"
      ],
      eligibility: [
        "ทีมนักวิจัยสังกัดสถาบันอุดมศึกษา สถาบันวิจัยภาครัฐ หรือองค์กรไม่แสวงหากำไรด้านการแพทย์",
        "มีหนังสือรับรองจากจริยธรรมการวิจัยในมนุษย์ (IRB Approval) หรืออยู่ในขั้นตอนรับพิจารณา",
        "หัวหน้าโครงการต้องมีประสบการณ์วิจัยด้านการแพทย์ หรือเทคโนโลยีสารสนเทศอย่างน้อย 3 ปี"
      ],
      guidelines: [
        "ส่งข้อเสนอฉบับเต็มทางระบบอิเล็กทรอนิกส์ของ วช. พร้อมประวัตินักวิจัย",
        "แนบแผนรองรับมาตรฐานการดูแลรักษาความปลอดภัยข้อมูลผู้ป่วย (PDPA Healthcare Compliance)",
        "เข้าร่วมสัมมนานำเสนอความก้าวหน้าโครงการทุก 6 เดือนตามกำหนดการ"
      ],
      pdfUrl: "https://nrct.go.th/grant/ai-healthcare-2026.pdf",
      aiConfidence: 96,
      extractedAt: "2026-08-02 14:45",
      criteriaSummary: "ทุนวิจัยระบบ AI วินิจฉัยโรคเพื่อการใช้งานในสถานพยาบาลของรัฐ ต้องจัดเตรียมแผนความมั่นคงปลอดภัยของข้อมูลผู้ป่วย (PDPA) อย่างเข้มงวด"
    },
    {
      id: "grant-003",
      title: "Collaborative AI Research for Sustainable Agriculture & Smart Farming",
      agency: "Foreign Grants",
      category: "Agriculture",
      status: "Active",
      audience: "Consortiums (Uni + Agritech Startups)",
      fundingAmount: "€250,000 (ประมาณ 9,500,000 บาท)",
      fundingRange: 9500000,
      deadline: "2026-08-25", // 21 days from Aug 4
      objectives: [
        "To promote international joint ventures leveraging AI for climate-resilient agriculture.",
        "Deploy sensor networks, predictive models, and robotics to minimize water and pesticide usage.",
        "Evaluate economic sustainability of deep learning applications for local farmers."
      ],
      eligibility: [
        "Open to consortiums with at least one member from the European Union/Associated Countries and one from Southeast Asia (including Thailand).",
        "Lead coordinator must be a registered research institution or NGO.",
        "Demonstrated access to trial farmlands and operational agricultural equipment."
      ],
      guidelines: [
        "Submit fully translated proposal in English through the Horizon Europe portal.",
        "Letters of intent from regional agricultural cooperatives must be included.",
        "Pre-proposal check is mandatory by August 15, 2026."
      ],
      pdfUrl: "https://ec.europa.eu/info/funding-tenders/horizon-eu-agri-ai.pdf",
      aiConfidence: 94,
      extractedAt: "2026-08-01 18:22",
      criteriaSummary: "ทุนวิจัยร่วมระหว่างยุโรปและอาเซียน พัฒนา AI เกษตรอัจฉริยะ ทุนมูลค่าประมาณ 9.5 ล้านบาท ต้องมีสมาชิกเครือข่ายวิจัยจากสถาบันของรัฐหรือเอกชน"
    },
    {
      id: "grant-004",
      title: "National Science Foundation (NSF) - AI in Science and Engineering Research Grant",
      agency: "Foreign Grants",
      category: "Research",
      status: "Active",
      audience: "Universities & Global Labs",
      fundingAmount: "$500,000 (ประมาณ 17,500,000 บาท)",
      fundingRange: 17500000,
      deadline: "2026-09-15", // 42 days from Aug 4
      objectives: [
        "Fund fundamental research in AI architectures, reinforcement learning, and AI explainability.",
        "Encourage cross-disciplinary application of machine learning in physics, chemistry, and fluid dynamics.",
        "Provide computing resources and infrastructure for underrepresented scientific researchers."
      ],
      eligibility: [
        "US-based universities are eligible to apply as prime recipient; international collaborators are permitted via sub-awards.",
        "Principal Investigators must hold a PhD in Computer Science, Math, or related STEM field.",
        "Requires strong data sharing management plan compliant with open-science policies."
      ],
      guidelines: [
        "Apply via Research.gov portal matching NSF GPG requirements.",
        "Maximum of 15 pages for project description, plus biosketches.",
        "Indirect cost rates must be pre-approved or follow standard de minimis rate."
      ],
      pdfUrl: "https://nsf.gov/publications/nsf-ai-research-26.pdf",
      aiConfidence: 99,
      extractedAt: "2026-08-03 16:50",
      criteriaSummary: "ทุนวิจัยด้านทฤษฎี AI และโครงสร้างพื้นฐานคอมพิวเตอร์ ยินดีต้อนรับความร่วมมือจากนานาชาติผ่านการจัดสรรทุนย่อย (Sub-award) ส่งผลงานเป็นภาษาอังกฤษทั้งหมด"
    },
    {
      id: "grant-005",
      title: "ทุนนวัตกรรมแบบเปิด Deep Tech Startup (Open Innovation Phase II)",
      agency: "NIA",
      category: "Deep Tech",
      status: "Active",
      audience: "Startups & SMEs",
      fundingAmount: "สูงสุด 3,000,000 บาท",
      fundingRange: 3000000,
      deadline: "2026-10-01", // 58 days from Aug 4
      objectives: [
        "สนับสนุนธุรกิจเริ่มต้นที่มีการนำเทคโนโลยีเชิงลึก (Deep Tech) มาใช้แก้ปัญหากลุ่มอุตสาหกรรมยุทธศาสตร์",
        "กระตุ้นให้เกิดนวัตกรรมด้านผลิตภัณฑ์ บริการ หรือกระบวนการผลิตที่มีมูลค่าสูง",
        "เตรียมความพร้อมสำหรับระดมทุนในระดับซีรีส์ A ขึ้นไป"
      ],
      eligibility: [
        "บริษัทจำกัดสัญชาติไทยจดทะเบียนไม่เกิน 5 ปี มีการจัดทำงบการเงินถูกต้อง",
        "มีต้นแบบนวัตกรรม (Prototype) ในระดับ TRL 4 ขึ้นไป (ผ่านการทดลองในสภาวะแวดลองเสมือนจริง)",
        "ไม่มีประวัติค้างส่งรายงานการวิจัยหรือถูกระงับสิทธิจากทุนสนับสนุนภาครัฐอื่นๆ"
      ],
      guidelines: [
        "ลงทะเบียนยื่นสมัครผ่านระบบ NIA Open Innovation Portal",
        "ต้องมีงบประมาณสมทบร่วมลงทุนจากบริษัทไม่น้อยกว่า 25% ของมูลค่าโครงการทั้งหมด (ในรูปแบบ In-cash หรือ In-kind)",
        "ระยะเวลาดำเนินโครงการไม่เกิน 18 เดือน"
      ],
      pdfUrl: "https://nia.or.th/open-innovation-phase2.pdf",
      aiConfidence: 95,
      extractedAt: "2026-08-04 08:30",
      criteriaSummary: "ทุนพัฒนาต่อยอดนวัตกรรมเชิงพาณิชย์ของ NIA สำหรับผู้ประกอบการเทคโนโลยีเชิงลึกที่มี Prototype พร้อมทดสอบตลาด ต้องออกเงินสมทบโครงการ 25%"
    },
    {
      id: "grant-006",
      title: "Generative AI for Social Impact Challenge",
      agency: "Foreign Grants",
      category: "Social Impact",
      status: "Expired",
      audience: "Non-Profits & Social Enterprises",
      fundingAmount: "$250,000 (ประมาณ 8,750,000 บาท)",
      fundingRange: 8750000,
      deadline: "2026-07-20", // Expired
      objectives: [
        "Support organizations building open-source GenAI applications that address UN Sustainable Development Goals (SDGs).",
        "Provide direct grants, technical mentorship, and cloud computing credits to selected groups.",
        "Share knowledge and software architectures to accelerate global civic tech deployment."
      ],
      eligibility: [
        "Registered 501(c)(3) organizations or international equivalents with non-profit status.",
        "Commitment to release code under open-source licenses (MIT, Apache 2.0).",
        "Projects must show direct positive impact on community welfare or environmental protection."
      ],
      guidelines: [
        "Applications closed on July 20, 2026. Reviewing process is ongoing.",
        "Shortlisted teams will be contacted by August 15 for live presentations.",
        "Awards disbursement starting September 2026."
      ],
      pdfUrl: "https://google.org/genai-social-impact-2026.pdf",
      aiConfidence: 92,
      extractedAt: "2026-07-10 11:15",
      criteriaSummary: "ทุนสนับสนุนการประยุกต์ใช้ Generative AI เพื่อสังคม รหัสเปิด (Open-source) หมดเขตรับสมัครไปแล้ว อยู่ระหว่างการคัดเลือกข้อเสนอโครงการ"
    },
    {
      id: "grant-007",
      title: "ทุนสนับสนุนนวัตกรรมและเทคโนโลยีสารสนเทศเพื่อความเท่าเทียม (วช. ทุนวิจัยเร่งด่วน)",
      agency: "วช.",
      category: "Social Impact",
      status: "Active",
      audience: "Academic Researchers & NGOs",
      fundingAmount: "สูงสุด 2,500,000 บาท",
      fundingRange: 2500000,
      deadline: "2026-08-06", // 2 days from Aug 4
      objectives: [
        "สนับสนุนงานวิจัยเชิงปฏิบัติการในการใช้ปัญญาประดิษฐ์และไอทีลดช่องว่างทางสัมคม",
        "พัฒนาโปรแกรมช่วยเหลือผู้ทุพพลภาพหรือระบบการเข้าถึงสารสนเทศของผู้สูงวัย",
        "สร้างต้นแบบที่สามารถขยายผลไปยังสถาบันดูแลทางสังคมในภูมิภาคต่างๆ ได้อย่างยั่งยืน"
      ],
      eligibility: [
        "หน่วยงานของรัฐ สถาบันอุดมศึกษา สมาคม หรือองค์กรไม่แสวงหากำไรที่จดทะเบียนถูกต้องตามกฎหมาย",
        "มีผู้รับผิดชอบหลักที่มีงานวิจัยตีพิมพ์หรือประวัติการทำงานเพื่อสังคมสัมพันธ์ไม่ต่ำกว่า 2 ปี",
        "มีเป้าหมายดำเนินโครงการให้เสร็จสิ้นพร้อมใช้การได้ภายในระยะเวลา 12 เดือน"
      ],
      guidelines: [
        "สมัครผ่านระบบส่งข้อเสนอโครงการวิจัยของ วช. (Fast Track AI/IT)",
        "จัดส่งวิดีโอแนะนำแนวคิดโครงการสั้นๆ ไม่เกิน 3 นาทีพร้อมไฟล์ข้อเสนอ",
        "สัมภาษณ์ต่อหน้ากรรมการแบบเร่งรัดผ่านทางระบบ Zoom ในกรณีผ่านการตรวจสอบเบื้องต้น"
      ],
      pdfUrl: "https://nrct.go.th/grant/ai-equality-fasttrack.pdf",
      aiConfidence: 97,
      extractedAt: "2026-08-03 10:05",
      criteriaSummary: "ทุนวิจัยเร่งด่วนพิเศษของ วช. เพื่อพัฒนาเครื่องมือ AI หรือระบบดิจิทัลช่วยเหลือกลุ่มคนเปราะบาง ปิดรับสมัครด่วนภายในเวลาอันสั้น"
    },
    {
      id: "grant-008",
      title: "ทุนวิจัยและพัฒนาเพื่อการแปลงเทคโนโลยีสู่เชิงพาณิชย์ (AI & Robotics Commercialization)",
      agency: "บพข.",
      category: "Commercialization",
      status: "Active",
      audience: "Joint Venture Corporates & Universities",
      fundingAmount: "สูงสุด 20,000,000 บาท",
      fundingRange: 20000000,
      deadline: "2026-08-31", // 27 days from Aug 4
      objectives: [
        "ผลักดันงานวิจัยและสิทธิบัตรด้าน AI/Robotics จากรั้วมหาวิทยาลัยออกสู่ตลาดเชิงพาณิชย์",
        "ร่วมมือกันพัฒนาเชิงลึกเพื่อผลิตซอฟต์แวร์หรือฮาร์ดแวร์ต้นแบบที่ทำงานในอุตสาหกรรมจริง",
        "สร้างห่วงโซ่มูลค่าใหม่และลดการนำเข้าเครื่องจักรหรือโปรแกรมราคาแพงจากต่างประเทศ"
      ],
      eligibility: [
        "โครงการร่วมทุนระหว่างมหาวิทยาลัย (สถาบันหลักร่วมผลิต) และภาคเอกชนที่ยินดีลงทุนสมทบ",
        "บริษัทภาคเอกชนต้องร่วมลงทุนสมทบในระดับไม่น้อยกว่า 30% ของมูลค่าโครงการ (ในรูปแบบเงินสดอย่างน้อย 15%)",
        "มีแผนการนำเทคโนโลยีไปใช้จริงในระยะยาว (Roadmap) ตลอดจนข้อกำหนดการตลาดเชิงพาณิชย์"
      ],
      guidelines: [
        "ยื่นเสนอผ่านระบบส่งข้อเสนอ บพข. และส่งเล่มแผนธุรกิจฉบับสมบูรณ์ทางอีเมลอุตสาหกรรมบวกระบบหลัก",
        "แนบหลักฐานเอกสารยกร่างแผนการถือครองกรรมสิทธิ์หรือสัญญาเช่าช่วงลิขสิทธิ์สิทธิบัตร",
        "รับฟังผลการประเมินรอบแรกโดยกลุ่มผู้เชี่ยวชาญจากอุตสาหกรรมระดับประเทศ"
      ],
      pdfUrl: "https://nriis.go.th/announcements/pmuc-commercialization-ai.pdf",
      aiConfidence: 95,
      extractedAt: "2026-08-02 11:20",
      criteriaSummary: "ทุนบพข. ขนาดใหญ่สนับสนุนนำระบบ AI และหุ่นยนต์ขั้นสูงไปผลิตและใช้ในอุตสาหกรรมจริง ต้องมีภาคเอกชนร่วมลงทุนไม่ต่ำกว่า 30%"
    },
    {
      id: "grant-009",
      title: "Wellcome Trust - Digital Health & AI Diagnostics Initiative",
      agency: "Foreign Grants",
      category: "Medical",
      status: "Active",
      audience: "Clinical Researchers & Tech Developers",
      fundingAmount: "£150,000 (ประมาณ 6,800,000 บาท)",
      fundingRange: 6800000,
      deadline: "2026-09-30", // 57 days from Aug 4
      objectives: [
        "Enable development of computational tools to identify infectious diseases earlier in low-resource settings.",
        "Fund clinical validation of software products in community hospitals.",
        "Foster ethical standards and open-access algorithms in global digital health platforms."
      ],
      eligibility: [
        "Academic institutions, non-profit entities, or small commercial enterprises globally.",
        "Project team must contain clinical expertise and demonstrate access to ethical review boards.",
        "Proposed technologies must adhere to global health common standards (FHIR, HL7, etc.)."
      ],
      guidelines: [
        "Submit expression of interest online via the Wellcome Trust funding system.",
        "Upload letters of support from clinical sites involved in evaluation.",
        "Must participate in the global database sharing consortium."
      ],
      pdfUrl: "https://wellcome.org/grant-funding/schemes/digital-health-ai.pdf",
      aiConfidence: 93,
      extractedAt: "2026-08-01 09:30",
      criteriaSummary: "ทุนวิจัยด้านซอฟต์แวร์เครื่องมือ AI เพื่อระบุและวินิจฉัยโรคติดต่อจาก Wellcome Trust สนับสนุนความร่วมมือกับโรงพยาบาลในพื้นที่ห่างไกล"
    },
    {
      id: "grant-010",
      title: "ทุนพัฒนาระบบปัญญาประดิษฐ์และเทคโนโลยีสารสนเทศเพื่อความปลอดภัยสาธารณะ",
      agency: "NIA",
      category: "Research",
      status: "Expired",
      audience: "Governmental Orgs & Tech Vendors",
      fundingAmount: "สูงสุด 4,000,000 บาท",
      fundingRange: 4000000,
      deadline: "2026-06-15", // Expired
      objectives: [
        "ประยุกต์ใช้ AI และกล้องวงจรปิดอัจฉริยะวิเคราะห์ความปลอดภัยในเขตชุมชนเมืองหนาแน่น",
        "สนับสนุนองค์กรปกครองส่วนท้องถิ่นในการป้องกันภัยคุกคุกคามและระบบจัดการเหตุฉุกเฉิน",
        "สร้างมาตรฐานแพลตฟอร์มข้อมูลเปิดด้านความปลอดภัยของพลเมือง"
      ],
      eligibility: [
        "ความร่วมมือระหว่างบริษัทไอทีสัญชาติไทยและกรุงเทพมหานครหรือเทศบาลเมืองท้องถิ่น",
        "ผู้พัฒนาซอฟต์แวร์มีทุนจดทะเบียนไม่ต่ำกว่า 2,000,000 บาท และมีตัวอย่างผลงานที่เกี่ยวข้อง",
        "แพลตฟอร์มซอฟต์แวร์ต้องรองรับระบบ Cloud-native และสอดคล้องกับมาตรฐานความมั่นคงปลอดภัยไซเบอร์"
      ],
      guidelines: [
        "ระบบปิดรับสมัครแล้วเมื่อวันที่ 15 มิถุนายน 2569",
        "โครงการที่ได้รับคัดเลือกกำลังเข้าสู่ระยะการส่งมอบโมเดลและเริ่มดำเนินการทดสอบช่วงแรก"
      ],
      pdfUrl: "https://nia.or.th/smart-city-safety-ai.pdf",
      aiConfidence: 94,
      extractedAt: "2026-05-10 10:40",
      criteriaSummary: "ทุนร่วมสนับสนุนไอทีเพื่อความปลอดภัยในชุมชน ติดตั้งระบบอัจฉริยะร่วมกับองค์กรท้องถิ่น ปัจจุบันหมดเขตรับเอกสารและวิจัยเสร็จสิ้นแล้ว"
    }
  ],
  savedGrantIds: new Set(),
  searchQuery: "",
  filters: {
    agency: "All",
    category: "All",
    status: "All"
  },
  activeTab: "dashboard",
  selectedGrant: null,
  theme: "light",
  charts: {}
};

// Local Storage Keys
const STORAGE_KEYS = {
  SAVED_GRANTS: "ai_grants_saved_ids",
  THEME: "ai_grants_theme"
};

// Date helper to count days difference from Aug 4, 2026
const CURRENT_DATE = new Date("2026-08-04T11:20:47+07:00");

function getDaysRemaining(deadlineStr) {
  const deadline = new Date(deadlineStr);
  const diffTime = deadline - CURRENT_DATE;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Format date nicely (e.g., 8 Aug 2026)
function formatDate(dateStr) {
  const d = new Date(dateStr);
  const months = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  // If it's a Thai Agency, we might show Buddhist Era, but let's stick to universal formatting for consistency
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear() + 543}`; // Displaying in BE for Thai relevance
}

// Get Badge colors and styling based on remaining days
function getDeadlineBadge(deadlineStr, status) {
  if (status === "Expired") {
    return {
      text: "หมดเขตแล้ว",
      classes: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400 border border-red-200 dark:border-red-900/50",
      pulse: false
    };
  }

  const days = getDaysRemaining(deadlineStr);
  if (days < 0) {
    return {
      text: "หมดเขตแล้ว",
      classes: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400 border border-red-200 dark:border-red-900/50",
      pulse: false
    };
  } else if (days <= 7) {
    return {
      text: `เหลือเวลาอีก ${days} วันด่วน!`,
      classes: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200 dark:border-rose-800/60 pulse-urgent",
      pulse: true
    };
  } else if (days <= 30) {
    return {
      text: `เหลือเวลาอีก ${days} วัน`,
      classes: "bg-amber-100 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border border-amber-200 dark:border-amber-900/40",
      pulse: false
    };
  } else {
    return {
      text: `เหลือเวลาอีก ${days} วัน`,
      classes: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/40",
      pulse: false
    };
  }
}

// Helper to filter grants based on search query and filter selections
function getFilteredGrants() {
  return STATE.grants.filter(grant => {
    // Keyword match (Title, Agency, Summary, Category, Target Audience)
    const matchesSearch = 
      grant.title.toLowerCase().includes(STATE.searchQuery.toLowerCase()) ||
      grant.agency.toLowerCase().includes(STATE.searchQuery.toLowerCase()) ||
      grant.criteriaSummary.toLowerCase().includes(STATE.searchQuery.toLowerCase()) ||
      grant.category.toLowerCase().includes(STATE.searchQuery.toLowerCase()) ||
      grant.audience.toLowerCase().includes(STATE.searchQuery.toLowerCase());
    
    // Dropdown matches
    const matchesAgency = STATE.filters.agency === "All" || grant.agency === STATE.filters.agency;
    const matchesCategory = STATE.filters.category === "All" || grant.category === STATE.filters.category;
    const matchesStatus = STATE.filters.status === "All" || grant.status === STATE.filters.status;

    return matchesSearch && matchesAgency && matchesCategory && matchesStatus;
  });
}

// Bookmarking Action
function toggleBookmark(grantId) {
  if (STATE.savedGrantIds.has(grantId)) {
    STATE.savedGrantIds.delete(grantId);
  } else {
    STATE.savedGrantIds.add(grantId);
  }
  
  // Persist
  localStorage.setItem(STORAGE_KEYS.SAVED_GRANTS, JSON.stringify(Array.from(STATE.savedGrantIds)));
  
  // Re-render components dependent on bookmark state
  renderMetrics();
  
  if (STATE.activeTab === "dashboard") {
    renderGrantsList("recent-grants-list", 3);
  } else if (STATE.activeTab === "directory") {
    renderGrantsList("directory-grants-list");
  } else if (STATE.activeTab === "saved") {
    renderGrantsList("saved-grants-list");
  }
}

// Main App Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Load saved bookmarks from localStorage
  const saved = localStorage.getItem(STORAGE_KEYS.SAVED_GRANTS);
  if (saved) {
    try {
      STATE.savedGrantIds = new Set(JSON.parse(saved));
    } catch (e) {
      console.error("Failed to load bookmarks", e);
    }
  }

  // Load theme preference
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || "light";
  setTheme(savedTheme);

  // Bind Event Listeners
  setupEventListeners();

  // Populate dynamic Filter Dropdowns from Mock Data
  populateFilterOptions();

  // Initialize view
  setTab("dashboard");
});

function setupEventListeners() {
  // Sidebar Navigation Links
  document.querySelectorAll("[data-nav-tab]").forEach(button => {
    button.addEventListener("click", (e) => {
      const tabId = button.getAttribute("data-nav-tab");
      setTab(tabId);
      
      // On mobile, close sidebar automatically on selection
      const sidebar = document.getElementById("sidebar");
      if (!sidebar.classList.contains("-translate-x-full")) {
        sidebar.classList.add("-translate-x-full");
      }
    });
  });

  // Mobile sidebar toggle button
  document.getElementById("sidebar-toggle")?.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("-translate-x-full");
  });
  
  document.getElementById("sidebar-close")?.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("-translate-x-full");
  });

  // Search input events
  const searchInput = document.getElementById("global-search");
  searchInput?.addEventListener("input", (e) => {
    STATE.searchQuery = e.target.value;
    handleFilterChange();
  });

  // Filters change events
  document.getElementById("filter-agency")?.addEventListener("change", (e) => {
    STATE.filters.agency = e.target.value;
    handleFilterChange();
  });
  document.getElementById("filter-category")?.addEventListener("change", (e) => {
    STATE.filters.category = e.target.value;
    handleFilterChange();
  });
  document.getElementById("filter-status")?.addEventListener("change", (e) => {
    STATE.filters.status = e.target.value;
    handleFilterChange();
  });

  // Theme Toggle Buttons
  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const nextTheme = STATE.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });

  // Modal Close Events
  document.getElementById("close-modal-btn")?.addEventListener("click", closeModal);
  document.getElementById("modal-overlay")?.addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  });

  // ESC key for closing modal
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  // Quick action search filters on Dashboard
  document.getElementById("dashboard-active-card")?.addEventListener("click", () => {
    document.getElementById("filter-status").value = "Active";
    STATE.filters.status = "Active";
    setTab("directory");
  });
  
  document.getElementById("dashboard-urgent-card")?.addEventListener("click", () => {
    // Direct user to directory and trigger quick sorting/filtering for urgent items
    STATE.searchQuery = "";
    document.getElementById("global-search").value = "";
    STATE.filters.status = "Active";
    document.getElementById("filter-status").value = "Active";
    setTab("directory");
    // Only show ones with remaining days <= 7
    const filtered = STATE.grants.filter(g => g.status === "Active" && getDaysRemaining(g.deadline) <= 7);
    renderSpecificGrantsList("directory-grants-list", filtered);
  });

  // Settings Actions
  document.getElementById("settings-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    showNotification("บันทึกการตั้งค่าระบบเรียบร้อยแล้ว!", "success");
  });
}

function handleFilterChange() {
  // If user searches while on another tab, it might be convenient to show directory
  if (STATE.activeTab !== "directory" && STATE.activeTab !== "dashboard" && STATE.activeTab !== "saved") {
    setTab("directory");
  }

  // Update listings based on active tab
  if (STATE.activeTab === "dashboard") {
    renderGrantsList("recent-grants-list", 3);
  } else if (STATE.activeTab === "directory") {
    renderGrantsList("directory-grants-list");
  } else if (STATE.activeTab === "saved") {
    renderGrantsList("saved-grants-list");
  }
}

// Fill Agency and Category dropdown values dynamically based on data
function populateFilterOptions() {
  const agencySelect = document.getElementById("filter-agency");
  const categorySelect = document.getElementById("filter-category");
  
  if (!agencySelect || !categorySelect) return;

  const agencies = new Set();
  const categories = new Set();

  STATE.grants.forEach(g => {
    agencies.add(g.agency);
    categories.add(g.category);
  });

  // Clear existing non-default options
  agencySelect.innerHTML = `<option value="All">ทุกแหล่งทุน (Agencies)</option>`;
  categorySelect.innerHTML = `<option value="All">ทุกหมวดหมู่ (Categories)</option>`;

  agencies.forEach(agency => {
    agencySelect.innerHTML += `<option value="${agency}">${agency}</option>`;
  });

  categories.forEach(cat => {
    categorySelect.innerHTML += `<option value="${cat}">${cat}</option>`;
  });
}

// Change Active Tab
function setTab(tabId) {
  STATE.activeTab = tabId;

  // Toggle active sidebar states visually
  document.querySelectorAll("[data-nav-tab]").forEach(btn => {
    const btnTab = btn.getAttribute("data-nav-tab");
    const icon = btn.querySelector("i");
    
    if (btnTab === tabId) {
      btn.classList.add("bg-yellow-500/10", "text-yellow-600", "dark:bg-yellow-500/10", "dark:text-yellow-400", "border-l-4", "border-yellow-500");
      btn.classList.remove("text-slate-600", "dark:text-slate-400");
      if (icon) {
        icon.classList.add("text-yellow-600", "dark:text-yellow-400");
        icon.classList.remove("text-slate-400", "dark:text-slate-500");
      }
    } else {
      btn.classList.remove("bg-yellow-500/10", "text-yellow-600", "dark:bg-yellow-500/10", "dark:text-yellow-400", "border-l-4", "border-yellow-500");
      btn.classList.add("text-slate-600", "dark:text-slate-400");
      if (icon) {
        icon.classList.remove("text-yellow-600", "dark:text-yellow-400");
        icon.classList.add("text-slate-400", "dark:text-slate-500");
      }
    }
  });

  // Hide all tab content panes
  document.querySelectorAll("[data-tab-content]").forEach(pane => {
    pane.classList.add("hidden");
  });

  // Show selected pane and trigger its render logic
  const activePane = document.querySelector(`[data-tab-content="${tabId}"]`);
  if (activePane) {
    activePane.classList.remove("hidden");
    activePane.classList.add("tab-transition");
  }

  // Update Breadcrumb/Page Title
  const breadcrumb = document.getElementById("page-title");
  if (breadcrumb) {
    const titles = {
      dashboard: "แดชบอร์ด (Dashboard Overview)",
      directory: "สารบบแหล่งทุน (Grants Directory)",
      saved: "ทุนที่บันทึกไว้ (Saved Grants Library)",
      analytics: "ข้อมูลวิเคราะห์เชิงลึก (Analytics)",
      settings: "ตั้งค่าระบบ (System Settings)"
    };
    breadcrumb.textContent = titles[tabId] || "แดชบอร์ด";
  }

  // Render elements specific to this tab
  renderMetrics();

  if (tabId === "dashboard") {
    renderGrantsList("recent-grants-list", 3);
  } else if (tabId === "directory") {
    renderGrantsList("directory-grants-list");
  } else if (tabId === "saved") {
    renderGrantsList("saved-grants-list");
  } else if (tabId === "analytics") {
    setupCharts();
  }
}

// Calculate and populate key dashboard metric cards
function renderMetrics() {
  // 1. Total Active Grants
  const activeGrants = STATE.grants.filter(g => g.status === "Active").length;
  // 2. New This Week (within last 7 days from current date)
  // Let's mock a subset of grants as "new" based on simulated extract dates
  const newGrants = STATE.grants.filter(g => {
    const extractDate = new Date(g.extractedAt);
    const diffTime = CURRENT_DATE - extractDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  }).length;
  // 3. Upcoming Deadlines (< 7 days)
  const urgentGrants = STATE.grants.filter(g => g.status === "Active" && getDaysRemaining(g.deadline) <= 7 && getDaysRemaining(g.deadline) >= 0).length;
  // 4. Saved Grants Bookmarked
  const savedCount = STATE.savedGrantIds.size;

  // DOM update
  const totalActiveEl = document.getElementById("metric-active-count");
  if (totalActiveEl) totalActiveEl.textContent = activeGrants;

  const newThisWeekEl = document.getElementById("metric-new-count");
  if (newThisWeekEl) newThisWeekEl.textContent = newGrants;

  const urgentEl = document.getElementById("metric-urgent-count");
  if (urgentEl) {
    urgentEl.textContent = urgentGrants;
    const dot = document.getElementById("metric-urgent-pulse");
    if (urgentGrants > 0) {
      dot?.classList.remove("hidden");
    } else {
      dot?.classList.add("hidden");
    }
  }

  const savedEl = document.getElementById("metric-saved-count");
  if (savedEl) savedEl.textContent = savedCount;

  const sidebarSavedBadge = document.getElementById("sidebar-saved-badge");
  if (sidebarSavedBadge) sidebarSavedBadge.textContent = savedCount;
}

// Render dynamic list of grant cards
function renderGrantsList(containerId, limit = null) {
  let listToRender = [];

  if (STATE.activeTab === "saved") {
    listToRender = STATE.grants.filter(g => STATE.savedGrantIds.has(g.id));
    // Apply searches/filters to saved list as well
    const query = STATE.searchQuery.toLowerCase();
    listToRender = listToRender.filter(grant => {
      const matchesSearch = 
        grant.title.toLowerCase().includes(query) ||
        grant.agency.toLowerCase().includes(query) ||
        grant.category.toLowerCase().includes(query);
      const matchesAgency = STATE.filters.agency === "All" || grant.agency === STATE.filters.agency;
      const matchesCategory = STATE.filters.category === "All" || grant.category === STATE.filters.category;
      return matchesSearch && matchesAgency && matchesCategory;
    });
  } else {
    // Dashboard or Directory
    listToRender = getFilteredGrants();
  }

  if (limit) {
    listToRender = listToRender.slice(0, limit);
  }

  renderSpecificGrantsList(containerId, listToRender);
}

function renderSpecificGrantsList(containerId, listToRender) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (listToRender.length === 0) {
    container.innerHTML = `
      <div class="col-span-full flex flex-col items-center justify-center py-16 text-center glass-panel rounded-2xl border-dashed">
        <div class="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-400 dark:text-slate-500 mb-4">
          <i class="fa-solid fa-folder-open text-2xl"></i>
        </div>
        <h4 class="text-lg font-semibold text-slate-700 dark:text-slate-300">ไม่พบแหล่งทุนที่ตรงกับเงื่อนไข</h4>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xs">ลองค้นหาด้วยคีย์เวิร์ดอื่น หรือรีเซ็ตการตั้งค่าตัวกรองข้อมูลด้านบน</p>
      </div>
    `;
    return;
  }

  container.innerHTML = "";

  listToRender.forEach(grant => {
    const isSaved = STATE.savedGrantIds.has(grant.id);
    const deadlineBadge = getDeadlineBadge(grant.deadline, grant.status);
    const formattedDeadline = formatDate(grant.deadline);

    // Format funding value dynamically
    const formattedFunding = grant.fundingAmount;

    // AI Confidence color
    let confidenceColor = "text-emerald-500 dark:text-emerald-400";
    if (grant.aiConfidence < 95) confidenceColor = "text-amber-500 dark:text-amber-400";

    const card = document.createElement("div");
    card.className = "glass-card-interactive flex flex-col h-full rounded-2xl p-6 relative overflow-hidden";
    card.innerHTML = `
      <!-- Card Top: Agency Tag & Saved Icon -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400 border border-yellow-500/20">
            ${grant.agency}
          </span>
          <span class="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800/80 dark:text-slate-300">
            ${grant.category}
          </span>
        </div>
        <button 
          onclick="toggleBookmark('${grant.id}')"
          class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors text-slate-400 hover:text-rose-500 focus:outline-none"
          title="${isSaved ? 'นำออกจากสิทธิการเซฟ' : 'บันทึกทุนเก็บไว้'}"
        >
          <i class="${isSaved ? 'fa-solid text-rose-500' : 'fa-regular'} fa-bookmark text-lg"></i>
        </button>
      </div>

      <!-- Card Title -->
      <h3 class="text-base md:text-lg font-extrabold text-slate-900 dark:text-white line-clamp-2 hover:line-clamp-none transition-all mb-2 cursor-pointer" onclick="openModal('${grant.id}')">
        ${grant.title}
      </h3>

      <!-- Target Audience -->
      <div class="flex items-center gap-1.5 mb-4 text-xs text-slate-600 dark:text-slate-300">
        <i class="fa-solid fa-users-viewfinder"></i>
        <span>เป้าหมาย: <strong class="text-slate-900 dark:text-slate-100">${grant.audience}</strong></span>
      </div>

      <!-- AI Extracted Criteria -->
      <div class="flex-grow">
        <div class="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800/30 text-xs leading-relaxed mb-4">
          <div class="font-bold text-yellow-700 dark:text-yellow-400 mb-1 flex items-center gap-1">
            <i class="fa-solid fa-wand-magic-sparkles"></i> สรุปหลักเกณฑ์เด่น (AI-Extracted):
          </div>
          <p class="text-slate-800 dark:text-slate-200 line-clamp-3">${grant.criteriaSummary}</p>
        </div>
      </div>

      <!-- Card Bottom Layout -->
      <div class="border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-auto">
        <!-- Funding details -->
        <div class="flex justify-between items-center mb-3">
          <span class="text-xs text-slate-400 dark:text-slate-500">งบสนับสนุน</span>
          <span class="text-sm font-semibold text-slate-800 dark:text-emerald-400">${formattedFunding}</span>
        </div>

        <div class="flex flex-col gap-2">
          <!-- Deadline Badge -->
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-400 dark:text-slate-500">วันสิ้นสุดการรับสมัคร</span>
            <span class="font-medium text-slate-800 dark:text-slate-200">${formattedDeadline}</span>
          </div>
          <div class="px-3 py-1.5 text-center text-xs font-semibold rounded-lg ${deadlineBadge.classes}">
            ${deadlineBadge.text}
          </div>
          
          <!-- CTA Action -->
          <button 
            onclick="openModal('${grant.id}')"
            class="w-full mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-400 rounded-lg shadow-sm hover:shadow transition-all focus:outline-none"
          >
            <i class="fa-solid fa-list-check"></i> ดูรายละเอียด AI แยกแยะ
          </button>
        </div>
      </div>

      <!-- AI Confidence Indicator (Micro detail) -->
      <div class="absolute bottom-1 right-2 text-[9px] text-slate-400 dark:text-slate-600 flex items-center gap-1">
        <span>ความแม่นยำ AI ${grant.aiConfidence}%</span>
        <i class="fa-solid fa-circle text-[6px] ${confidenceColor}"></i>
      </div>
    `;
    container.appendChild(card);
  });
}

// Modal View Action
function openModal(grantId) {
  const grant = STATE.grants.find(g => g.id === grantId);
  if (!grant) return;

  STATE.selectedGrant = grant;

  const modalOverlay = document.getElementById("modal-overlay");
  const modalContainer = document.getElementById("modal-container");
  
  if (!modalOverlay || !modalContainer) return;

  // Set modal details dynamically
  document.getElementById("modal-title").textContent = grant.title;
  document.getElementById("modal-agency").textContent = grant.agency;
  document.getElementById("modal-category").textContent = grant.category;
  document.getElementById("modal-funding").textContent = grant.fundingAmount;
  document.getElementById("modal-deadline").textContent = formatDate(grant.deadline);
  document.getElementById("modal-ai-confidence").textContent = `${grant.aiConfidence}%`;
  document.getElementById("modal-ai-extracted").textContent = grant.extractedAt;
  
  // Set direct PDF Link
  const pdfLink = document.getElementById("modal-pdf-link");
  if (pdfLink) {
    pdfLink.href = grant.pdfUrl;
  }

  // Populate objectives list
  const objectivesList = document.getElementById("modal-objectives");
  objectivesList.innerHTML = "";
  grant.objectives.forEach(item => {
    objectivesList.innerHTML += `
      <li class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
        <i class="fa-solid fa-circle-check text-yellow-500 mt-1 flex-shrink-0"></i>
        <span>${item}</span>
      </li>
    `;
  });

  // Populate eligibility list
  const eligibilityList = document.getElementById("modal-eligibility");
  eligibilityList.innerHTML = "";
  grant.eligibility.forEach(item => {
    eligibilityList.innerHTML += `
      <li class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
        <i class="fa-solid fa-user-check text-yellow-500 mt-1 flex-shrink-0"></i>
        <span>${item}</span>
      </li>
    `;
  });

  // Populate guidelines list
  const guidelinesList = document.getElementById("modal-guidelines");
  guidelinesList.innerHTML = "";
  grant.guidelines.forEach(item => {
    guidelinesList.innerHTML += `
      <li class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
        <i class="fa-solid fa-circle-info text-yellow-500 mt-1 flex-shrink-0"></i>
        <span>${item}</span>
      </li>
    `;
  });

  // Change bookmark icon within modal based on current status
  const modalSavedBtn = document.getElementById("modal-save-btn");
  if (modalSavedBtn) {
    const isSaved = STATE.savedGrantIds.has(grant.id);
    modalSavedBtn.innerHTML = `
      <i class="${isSaved ? 'fa-solid text-rose-500' : 'fa-regular'} fa-bookmark"></i>
      <span>${isSaved ? 'บันทึกแล้ว' : 'บันทึกแหล่งทุนนี้'}</span>
    `;
    // Update button binding
    modalSavedBtn.onclick = () => {
      toggleBookmark(grant.id);
      openModal(grant.id); // Refresh state in modal
    };
  }

  // Open Modal visually (unhide overlay and animate drawer)
  modalOverlay.classList.remove("hidden");
  modalOverlay.classList.add("flex");
  
  // Force a redraw before adding translate class to allow animation to trigger
  setTimeout(() => {
    modalContainer.classList.remove("translate-x-full");
    modalContainer.classList.add("translate-x-0");
  }, 10);
}

function closeModal() {
  const modalOverlay = document.getElementById("modal-overlay");
  const modalContainer = document.getElementById("modal-container");
  
  if (!modalOverlay || !modalContainer) return;

  // Start sliding out
  modalContainer.classList.remove("translate-x-0");
  modalContainer.classList.add("translate-x-full");

  // Wait for transition before hiding the elements
  setTimeout(() => {
    modalOverlay.classList.add("hidden");
    modalOverlay.classList.remove("flex");
    STATE.selectedGrant = null;
  }, 250);
}

// Chart.js configuration
function setupCharts() {
  // Group grants data for calculations
  const agencies = {};
  const categories = {};
  const timeline = {};

  STATE.grants.forEach(grant => {
    // 1. Agencies count
    agencies[grant.agency] = (agencies[grant.agency] || 0) + 1;
    // 2. Categories count
    categories[grant.category] = (categories[grant.category] || 0) + 1;
  });

  // Chart 1: Agencies Distribution
  const ctxAgencies = document.getElementById("chart-agencies")?.getContext("2d");
  if (ctxAgencies) {
    if (STATE.charts.agencies) {
      STATE.charts.agencies.destroy();
    }

    const labels = Object.keys(agencies);
    const data = Object.values(agencies);
    const isDark = STATE.theme === "dark";

    STATE.charts.agencies = new Chart(ctxAgencies, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            "#facc15", // Yellow
            "#eab308", // Gold-yellow
            "#d4d4d4", // Silver
            "#737373", // Gray
            "#262626"  // Black/Charcoal
          ],
          borderColor: isDark ? "#111827" : "#ffffff",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: isDark ? "#9ca3af" : "#4b5563",
              font: {
                family: "Inter"
              }
            }
          }
        }
      }
    });
  }

  // Chart 2: Funding Amount by Categories
  const ctxCategories = document.getElementById("chart-categories")?.getContext("2d");
  if (ctxCategories) {
    if (STATE.charts.categories) {
      STATE.charts.categories.destroy();
    }

    // Get max funding per category
    const catLabels = Object.keys(categories);
    const catFunding = catLabels.map(cat => {
      const filtered = STATE.grants.filter(g => g.category === cat);
      // Calculate average funding amount (convert to millions)
      const avg = filtered.reduce((sum, g) => sum + g.fundingRange, 0) / filtered.length;
      return (avg / 1000000).toFixed(1); // In Millions THB
    });

    const isDark = STATE.theme === "dark";

    STATE.charts.categories = new Chart(ctxCategories, {
      type: "bar",
      data: {
        labels: catLabels,
        datasets: [{
          label: "ทุนเฉลี่ย (ล้านบาท)",
          data: catFunding,
          backgroundColor: "rgba(250, 204, 21, 0.85)",
          hoverBackgroundColor: "#fbbf24",
          borderRadius: 8,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: isDark ? "#9ca3af" : "#4b5563",
              font: { family: "Inter" }
            }
          },
          y: {
            grid: {
              color: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
            },
            ticks: {
              color: isDark ? "#9ca3af" : "#4b5563",
              font: { family: "Inter" }
            }
          }
        }
      }
    });
  }
}

// Set application theme (Dark / Light)
function setTheme(theme) {
  STATE.theme = theme;
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  if (theme === "dark") {
    root.classList.add("dark");
    if (themeToggle) {
      themeToggle.innerHTML = `<i class="fa-solid fa-sun text-amber-400"></i>`;
    }
  } else {
    root.classList.remove("dark");
    if (themeToggle) {
      themeToggle.innerHTML = `<i class="fa-solid fa-moon text-neutral-900"></i>`;
    }
  }

  // Save to localStorage
  localStorage.setItem(STORAGE_KEYS.THEME, theme);

  // Redraw charts to update color schemes
  if (STATE.activeTab === "analytics") {
    setupCharts();
  }
}

// Global Notification Alert trigger
function showNotification(message, type = "success") {
  const container = document.getElementById("notification-container");
  if (!container) return;

  const bg = type === "success" ? "bg-emerald-500" : "bg-rose-500";
  const icon = type === "success" ? "fa-circle-check" : "fa-circle-exclamation";

  const alertBox = document.createElement("div");
  alertBox.className = `flex items-center gap-3 px-5 py-3 text-white rounded-xl shadow-xl transition-all duration-300 transform translate-y-10 opacity-0 ${bg}`;
  alertBox.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span class="text-xs font-semibold">${message}</span>
  `;

  container.appendChild(alertBox);

  // Animate in
  setTimeout(() => {
    alertBox.classList.remove("translate-y-10", "opacity-0");
  }, 10);

  // Animate out and remove
  setTimeout(() => {
    alertBox.classList.add("translate-y-10", "opacity-0");
    setTimeout(() => {
      alertBox.remove();
    }, 300);
  }, 3000);
}
