export const site = {
  name: "Fateha Hossain Anushka",
  location: "Dhaka, Bangladesh",
  headline:
    "CSE Undergraduate (4th year) • Learning ML/AI & Data Science • Web + Systems Projects",
  about:
    "I’m a 4th-year Computer Science student exploring machine learning, data science, and applied AI. I learn by building projects—from web interfaces to Linux-based systems—and I’m currently working on an NLP research project (ongoing).",

  academics: {
    cgpa: "3.93",
    awards: [
      { title: "Dean’s Award", term: "Fall 2023" },
      { title: "Dean’s Award", term: "Spring 2024" },
      { title: "Dean’s Award", term: "Spring 2025" }
    ]
  },

  links: {
    email: "fatehahossainanushka@gmail.com",
    linkedin: "https://www.linkedin.com/in/fateha-hossain-anushka-802879279",
    // keep your profile; individual projects will have their own github links below
    github: "https://github.com/anushka06onu"
  },

  focusAreas: [
    "Machine Learning (learning)",
    "Data Science (learning)",
    "Applied AI (learning)",
    "NLP Research (ongoing)"
  ],

  skills: {
    Web: ["HTML", "CSS", "JavaScript"],
    "ML / Data": ["Python", "Pandas", "Scikit-learn (learning)"],
    "Systems / Tools": ["Linux (coursework/projects)", "Postfix/Email stack (project)"],
    Programming: ["C", "C++", "Java"]
  },

  projects: [
    {
      title: "Online To-let System (Student Housing Platform)",
      category: "Full-stack / University Project",
      status: "Completed (not deployed)",
      description:
        "A student-focused platform to reduce the hassle of finding rooms or seats near DIU. Owners can publish listings with images; students can browse, filter, and review.",
      highlights: [
        "Room/seat listings with images",
        "Filtering + reviews for decision-making",
        "University email–based authentication (diu.edu.bd) to limit accounts"
      ],
      tech: ["Spring Boot", "HTML", "CSS", "JavaScript"],
      links: {
        github: "PASTE_GITHUB_LINK_FOR_TOOLLET"
      }
    },

    {
      title: "Meal Management System (Student-Focused)",
      category: "Web Application / University Project",
      status: "Completed (not deployed)",
      description:
        "A student meal booking system where users can add balance, choose items from a menu, and book meals ahead of time (breakfast/lunch/dinner).",
      highlights: [
        "Advance booking by meal type and time",
        "Menu-based selection",
        "Balance add/update workflow"
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      links: {
        github: "PASTE_GITHUB_LINK_FOR_MEAL"
      }
    },

    {
      title: "Compiler Toolkit",
      category: "Web Tool / Academic Project",
      status: "Completed",
      description:
        "A modern interactive web tool to visualize and practice core compiler design concepts with clear, visual output.",
      highlights: [
        "Three-Address Code (TAC) generation",
        "Regular expression handling",
        "Left recursion elimination",
        "Left factoring with interactive & visual output"
      ],
      tech: ["React", "JavaScript (ES6)", "HTML", "CSS"],
      links: {
        github: "PASTE_GITHUB_LINK_FOR_COMPILER_TOOLKIT",
        demo: "PASTE_VERCEL_LINK_FOR_COMPILER_TOOLKIT"
      }
    },

    {
      title: "Mail Server Setup (Linux)",
      category: "Systems / OS Course Project",
      status: "Completed",
      description:
        "Configured a Linux-based mail server stack and learned real-world setup, authentication, and troubleshooting.",
      highlights: [
        "Postfix configuration",
        "Roundcube webmail integration",
        "OpenDKIM for email authentication"
      ],
      tech: ["Linux", "Postfix", "Roundcube", "OpenDKIM"],
      links: {
        github: "PASTE_GITHUB_LINK_FOR_MAIL_SERVER"
      }
    },

    {
      title: "Frontend Practice Pages",
      category: "Frontend",
      status: "Multiple small builds",
      description:
        "A collection of frontend practice pages focused on layout and styling (e.g., Career Mission practice using CSS, Naturals Platter using HTML).",
      highlights: [
        "Career Mission practice page (CSS-focused)",
        "Naturals Platter page (HTML-focused)",
        "Improving layout, spacing, and consistency"
      ],
      tech: ["HTML", "CSS"],
      links: {
        github: "PASTE_GITHUB_LINK_FOR_FRONTEND_PAGES"
      }
    },

    {
      title: "NLP Research Project",
      category: "Research",
      status: "Ongoing",
      description:
        "An ongoing NLP research project. Currently improving dataset quality, experimenting with approaches, and learning evaluation practices. Not published yet.",
      highlights: [
        "Dataset cleaning and preparation (ongoing)",
        "Model experimentation (learning phase)",
        "Evaluation-focused reporting (learning)"
      ],
      tech: ["Python", "NLP (learning)"]
      // no github link required
    }
  ],

  experience: [
    {
      title: "Lab Prefect (OOP Java)",
      org: "Daffodil International University",
      time: "2024",
      bullets: [
        "Helped students during lab sessions with OOP Java concepts.",
        "Guided peers through exercises, debugging, and best practices."
      ]
    },
    {
      title: "Vice President (PR Wing)",
      org: "DIU Girls' Computer Programming Club (DIU GCPC)",
      time: "2025 – Present",
      bullets: [
        "Support communication and coordination for club activities.",
        "Work with team members to plan and execute PR-related tasks."
      ]
    },
    {
      title: "Executive Member",
      org: "DIU Data Science Club",
      time: "2023 – 2024",
      bullets: [
        "Participated in club activities and learning-focused events.",
        "Supported teamwork-based tasks and coordination."
      ]
    },
    {
      title: "Executive Committee Member",
      org: "DIU Robotics Club",
      time: "2024 – 2025",
      bullets: [
        "Supported club activities and coordination.",
        "Contributed to teamwork-based initiatives."
      ]
    }
  ]
};
