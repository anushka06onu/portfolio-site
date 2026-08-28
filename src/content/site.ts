import { ExperienceRole, EducationItem, SkillCategory } from "./types";

export const siteConfig = {
  name: "Fateha Hossain",
  fullName: "Fateha Hossain Anushka",
  title: "Fateha Hossain | Health Informatics & Intelligent Systems",
  description:
    "Portfolio of Fateha Hossain, a final-year CSE student and Research Assistant building health-informatics, explainable machine learning, and reliable backend software systems.",
  url: "https://anushka-portfolio.vercel.app",
  author: "Fateha Hossain",
  location: "Dhaka, Bangladesh",
  availability: "Final-year CSE student · Research Assistant · Dhaka, Bangladesh",
  
  hero: {
    eyebrow: "HEALTH INFORMATICS · INTELLIGENT SYSTEMS · BACKEND ENGINEERING",
    headline: "I build reliable intelligent systems for healthcare and complex infrastructure.",
    intro:
      "I’m Fateha Hossain, a final-year Computer Science and Engineering student and Research Assistant at the Health Informatics Research Lab. My work combines machine learning, explainable AI, backend engineering, and reproducible experimentation, with a developing specialization in health informatics.",
    buttons: {
      work: { label: "Explore Selected Work", href: "/#work" },
      research: { label: "View Research", href: "/#research" },
      cv: { label: "Download CV", href: "https://drive.google.com/file/d/1bar_OHyZ-nhAKV50fZqaG0YkLChmFWu8/view?usp=sharing" }
    }
  },

  narrative: {
    threePillars: [
      {
        title: "Health Informatics Research",
        desc: "Developing validated clinical analytics, medical-image classifiers, and trustworthy models tailored for healthcare decision support."
      },
      {
        title: "Reliable & Explainable Intelligent Systems",
        desc: "Integrating SHAP/XAI attribution, strict fallback invariants, and cryptographic provenance so ML outputs are transparent and accountable."
      },
      {
        title: "Backend & Systems Engineering",
        desc: "Building high-performance APIs, robust database architectures, Linux network services, and responsive web platforms."
      }
    ],
    aboutText:
      "I am a final-year Computer Science and Engineering student at Daffodil International University and a Research Assistant at the Health Informatics Research Lab. My academic journey began with foundational work in Bangla NLP and systems programming, which instilled a deep appreciation for experimental rigor, dataset cleanliness, and software reliability. Today, my primary research focus is health informatics—building systems where accuracy, interpretability, and fault tolerance are paramount.",
    shortAbout:
      "Final-year CSE student at Daffodil International University, currently working as a Research Assistant in health informatics and as a backend-development intern."
  },

  links: {
    email: "fatehahossainanushka@gmail.com",
    linkedin: "https://www.linkedin.com/in/fateha-hossain-anushka-802879279",
    github: "https://github.com/anushka06onu",
    resume: "https://drive.google.com/file/d/1bar_OHyZ-nhAKV50fZqaG0YkLChmFWu8/view?usp=sharing"
  },

  education: [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      period: "2023 – Present (Expected Completion: Jan 2027)",
      distinction: "Dean’s Award recipient for academic excellence",
      notes: [
        "Major in Computer Science & Engineering",
        "Focused coursework in Machine Learning, Algorithms, Database Systems, Computer Networks, and Operating Systems",
        "Academic distinction: Dean's Award recipient across multiple semesters"
      ]
    }
  ] as EducationItem[],

  additionalTraining:
    "Additional specialized coursework: IBM Data Science Professional Certificate, Data Visualization with Python, Advanced MySQL Database Design, and Java Object-Oriented Software Engineering.",

  experience: [
    {
      title: "Research Assistant",
      organization: "Health Informatics Research Lab",
      location: "Dhaka, Bangladesh",
      period: "2025 – Present",
      type: "Research",
      bullets: [
        "Conducting healthcare-oriented data and model experiments across structured clinical records and imaging benchmarks.",
        "Supporting dataset validation, stratified cross-validation protocols, and reproducible evaluation pipelines.",
        "Contributing to peer-reviewed journal manuscript preparation, ablation studies, and literature syntheses.",
        "Maintaining experimental audit logs and technical documentation for research reproducibility."
      ],
      technologies: ["Python", "PyTorch", "Scikit-learn", "SHAP", "Pandas", "Statistical Analysis"]
    },
    {
      title: "Backend Developer Intern",
      organization: "Software Engineering Team",
      location: "Dhaka, Bangladesh",
      period: "2025 – Present",
      type: "Engineering",
      bullets: [
        "Developing and maintaining backend services and REST APIs across Spring Boot and Laravel application stacks.",
        "Implementing database schemas, query optimizations, payload validation, and JWT-authenticated workflows.",
        "Debugging application integration bottlenecks and resolving API latency issues.",
        "Collaborating through task-based sprint workflows, pull request reviews, and Git version control."
      ],
      technologies: ["Spring Boot", "Laravel", "Java", "PHP", "MySQL", "REST APIs", "Git"]
    },
    {
      title: "President",
      organization: "DIU Girls’ Computer Programming Club",
      location: "Daffodil International University",
      period: "2026 – Present (Previously VP, PR Wing)",
      type: "Leadership",
      bullets: [
        "Leading programming training tracks, technical workshops, and competitive programming initiatives.",
        "Coordinating cross-wing mentorship to empower female undergraduates in computing and engineering."
      ]
    },
    {
      title: "Lab Prefect (OOP Java)",
      organization: "Department of CSE, Daffodil International University",
      location: "Dhaka, Bangladesh",
      period: "Spring 2025 – Summer 2025",
      type: "Teaching",
      bullets: [
        "Assisted junior students during lab sessions with object-oriented programming concepts, debugging, and data structures in Java."
      ]
    }
  ] as ExperienceRole[],

  skills: [
    {
      category: "Research & Machine Learning",
      description: "Data modeling, explainability, and experimental validation",
      skills: [
        "Python",
        "Scikit-learn",
        "LightGBM",
        "SHAP (Explainable AI)",
        "PyTorch",
        "Pandas / NumPy",
        "Dataset Validation",
        "Reproducible Experiments"
      ]
    },
    {
      category: "Backend & Systems",
      description: "Scalable APIs, services, and database infrastructure",
      skills: [
        "Spring Boot",
        "FastAPI",
        "Laravel",
        "REST APIs",
        "MySQL",
        "SQLite",
        "JWT Authentication",
        "Linux / Postfix / Dovecot"
      ]
    },
    {
      category: "SDN & Network Systems",
      description: "Emulated software-defined networking and telemetry",
      skills: [
        "Mininet",
        "OpenFlow",
        "Ryu Controller",
        "Open vSwitch",
        "Network Telemetry"
      ]
    },
    {
      category: "Frontend & Web",
      description: "Modern component-driven web interfaces",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Recharts",
        "Zustand"
      ]
    },
    {
      category: "Engineering Practices",
      description: "Testing, verification, and collaboration workflows",
      skills: [
        "Git / GitHub Actions",
        "Pytest",
        "Vitest / Unit Testing",
        "API Integration Testing",
        "Docker / Containerization Basics"
      ]
    }
  ] as SkillCategory[]
};

export const site = siteConfig;
