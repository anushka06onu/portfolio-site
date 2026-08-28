import { ExperienceRole, EducationItem, SkillCategory } from "./types";

export const siteConfig = {
  name: "Fateha Hossain",
  fullName: "Fateha Hossain Anushka",
  author: "Fateha Hossain",
  title: "Fateha Hossain — Health Informatics Researcher & Software Engineer",
  description:
    "Academic and engineering portfolio of Fateha Hossain. Health informatics research, parameter-efficient Vision Foundation Models, explainable machine learning, and software systems.",
  role: "Health Informatics Researcher & Software Engineer",
  availability: "Research Assistant · Final-year CSE student · Bangladesh",
  location: "Dhaka, Bangladesh",
  url: "https://portfolio-site-omega-rose.vercel.app",
  canonicalUrl: "https://portfolio-site-omega-rose.vercel.app",

  links: {
    github: "https://github.com/anushka06onu",
    linkedin: "https://www.linkedin.com/in/fateha-hossain-anushka-614749293/",
    email: "anushkafateha@gmail.com",
    resume: "/resume.pdf"
  },

  hero: {
    eyebrow: "HEALTH INFORMATICS · INTELLIGENT SYSTEMS",
    headline:
      "Building trustworthy intelligent systems for healthcare and infrastructure.",
    intro:
      "I’m Fateha Hossain, a final-year CSE student and Research Assistant working in health informatics, explainable machine learning and backend engineering.",
    buttons: {
      work: { label: "View My Work", href: "#work" },
      research: { label: "Research", href: "/research" },
      cv: { label: "View CV", href: "/resume.pdf" }
    }
  },

  narrative: {
    aboutText:
      "I am a final-year Computer Science and Engineering undergraduate at Daffodil International University (CGPA: 3.92 / 4.00) and a Research Assistant at the Health Informatics Research Lab. My research focuses on parameter-efficient adaptation of Vision Foundation Models (VFMs) for medical diagnostics, uncertainty-aware modeling, and explainable AI. Alongside research, I engineer production web applications and backend systems with clean architectures and tested resilience."
  },

  experience: [
    {
      title: "Research Assistant",
      organization: "Health Informatics Research Lab",
      location: "Dhaka, Bangladesh",
      period: "2026 – Present",
      type: "Research" as const,
      bullets: [
        "Contributing to healthcare-oriented machine-learning experiments, evaluation, and manuscript preparation.",
        "Conducting research on pediatric morphology alignment modules (PMAM) and uncertainty quantification in panoramic radiography.",
        "Benchmarking parameter-efficient fine-tuning (LoRA, BitFit, VPT) on Vision Foundation Models for dental radiographs."
      ]
    },
    {
      title: "Backend Developer Intern",
      organization: "Software Engineering Company",
      location: "Dhaka, Bangladesh",
      period: "2026 – Present",
      type: "Engineering" as const,
      bullets: [
        "Developing backend features and database-backed APIs across Spring Boot and Laravel projects.",
        "Designing structured REST endpoints with strict validation, automated integration tests, and secure authentication.",
        "Optimizing relational schemas in MySQL and PostgreSQL for low-latency query performance."
      ]
    },
    {
      title: "President",
      organization: "DIU Girls' Computer Programming Club (GCPC)",
      location: "Daffodil International University",
      period: "Jan 2026 – Present",
      type: "Leadership" as const,
      bullets: [
        "Leading strategic operations across ACM, Research, and Career wings, coordinating workshops for 300+ active members.",
        "Led the architecture, development, and deployment of the official GCPC institutional web platform on a university domain.",
        "Mentoring junior female undergraduates in competitive programming and academic research methodology."
      ]
    },
    {
      title: "Student Prefect (Data Structures & Algorithms)",
      organization: "Department of CSE, Daffodil International University",
      location: "Dhaka, Bangladesh",
      period: "May 2025 – Dec 2025",
      type: "Teaching" as const,
      bullets: [
        "Conducted laboratory problem-solving sessions and code reviews for 100+ undergraduate students in C++ and Java.",
        "Assisted faculty in designing programming assignments and debugging complex algorithmic implementations."
      ]
    }
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      period: "2022 – 2026",
      distinction: "Graduation with Distinction (CGPA: 3.92 / 4.00)",
      notes: [
        "Undergraduate Thesis: Parameter-Efficient Adaptation of Vision Foundation Models for Multi-Class Dental Radiograph Diagnosis.",
        "Awarded University Academic Merit Scholarships across consecutive semesters.",
        "Core Coursework: Machine Learning, Artificial Intelligence, Data Structures & Algorithms, Database Systems, Computer Networks, Operating Systems, Software Engineering."
      ]
    }
  ],

  additionalTraining:
    "Active participant in competitive programming, national hackathons, and scientific research writing workshops.",

  skills: [
    {
      category: "Research & Machine Learning",
      description: "Model training, parameter-efficient fine-tuning, explainability, and clinical evaluation.",
      skills: ["Python", "PyTorch", "LightGBM", "SHAP", "Scikit-Learn", "Grad-CAM", "Vision Foundation Models (VFMs)", "PEFT (LoRA/BitFit)"]
    },
    {
      category: "Backend & Systems",
      description: "Robust service engineering, relational databases, and enterprise APIs.",
      skills: ["Spring Boot", "FastAPI", "Laravel", "PostgreSQL", "MySQL", "Docker", "Linux", "REST APIs"]
    },
    {
      category: "Networking & Distributed Infrastructure",
      description: "Software-defined networking, telemetry ingestion, and cluster simulation.",
      skills: ["Mininet", "OpenFlow", "Ryu Controller", "Network Telemetry", "Distributed Systems"]
    },
    {
      category: "Frontend & Web Engineering",
      description: "Interactive single-page applications, responsive design, and state management.",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Zustand"]
    },
    {
      category: "Tools & DevOps",
      description: "Version control, automated CI/CD, and scientific documentation.",
      skills: ["Git", "GitHub Actions", "Vercel", "Firebase", "Postman", "LaTeX"]
    }
  ]
};
