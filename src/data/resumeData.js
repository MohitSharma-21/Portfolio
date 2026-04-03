// Resume Data - single source of truth

export const personal = {
  name: "Mohit Kumar Sharma",
  title: "Software Engineer",
  tagline: "Building scalable systems · Leveraging AI · Shipping impact",
  email: "mohitkumar.sharma.july21@gmail.com",
  phone: "+91 93341 77949",
  linkedin: "https://www.linkedin.com/in/mohitsharma2107",
  github: "https://github.com/MohitSharma-21",
  location: "Hyderabad, India",
  resumePDF: "/Mohit_Sharma_sde.pdf",
};

export const about = {
  summary:
    "Software Engineer at Microsoft with a passion for building scalable, high-impact systems. I bridge backend engineering with AI integration — from optimizing hardware utilization for Microsoft Teams to designing conversational LLM-powered copilots. Graduated from IIT BHU, I thrive on hard problems, clean code, and measurable outcomes.",
  highlights: [
    { label: "Scalable Systems", desc: "Designed and shipped production systems serving millions of users" },
    { label: "AI Integration", desc: "Built LLM-powered features using Microsoft's AI frameworks" },
    { label: "Performance Focus", desc: "Improved hardware utilization from 88% to 90%+ via telemetry analysis" },
    { label: "Problem Solver", desc: "800+ coding challenges solved across LeetCode and GeeksforGeeks" },
  ],
};

export const skills = {
  languages: [
    { name: "C / C++", level: 90 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 75 },
    { name: "KQL", level: 70 },
  ],
  frameworks: [
    { name: "React", level: 88 },
    { name: "Next.js", level: 82 },
    { name: "Node.js", level: 80 },
    { name: "Vue.js", level: 70 },
    { name: "Express.js", level: 78 },
  ],
  tools: [
    "Git / GitHub",
    "Power BI",
    "Postman",
    "Visual Studio",
    "Jupyter Notebook",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "Prompt Engineering",
    "Agile / Scrum",
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    company: "Microsoft",
    location: "Hyderabad, India",
    duration: "July 2024 – Present",
    logo: "MS",
    color: "#00a4ef",
    bullets: [
      "Engineered automated test workflows using Microsoft's internal framework to trigger & track execution across distributed remote machines, cutting manual overhead significantly.",
      "Built Power BI dashboards with Kusto (KQL) queries for real-time visibility into test execution status and failure trends; integrated an alerting system to proactively surface anomalous failures.",
      "Elevated H264 hardware encoder utilization for Microsoft Teams from 88% to 90%+ by deep-diving into telemetry data and hardware-related bugs; introduced new metrics tracking encoder/decoder frame drops.",
      "Owned end-to-end validation and troubleshooting for a terminal-based Teams video-calling tool, resolving critical blockers ahead of release milestones.",
    ],
    tech: ["C++", "Python", "KQL", "Power BI"],
  },
  {
    role: "Software Engineer Intern",
    company: "Microsoft",
    location: "Hyderabad, India",
    duration: "May 2023 – July 2023",
    logo: "MS",
    color: "#00a4ef",
    bullets: [
      "Designed and shipped multi-turn conversational UI for the TAC Co-pilot — built chiclet-based input components aligned with the M365 Copilot design system.",
      "Leveraged Microsoft's LLM framework for intent recognition and entity extraction, improving conversational accuracy and overall user experience.",
    ],
    tech: ["React", "TypeScript", "REST APIs", "Prompt Engineering"],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Warelogg",
    location: "Remote",
    duration: "Dec 2022",
    logo: "WL",
    color: "#10b981",
    bullets: [
      "Revamped the Warelogg React web app — improved UI/UX, responsiveness, and cross-device compatibility for a seamless user experience.",
      "Built Node.js backend endpoints to manage warehouse records with admin-level access control, ensuring secure and accurate data operations.",
    ],
    tech: ["React", "Node.js", "REST APIs"],
  },
];

export const projects = [
  {
    title: "Picture Manager Application",
    tagline: "Face-Recognition powered photo organizer",
    description:
      "A full-stack web app that uses facial recognition to automatically categorize images into individual and group folders. Secured with JWT-based auth protecting all API endpoints.",
    problem: "Manual photo organization is tedious and does not scale.",
    solution: "Automated categorization via face-api.js with secure JWT-gated APIs.",
    impact: "Reduced photo sorting time to zero — fully automated pipeline.",
    tech: ["Next.js", "Node.js", "Express.js", "Face-api.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/MohitSharma-21",
    live: null,
    featured: true,
  },
  {
    title: "Teams Hardware Telemetry Dashboard",
    tagline: "Real-time codec health monitoring",
    description:
      "Built Power BI dashboards using KQL queries on telemetry data to track H264 encoder/decoder frame drops and hardware utilization across the Microsoft Teams fleet.",
    problem: "No unified view of hardware codec health across millions of Teams sessions.",
    solution: "Custom KQL queries + Power BI dashboards + proactive alerting pipeline.",
    impact: "Boosted hardware utilization from 88% to 90%+; early anomaly detection.",
    tech: ["KQL", "Power BI", "Python", "C++"],
    github: "https://github.com/MohitSharma-21",
    live: null,
    featured: true,
  },
  {
    title: "TAC Copilot Conversational UI",
    tagline: "LLM-powered enterprise assistant",
    description:
      "Developed multi-turn conversational interactions for the TAC Co-pilot using Microsoft's LLM framework — chiclet inputs, intent recognition, and M365-aligned UX.",
    problem: "Support agents spent excessive time navigating static knowledge bases.",
    solution: "Integrated LLM with intent/entity extraction and intuitive chiclet-based UI.",
    impact: "Improved query resolution speed and user satisfaction scores.",
    tech: ["React", "TypeScript", "REST APIs", "Prompt Engineering"],
    github: "https://github.com/MohitSharma-21",
    live: null,
    featured: true,
  },
];

export const education = {
  degree: "B.Tech — Electronics and Communication Engineering",
  institution: "Indian Institute of Technology (BHU) Varanasi",
  duration: "2020 – 2024",
  cgpa: "8.42 / 10",
  highlights: [
    "Top 3.5% nationwide in Microsoft Engage '22 selection (1,050 / 30,000)",
    "Finalist — Pixelate (Technex'22) & Mosaic (Udyam'22) at IIT BHU",
  ],
};

export const achievements = [
  {
    icon: "🏆",
    title: "Microsoft Engage '22",
    desc: "Selected as 1 of 1,050 participants from a national pool of 30,000 — top 3.5%.",
    metric: "30,000 → 1,050",
  },
  {
    icon: "💻",
    title: "800+ Coding Problems",
    desc: "Solved 800+ challenges on LeetCode and GeeksforGeeks, honing algorithmic thinking.",
    metric: "800+ solved",
  },
  {
    icon: "🎯",
    title: "National Technical Finalist",
    desc: "Finalist in Pixelate (Technex'22) and Mosaic (Udyam'22) at IIT BHU Varanasi.",
    metric: "2x Finalist",
  },
];

export const currentlyLearning = [
  { topic: "System Design", detail: "Distributed systems, CAP theorem, consistent hashing" },
  { topic: "LLM Engineering", detail: "RAG, fine-tuning, agentic workflows" },
  { topic: "Cloud Architecture", detail: "Azure services, microservices, Kubernetes" },
  { topic: "Rust", detail: "Memory safety, performance-critical applications" },
];
