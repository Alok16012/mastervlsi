// Single source of truth for all site content.
// Content sourced from mastervlsi.com and the institute's official flyers.

export const site = {
  name: "MasterVLSI",
  tagline: "Leader in Semiconductor Industry",
  url: "https://www.mastervlsi.com",
  year: 2026,
  phone: "+91 73384 29473",
  phoneHref: "tel:+917338429473",
  whatsapp: "917338429473",
  email: "hr@mastervlsi.com",
  hours: "9:30 AM – 6:30 PM, Monday to Saturday",
  addressLines: [
    "MasterVLSI Institute, 1st Floor,",
    "Opposite Vinayaka Temple, Udayanagar Main Road,",
    "Near Tin-Factory bus stop, Bangalore – 560016",
  ],
  mapUrl: "https://maps.app.goo.gl/SJTBMotHE7umPDfC6",
  mapEmbed:
    "https://www.google.com/maps?q=MasterVLSI%20Udayanagar%20Tin%20Factory%20Bangalore%20560016&output=embed",
  community: "https://chat.whatsapp.com/K5qG7bLUNyh9xKG0Nex52K",
  social: {
    YouTube: "https://www.youtube.com/@mastervlsi2526",
    LinkedIn: "https://www.linkedin.com/company/106502125/",
    Instagram: "https://www.instagram.com/mastervlsi/",
    Facebook: "https://www.facebook.com/Mastervlsi/",
    X: "https://x.com/MasterVlsi",
  },
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "/courses", label: "Courses" },
  { href: "/placements", label: "Placements" },
  { href: "/campus", label: "Campus" },
  { href: "/fees", label: "Fees" },
  { href: "/corporate", label: "Corporate" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  { value: "12+", label: "Years of training" },
  { value: "5000+", label: "Engineers trained" },
  { value: "30–45", label: "Days to placement" },
  { value: "24/7", label: "Lab access" },
];

export const paths = [
  {
    kicker: "Career gap",
    title: "Recharge, don't restart",
    body: "A gap year doesn't end your engineering story. We rebuild your fundamentals, reframe your experience and get you in front of hiring managers within weeks.",
    points: ["Interview-ready in 5–6 months", "Experience-level framing", "Post-offer first-year support"],
  },
  {
    kicker: "Internship",
    title: "Real silicon, real projects",
    body: "Hands-on RTL and verification internship inside a live design house — actual projects, mentor reviews and a portfolio that gets shortlisted.",
    points: ["Live industry projects", "24/7 EDA lab access", "Internship completion certificate"],
  },
  {
    kicker: "Apprenticeship",
    title: "Earn while you upskill",
    body: "Apprenticeship-style training with paid project work after onboarding — income now, an offer-track pipeline later.",
    points: ["Paid project work", "Stipend while learning", "Convert-to-placement track"],
  },
  {
    kicker: "IIT / NIT / top colleges",
    title: "Degree gets the interview. We get the offer.",
    body: "Even top-college engineers need to recharge before they're silicon-ready. RTL and verification fluency in weeks, not years.",
    points: ["Fast-track cohorts", "Campus-to-corporate bridge", "Alumni across product companies"],
  },
];

export const flow = [
  { n: "01", name: "Spec", body: "Read a specification the way a design team does — features, interfaces, corner cases, a verification plan." },
  { n: "02", name: "RTL", body: "Write lint-clean Verilog and SystemVerilog that captures design intent with synthesis-aware discipline." },
  { n: "03", name: "Testbench", body: "Build self-checking testbenches: drivers, monitors, scoreboards and reference models." },
  { n: "04", name: "UVM", body: "Move to reusable UVM environments — agents, sequences, factory overrides, RAL." },
  { n: "05", name: "Coverage", body: "Close functional and code coverage with constrained-random stimulus and SVA." },
  { n: "06", name: "Protocols", body: "Verify the buses and links the industry hires for: AMBA, PCIe, USB, CXL, HDMI, DisplayPort." },
  { n: "07", name: "AI debug", body: "Use AI-assisted debug, RTL review and interview prep the way modern teams do." },
  { n: "08", name: "Portfolio", body: "Graduate with APB and AXI verification projects you can walk an interviewer through." },
];

