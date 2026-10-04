export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/sunnzzzverse/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/srikarvippala" },
  { label: "GitHub", href: "https://github.com/srikarvippala-hub" },
  { label: "Email", href: "mailto:vippalasrikarr.ec25@rvce.edu.in" },
];

export type SkillCategory = {
  key: string;
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    key: "hardware",
    label: "HARDWARE",
    skills: [
      "Digital Electronics", "Analog Electronics", "BJT", "MOSFET",
      "Circuit Analysis", "Embedded Systems", "ESP32", "Arduino",
      "Sensors", "RFID", "BLE", "Hardware Prototyping",
    ],
  },
  {
    key: "software",
    label: "SOFTWARE",
    skills: [
      "Python", "C", "C++", "JavaScript", "TypeScript", "React", "Next.js",
      "Node.js", "Git", "GitHub", "Linux", "REST APIs", "Firebase", "SQLite",
    ],
  },
  {
    key: "ai",
    label: "AI",
    skills: ["Computer Vision", "YOLO", "OpenCV", "Image Processing", "AI/ML fundamentals"],
  },
  {
    key: "digital",
    label: "DIGITAL",
    skills: ["Verilog", "HDL", "Digital Logic", "RTL concepts", "FPGA fundamentals"],
  },
  {
    key: "design",
    label: "DESIGN",
    skills: [
      "Graphic Design", "UI Design", "Visual Communication", "Branding",
      "Poster Design", "Editorial Design", "Motion/Interactive Design",
    ],
  },
];

export const programmingSkills = ["C", "C++", "Python", "JavaScript", "TypeScript", "HTML", "CSS"];

export const tools = ["VS Code", "Figma", "Canva", "Adobe tools", "Cadence", "GitHub"];

export const learningGroups: { status: string; items: string[] }[] = [
  { status: "LEARNING", items: ["Python", "DSA", "C", "Verilog", "Digital Electronics", "Cadence"] },
  { status: "EXPLORING", items: ["AI Hardware", "Computer Vision", "Edge AI"] },
  { status: "BUILDING", items: ["Embedded Systems", "Projects", "Portfolio"] },
  { status: "WORKING WITH", items: ["Git", "GitHub", "Firebase", "React", "Next.js"] },
];

export type Project = {
  title: string;
  subtitle: string;
  tech: string[];
  problem: string;
  approach: string;
  architecture: string;
  result: string;
  flagship?: boolean;
};

export const projects: Project[] = [
  {
    title: "TETRA",
    subtitle: "Intelligent Institutional Access and Traffic Management Framework",
    tech: ["RFID", "BLE", "ESP32", "YOLOv8", "OpenCV", "Firebase", "SQLite", "Telegram Bot"],
    problem: "Details to be added.",
    approach: "Details to be added.",
    architecture: "Details to be added.",
    result: "Details to be added.",
    flagship: true,
  },
  { title: "Smart Traffic Management System", subtitle: "Project", tech: [], problem: "Details to be added.", approach: "Details to be added.", architecture: "Details to be added.", result: "Details to be added." },
  { title: "Smart Energy Management System", subtitle: "Project", tech: [], problem: "Details to be added.", approach: "Details to be added.", architecture: "Details to be added.", result: "Details to be added." },
  { title: "Safe Perimeter", subtitle: "Project", tech: [], problem: "Details to be added.", approach: "Details to be added.", architecture: "Details to be added.", result: "Details to be added." },
  { title: "STIMULAI", subtitle: "Project", tech: [], problem: "Details to be added.", approach: "Details to be added.", architecture: "Details to be added.", result: "Details to be added." },
  { title: "Smart Plant Watering System", subtitle: "Project", tech: [], problem: "Details to be added.", approach: "Details to be added.", architecture: "Details to be added.", result: "Details to be added." },
];

export const researchInterests = [
  "AI Hardware",
  "Embedded Intelligence",
  "Computer Vision",
  "Intelligent Systems",
  "Electronics",
  "Edge AI",
];

export const timeline = [
  { title: "RV College of Engineering", detail: "B.E. Electronics & Communication Engineering" },
  { title: "Project TETRA", detail: "Intelligent access & traffic management" },
  { title: "SIP 2026", detail: "Summer Internship Programme" },
  { title: "RVerse", detail: "RVCE technical fest" },
  { title: "ECLECTIC '26", detail: "RVCE cultural & technical fest" },
];
