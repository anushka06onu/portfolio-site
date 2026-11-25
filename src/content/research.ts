import { ResearchOutput } from "./types";

export const researchDirection = {
  heading: "Research",
  tagline: "Health Informatics, Medical Artificial Intelligence & Low-Resource NLP",
  overview:
    "I study how to adapt and evaluate machine-learning models when labeled data is scarce. At the Health Informatics Research Lab (HIRL), I work on medical imaging and interpretable clinical models. In Bangla NLP, I co-curated a dialect corpus and contributed to studies of translation and language identification.",

  corePillars: [
    {
      title: "Health Informatics & Medical Imaging",
      description:
        "Advancing clinical decision support, diagnostic imaging analysis, and robust evaluation methodologies under severe clinical data constraints."
    },
    {
      title: "Trustworthy Machine Learning & Explainability",
      description:
        "Developing calibrated, interpretable, and reproducible machine learning frameworks for hematological modeling and diagnostic auditing."
    },
    {
      title: "Low-Resource Computational Linguistics",
      description:
        "Curating multiregional dialect corpora, standardizing dialect normalization, and advancing language identification in shared scripts under low-resource conditions."
    }
  ],

  // 5 concise focus tags for the homepage
  homepageTopics: [
    "Health Informatics",
    "Medical Image Analysis",
    "Clinical AI",
    "Explainable AI",
    "Low-Resource NLP"
  ],

  // Comprehensive tags for dedicated /research page
  topics: [
    "Health Informatics",
    "Vision Foundation Models (VFMs)",
    "DINOv2-Small Adaptation",
    "Parameter-Efficient Fine-Tuning (PEFT)",
    "Grad-CAM Interpretability",
    "SHAP Attribution",
    "Hematological Classification",
    "Pulmonary Ultrasound",
    "Bangla Dialect Corpora",
    "Compiler Design Education"
  ],

  historyNote:
    "Research spans clinical computer vision at HIRL (undergraduate thesis on dental radiograph classification, journal manuscript under review), 2 accepted full papers at ICERIE 2027 (hematology and ethnic language identification), 3 submissions at ICEEICT 2027, the 50,513-sentence Upobhasha dialect corpus on Zenodo, and an authored textbook on compiler design."
};

export const authoredBook = {
  title: "Compiler Architectonics: Scientific Principles & Practical Techniques in Compiler Design",
  venueOrType: "Authored Academic Book & Laboratory Manual",
  role: "Author",
  status: "Published" as const,
  year: "2026",
  description:
    "Authored an illustrated companion book covering compiler design theory, lexical analysis, syntax analysis, parsing algorithms, intermediate code representations, and practical laboratory exercises, made freely available online and distributed in print to students.",
  summary:
    "Authored an illustrated companion book covering compiler design theory and laboratory exercises, made freely available online and distributed in print to students.",
  topics: [
    "Compiler Design",
    "Lexical & Syntax Analysis",
    "Abstract Syntax Trees",
    "Computer Science Education",
    "Laboratory Exercises"
  ],
  links: [
    {
      label: "Read Companion Book (Google Drive)",
      url: "https://drive.google.com/file/d/18svxtHLMDiEXos6tFleZHarM6d4AWHl7/view?usp=drive_link"
    }
  ]
};

export const upobhasha = {
  title: "Upobhasha: A Multiregional Bengali Dialect Parallel Corpus",
  shortTitle: "Upobhasha Dialect Corpus",
  venueOrType: "Zenodo Dataset",
  role: "Co-curator",
  status: "Published",
  year: "2026",
  summary:
    "Co-curated a corpus of 50,513 parallel records from 10 regional varieties of Bangla, with Standard Bangla, Banglish transliterations and English translations. Zenodo lists the citation and access details for the restricted files.",
  topics: ["Bangla NLP", "Dialect Dataset", "Parallel Corpus"],
  links: [
    {
      label: "View dataset record · DOI 10.5281/zenodo.22997452",
      url: "https://doi.org/10.5281/zenodo.22997452"
    }
  ]
} satisfies ResearchOutput;

