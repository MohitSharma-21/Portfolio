// Resume Data - single source of truth

export const personal = {
  name: "Mohit Sharma",
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
    "Software Engineer specializing in scalable systems, automation, and AI-driven solutions. Experienced in C++, Python, JavaScript, and full-stack development — with a strong focus on performance optimization and data-driven insights.",
  passion:
    "Passionate about solving complex problems, building impactful products, and continuously learning emerging technologies to deliver high-quality, user-centric solutions at scale.",
  interests: ["Travelling", "Sports", "Movies", "Adventure"],
  highlights: [
    { label: "Scalable Systems", desc: "Designed and shipped production-grade systems built to scale reliably under high demand" },
    { label: "AI Integration", desc: "Built LLM-powered features and AI-driven solutions to enhance user experience and automate workflows" },
    { label: "Performance Focus", desc: "Deep focus on performance optimization — profiling bottlenecks, improving throughput, and reducing latency" },
    { label: "Problem Solver", desc: "800+ coding challenges solved across LeetCode, GeeksforGeeks, and other competitive platforms" },
  ],
};

export const skills = {
  languages: [
    { name: "C / C++", level: 90 },
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 75 },
    { name: "KQL", level: 80 },
  ],
  frameworks: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "Vue.js", level: 80 },
    { name: "Express.js", level: 88 },
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
      "Elevated H264 hardware decoder utilization for Microsoft Teams from 88% to 90%+ by deep-diving into telemetry data and hardware-related bugs; introduced new metrics tracking encoder/decoder frame drops.",
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
    color: "#00a4ef",
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
    image: "/project-picture-manager.svg",
    bullets: [
      "Developed a secure web-based Picture Manager application with Face Recognition-based authentication, integrating JWT for robust user/admin authorization and protection of API endpoints.",
      "Implemented facial recognition pipelines to automatically detect and group individuals in images, enabling intelligent categorization into personal and group-based folders for efficient photo organization.",
      "Designed and built scalable backend services with CRUD operations for event-based photo management using MongoDB, ensuring efficient data storage, retrieval, and handling.",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "Face-api.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/MohitSharma-21/Engage-22-Project-Frontend",
    live: null,
    featured: true,
  },
  {
    title: "Autonomous Path Mapping Robot",
    tagline: "AI-driven robot navigation with computer vision",
    image: "/project-path-robot.svg",
    bullets: [
      "Developed an autonomous path-planning robot using Dijkstra's Algorithm to compute optimal routes minimizing traversal cost across a dynamic hexagonal arena.",
      "Implemented computer vision techniques (color segmentation, shape detection, ArUco marker tracking) to extract real-time positional data and identify key objects from an overhead camera feed.",
      "Engineered an end-to-end decision system integrating path optimization with constraint handling — ordered task execution and obstacle avoidance — enabling efficient multi-stage navigation.",
    ],
    tech: ["OpenCV", "NumPy", "Python", "Dijkstra's Algorithm", "DSA"],
    github: "https://github.com/MohitSharma-21/Pixelate-22",
    live: null,
    featured: true,
  },
  {
    title: "Handwritten Captcha Recognizer",
    tagline: "CNN-based CAPTCHA decoding pipeline",
    image: "/project-captcha.svg",
    bullets: [
      "Developed a handwritten CAPTCHA recognition system using Convolutional Neural Networks (CNNs) to accurately classify distorted alphanumeric characters, achieving ~85% model accuracy.",
      "Implemented an image preprocessing and segmentation pipeline using OpenCV — noise reduction, thresholding, and character isolation — to improve model input quality and prediction performance.",
      "Integrated an end-to-end pipeline combining image processing and model inference to automatically decode CAPTCHA inputs, enhancing automation capabilities.",
    ],
    tech: ["Python", "TensorFlow", "CNN", "OpenCV"],
    github: "https://github.com/MohitSharma-21",
    live: null,
    featured: false,
  },
  {
    title: "Open-Source Contributions",
    tagline: "OrcaSound & COPS-SDG IIT BHU",
    image: "/project-opensource.svg",
    bullets: [
      "Contributed to open-source projects under the OrcaSound Organization (Orcahome) and COPS-SDG IIT BHU, collaborating with distributed teams to enhance platform functionality and usability.",
      "Developed and improved features, fixed bugs, and optimized codebases, ensuring better performance, maintainability, and adherence to coding standards in real-world production environments.",
      "Leveraged Git/GitHub for code contributions, pull requests, and peer reviews, following open-source best practices and collaborative workflows.",
    ],
    tech: ["Git", "GitHub", "Open Source"],
    github: "https://github.com/MohitSharma-21",
    live: null,
    featured: false,
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
  { topic: "LLM Engineering", detail: "Prompt engineering, agentic workflows" },
  { topic: "Cloud Architecture", detail: "Azure services, microservices" },
];