export const advantages = [
  { title: "30–45 day placements", body: "An industry-aligned curriculum so tight that companies hire on a rolling basis from every cohort." },
  { title: "24/7 lab access", body: "Tool licences and servers running round the clock. Practice the moment inspiration strikes." },
  { title: "Post-placement support", body: "We mentor you through the first year on the job — promotions, switches, raises." },
  { title: "1-on-1 mentor reviews", body: "Senior engineers review your RTL and testbench like a real pull request: comments, changes, sign-off." },
  { title: "Weekly mock interviews", body: "We dissect every answer and every diagram until the real interview feels like a rehearsal." },
  { title: "Resume and LinkedIn audits", body: "Your projects framed the way hiring managers scan them, plus aptitude and placement preparation." },
];

export type Module = {
  n: number;
  title: string;
  phase: string;
  summary: string;
  topics: string[];
  groups?: { name: string; topics: string[] }[];
};

export const phases = ["Foundations", "Verification core", "Protocols", "Flows", "Industry ready"];

export const modules: Module[] = [
  {
    n: 1, phase: "Foundations", title: "Digital Design Fundamentals",
    summary: "The logic every chip is built from.",
    topics: ["Number Systems", "Boolean Algebra", "Logic Gates", "K-Map Simplification", "Combinational Circuits", "Sequential Circuits", "FSM Design", "Counters & Shift Registers"],
  },
  {
    n: 2, phase: "Foundations", title: "Verilog HDL",
    summary: "RTL coding, testbenches, simulation and debug.",
    topics: ["Syntax & Data Types", "Modules & Ports", "Operators", "Tasks & Functions", "Generate Blocks", "RTL Coding", "Testbench Development", "Simulation & Debug"],
  },
  {
    n: 3, phase: "Verification core", title: "SystemVerilog",
    summary: "OOP, interfaces, IPC and assertions.",
    topics: ["Data Types & Arrays", "Structures & Unions", "Classes & Objects", "OOP Concepts", "Processes & Threads", "Interfaces & Modports", "Mailbox & IPC", "Assertions (SVA)"],
  },
  {
    n: 4, phase: "Verification core", title: "Randomization, Coverage & Assertions",
    summary: "Constrained-random stimulus and coverage closure.",
    topics: ["Constraint Randomization", "Inline Constraints", "Implication Constraints", "Array Constraints", "Functional Coverage", "Code Coverage", "FSM Coverage", "Toggle Coverage", "Covergroups & Coverpoints", "Assertions & Properties"],
  },
  {
    n: 5, phase: "Verification core", title: "UVM Methodology",
    summary: "End-to-end UVM testbench architecture.",
    topics: ["UVM Architecture", "UVM Components", "UVM Phases", "Factory Mechanism", "TLM Communication", "Configuration Database", "Sequences & Virtual Sequences", "Virtual Sequencer", "Register Abstraction Layer (RAL)", "Frontdoor / Backdoor Access", "UVM Debugging"],
  },
  {
    n: 6, phase: "Verification core", title: "Scripting & Automation",
    summary: "Perl, Python and Shell for DV automation.",
    topics: [],
    groups: [
      { name: "Perl", topics: ["Arrays", "Hashes", "File Handling", "Report Generation"] },
      { name: "Python", topics: ["Automation Scripts", "Data Processing", "Report Generation"] },
      { name: "Shell", topics: ["Linux Commands", "Shell Programming", "Automation"] },
    ],
  },
  {
    n: 7, phase: "Protocols", title: "AMBA Protocols",
    summary: "The on-chip bus family: design and verification.",
    topics: ["APB", "AHB", "AXI"],
  },
  {
    n: 8, phase: "Protocols", title: "High-Speed Protocols",
    summary: "The serial links modern SoCs ship with.",
    topics: ["PCI Express (Gen1–Gen7)", "USB", "CXL", "HDMI", "DisplayPort (DP)"],
  },
  {
    n: 9, phase: "Protocols", title: "PCIe — Detailed Coverage",
    summary: "From PCI evolution through LTSSM and Gen7.",
    topics: ["PCI / PCI-X Evolution", "PCIe Architecture", "Transaction Layer", "Data Link Layer", "Physical Layer", "TLP & DLLP", "Configuration Space", "Address Spaces", "Routing Methods", "Flow Control", "Virtual Channels", "QoS", "LTSSM", "Gen1 to Gen7 Features"],
  },
  {
    n: 10, phase: "Protocols", title: "USB — Detailed Coverage",
    summary: "Architecture, enumeration and protocol analysis.",
    topics: ["USB Architecture", "Enumeration", "Device Classes", "USB 2.0", "USB 3.x", "Transaction Types", "Protocol Analysis", "Verification Testcases"],
  },
  {
    n: 11, phase: "Protocols", title: "CXL — Detailed Coverage",
    summary: "Cache-coherent interconnect, end to end.",
    topics: ["CXL.io", "CXL.cache", "CXL.mem", "Coherency Concepts", "Host–Device Communication", "Verification Methodology"],
  },
  {
    n: 12, phase: "Protocols", title: "HDMI & DisplayPort",
    summary: "Display interfaces and their testcases.",
    topics: [],
    groups: [
      { name: "HDMI", topics: ["Architecture Overview", "Pin Structure", "Verification Testcases"] },
      { name: "DisplayPort", topics: ["Architecture Overview", "Pin Structure", "Verification Testcases"] },
    ],
  },
  {
    n: 13, phase: "Flows", title: "ASIC Flow",
    summary: "RTL to tapeout, the whole picture.",
    topics: ["RTL Design", "Functional Verification", "Synthesis Flow", "DFT Overview", "GLS", "Tapeout Overview"],
  },
  {
    n: 14, phase: "Flows", title: "Gate-Level Simulation (GLS)",
    summary: "Netlist simulation with and without timing.",
    topics: ["GLS without delay", "GLS with delay"],
  },
  {
    n: 15, phase: "Flows", title: "IP Verification Flow",
    summary: "Plan, build, regress, close.",
    topics: ["Test Planning", "Environment Development", "Testcase Development", "Regression Execution", "Coverage Closure"],
  },
  {
    n: 16, phase: "Flows", title: "SoC Verification Flow",
    summary: "Integration-level verification.",
    topics: ["SoC Verification", "Register Verification"],
  },
  {
    n: 17, phase: "Protocols", title: "Low-Speed Protocols",
    summary: "The peripherals on every board.",
    topics: ["I2C", "GPIO", "JTAG", "UART", "SPI"],
  },
  {
    n: 18, phase: "Industry ready", title: "Tools & Industry Environment",
    summary: "The stack your future team already uses.",
    topics: ["Synopsys VCS", "Cadence Xcelium", "Siemens QuestaSim", "Git", "Bitbucket", "Confluence", "Linux Environment", "GVIM", "Makefile", "Meld", "Tkdiff", "Gvimdiff"],
  },
  {
    n: 19, phase: "Industry ready", title: "Industry Projects",
    summary: "Two capstone environments built end to end.",
    topics: ["APB Verification Project — SV / UVM", "AXI Verification Project — SV / UVM"],
  },
  {
    n: 20, phase: "Industry ready", title: "Additional Training",
    summary: "Everything between you and the offer letter.",
    topics: ["Resume Preparation", "Real Interviews", "Aptitude Training", "Debug Sessions", "Placement Preparation"],
  },
];