export const thesisDetails = {
  title: "Parameter-Efficient Adaptation of DINOv2-Small for Dental Radiograph Classification: A Comparative Study of Fine-Tuning Strategies, Data Efficiency, and Interpretability",
  alternateTitle: "Parameter-Efficient Adaptation of Vision Foundation Models for Multi-Class Dental Radiograph Diagnosis",
  shortTitle: "Dental Radiograph Classification",
  codeUrl: "https://github.com/sabbir-sharif/thesis-code",
  venueOrType: "Undergraduate Thesis Research · Journal Manuscript (Under Review)",
  role: "Undergraduate Researcher & Co-author",
  status: "Under review" as const,
  year: "2026",
  description:
    "I contributed to benchmarking DINOv2-Small adaptation on four classes of DentIRO dental radiographs. In a patient-level comparison, bottleneck adapters achieved balanced accuracy comparable to fully fine-tuned ResNet-50 while updating just 2.63% of DINOv2-Small’s parameters. Grad-CAM helped identify misclassifications where the model highlighted areas away from the tooth.",
  objective:
    "The study compares DINOv2-Small adaptation methods with full fine-tuning and a ResNet-50 baseline. Training, validation and test patients are kept separate. Selected methods were also tested with 50% and 20% of the training images. Grad-CAM was used to audit where the models looked in misclassified images.",
  motivation:
    "Updating a small share of model parameters can reduce the cost of adapting a vision model. The error audit also shows why balanced accuracy alone gives an incomplete picture of what the model uses to classify an image."
};

