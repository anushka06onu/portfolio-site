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
    github: "https://github.com/anushka06onu" 
  },

  focusAreas: [
    "Machine Learning (learning)",
    "Data Science (learning)",
    "Applied AI (learning)",
    "NLP Research (ongoing)"
  ],

  skills: {
    "Web": ["HTML", "CSS", "JavaScript"],
    "ML / Data": ["Python", "Pandas", "Scikit-learn (learning)"],
    "Systems / Tools": ["Linux (coursework/projects)", "Postfix/Email stack (project)"],
    "Programming": ["C", "C++", "Java"]
  },

  // Projects are now real and specific (no GitHub required)
  projects: [
    {
      title: "Online To-let System (House Rental)",
      category: "Full-stack / Web",
      status: "Completed (Course Project)",
      description:
        "A house rental-style system built with Spring Boot. I worked on features, UI pages, and overall workflow for listing and renting.",
      highlights: [
        "Spring Boot backend structure",
        "Frontend pages with HTML/CSS",
        "Focused on clean flow and usability"
      ],
      tech: ["Spring Boot", "HTML", "CSS"]
    },
    {
      title: "Mail Server Setup (Linux)",
      category: "Systems",
      status: "Completed (OS Course Project)",
      description:
        "Configured a Linux-based mail server using Postfix with webmail and email authentication. Learned real-world server configuration and troubleshooting.",
      highlights: [
        "Postfix setup and configuration",
        "Roundcube webmail integration",
        "OpenDKIM for email authentication"
      ],
      tech: ["Linux", "Postfix", "Roundcube", "OpenDKIM"]
    },
    {
      title: "Compiler Design Course Book",
      category: "Writing / Teaching",
      status: "Completed",
      description:
        "Wrote a course book for Compiler Design, covering fundamentals to advanced topics with examples, figures, and lab work guidance.",
      highlights: [
        "Explains concepts with simple language",
        "Includes visuals and lab exercises",
        "Includes my related mini-project work"
      ],
      tech: ["Technical Writing", "Compiler Design"]
    },
    {
      title: "Compiler Toolkit (JavaScript)",
      category: "Web Tools",
      status: "Completed",
      description:
        "A browser-based toolkit to practice compiler topics (e.g., regular expressions and related helpers). Built to make learning more interactive.",
      highlights: [
        "Simple UI for practice",
        "Learning-focused tool design",
        "Hands-on JavaScript implementation"
      ],
      tech: ["JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frontend Practice Pages",
      category: "Frontend",
      status: "Multiple small builds",
      description:
        "A collection of HTML/CSS pages to practice layout and styling (e.g., Naturals-style page, Career Mission style pages).",
      highlights: [
        "Layout practice (flex/grid)",
        "Typography and spacing improvements",
        "Better visual consistency over time"
      ],
      tech: ["HTML", "CSS"]
    },
    {
      title: "NLP Research Project",
      category: "Research",
      status: "Ongoing",
      description:
        "An ongoing NLP research project. Currently improving dataset quality, experimenting with approaches, and learning evaluation practices. Not published yet.",
      highlights: [
        "Dataset cleaning and preparation (ongoing)",
        "Experimenting with modeling approaches",
        "Learning evaluation and reporting"
      ],
      tech: ["Python", "NLP (learning)"]
    }
  ],

  experience: [
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
