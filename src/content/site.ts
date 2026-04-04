export const site = {
  name: "Fateha Hossain Anushka",
  location: "Dhaka, Bangladesh",
  headline:
    "Full-stack Developer • CSE Undergraduate (4th year) • ML/AI & Data Science",
  about:
    "I’m a full-stack developer and 4th-year Computer Science student focused on machine learning, data science, and applied AI. I build projects—from web interfaces to Linux-based systems—and I’m focused on an NLP research project.",

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
    github: "https://github.com/anushka06onu",
    resume:
      "https://drive.google.com/file/d/1bar_OHyZ-nhAKV50fZqaG0YkLChmFWu8/view?usp=sharing"
  },

  focusAreas: [
    "Machine Learning",
    "Data Science",
    "Applied AI",
    "NLP Research"
  ],

  skills: {
    Web: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    "Backend / Cloud": ["Node.js", "Express", "Spring Boot", "Firebase", "MySQL"],
    "ML / Data": ["Python", "Pandas", "Scikit-learn"],
    "Systems / Tools": ["Linux (coursework/projects)", "Postfix/Email stack (project)"],
    Programming: ["C", "C++", "Java", "Python"]
  },
  education: [
    {
      program: "B.Sc. in Computer Science & Engineering (4th year)",
      institution: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      time: "2023 – Present",
      notes: [
        "Currently in 4th year of CSE.",
        "CGPA: 3.93"
      ]
    },
    {
      program: "HSC — Golden A+",
      institution: "Bangladesh Navy School & College, Dhaka",
      location: "Dhaka, Bangladesh",
      time: "2021",
      notes: []
    },
    {
      program: "SSC — Golden A+",
      institution: "Bangladesh Navy School & College, Dhaka",
      location: "Dhaka, Bangladesh",
      time: "2019",
      notes: []
    }
  ],
  courses: [
    {
      title: "Data Science, Artificial Intelligence & Machine Learning",
      provider: "Coursera",
      status: "Completed",
      summary:
        "Completed multiple courses covering data analysis, machine learning fundamentals, and AI concepts, with a strong focus on real datasets, preprocessing, modeling, and evaluation."
    },
    {
      title: "Working with Data & Machine Learning",
      provider: "Coursera",
      status: "Completed",
      summary:
        "Hands-on coursework focused on data cleaning, feature preparation, exploratory analysis, and applying machine learning techniques in practical scenarios."
    },
    {
      title: "Spring Boot Backend Development",
      provider: "Udemy",
      status: "Completed",
      summary:
        "Backend development course focusing on building RESTful APIs, application structure, and database integration using Spring Boot."
    },
    {
      title: "Full-Stack Web Development",
      provider: "Programming Hero",
      status: "Ongoing",
      summary:
        "Ongoing full-stack web development program covering HTML, CSS, JavaScript, Node.js, and modern workflows through project-based projects."
    }
  ],
  courseNote: "All certifications are listed on LinkedIn.",

  projects: [
    {
      title: "University Lost & Found Portal",
      category: "Full-stack / Campus Utility",
      status: "Completed",
      description:
        "Web portal for students to report, search, and claim lost items with authenticated dashboards and responsive UI tailored to campus use.",
      highlights: [
        "Secure login/signup with personal dashboards",
        "Report lost/found items and track claim status",
        "Responsive, smooth-scrolling UI with organized listings"
      ],
      tech: ["Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
      links: {
        github: "https://github.com/anushka06onu/University-lost-and-found-portal"
      }
    },
    {
      title: "Compiler Architectonics (Book)",
      category: "Book / Academic Resource",
      status: "Published (2025)",
      description:
        "Student-first handbook on compiler design that breaks down lexers, parsers, three-address code, and optimization concepts with practical walkthroughs.",
      highlights: [
        "Written to demystify compiler design for undergrads",
        "Combines theory with worked examples and visuals",
        "Covers grammar basics, parsing, and three-address code"
      ],
      tech: ["Academic Writing", "Compiler Design"],
      links: {
        github: "https://github.com/anushka06onu/Compiler-Architectonics-"
      }
    },
    {
      title: "DIU GCPC Portal",
      category: "Club Platform / Web",
      status: "Launched (March 2026)",
      description:
        "Official portal for the DIU Girls' Computer Programming Club that keeps members updated on initiatives, achievements, and onboarding flows.",
      highlights: [
        "Landing + wing pages that spotlight ACM practice, research, career, PR, and Women in Tech tracks",
        "Certificate verification workflow with QR-friendly lookups plus join/contact funnels for intake",
        "Firebase-backed admin utilities to curate events, metrics, and community submissions"
      ],
      tech: ["HTML", "CSS", "JavaScript", "Firebase Authentication", "Firestore"],
      links: {
        github: "https://github.com/anushka06onu/GCPC-DIU",
        demo: "https://gcpc-diu.vercel.app"
      }
    },
    {
      title: "Online To-let System (Student Housing Platform)",
      category: "Full-stack / University Project",
      status: "Completed",
      description:
        "A student-focused platform to reduce the hassle of finding rooms or seats near DIU. Owners can publish listings with images; students can browse, filter, and review.",
      highlights: [
        "Room/seat listings with images",
        "Filtering + reviews for decision-making",
        "University email–based authentication (diu.edu.bd) to limit accounts"
      ],
      tech: ["Spring Boot", "HTML", "CSS", "JavaScript"],
      links: {
        github: "https://github.com/anushka06onu/Online-To-let-Project-Demo-"
      }
    },

    {
      title: "Meal Management System (Student-Focused)",
      category: "Web Application / University Project",
      status: "Completed",
      description:
        "A student meal booking system where users can add balance, choose items from a menu, and book meals ahead of time (breakfast/lunch/dinner).",
      highlights: [
        "Advance booking by meal type and time",
        "Menu-based selection",
        "Balance add/update workflow"
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      links: {
        github: "https://github.com/anushka06onu/Meal-Management-Project"
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
        github: "https://github.com/anushka06onu/CompilerToolkit",
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
        github: "https://github.com/anushka06onu/Mail-Server-Using-Postfix-Dovecot"
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
        github: "https://github.com/anushka06onu/natures-platter"
      }
    },

    {
      title: "NLP Research Project",
      category: "Research",
      status: "Ongoing",
      description:
        "An ongoing NLP research project focused on dataset quality, model experimentation, and evaluation practices. Not published yet.",
      highlights: [
        "Dataset cleaning and preparation",
        "Model experimentation and iteration",
        "Evaluation-focused reporting"
      ],
      tech: ["Python", "NLP"]
      // no github link required
    }
  ],

  experience: [
    {
      title: "President",
      org: "DIU Girls' Computer Programming Club (DIU GCPC)",
      time: "February 2026 – Present",
      bullets: [
        "Oversee club strategy, programming tracks, and cross-wing coordination.",
        "Lead executive meetings, mentorship efforts, and external collaborations."
      ]
    },
    {
      title: "Lab Prefect (OOP Java)",
      org: "Daffodil International University",
      time: "Spring 2025 – Summer 2025",
      bullets: [
        "Helped students during lab sessions with OOP Java concepts.",
        "Guided peers through exercises, debugging, and best practices."
      ]
    },
    {
      title: "Vice President (PR Wing)",
      org: "DIU Girls' Computer Programming Club (DIU GCPC)",
      time: "2025 – January 2026",
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
        "Participated in club activities and skill-building events.",
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
