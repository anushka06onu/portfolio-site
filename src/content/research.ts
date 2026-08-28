import { ResearchOutput } from "./types";

export const researchDirection = {
  heading: "Research Direction",
  tagline: "Health Informatics, Explainable Machine Learning & Reproducible Systems",
  overview:
    "My current research direction is health informatics, with particular interest in trustworthy machine learning, medical image analysis, explainable models, and reproducible evaluation. I began research through Bangla NLP, which developed my experience in dataset curation, experimental comparison, and academic writing. My present undergraduate thesis and Research Assistant work are focused on healthcare applications.",
  
  corePillars: [
    {
      title: "Health Informatics & Clinical Data",
      description:
        "Investigating machine learning methods on structured health records, focusing on transparent evaluation and feature attribution."
    },
    {
      title: "Explainable & Reliable Machine Learning",
      description:
        "Using feature attribution methods (such as TreeSHAP) and tested fallback behavior to make predictive model outputs transparent and auditable."
    },
    {
      title: "Medical Image Classification",
      description:
        "Investigating computer vision and deep learning approaches for medical image screening with reproducible experimental benchmarks."
    }
  ],

  topics: [
    "Health Informatics",
    "Medical Image Analysis",
    "Explainable AI",
    "Trustworthy Machine Learning",
    "Clinical Data Exploration",
    "Reproducible Evaluation"
  ],

  historyNote:
    "Prior research background includes foundational work in Bangla Natural Language Processing, where I built datasets, implemented baselines, and established experimental evaluation protocols."
};

export const researchOutputs: ResearchOutput[] = [
  {
    title: "Undergraduate Thesis: Medical Image Classification",
    venueOrType: "Undergraduate Thesis / Ongoing Research",
    role: "Lead Student Researcher",
    status: "Ongoing",
    statusNote: "Experimental benchmarking and model evaluation in progress",
    year: "2026",
    summary:
      "Investigating deep learning architectures for automated medical image anomaly detection, focusing on standardized baseline comparisons and cross-dataset evaluation integrity.",
    topics: ["Medical Image Analysis", "Deep Learning", "Evaluation Protocols"]
  },
  {
    title: "Health Informatics Journal Study",
    venueOrType: "Journal Manuscript",
    role: "Research Assistant (Health Informatics Research Lab)",
    status: "Manuscript in preparation",
    statusNote: "Working title withheld during ongoing manuscript preparation",
    year: "2026",
    summary:
      "Collaborative research investigating risk modeling approaches and explainability stability across tabular health datasets with documented validation protocols.",
    topics: ["Health Informatics", "Explainable AI", "Tabular Modeling"]
  },
  {
    title: "Earlier Bangla NLP Research",
    venueOrType: "Conference / Manuscript Submission",
    role: "Contributing Student Researcher",
    status: "Under review",
    statusNote: "Peer review in progress",
    year: "2025–2026",
    summary:
      "Constructed and annotated a domain-specific Bangla language benchmark dataset, evaluating classical feature baselines alongside transformer models.",
    topics: ["Bangla NLP", "Dataset Construction", "Benchmark Evaluation"]
  }
];