export const researchOutputs: ResearchOutput[] = [
  {
    title: "Parameter-Efficient Adaptation of DINOv2-Small for Dental Radiograph Classification: A Comparative Study of Fine-Tuning Strategies, Data Efficiency, and Interpretability",
    shortTitle: "PEFT Adaptation of DINOv2 for Dental Radiography",
    venueOrType: "Journal Manuscript (Under Review) · Undergraduate Thesis",
    role: "Undergraduate Researcher & Co-author",
    status: "Under review",
    statusNote: "Journal manuscript under peer review",
    year: "2026",
    summary:
      thesisDetails.description,
    topics: ["Vision Foundation Models", "DINOv2-Small", "DentIRO", "PEFT (LoRA)", "Bottleneck Adapters", "Grad-CAM", "Medical Imaging"],
    links: [{ label: "See code and evaluation protocol", url: thesisDetails.codeUrl }]
  },
  {
    title: "PMAM: A Pediatric Morphology Alignment Module for Explainable, Uncertainty-Aware Multi-Disease Detection in Panoramic Radiographs",
    shortTitle: "PMAM for Pediatric Panoramic Radiographs",
    venueOrType: "Journal Manuscript · Health Informatics Research Lab",
    role: "Research Assistant (Health Informatics Research Lab)",
    status: "Manuscript in preparation",
    statusNote: "Journal-focused study on pediatric morphology alignment, uncertainty-aware modeling, and multi-disease detection",
    year: "2026",
    summary:
      "Investigates a pediatric morphology alignment module (PMAM) to address anatomical growth variations and quantify predictive uncertainty for explainable, trustworthy multi-disease detection in dental panoramic radiographs.",
    topics: ["Health Informatics", "Pediatric Morphology", "Panoramic Radiography", "Uncertainty Quantification", "Explainable AI"]
  },
  {
    title: "Detecting Compensated Microcytosis: A Benchmarked and Explainable Machine Learning Approach to Tri-Class Hematological Classification",
    shortTitle: "Explainable Hematological Classification",
    venueOrType: "ICERIE 2027 · Full Paper Accepted",
    role: "Co-Author / Researcher",
    status: "Accepted",
    statusNote: "Full paper accepted at ICERIE 2027",
    year: "2027",
    summary:
      "Investigated microcytosis masked by normal hemoglobin through tri-class hematological modelling, with SHAP analysis of the hemoglobin–MCV thresholds underlying ensemble predictions across a six-model benchmark using stratified five-fold cross-validation.",
    topics: ["Health Informatics", "Hematological Classification", "SHAP", "Explainable AI", "Clinical Benchmarking", "ICERIE 2027"]
  },
  {
    title: "Explainable and Parameter-Efficient Identification of Ethnic Languages in Shared Bengali Script under Low-Resource Conditions",
    shortTitle: "Ethnic Language Identification in Bengali Script",
    venueOrType: "ICERIE 2027 · Full Paper Accepted",
    role: "Co-Author / Researcher",
    status: "Accepted",
    statusNote: "Full paper accepted at ICERIE 2027",
    year: "2027",
    summary:
      "Examined cross-language ambiguity in Bengali script through controlled data-reduction experiments, comparing four transformer adaptation methods and using SHAP and Integrated Gradients to trace language-specific subword cues.",
    topics: ["Low-Resource NLP", "Ethnic Language Identification", "Shared Bengali Script", "PEFT", "Integrated Gradients", "ICERIE 2027"]
  },
  {
    title: "A Lesion–Context Audit of Grounding and Calibration in Pulmonary Ultrasound Classification",
    shortTitle: "Grounding Audit in Pulmonary Ultrasound",
    venueOrType: "ICEEICT 2027 · Under Review",
    role: "Co-Author / Researcher",
    status: "Under review",
    statusNote: "Under peer review at ICEEICT 2027",
    year: "2027",
    summary:
      "Measured saliency map overlap with annotated lesions against a centre-of-image baseline and evaluated grounding and calibration across independent pulmonary ultrasound datasets.",
    topics: ["Pulmonary Ultrasound", "Model Grounding", "Calibration", "Saliency Maps", "Medical AI", "ICEEICT 2027"]
  },
  {
    title: "Bangla Regional Dialect Normalization: Comparing Direct Translation and Perplexity-Based Selection",
    shortTitle: "Bangla Regional Dialect Normalization",
    venueOrType: "ICEEICT 2027 · Under Review",
    role: "Co-Author / Researcher",
    status: "Under review",
    statusNote: "Under peer review at ICEEICT 2027 · Prior draft: Explainable Neural Machine Translation for Bangla Regional Dialect Normalization: A Multi-Model Comparative Study with Attention-Based Interpretability",
    year: "2027",
    summary:
      "Compares direct translation and perplexity-based selection for normalizing regional Bangla dialects into standard Bangla, integrating attention-based interpretability and systematic error analysis.",
    topics: ["Bangla NLP", "Dialect Normalization", "NMT", "Perplexity Selection", "Attention Interpretability", "ICEEICT 2027"]
  },
  {
    title: "Multiclass Bangla Dialect Identification Using Transformer Ensembles and Explainable AI",
    shortTitle: "Multiclass Dialect Identification & XAI",
    venueOrType: "Journal Manuscript (Under Review)",
    role: "Co-Author / Researcher",
    status: "Under review",
    statusNote: "Journal manuscript under peer review",
    year: "2026",
    summary:
      "Investigates multiclass identification across 10 regional varieties of Bangla using transformer ensembles coupled with explainable AI attribution methods.",
    topics: ["Bangla NLP", "Dialect Identification", "Transformer Ensembles", "Explainable AI"]
  },
  {
    title: "When Does Context Help? A Controlled Study of Regional Metadata and Romanized Standard Bangla for Dialect-to-English Translation",
    shortTitle: "Context in Dialect-to-English Translation",
    venueOrType: "ICEEICT 2027 · Under Review",
    role: "Co-Author / Researcher",
    status: "Under review",
    statusNote: "Under peer review at ICEEICT 2027 · Prior draft: Bridging the Dialect Gap: Enhancing Bangla Dialect-to-English Machine Translation with Regional Metadata and Romanized Standard Bangla",
    year: "2027",
    summary:
      "A controlled study evaluating whether regional metadata and romanized standard Bangla intermediate representations improve low-resource dialect-to-English translation accuracy.",
    topics: ["Bangla NLP", "Machine Translation", "Dialect Translation", "Regional Metadata", "ICEEICT 2027"]
  },
  upobhasha,
  {
    title: "Compiler Architectonics: Scientific Principles & Practical Techniques in Compiler Design",
    shortTitle: "Compiler Architectonics Companion Book",
    venueOrType: "Authored Academic Book & Laboratory Manual",
    role: "Author",
    status: "Published",
    statusNote: "Freely available online and distributed in print to students",
    year: "2026",
    summary:
      "Authored an illustrated companion book covering compiler design theory and laboratory exercises, made freely available online and distributed in print to students.",
    topics: ["Compiler Design", "Computer Science Education", "Parsing & AST", "Laboratory Manual"],
    links: [
      {
        label: "Read Companion Book (Google Drive)",
        url: "https://drive.google.com/file/d/18svxtHLMDiEXos6tFleZHarM6d4AWHl7/view?usp=drive_link"
      }
    ]
  }
];