export const verificationLevels = ["IP", "Subsystem", "SoC", "RTL", "GLS", "Pattern Generation"];

export const protocolFamilies = [
  {
    family: "AMBA on-chip buses",
    items: [
      { name: "APB", line: "Low-power peripheral bus.", points: ["Read/write handshake", "Non-pipelined transfers", "Simple state machine"] },
      { name: "AHB", line: "High-performance system bus.", points: ["Pipelined burst transfers", "Multi-master arbitration", "Split and retry responses"] },
      { name: "AXI", line: "Five-channel high-throughput bus.", points: ["Independent read/write channels", "Out-of-order completion", "QoS and region signalling"] },
    ],
  },
  {
    family: "Low-speed peripherals",
    items: [
      { name: "UART", line: "Asynchronous serial link.", points: ["Baud-rate generation", "Framing, parity, stop bits", "FIFOs and interrupts"] },
      { name: "SPI", line: "Full-duplex four-wire link.", points: ["CPOL / CPHA modes", "Master–slave chip selects", "High-throughput short bursts"] },
      { name: "I²C", line: "Two-wire multi-drop bus.", points: ["7/10-bit addressing", "Clock stretching", "Multi-master arbitration"] },
      { name: "GPIO", line: "General-purpose I/O.", points: ["Direction control", "Edge/level interrupts", "Alt-function muxing"] },
      { name: "JTAG", line: "Test access and debug.", points: ["TAP controller FSM", "Boundary scan", "Debug port for CPUs"] },
    ],
  },
  {
    family: "High-speed links",
    items: [
      { name: "PCIe", line: "Serial expansion bus, Gen1–Gen7.", points: ["TLP / DLLP layers", "LTSSM state machine", "Virtual channels and QoS"] },
      { name: "USB", line: "USB 2.0 / 3.x.", points: ["Enumeration and descriptors", "Device classes", "Transaction types"] },
      { name: "CXL", line: "Cache-coherent accelerator link.", points: ["CXL.io / .cache / .mem", "Coherency semantics", "Host–device flows"] },
      { name: "HDMI", line: "Digital display interface.", points: ["Architecture overview", "Pin structure", "Verification testcases"] },
      { name: "DisplayPort", line: "Packetised display link.", points: ["Architecture overview", "Pin structure", "Verification testcases"] },
      { name: "DDR", line: "DDR3 / DDR4 / DDR5 memory.", points: ["Bank / row / column commands", "Training and calibration", "ECC and refresh"] },
    ],
  },
];

