import { ResearchOutput } from "./types";

export const researchDirection = {
  heading: "Research Direction",
  tagline: "Health Informatics, Vision Foundation Models & Trustworthy Machine Learning",
  overview:
    "My current research focuses on health informatics, parameter-efficient adaptation of Vision Foundation Models (VFMs) for medical image diagnosis, and explainable machine learning. As a Research Assistant at the Health Informatics Research Lab, I work on pediatric morphology alignment and uncertainty-aware disease detection in panoramic radiographs, while my undergraduate thesis benchmarks PEFT methods on the DentIRO dataset.",

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
