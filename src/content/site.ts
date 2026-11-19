import { ExperienceRole, EducationItem, SkillCategory } from "./types";

export const siteConfig = {
  name: "Fateha Hossain",
  fullName: "Fateha Hossain Anushka",
  author: "Fateha Hossain Anushka",
  title: "Fateha Hossain Anushka — Software Engineer & Health Informatics Researcher",
  description:
    "Academic and engineering portfolio of Fateha Hossain Anushka. Junior Developer at CSE-Tech, Research Assistant at HIRL, author of Compiler Architectonics, and DIU CSE graduate.",
  role: "Junior Developer & Health Informatics Researcher",
  availability: "Junior Developer at CSE-Tech · Research Assistant at HIRL · Bangladesh",
  location: "Dhaka, Bangladesh",
  url: "https://fatehahossainanushka.vercel.app",
  canonicalUrl: "https://fatehahossainanushka.vercel.app",

  links: {
    github: "https://github.com/anushka06onu",
    linkedin: "https://www.linkedin.com/in/fatehahossainanushka/",
    email: "fatehahossainanushka@gmail.com",
    website: "https://fatehahossainanushka.vercel.app",
    resume: "/Fateha_Hossain_CV.pdf"
  },

  hero: {
    eyebrow: "SOFTWARE ENGINEER & RESEARCHER",
    headline:
      "I build robust enterprise backend systems and trustworthy clinical AI models.",
    intro:
      "Junior Developer at CSE-Tech (following a completed 6-month backend development internship), Research Assistant at the Health Informatics Research Lab (HIRL), and author of Compiler Architectonics. Experienced in developing Spring Boot and Laravel REST APIs, parameter-efficient vision foundation models, and explainable machine learning.",
    buttons: {
      work: { label: "Explore My Work", href: "/projects" },
      research: { label: "Research Roadmap", href: "/research" },
      cv: { label: "View CV", href: "/Fateha_Hossain_CV.pdf" }
    }
  },

  narrative: {
    threePillars: [
      {
        title: "Backend Software Engineering",
        desc: "Developing enterprise REST APIs, server-side validation, and scalable services across Spring Boot, Laravel, and FastAPI."
      },
      {
        title: "Health Informatics & Clinical AI",
        desc: "Adapting Vision Foundation Models (DINOv2 with LoRA) for medical diagnostics and trustworthy machine learning in radiography and hematology."
      },
      {
        title: "Explainable Intelligent Systems & NLP",
        desc: "Investigating model interpretability with Grad-CAM, SHAP, and Integrated Gradients across low-resource Bangla NLP and clinical datasets."
      }
    ],

    aboutText:
      "I am a Computer Science and Engineering undergraduate at Daffodil International University (Final Grade: 3.93 / 4.00, previously 3.92, 142.5 credits completed out of 154.5, 3× Dean's Honor List Award recipient, 75% Merit-Based Scholarship). I work full-time as a Junior Developer at CSE-Tech after completing a six-month backend development internship (March 01, 2026 – September 01, 2026), where I build Spring Boot REST APIs for ministry-level web applications and maintain Laravel backend platforms. Concurrently, as a Research Assistant at the Health Informatics Research Lab (HIRL), I conduct research on parameter-efficient adaptation of Vision Foundation Models (DINOv2 with LoRA) for dental radiograph classification (undergraduate thesis, journal manuscript under review) and explainable hematological classification (accepted at ICERIE 2027). I also authored the illustrated academic companion book 'Compiler Architectonics: Scientific Principles & Practical Techniques in Compiler Design'."
  },

  experience: [
    {
      title: "Junior Developer",
      organization: "CSE-Tech",
      website: "https://csetech.diu.edu.bd",
      location: "Dhaka, Bangladesh",
      period: "Sept 2026 – Present",
      type: "Engineering" as const,
      technologies: ["Spring Boot", "Laravel", "Java", "PHP", "MySQL", "PostgreSQL", "REST APIs", "Docker"],
      bullets: [
        "Completed a six-month backend development internship (March 01 – September 01, 2026) before joining full-time as a Junior Developer.",
        "Developed Spring Boot REST APIs for a ministry-level web application, implementing server-side validation and handling record retrieval and updates.",
        "Contributed to the Laravel backend of a separate learning management system where students could access online classes, recorded video lessons, and course materials."
      ]
    },
    {
      title: "Backend Developer Intern",
      organization: "CSE-Tech",
      website: "https://csetech.diu.edu.bd",
      location: "Dhaka, Bangladesh",
      period: "March 2026 – Sept 2026 (6 Months)",
      type: "Engineering" as const,
      technologies: ["Spring Boot", "Laravel", "Java", "PHP", "MySQL", "REST APIs"],
      bullets: [
        "Completed an intensive six-month backend development internship engineering REST APIs and relational database architectures.",
        "Engineered robust REST API endpoints in Spring Boot with rigorous server-side validation, relational data modeling, and automated error handling.",
        "Assisted in maintaining and scaling Laravel backend services, student authentication, and media delivery pipelines."
      ]
    },
    {
      title: "Research Assistant",
      organization: "Health Informatics Research Lab (HIRL)",
      website: "https://hirl.daffodilvarsity.edu.bd/",
      location: "Dhaka, Bangladesh",
      period: "April 2026 – Present",
      type: "Research" as const,
      technologies: ["PyTorch", "DINOv2", "LoRA", "Vision Foundation Models", "Grad-CAM", "SHAP", "LightGBM"],
      bullets: [
        "Adapted DINOv2-Small with LoRA and bottleneck adapters for four-class dental radiograph classification, benchmarked against ResNet-50 on patient-level splits, and analysed errors with Grad-CAM.",
        "Measured saliency map overlap with annotated skin lesions against a centre-of-image baseline and repeated the analysis on a separate dataset.",
        "Contributed to a six-model benchmark for compensated microcytosis using stratified five-fold cross-validation and SHAP feature attribution."
      ]
    },
    {
      title: "President",
      organization: "DIU Girls' Computer Programming Club (GCPC)",
      website: "https://gcpc.daffodilvarsity.edu.bd/",
      location: "Daffodil International University",
      period: "Spring 2026 – Fall 2026",
      type: "Leadership" as const,
      technologies: ["Leadership", "Backend Mentorship", "Contest Management", "Web Engineering"],
      bullets: [
        "Lead Bangladesh's first women-only programming club, directing strategic operations and mentoring junior members in software development and student leadership.",
        "Lead hands-on backend development sessions, co-host technical workshops with industry professionals, and organise national programming contests.",
        "Architected and deployed the official university web portal with Firebase Authentication, Cloud Firestore workflows, and public certificate verification."
      ]
    },
    {
      title: "Student Prefect (Object-Oriented Programming in Java)",
      organization: "Department of CSE, Daffodil International University",
      website: "https://daffodilvarsity.edu.bd/",
      location: "Dhaka, Bangladesh",
      period: "Two Semesters (May 2025 – Dec 2025)",
      type: "Teaching" as const,
      technologies: ["Java", "OOP", "Design Patterns", "Data Structures", "Code Review"],
      bullets: [
        "Served as Java OOP Lab Prefect for two consecutive semesters, guiding 100+ undergraduate students in applying OOP principles during practical lab sessions.",
        "Assisted faculty in designing programming assignments, explaining OOP design patterns, and debugging complex Java implementations."
      ]
    }
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      period: "2023 – Current",
      distinction: "Final Grade: 3.93 / 4.00 (3.92) · 142.5/154.5 Credits Completed · 3× Dean's Award · 75% Merit Waiver",
      notes: [
        "Final Grade: 3.93 out of 4.00 (142.5 credits completed out of 154.5, Level in EQF: EQF level 6).",
        "Recipient of 3× Dean's Honor List Award for sustained academic distinction across consecutive academic semesters.",
        "Recipient of 75% Merit-Based Tuition Scholarship (Waiver) — Brilliant Academic Result scholarship from Daffodil International University.",
        "Undergraduate Thesis: Parameter-Efficient Adaptation of DINOv2-Small for Dental Radiograph Classification: A Comparative Study of Fine-Tuning Strategies, Data Efficiency, and Interpretability (Journal manuscript under review).",
        "Core Coursework: Programming and Problem Solving, OOP, Data Structures and Algorithms, Database Management Systems, Software Engineering, Computer Networks, Calculus and Linear Algebra, Discrete Mathematics, Statistics and Probability, Artificial Intelligence, Machine Learning, Introduction to Data Science, Natural Language Processing."
      ]
    }
  ],

  honors: [
    {
      title: "3× Dean's Honor List Award",
      issuer: "Daffodil International University",
      year: "Spring 2024, Fall 2024, Spring 2025",
      description: "Conferred 3 times across consecutive academic semesters for sustained academic excellence and maintaining high semester grade point average (Current CGPA: 3.93 / 4.00)."
    },
    {
      title: "75% Merit-Based Tuition Waiver (Brilliant Academic Result)",
      issuer: "Daffodil International University",
      year: "2023 – Current",
      description: "Received a 75% tuition fee waiver scholarship, the Brilliant Academic Result, from Daffodil International University awarded continuously based on academic distinction."
    }
  ],

  certifications: [
    {
      title: "IBM Data Science Professional Certificate (Coursera)",
      issuer: "Coursera / IBM",
      year: "2024",
      description: "Completed 12 comprehensive courses under the IBM Data Science Professional Certificate on Coursera."
    },
    {
      title: "The Complete Java Programming Mastery - Developers Bootcamp",
      issuer: "Udemy",
      year: "2024",
      description: "Comprehensive bootcamp mastering Java programming, OOP architecture, and enterprise software engineering patterns."
    },
    {
      title: "Complete MySQL Bootcamp: Learn SQL Step by Step",
      issuer: "Udemy",
      year: "2024",
      description: "In-depth database design, relational modeling, complex SQL queries, and schema optimization."
    }
  ],

  leadership: [
    {
      title: "President, Girls' Computer Programming Club- DIU",
      period: "Spring 2026 – Fall 2026",
      description:
        "Lead Bangladesh's first women-only programming club | Lead hands-on backend development sessions | Organised national contests | Set and judge contest problems | Cohost technical workshops with industry professionals | Mentored junior members in software development and student leadership."
    },
    {
      title: "Industry Mentor and Judge, LandTech Hackathon",
      period: "2025",
      description:
        "Mentored teams as they refined their ideas and made technical decisions about their prototypes. Served as a judge, reviewing final presentations and evaluating the solutions teams developed."
    },
    {
      title: "Lab Prefect, Object-Oriented Programming (Java)",
      period: "May 2025 – Dec 2025",
      description:
        "Served as Java OOP Lab Prefect for two consecutive semesters, guiding students in applying OOP principles during practical lab sessions."
    },
    {
      title: "Executive Member, Data Science Club- DIU",
      period: "Spring 2023 – Summer 2024",
      description:
        "Organised student events and volunteered at contests, supporting event coordination and participants."
    },
    {
      title: "Executive Member, Robotics Club- DIU",
      period: "Spring 2024 – Fall 2024",
      description:
        "Supported student events and robotics contests through volunteer coordination and on-site assistance."
    }
  ],

  languages: [
    {
      language: "Bengali",
      proficiency: "Native Language"
    },
    {
      language: "English",
      proficiency: "IELTS Academic, Overall Band 7.5 (Listening: 8.0, Reading: 8.0, Writing: 6.5, Speaking: 6.5)"
    }
  ],

  authoredBook: {
    title: "Compiler Architectonics: Scientific Principles & Practical Techniques in Compiler Design",
    description:
      "Authored an illustrated companion book covering compiler design theory and laboratory exercises, made freely available online and distributed in print to students.",
    link: "https://github.com/anushka06onu"
  },

  additionalTraining:
    "Active participant in competitive programming, national hackathons, and scientific research writing workshops.",

  skills: [
    {
      category: "Software Engineering & Backend",
      description: "Enterprise REST APIs, microservices, server-side validation, and robust service architectures.",
      skills: ["Spring Boot", "Laravel", "FastAPI", "REST APIs", "HTML", "CSS", "React", "Firebase Authentication"]
    },
    {
      category: "Programming Languages",
      description: "Core compiled and interpreted programming languages.",
      skills: ["Java", "Python", "PHP", "C", "C++", "JavaScript", "TypeScript"]
    },
    {
      category: "ML & Deep Learning",
      description: "Model adaptation, evaluation protocols, and explainable AI.",
      skills: ["PyTorch", "TensorFlow", "LightGBM", "scikit-learn", "ONNX", "NumPy", "pandas", "SHAP", "Grad-CAM"]
    },
    {
      category: "LLMs & AI Agents",
      description: "Generative AI applications, protocol-driven tool integration, and agent workflows.",
      skills: ["Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "Model Context Protocol (MCP)", "Agentic AI"]
    },
    {
      category: "Databases & Tools",
      description: "Relational/document databases and software development tooling.",
      skills: ["SQL", "MySQL", "PostgreSQL", "Cloud Firestore", "Git", "Docker", "Jupyter Notebook", "LaTeX"]
    },
    {
      category: "CS Fundamentals",
      description: "Algorithmic foundation, graph theory, and mathematical problem-solving.",
      skills: ["Data Structures & Algorithms", "Dynamic Programming", "Number Theory", "Graph Theory"]
    }
  ]
};