export const tools = [
  { name: "VCS", vendor: "Synopsys" },
  { name: "Xcelium", vendor: "Cadence" },
  { name: "QuestaSim", vendor: "Siemens" },
  { name: "Git", vendor: "Version control" },
  { name: "Bitbucket", vendor: "Code hosting" },
  { name: "Confluence", vendor: "Documentation" },
  { name: "Linux", vendor: "Environment" },
  { name: "GVIM", vendor: "Editor" },
  { name: "Makefile", vendor: "Build" },
  { name: "Meld", vendor: "Diff" },
  { name: "Tkdiff", vendor: "Diff" },
  { name: "Gvimdiff", vendor: "Diff" },
];

export const companies = [
  "Intel", "AMD", "NVIDIA", "Qualcomm", "Samsung", "Texas Instruments", "Micron", "Western Digital",
  "Google", "Microsoft", "Amazon", "Meta", "Cisco", "Bosch", "MediaTek", "Broadcom", "Renesas", "NXP",
  "STMicroelectronics", "Analog Devices", "Microchip", "Infineon", "ROHM", "ON Semi", "Silicon Labs",
  "Realtek", "Lattice", "Diodes Inc", "Synopsys", "Cadence", "Siemens EDA", "Xilinx (AMD)",
  "Arasan Chip Systems", "Wipro", "HCLTech", "L&T Technology", "Tata Elxsi", "Tech Mahindra",
  "LTIMindtree", "TCS", "Capgemini Engineering", "Mirafra", "eInfochips", "Tessolve",
  "Sankalp Semiconductor", "Sasken", "KPIT", "Cyient", "Quest Global", "UST", "Atos", "Sonata Software",
  "VVDN", "DRDO", "ISRO", "BEL", "CDAC", "SCL", "IIT Madras Research Park", "Mindgrove",
  "Saankhya Labs", "Signalchip", "Steradian", "Insemi", "Moschip", "Truechip", "Kalray", "Efinix",
];

