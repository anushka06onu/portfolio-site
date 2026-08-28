import { ResearchOutput } from "./types";

export const researchDirection = {
  heading: "Research",
  tagline: "Trustworthy Machine Learning & Medical Image Analysis",
  overview:
    "My current research focuses on trustworthy machine learning and medical-image analysis for healthcare. As a Research Assistant, I contribute to explainable and uncertainty-aware analysis of panoramic radiographs, while my undergraduate thesis evaluates parameter-efficient adaptation of vision foundation models.",

  corePillars: [
    {
      title: "Parameter-Efficient Vision Foundation Models",
      description:
        "Evaluating and fine-tuning foundation models (DINOv2, BiomedCLIP, MedSAM) with LoRA, BitFit, and VPT for data-scarce medical imaging domains."
    },
    {
      title: "Pediatric Morphology & Uncertainty-Aware AI",
      description:
        "Developing morphological alignment modules (PMAM) and uncertainty-quantified frameworks for explainable multi-disease detection in pediatric radiography."
    },
    {
      title: "Health Informatics & Hematological ML",
      description:
        "Developing benchmarked, calibrated, and interpretable machine learning pipelines for complex clinical classification and disease detection."
    }
  ],

  // 5 concise focus tags for the homepage
  homepageTopics: [
    "Health Informatics",
    "Vision Foundation Models",
    "Medical Image Analysis",
    "Explainable AI",
    "Reproducible Evaluation"
  ],

  // Comprehensive tags for dedicated /research page
  topics: [
    "Health Informatics",
    "Vision Foundation Models (VFMs)",
    "Pediatric Morphology Alignment (PMAM)",
    "Parameter-Efficient Fine-Tuning (PEFT)",
    "Uncertainty Quantification",
    "Medical Image Analysis",
    "Explainable AI (XAI)",
    "Low-Resource NLP"
  ],

  historyNote:
    "Prior and ongoing NLP research includes 3 conference manuscripts on Bangla dialect machine translation, dialect normalization with attention interpretability, and ethnic language identification in shared script."
};

export const thesisDetails = {
  title: "Parameter-Efficient Adaptation of Vision Foundation Models for Multi-Class Dental Radiograph Diagnosis",
  venueOrType: "Undergraduate Thesis · Ongoing Research",
  role: "Lead Undergraduate Researcher",
  status: "Ongoing" as const,
  year: "2026",
  description:
    "To address the computational costs and representational gaps of applying Vision Foundation Models to dental radiography, this study leverages the DentIRO dataset to analyze embedding-space failure modes. It subsequently benchmarks parameter-efficient fine-tuning methods against full fine-tuning, evaluating model accuracy, robustness, and interpretability under data-scarce conditions.",
  objective:
    "This study evaluates frozen Vision Foundation Models (DINOv2, BiomedCLIP, MedSAM) via linear probing to quantify baseline performance gaps on subtle pathologies like caries. It benchmarks parameter-efficient fine-tuning strategies (LoRA, BitFit, VPT) against full fine-tuning while utilizing layer-depth ablations to isolate where localized dental decay features are best learned. Finally, the framework validates model robustness under label-scarce regimes (10–50% data) and confirms clinical alignment using transformer-adapted Grad-CAM heatmaps.",
  motivation:
    "Full fine-tuning of Vision Foundation Models on dental radiographs is computationally expensive and constrained by scarce data. This work addresses these domain gaps using parameter-efficient fine-tuning to achieve scalable, accurate, and interpretable dental diagnosis."
};

