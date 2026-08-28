import { ExperienceRole, EducationItem, SkillCategory } from "./types";

export const siteConfig = {
  name: "Fateha Hossain",
  fullName: "Fateha Hossain Anushka",
  title: "Fateha Hossain | Health Informatics & Intelligent Systems",
  description:
    "Portfolio of Fateha Hossain, a final-year CSE student and Research Assistant building health-informatics, explainable machine learning, and reliable backend software systems.",
  url: "https://portfolio-site-omega-rose.vercel.app",
  author: "Fateha Hossain",
  location: "Dhaka, Bangladesh",
  availability: "Final-year CSE student · Research Assistant · Dhaka, Bangladesh",
  
  hero: {
    eyebrow: "Health Informatics · Intelligent Systems · Backend Engineering",
    headline: "I build reliable intelligent systems for healthcare and complex infrastructure.",
    intro:
      "I’m Fateha Hossain, a final-year Computer Science and Engineering student and Research Assistant at the Health Informatics Research Lab. My work combines machine learning, explainable AI, backend engineering, and reproducible experimentation, with a developing specialization in health informatics.",
    buttons: {
      work: { label: "Selected Work", href: "/#work" },
      research: { label: "Research", href: "/#research" },
      cv: { label: "View CV", href: "https://drive.google.com/file/d/1bar_OHyZ-nhAKV50fZqaG0YkLChmFWu8/view?usp=sharing" }
    }
  },

  narrative: {
    threePillars: [
      {
        title: "Health Informatics Research",
        desc: "Investigating machine learning and medical-image analysis methods for healthcare applications, with emphasis on transparent and reproducible evaluation."
      },
      {
        title: "Reliable & Explainable Systems",
        desc: "Building explainable ML systems with tested fallback behavior and traceable experiment artifacts."
      },
      {
        title: "Backend & Systems Engineering",
        desc: "Developing backend APIs with Spring Boot, FastAPI, and Laravel, alongside Linux networking and web platforms."
      }
    ],
    aboutText:
      "I am a final-year Computer Science and Engineering student at Daffodil International University and a Research Assistant at the Health Informatics Research Lab. My academic journey began with foundational work in Bangla NLP and systems programming, which developed my focus on experimental rigor, dataset cleanliness, and software reliability. Today, my primary research focus is health informatics—building systems where transparency, interpretability, and robust engineering are paramount.",
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
      period: "March 2026 – Present",
      type: "Research",
      bullets: [
        "Conducting healthcare-oriented data and model experiments across structured clinical benchmarks.",
        "Supporting dataset validation, cross-validation protocols, and reproducible evaluation pipelines.",
        "Contributing to literature syntheses, experimental documentation, and journal manuscript preparation.",
        "Maintaining research documentation and experimental logs for reproducibility."
      ],
      technologies: ["Python", "PyTorch", "Scikit-learn", "SHAP", "Pandas"]
    },
    {
      title: "Backend Developer Intern",
      organization: "Software Engineering Company",
      location: "Dhaka, Bangladesh",
      period: "March 2026 – Present",
      type: "Engineering",
      bullets: [
        "Implemented and maintained backend features across project-specific Spring Boot and Laravel codebases.",
        "Worked with REST endpoints, request validation, and relational database operations.",
        "Debugged integration and application issues across backend services.",
        "Used Git-based task workflows to deliver assigned backend changes."
      ],
      technologies: ["Spring Boot", "Laravel", "Java", "PHP", "MySQL", "REST APIs", "Git"]
    },
    {
      title: "President",
      organization: "DIU Girls’ Computer Programming Club",
      location: "Daffodil International University",
      period: "Feb 2026 – Present (Previously VP, PR Wing)",
      type: "Leadership",
      bullets: [
        "Leading programming training tracks, technical workshops, and competitive programming practice sessions.",
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
        "Docker Basics"
      ]
    }
  ] as SkillCategory[]
};

export const site = siteConfig;