export const companyGroups = [
  { name: "Product & fabless", list: ["Intel", "AMD", "NVIDIA", "Qualcomm", "Samsung", "Texas Instruments", "Micron", "Western Digital", "MediaTek", "Broadcom", "Renesas", "NXP", "STMicroelectronics", "Analog Devices", "Microchip", "Infineon", "ROHM", "ON Semi", "Silicon Labs", "Realtek", "Lattice", "Diodes Inc", "Xilinx (AMD)"] },
  { name: "Systems & hyperscale", list: ["Google", "Microsoft", "Amazon", "Meta", "Cisco", "Bosch"] },
  { name: "EDA & IP", list: ["Synopsys", "Cadence", "Siemens EDA", "Arasan Chip Systems", "Truechip"] },
  { name: "Design services", list: ["Wipro", "HCLTech", "L&T Technology", "Tata Elxsi", "Tech Mahindra", "LTIMindtree", "TCS", "Capgemini Engineering", "Mirafra", "eInfochips", "Tessolve", "Sankalp Semiconductor", "Sasken", "KPIT", "Cyient", "Quest Global", "UST", "Atos", "Sonata Software", "VVDN"] },
  { name: "R&D & government", list: ["DRDO", "ISRO", "BEL", "CDAC", "SCL", "IIT Madras Research Park"] },
  { name: "Startups", list: ["Mindgrove", "Saankhya Labs", "Signalchip", "Steradian", "Insemi", "Moschip", "Kalray", "Efinix"] },
];

export const records = [
  { label: "Highest package", name: "Basavaraj", detail: "₹70 LPA — settled in the UK.", figure: "₹70 LPA" },
  { label: "Earliest placement", name: "Yaswanth Verma", detail: "Placed at Google at ₹50 L, 21 days after joining MasterVLSI.", figure: "21 days" },
  { label: "Most offer letters", name: "Harsha Reddy", detail: "30 offers in total, across VLSI and non-VLSI positions.", figure: "30 offers" },
  { label: "Longest career gap", name: "Dr. Pradeep", detail: "Started at MasterVLSI at 41 — now employed at Microchip (via UST Global).", figure: "Age 41" },
];

export const alumni = [
  { name: "Basavaraj", lpa: 70, place: "Currently in the UK", quote: "" },
  { name: "Anirban Bhuin", lpa: 70, place: "Birbhum, West Bengal", quote: "" },
  { name: "Tejas", lpa: 48, place: "Nagpur", quote: "Good to learn design verification." },
  { name: "Yaswanth Varma", lpa: 35, place: "Anantapur", quote: "" },
  { name: "Anusha", lpa: 24, place: "", quote: "" },
  { name: "Hemanth", lpa: 24, place: "Kolar", quote: "" },
  { name: "Mansi Chopra", lpa: 22, place: "", quote: "" },
  { name: "Sunil", lpa: 20, place: "Bangalore Urban", quote: "Best VLSI institute — worth it for the money paid." },
  { name: "Swapnil", lpa: 20, place: "Bhopal", quote: "" },
  { name: "Jeevan", lpa: 19, place: "Bangalore Urban", quote: "You're a true VLSI guru!" },
  { name: "Purva Sonkusare", lpa: 18, place: "Pune", quote: "Very good place to learn things faster and start working as soon as possible." },
  { name: "Amrita Yadav", lpa: 18, place: "Mirzapur", quote: "" },
  { name: "Apeksha", lpa: 17, place: "Tumkur", quote: "This institute makes us more knowledgeable." },
  { name: "Meghashree", lpa: 16, place: "", quote: "The courses gave a lot of good practical exposure, and I am really thankful for that." },
  { name: "M. Sai Venkatesh", lpa: 16, place: "", quote: "" },
  { name: "Hariprasad", lpa: 15, place: "Kollam", quote: "Learning from you is a privilege." },
  { name: "Benaka Prasad", lpa: 15, place: "Bangalore Urban", quote: "The way of teaching is awesome. Sir is always ready to clear your doubts anytime." },
  { name: "Sakkaiyappan", lpa: 15, place: "", quote: "" },
  { name: "Srikanth", lpa: 14, place: "Karimnagar", quote: "Thanking Nitesh Sir for having me as one of his students." },
  { name: "Sangamesh", lpa: 14, place: "", quote: "" },
  { name: "Namrata Gupta", lpa: 12, place: "Raipur", quote: "Best VLSI institute for learning." },
  { name: "Bharamu", lpa: 12, place: "Bangalore Urban", quote: "Grateful for your dedication to our learning." },
  { name: "Avinash", lpa: 12, place: "Bangalore Urban", quote: "Wonderful environment for teaching." },
  { name: "Ashwini", lpa: 12, place: "Nagpur", quote: "You're a VLSI wizard." },
];