export const researchOutputs: ResearchOutput[] = [
  {
    title: "PMAM: A Pediatric Morphology Alignment Module for Explainable, Uncertainty-Aware Multi-Disease Detection in Panoramic Radiographs",
    shortTitle: "PMAM for Pediatric Panoramic Radiographs",
    venueOrType: "Journal Manuscript · Health Informatics",
    role: "Research Assistant (Health Informatics Research Lab)",
    status: "Manuscript in preparation",
    statusNote: "Journal-focused study on pediatric morphology alignment, uncertainty-aware modeling, and multi-disease detection",
    year: "2026",
    summary:
      "Investigates a pediatric morphology alignment module (PMAM) to address anatomical growth variations and quantify predictive uncertainty for explainable, trustworthy multi-disease detection in dental panoramic radiographs.",
    topics: ["Health Informatics", "Pediatric Morphology", "Panoramic Radiography", "Uncertainty Quantification", "Explainable AI"]
  },
  {
    title: "Parameter-Efficient Adaptation of Vision Foundation Models for Multi-Class Dental Radiograph Diagnosis",
    shortTitle: "PEFT for Dental Vision Foundation Models",
    venueOrType: "Undergraduate Thesis · Ongoing Research",
    role: "Lead Undergraduate Researcher",
    status: "Ongoing",
    statusNote: "Benchmarking DINOv2, BiomedCLIP, MedSAM with LoRA/BitFit/VPT on DentIRO",
    year: "2026",
    summary:
      "Leverages the DentIRO dataset to analyze embedding-space failure modes of Vision Foundation Models in dental radiography, benchmarking parameter-efficient fine-tuning (LoRA, BitFit, VPT) against full fine-tuning under data-scarce conditions with Grad-CAM interpretability.",
    topics: ["Vision Foundation Models", "PEFT (LoRA/BitFit/VPT)", "DentIRO", "Medical Imaging", "Grad-CAM"]
  },
  {
    title: "Detecting Compensated Microcytosis: A Benchmarked and Explainable Machine Learning Approach to Tri-Class Hematological Classification",
    shortTitle: "Explainable Hematological Classification",
    venueOrType: "Health Informatics Conference",
    role: "Co-Author / Researcher",
    status: "Under review",
    statusNote: "Under peer review at international health informatics conference",
    year: "2026",
    summary:
      "A benchmarked and explainable machine learning approach to tri-class hematological classification for identifying compensated microcytosis with transparent biomarker feature attribution.",
    topics: ["Health Informatics", "Hematological Classification", "Explainable AI", "Clinical Benchmarking"]
  },
  {
    title: "Bridging the Dialect Gap: Enhancing Bangla Dialect-to-English Machine Translation with Regional Metadata and Romanized Standard Bangla",
    shortTitle: "Bangla Dialect-to-English Translation",
    venueOrType: "NLP Conference",
    role: "Co-Author / Researcher",
    status: "Under review",
    statusNote: "Under peer review at international NLP conference",
    year: "2026",
    summary:
      "Enhances regional Bangla dialect-to-English machine translation by integrating regional metadata injection and romanized standard Bangla intermediate representations.",
    topics: ["Bangla NLP", "Machine Translation", "Dialect Processing", "Low-Resource NLP"]
  },
  {
    title: "Explainable Neural Machine Translation for Bangla Regional Dialect Normalization: A Multi-Model Comparative Study with Attention-Based Interpretability",
    shortTitle: "Bangla Dialect Normalization with XAI",
    venueOrType: "NLP Conference",
    role: "Co-Author / Researcher",
    status: "Under review",
    statusNote: "Under peer review at international NLP conference",
    year: "2026",
    summary:
      "A comprehensive multi-model comparative evaluation for normalizing Bangla regional dialects into standard Bangla, integrating attention-based interpretability and systematic error analysis.",
    topics: ["Bangla NLP", "Dialect Normalization", "NMT", "Attention Interpretability"]
  },
  {
    title: "Explainable and Parameter-Efficient Identification of Ethnic Languages in Shared Bengali Script under Low-Resource Conditions",
    shortTitle: "Ethnic Language Identification in Bengali Script",
    venueOrType: "NLP Conference",
    role: "Co-Author / Researcher",
    status: "Under review",
    statusNote: "Under peer review at international NLP conference",
    year: "2026",
    summary:
      "Investigates parameter-efficient adaptation and explainability for ethnic and indigenous languages written in shared Bengali script under severe low-resource conditions.",
    topics: ["Low-Resource NLP", "Ethnic Language Identification", "PEFT", "Interpretability"]
  }
];
