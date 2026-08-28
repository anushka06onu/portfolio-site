import { ResearchOutput } from "./types";

export const researchDirection = {
  heading: "Research Direction",
  tagline: "Trustworthy Health Informatics, Explainable AI, & Reproducible Systems",
  overview:
    "My current research direction is health informatics, with particular interest in trustworthy machine learning, medical-image analysis, explainable models, and reproducible evaluation. I began research through Bangla NLP, which developed my experience in dataset construction, experimental comparison, and academic writing. My present undergraduate thesis and Research Assistant work are focused on healthcare applications.",
  
  corePillars: [
    {
      title: "Health Informatics & Clinical Data Analytics",
      description:
        "Developing robust predictive modeling and analytical pipelines for clinical biomarkers and patient trajectories with rigorous calibration and cross-validation."
    },
    {
      title: "Trustworthy & Explainable Machine Learning",
      description:
        "Investigating feature attribution methods (TreeSHAP, Integrated Gradients) to make complex predictive models transparent, interpretable, and accountable for domain practitioners."
    },
    {
      title: "Medical Image Analysis & Reproducible Evaluation",
      description:
        "Exploring deep learning architectures for medical image screening and classification with standardized baseline comparisons and strict evaluation integrity."
    }
  ],

  topics: [
    "Health Informatics",
    "Medical Image Analysis",
    "Trustworthy Machine Learning",
    "Explainable AI",
    "Clinical Data Analytics",
    "Reproducible Evaluation"
  ],

  historyNote:
    "Prior research background includes foundational work in Bangla Natural Language Processing, where I built datasets, implemented transformer and classical baselines, and established experimental evaluation protocols."
};

export const researchOutputs: ResearchOutput[] = [
  {
    title: "Deep Learning Approaches for Medical Image Screening and Classification",
    venueOrType: "Undergraduate Thesis / Ongoing Research",
    role: "Lead Student Researcher",
    status: "Ongoing",
    statusNote: "Experimental benchmarking & validation underway",
    year: "2026",
    summary:
      "Investigating convolutional and attention-based architectures for automated medical image anomaly detection, focusing on generalizability across diverse imaging artifacts and rigorous cross-center validation.",
    topics: ["Medical Image Analysis", "Deep Learning", "Clinical Evaluation"]
  },
  {
    title: "Explainable Risk Modeling and Provable Calibration in Health Informatics",
    venueOrType: "Journal Manuscript",
    role: "Research Assistant (Health Informatics Research Lab)",
    status: "Manuscript in preparation",
    statusNote: "Drafting results and ablation studies",
    year: "2026",
    summary:
      "Collaborative research investigating the stability of Shapley-value attributions across imbalanced clinical tabular records and evaluating post-hoc calibration methods.",
    topics: ["Health Informatics", "Explainable AI", "Trustworthy ML"]
  },
  {
    title: "Comparative Analysis and Benchmark Corpus for Low-Resource Bangla NLP",
    venueOrType: "Conference / Journal Submission",
    role: "Contributing Researcher",
    status: "Under review",
    statusNote: "Peer review in progress",
    year: "2025–2026",
    summary:
      "Constructed and annotated a domain-specific Bangla language benchmark dataset, evaluating classical feature baselines alongside fine-tuned multilingual transformer models.",
    topics: ["Bangla NLP", "Dataset Construction", "Experimental Benchmark"]
  }
];