export const journey = [
  { n: "01", title: "Train deep", body: "Six months of mentor-led modules — lab-first, not slide-first. You build muscle memory on real flows." },
  { n: "02", title: "Mock interviews", body: "Weekly 1-on-1s with mentors. We dissect every answer, every diagram." },
  { n: "03", title: "Direct referrals", body: "Our alumni network refers you straight to hiring managers — no portal lottery." },
  { n: "04", title: "Offer and onboarding", body: "Most students land an offer within 30–45 days. We then mentor you through the first year on the job." },
];

export const faqs = [
  { q: "I'm from a non-VLSI background. Can I still join?", a: "Yes. We start every cohort with a 3-week digital-electronics and Verilog ramp so anyone with a basic CS/ECE foundation can catch up before the main modules begin." },
  { q: "How long is the program?", a: "Six months of structured cohort, plus one year of validity for revisions, mock interviews and post-placement support." },
  { q: "Is the course live or recorded?", a: "Live, mentor-led and capped at small batches. Every session is also recorded so you can revisit any topic on your own timeline." },
  { q: "What does the placement process look like?", a: "Direct alumni referrals to hiring managers at partner companies. Most students close their first offer within 30–45 days of completing the core modules." },
  { q: "What are the fees?", a: "Online and offline training is ₹90,000 + GST, payable in two equal instalments of ₹45,000 + GST. See the Fees page for the complete terms." },
  { q: "Is accommodation available near the institute?", a: "Yes. There are co-living, girls' and boys' PGs within 10 m to 200 m of the institute. The Campus page lists each one with a contact number." },
];

// ── Fees ─────────────────────────────────────────────────
export const fee = {
  total: "₹90,000",
  suffix: "+ GST",
  instalments: [
    { name: "1st instalment (50%)", amount: "₹45,000 + GST", when: "At the time of joining" },
    { name: "2nd instalment (50%)", amount: "₹45,000 + GST", when: "Within the prescribed timeline" },
  ],
  clearance: "2 months from the date of joining",
};

export const feePolicies = [
  { title: "Refund policy", body: "Fees paid for the course at MasterVLSI are strictly non-refundable under any circumstances." },
  { title: "Transferability", body: "Fees are strictly non-transferable and cannot be assigned or shifted to another student." },
  { title: "Negotiation", body: "Course fees are strictly non-negotiable." },
  { title: "Fee adjustment", body: "Fees paid cannot be adjusted against any other course, service, batch or charges." },
  { title: "GST invoice / bill", body: "The GST bill / tax invoice can be collected only after complete payment clearance." },
  { title: "Re-enrolment after cancellation", body: "Students whose registration is cancelled due to non-payment must re-enrol under the latest/revised fee structure applicable at that time." },
  { title: "Timely payments", body: "Students are advised to complete all payments on or before the due dates to avoid interruptions in training and placement activities." },
  { title: "GST", body: "Applicable GST will be charged extra as per government regulations." },
];

export const lateConsequences = [
  "Suspension or removal from live classes and recorded classes",
  "Access to study materials, portals and systems may be restricted",
  "Removal from official WhatsApp / Telegram groups",
  "Placement assistance and interview scheduling may be paused",
  "Registration may be cancelled without prior notice",
  "Certificate issuance will remain on hold until complete fee clearance",
];

// ── Campus ───────────────────────────────────────────────
export const connectivity = {
  rail: [
    ["Krishnarajapuram", "450 m"],
    ["Bengaluru East", "1.2 km"],
    ["Banaswadi", "6 km"],
    ["Bengaluru Cantt", "9 km"],
    ["Whitefield", "11 km"],
    ["Hebbal", "13 km"],
    ["KSR Baiyyappanahalli", "13 km"],
    ["Yesvantpur Junction", "16 km"],
  ],
  metro: [
    ["Benniganahalli Metro Station", "500 m"],
    ["K.R. Puram Metro Station", "550 m"],
  ],
  bus: [
    ["Tin Factory Bus Stop", "100 m"],
    ["KR Puram Bus Stop", "120 m"],
    ["Baiyyappanahalli Bus Stop", "200 m"],
    ["Majestic Terminus", "15 km"],
  ],
};

export const neighbours = [
  { type: "Product", list: ["Google", "Texas Instruments", "Samsung R&D", "Qualcomm", "AMD", "Intel", "NVIDIA", "Broadcom", "Cisco", "ARM", "Infineon", "Analog Devices", "Micron", "Marvell", "NXP", "Renesas", "MediaTek", "Silicon Labs", "Microchip Technology", "Western Digital", "GlobalFoundries India", "Signalchip", "Saankhya Labs"] },
  { type: "EDA & equipment", list: ["Synopsys", "Cadence", "Siemens EDA", "Applied Materials", "Lam Research"] },
  { type: "Services", list: ["Wipro VLSI", "HCLTech", "Tata Elxsi", "L&T Technology Services", "Cyient", "eInfochips", "Sankalp Semiconductor", "Capgemini Engineering", "Tech Mahindra", "Quest Global", "Mphasis", "KPIT Technologies", "Motherson Technology", "Tessolve", "MosChip Technologies"] },
];

export type Pg = { name: string; phones: string[] };
export const pgs: { group: string; note: string; list: Pg[] }[] = [
  {
    group: "Co-living PG", note: "Mixed accommodation",
    list: [
      { name: "Samanvi Luxury PG", phones: ["8639344432", "6301973665"] },
      { name: "RR Co-living PG", phones: ["8639344432", "8639306604"] },
    ],
  },
  {
    group: "Girls PG", note: "Women-only accommodation",
    list: [
      { name: "Omkareshwari PG", phones: ["7780300482"] },
      { name: "Omkareshwari New PG", phones: ["7780300482"] },
      { name: "Sri Venkateshwara PG", phones: ["7975301798", "8892223826"] },
      { name: "SLNS Luxury PG", phones: ["7975650248"] },
    ],
  },
  {
    group: "Boys PG", note: "Men-only accommodation",
    list: [
      { name: "SLV PG", phones: ["9121330493", "7842330493"] },
      { name: "Pavan PG", phones: ["9491946114"] },
      { name: "SLV PG (second building)", phones: ["8880346633", "8904347600"] },
      { name: "Pavan New PG", phones: ["9491946114"] },
      { name: "SLN PG", phones: ["8310206930"] },
      { name: "New SV Deluxe PG", phones: ["9014709170", "7382146647"] },
    ],
  },
];

export const officeContacts = [
  { name: "Sushil", phone: "7338429473", role: "Admissions and general enquiries" },
  { name: "Sharmila", phone: "8431520978", role: "Admissions and general enquiries" },
  { name: "Lipsa Madam", phone: "9019232425", role: "Payment, placement or other concerns, if unresolved by Sushil / Sharmila Madam" },
  { name: "Nitesh Sir", phone: "9844982345", role: "Only for technical discussions" },
];

// ── Corporate ────────────────────────────────────────────
export const services = [
  { title: "Design", line: "RTL · CDC · IP · SoC integration", body: "Lint-clean, synthesis-aware RTL and integration work delivered into your repository." },
  { title: "Verification", line: "UVM · Coverage · Assertions · GLS", body: "Reusable UVM environments, coverage closure, SVA and gate-level simulation with SDF back-annotation." },
  { title: "Specialty", line: "AMBA · High-speed protocols · Automation", body: "Protocol verification for AMBA, PCIe, USB and CXL, plus Perl / Python / Shell flow automation." },
];

export const engagement = [
  { title: "Scoped SOW", body: "A tight, milestone-based statement of work. Fixed-bid or time-and-materials." },
  { title: "NDA-friendly", body: "Air-gapped environments, audit trails and IP custody from day one." },
  { title: "PR-style delivery", body: "Reviewable commits, daily syncs and a demo every sprint." },
  { title: "Fast ramp", body: "Mentored teams kick off within two weeks of contract." },
];

// ── Resources ────────────────────────────────────────────
export const playlists = [
  { tag: "Career · Beginner", title: "Complete Roadmap to a VLSI Career", meta: "12 videos · 6 hrs", body: "A step-by-step plan from college to your first silicon offer letter.", href: "https://www.youtube.com/playlist?list=PLTEW9EvjltsOV7_m6FrIU8LEFWt24cSeh" },
  { tag: "Bootcamp · Intermediate", title: "MasterVLSI Internship Bootcamp", meta: "24 videos · 18 hrs", body: "Inside the live bootcamp — projects, sprints, mentor reviews.", href: "https://www.youtube.com/playlist?list=PLTEW9EvjltsOoVSsNCrXrqVBIrSaGrawC" },
  { tag: "Fundamentals", title: "Verilog Session — Demo Lecture", meta: "Demo lecture", body: "Sample lecture: syntax, modules and a simulation walkthrough.", href: "https://www.youtube.com/@mastervlsi2526" },
  { tag: "Fundamentals", title: "Digital Systems — Number Systems", meta: "Demo lecture", body: "Number systems, conversions and signed arithmetic.", href: "https://www.youtube.com/@mastervlsi2526" },
  { tag: "Advanced", title: "AXI Protocol — Demo Lectures", meta: "Demo lectures", body: "An AMBA AXI deep dive: channels, handshakes, bursts.", href: "https://www.youtube.com/@mastervlsi2526" },
  { tag: "Campus", title: "MasterVLSI Campus Tour", meta: "Walkthrough", body: "Walk through the labs and classrooms.", href: "https://www.youtube.com/@mastervlsi2526" },
];

export const glossary = [
  ["RTL", "Register Transfer Level", "Abstraction describing the flow of data between registers and the logic between them."],
  ["UVM", "Universal Verification Methodology", "SystemVerilog class library standardising reusable testbench architecture."],
  ["SVA", "SystemVerilog Assertions", "Temporal properties that check design behaviour in simulation and formal."],
  ["STA", "Static Timing Analysis", "Vector-less analysis of timing paths across PVT corners."],
  ["DFT", "Design for Test", "Adding scan, BIST and ATPG hooks so silicon can be tested post-fab."],
  ["GLS", "Gate-Level Simulation", "Simulating the synthesised netlist, with or without SDF timing."],
  ["CTS", "Clock Tree Synthesis", "Buffering and balancing clock distribution to minimise skew."],
  ["OCV", "On-Chip Variation", "Derates that account for systematic and random process variation."],
  ["UPF", "Unified Power Format", "Side-file describing power intent — domains, isolation, retention."],
  ["AMBA", "ARM AMBA", "The standard on-chip bus family — APB, AHB, AXI."],
  ["LTSSM", "Link Training and Status State Machine", "The PCIe state machine that brings a link up and manages its power states."],
  ["RAL", "Register Abstraction Layer", "UVM's model of a design's registers, with frontdoor and backdoor access."],
  ["GDSII", "Graphic Design System II", "The binary stream format for chip layout — the file that goes to the foundry."],
  ["ECO", "Engineering Change Order", "Post-route incremental fixes — metal or full ECO."],
  ["MBIST", "Memory BIST", "Built-in self-test logic that exercises on-chip memories."],
  ["PSS", "Portable Stimulus Standard", "Accellera spec for portable, intent-level test scenarios."],
];

// ── About ────────────────────────────────────────────────
export const pillars = [
  { title: "Our mission", body: "Make world-class VLSI education accessible, hands-on and outcome-driven — for every serious engineer, regardless of pedigree." },
  { title: "Our vision", body: "Become the global default for chip-design talent training by 2030, with alumni shipping silicon at every major semiconductor company." },
  { title: "Our values", body: "Honest mentorship. No shortcuts. Career-long support. We pick up the call after you've graduated, signed and shipped." },
];

export const method = [
  { title: "Live, capped batches", body: "Small batches, cameras on. Your mentor knows your name and your last bug." },
  { title: "Lab-first delivery", body: "We open the EDA tool before opening a slide. Theory follows the keystroke." },
  { title: "Graded weekly labs", body: "Every assignment is reviewed line by line. No 'completion' — only quality." },
  { title: "1-on-1 design reviews", body: "Senior engineers review your RTL and testbench like a real PR — comments, requested changes, sign-off." },
];

export const comparison = [
  ["Lab access", "24 / 7", "Scheduled slots only"],
  ["Tool licences", "Industry-grade EDA", "Open-source / FPGA boards"],
  ["Mock interviews", "Weekly, 1-on-1", "Group prep sessions"],
  ["Placement window", "30–45 days post completion", "Self-driven, weeks to months"],
  ["First year on the job", "Mentor support continues", "None"],
];
