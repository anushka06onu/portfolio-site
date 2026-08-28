import { Project, AdditionalProject } from "./types";

export const featuredProjects: Project[] = [
  {
    slug: "resilinet",
    title: "ResiliNet",
    tagline: "Explainable ML-Assisted SDN Digital Twin & Predictive Routing",
    category: "Network Intelligence · Explainable AI",
    categoryTrack: "NETWORK INTELLIGENCE · EXPLAINABLE AI",
    status: "prototype",
    statusLabel: "Research prototype · Real comparative Mininet campaign pending",
    summary:
      "An explainable ML-assisted SDN digital twin for congestion forecasting, policy-aware OpenFlow routing, and reproducible Mininet experiments.",
    whyItMatters:
      "Traditional SDN reactive routing only handles congestion after packet drops occur. ResiliNet forecasts link buffer saturation before queuing failure happens, using SHAP values to explain routing decisions to network operators.",
    myContribution:
      "Designed the experiment architecture, predictive routing pipeline, evidence lifecycle, FastAPI backend integration, and end-to-end evaluation framework.",
    evidence: [
      "61 automated backend tests",
      "11 automated frontend tests",
      "3 routing policy baselines (Dijkstra, Predictive, Fallback)",
      "4 controlled experimental scenarios (Flash Crowd, Degrading Link, Periodic Spike, Invariant Baseline)",
      "SHA-256 experiment run provenance tracking"
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LightGBM",
      "SHAP",
      "Mininet",
      "OpenFlow",
      "Ryu",
      "React",
      "TypeScript"
    ],
    links: {
      caseStudy: "/projects/resilinet",
      demo: "https://resili-net.vercel.app",
      github: "https://github.com/anushka06onu/ResiliNet"
    },
    featured: true,
    order: 1,
    caseStudy: {
      problem:
        "Modern Software-Defined Networks (SDN) struggle with sudden traffic bursts. Conventional shortest-path algorithms (like standard Dijkstra) react to congestion only after packet loss and latency spikes have degraded user experience. Furthermore, black-box ML models for traffic steering lack operational interpretability, making network operators hesitant to deploy autonomous routing.",
      context:
        "Developed as an advanced research prototype exploring the intersection of SDN data-plane telemetry, machine learning forecasting, and explainable decision support. The project focuses on rigorous provenance, reproducible scenario injection, and transparent fallback mechanisms.",
      role:
        "Project Creator & Lead Architect. Formulated the digital twin architecture, implemented the telemetry ingestion pipelines, trained LightGBM congestion risk models, integrated TreeSHAP local explanations, and built the FastAPI control interface.",
      architecture: {
        overview:
          "ResiliNet couples a simulated/emulated SDN data plane with an asynchronous machine learning inference engine and a real-time operator control dashboard.",
        highlights: [
          "Data Plane Emulation: Mininet topology with OpenFlow switches managed via Ryu SDN controller.",
          "Telemetry Collector: Periodic port-stats polling calculating link utilization, packet delta, and queue depth.",
          "Predictive Inference Pipeline: LightGBM regressor predicting congestion risk over multi-step horizons.",
          "Explainability Engine: SHAP TreeExplainer decomposing feature attribution (bytes/sec, burst history, port variance) per decision.",
          "Policy-Aware Routing Engine: Multi-criteria path computation comparing baseline shortest-path against predictive congestion-minimizing paths.",
          "Provenance & Audit Logger: Every run generates a cryptographic SHA-256 artifact capturing scenario parameters, model weights, and telemetry logs."
        ]
      },
      decisions: [
        {
          decision: "LightGBM over Deep RNN/LSTM for Traffic Forecasting",
          rationale:
            "Tabular network metrics (utilization deltas, port counters) with engineered rolling windows achieved sub-5ms inference latency, whereas recurrent architectures introduced unacceptable inference overhead for real-time SDN control loops.",
          tradeoff:
            "Requires manual feature engineering of rolling windows rather than automated sequence representation learning."
        },
        {
          decision: "TreeSHAP Local Attribution over LIME",
          rationale:
            "TreeSHAP computes exact Shapley values with mathematical consistency and significantly faster computation time on tree ensembles, essential for per-flow route explanation.",
          tradeoff:
            "Tied directly to tree-based estimators; switching to neural backends would require KernelSHAP or Integrated Gradients."
        },
        {
          decision: "Fail-Safe Routing Invariants & Dijkstra Fallback",
          rationale:
            "If the ML confidence drops below safety thresholds or telemetry becomes stale, the controller deterministically reverts to standard Dijkstra shortest path without dropping existing active flows.",
          tradeoff:
            "Requires continuous health monitoring of the inference service."
        }
      ],
      methodology:
        "Evaluated across 4 controlled synthetic and emulated traffic injection scenarios: Flash Crowd (exponential burst), Degrading Link (gradual queue exhaustion), Periodic Spike (cyclical burst patterns), and Invariant Baseline (steady Poisson arrivals). Each scenario was recorded with full provenance manifests.",
      evaluation: {
        metrics: [
          "Inference Latency (< 8ms per route decision)",
          "Prediction RMSE against synthetic queue depth",
          "Test Suite Coverage (61 backend unit/integration tests, 11 frontend UI/state tests)",
          "Path switch stability under fluctuating telemetry"
        ],
        summary:
          "Automated test suites verify route computation, fallback integrity, SHAP vector formatting, and telemetry serialization."
      },
      results: [
        "Constructed a full digital twin pipeline combining telemetry simulation, ML inference, and interactive topology visualization.",
        "Demonstrated real-time SHAP feature attribution directly explaining why specific alternate paths were selected during simulated bursts.",
        "Implemented deterministic SHA-256 audit trails ensuring full repeatability of experimental telemetry and model outputs."
      ],
      limitations: [
        "Comparative physical Mininet multi-switch hardware testbed campaign is currently pending rigorous comparative latency benchmarking against ECMP baselines.",
        "Current model assumes stationary topology; dynamic link failure retraining is an ongoing area of investigation."
      ],
      learnings: [
        "Explainability in autonomous infrastructure is not a luxury—operators demand clear attribution before delegating automated routing authority.",
        "Robust software engineering (rigorous test suites and strict fallback invariants) is as critical to research credibility as the underlying ML algorithm."
      ],
      statusNote:
        "Research prototype with full automated verification. Comparative Mininet physical campaign pending final publication benchmark."
    }
  },
  {
    slug: "computepulse",
    title: "ComputePulse",
    tagline: "Predictive GPU-Cluster Intelligence & Failure-Risk Forecasting",
    category: "Predictive Infrastructure · Machine Learning",
    categoryTrack: "PREDICTIVE INFRASTRUCTURE · MACHINE LEARNING",
    status: "complete",
    statusLabel: "Completed Hackathon Project & Prototype · Role: Team Lead",
    summary:
      "A predictive GPU-cluster intelligence platform that combines node telemetry, failure-risk forecasting, explainable alerts, and an operational dashboard.",
    whyItMatters:
      "Unplanned node outages and thermal throttling in distributed GPU clusters disrupt multi-day training jobs, wasting computational budgets. ComputePulse provides proactive warning with feature-level fault explanations.",
    myContribution:
      "Served as Team Lead. Directed the system architecture, built the Python/FastAPI telemetry and inference service, integrated the predictive risk models, and designed the real-time node triage dashboard.",
    evidence: [
      "Sub-100ms real-time cluster telemetry processing",
      "Multi-node health score aggregation & anomaly detection",
      "SHAP-based feature importance for hardware risk factors (VRAM thrashing, thermal spikes)",
      "Automated alert escalation & workload migration recommendations"
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LightGBM",
      "SHAP",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts"
    ],
    links: {
      caseStudy: "/projects/computepulse",
      demo: "https://computepulse.vercel.app",
      github: "https://github.com/anushka06onu/computepulse"
    },
    featured: true,
    order: 2,
    caseStudy: {
      problem:
        "High-performance AI clusters operate near thermal and memory limits. Silent GPU hardware degradation, memory bus errors, and cooling inefficiencies often trigger mid-run task crashes, requiring expensive checkpoints rollbacks.",
      context:
        "Created during a competitive hackathon and subsequently refined into a robust predictive systems prototype. Designed to give infrastructure teams visibility into impending node failures.",
      role:
        "Team Lead & Backend/ML Engineer. Led a multi-disciplinary team, architected the modular FastAPI backend, integrated telemetry simulation pipelines, and built the risk aggregation heuristics.",
      architecture: {
        overview:
          "A layered telemetry processing pipeline that ingests simulated GPU sensor metrics (temperature, power draw, PCIe bandwidth, VRAM utilization, fan speeds) and outputs instant anomaly scores with root-cause explanations.",
        highlights: [
          "Telemetry Ingestion Worker: Streams metrics across simulated nodes and cluster racks.",
          "Anomaly & Risk Engine: Ensemble gradient-boosted trees scoring per-node failure probability.",
          "Attribution Layer: Generates per-metric risk contribution so sysadmins understand whether thermal creep or memory degradation is driving the alert.",
          "Interactive Operations Dashboard: Real-time status cards, node heatmaps, and mitigation action triggers."
        ]
      },
      decisions: [
        {
          decision: "Modular Microservices Architecture (FastAPI + React)",
          rationale:
            "Separating the high-frequency telemetry analytics engine from the React presentation layer allowed independent scaling and low-latency websocket updates.",
          tradeoff:
            "Introduced CORS and API contract maintenance overhead during rapid hackathon prototyping."
        },
        {
          decision: "Composite Health Index (0-100) with Tiered Warning Bands",
          rationale:
            "Engineers need an immediate visual heuristic to prioritize triage before drilling into deep multi-sensor graphs.",
          tradeoff:
            "Heuristic weighting of composite scores requires domain tuning per cluster hardware spec."
        }
      ],
      methodology:
        "Tested against synthetic multi-node stress profiles simulating thermal runaway, ECC memory corruption cascades, and PCIe bus congestion.",
      evaluation: {
        metrics: [
          "Risk classification accuracy on synthetic stress runs",
          "Telemetry processing throughput (> 500 node events/sec)",
          "UI latency under continuous live metric updates"
        ],
        summary:
          "Successfully demonstrated automated risk detection and visual root-cause attribution across 16-node cluster configurations."
      },
      results: [
        "Built and deployed a fully functional live demo platform with simulated telemetry feeds.",
        "Demonstrated automated pre-failure alerts identifying simulated cooling unit degradation 15 minutes before emergency thermal throttling thresholds.",
        "Won competitive recognition for system completeness and clean interface design."
      ],
      limitations: [
        "Currently validated on synthetic and emulated telemetry distributions rather than production NVIDIA NVML/DCGM production cluster feeds.",
        "Automated workload migration orchestration is a recommended feature rather than an executed Kubernetes command."
      ],
      learnings: [
        "Leading a technical team under tight deadlines requires uncompromising clarity on API contracts and data schemas early in the sprint.",
        "Real-time operational dashboards must prioritize actionable signal-to-noise ratio over complex, hard-to-interpret charts."
      ],
      statusNote:
        "Completed hackathon project and functional prototype. Role: Team Lead."
    }
  },
  {
    slug: "healthcare-analytics",
    title: "Healthcare Analytics Platform",
    tagline: "Reproducible Risk Modeling & Explainable Decision Support",
    category: "Health Informatics · Responsible ML",
    categoryTrack: "HEALTH INFORMATICS · RESPONSIBLE ML",
    status: "prototype",
    statusLabel: "Research prototype · Structured clinical data exploration",
    summary:
      "A research-oriented healthcare analytics platform exploring reproducible risk modeling, evaluation, and explainable decision support across structured health datasets.",
    whyItMatters:
      "Clinical decision support systems must prioritize data provenance, validation transparency, and feature attribution over unvalidated predictive claims. This project demonstrates responsible ML engineering for healthcare data.",
    myContribution:
      "Formulated the data preprocessing and cross-validation pipelines, implemented explainability modules (SHAP/feature contributions), structured clinical metric visualizations, and wrote the methodology documentation.",
    evidence: [
      "Stratified k-fold validation across structured biomarker datasets",
      "Transparent calibration curves & Brier score evaluation",
      "Feature-level risk decomposition for individual patient records",
      "Strict avoidance of unverified diagnostic claims in favor of decision-support telemetry"
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "SHAP",
      "FastAPI",
      "React",
      "Tailwind CSS"
    ],
    links: {
      caseStudy: "/projects/healthcare-analytics",
      github: "https://github.com/anushka06onu/AI-Healthcare-Analytics-Platform",
      methodology: "https://github.com/anushka06onu/AI-Healthcare-Analytics-Platform#methodology"
    },
    featured: true,
    order: 3,
    caseStudy: {
      problem:
        "Many AI healthcare demos make irresponsible diagnostic claims without rigorous calibration, bias audits, or feature transparency. In real health informatics environments, clinicians require explainable risk estimates, clear baseline comparisons, and explicit acknowledgment of dataset limitations.",
      context:
        "Developed as part of research exploration in health informatics, focusing on how responsible ML practices and explainability can be embedded into clinical risk exploration tools.",
      role:
        "Lead Researcher & Developer. Curated benchmark datasets, built reproducible data cleaning pipelines, established stratified validation protocols, and developed the web exploration interface.",
      architecture: {
        overview:
          "An end-to-end analytical pipeline connecting verified tabular clinical datasets to calibrated classifiers and an explainable decision-support UI.",
        highlights: [
          "Data Ingestion & Cleaning: Handles missing value imputation, outlier winsorization, and biomarker standard scaling.",
          "Model Benchmark Suite: Evaluates Logistic Regression, Random Forest, and Gradient Boosted trees with stratified cross-validation.",
          "Calibration Layer: Platt scaling and isotonic regression to ensure predicted probabilities match empirical risk.",
          "Explainability Engine: Local and global SHAP summary plots highlighting the relative influence of physiological biomarkers.",
          "Clinical Explorer UI: Interactive patient profile scenario planner with risk delta indicators."
        ]
      },
      decisions: [
        {
          decision: "Explicit Responsible AI Guardrails in UI Copy",
          rationale:
            "Framed all model outputs as statistical risk indicators rather than definitive medical diagnoses, including visible disclaimers regarding clinical validation boundaries.",
          tradeoff:
            "Prevents flashy marketing claims but maintains strict scientific and ethical integrity."
        },
        {
          decision: "Stratified K-Fold with Strict Train/Test Leakage Prevention",
          rationale:
            "All scalers, imputers, and encoders were strictly fit within cross-validation folds to avoid optimistic performance bias.",
          tradeoff:
            "Slightly increased training runtime during pipeline evaluation."
        }
      ],
      methodology:
        "Evaluated on public benchmark tabular health datasets (chronic kidney disease, cardiovascular indicators). Evaluated using ROC-AUC, PR-AUC, Brier score calibration, and sensitivity at fixed clinical specificity thresholds.",
      evaluation: {
        metrics: [
          "Stratified 5-Fold ROC-AUC and PR-AUC",
          "Brier Calibration Loss",
          "SHAP attribution consistency across biomarker subgroups"
        ],
        summary:
          "Demonstrated that calibrated ensemble models with explainability provide actionable insight into biomarker risk factors without opaque black-box predictions."
      },
      results: [
        "Constructed a clean, reproducible healthcare analytics repository with documented data schemas.",
        "Implemented transparent SHAP waterfall visualizations explaining individual risk scores based on blood pressure, glucose, and demographic indicators.",
        "Established an ethical baseline for machine learning in health informatics projects."
      ],
      limitations: [
        "Trained on public observational datasets; has not undergone clinical trial validation or deployment in hospital electronic health record (EHR) workflows.",
        "Not approved as a medical device or diagnostic instrument."
      ],
      learnings: [
        "In healthcare applications, model calibration (trusting the predicted probability) is often far more important than raw classification accuracy.",
        "Transparent error analysis and limitation disclosures build trust with reviewers and medical practitioners."
      ],
      statusNote:
        "Research prototype exploring structured health data. Repository contains full methodology documentation."
    }
  },
  {
    slug: "academic-analytics",
    title: "DIU Academic Analytics Platform",
    tagline: "Deterministic Credit-Weighted Analytics & Student Academic Planning",
    category: "Full-Stack Product Engineering",
    categoryTrack: "FULL-STACK PRODUCT ENGINEERING",
    status: "complete",
    statusLabel: "Completed Full-Stack Web Platform · Live Deployment",
    summary:
      "A cloud-backed academic planning platform with authenticated records, credit-weighted GPA analytics, goal-feasibility calculations, and interactive reporting.",
    whyItMatters:
      "Undergraduates often face uncertainty when planning multi-semester graduation trajectories. This platform provides deterministic, mathematically exact projections and scenario modeling without unneeded algorithmic complexity.",
    myContribution:
      "Designed the full application architecture, implemented the credit-weighted calculation engine, structured state management with Zustand, and deployed the production web application.",
    evidence: [
      "Deterministic credit-hour weighted CGPA calculations",
      "Goal-feasibility scenario solver (calculating required GPA per remaining credit)",
      "Secure user authentication & encrypted cloud record synchronization",
      "Fully responsive dashboard with Recharts visual trend analysis"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Zustand",
      "Tailwind CSS",
      "Recharts"
    ],
    links: {
      caseStudy: "/projects/academic-analytics",
      demo: "https://diu-academic-analytics-platform.vercel.app",
      github: "https://github.com/anushka06onu/DIU-Academic-Analytics-Platform"
    },
    featured: true,
    order: 4,
    caseStudy: {
      problem:
        "University student portals typically show historical grades without providing forward-looking scenario modeling or graduation trajectory calculators. Students frequently miscalculate credit-weighted impact when planning retakes or elective course loads.",
      context:
        "Built to address student academic planning needs at Daffodil International University, transforming manual grade spreadsheet calculations into a modern, cloud-synchronized web experience.",
      role:
        "Sole Architect & Full-Stack Developer. Conceived the feature set, designed UI/UX workflows, implemented calculation logic and state persistence, and deployed to production.",
      architecture: {
        overview:
          "A client-side rendered Single Page Application (SPA) backed by Firebase Authentication and Firestore real-time synchronization.",
        highlights: [
          "State Store (Zustand): Centralized store managing semester records, course credits, grade points, and target CGPA settings.",
          "Calculation Engine: Pure deterministic TypeScript functions computing cumulative GPA, earned credits, and required semester target averages.",
          "Visualization Layer: Interactive semester-by-semester GPA trends and credit distribution charts using Recharts.",
          "Cloud Sync: User-authenticated data persistence with offline cache support."
        ]
      },
      decisions: [
        {
          decision: "Deterministic Mathematical Formulation over 'AI' Predictions",
          rationale:
            "Academic grading is strictly deterministic governed by credit-weighted arithmetic. Using ML would introduce hallucination and error into high-stakes academic planning.",
          tradeoff:
            "Focuses purely on rule-based projection rather than probabilistic course difficulty prediction."
        },
        {
          decision: "Zustand for State Management over Redux",
          rationale:
            "Zustand provided minimal boilerplate, clean TypeScript typing, and fast local persistence hooks without the complexity of Redux toolkit.",
          tradeoff:
            "Slightly fewer devtool inspection plugins out of the box."
        }
      ],
      methodology:
        "Validated against historical university grading policies and official DIU credit weighting matrices across 12-semester degree plans.",
      evaluation: {
        metrics: [
          "Mathematical precision verified against official student transcripts",
          "Zero layout shift and instant sub-second calculation updates",
          "100% client-side calculation responsiveness"
        ],
        summary:
          "Live in production and used by peer undergraduate students for degree planning."
      },
      results: [
        "Deployed a reliable, production-ready platform with zero server runtime overhead.",
        "Empowered students to simulate scenarios (e.g. 'What if I achieve an A in 15 credits next semester?').",
        "Demonstrated solid full-stack engineering, clean UI architecture, and robust state management."
      ],
      limitations: [
        "Currently tailored to DIU standard 4.00 grading scales; multi-university scale customization is an ongoing feature expansion.",
        "Manual entry of past courses is required in absence of direct university SIS API integration."
      ],
      learnings: [
        "Good engineering is about choosing the simplest right tool for the job—not forcing machine learning into problems solved by elegant deterministic math.",
        "User experience in data-heavy tools relies on immediate visual feedback and zero input latency."
      ],
      statusNote:
        "Completed production platform with active deployment. Projections are deterministic calculations."
    }
  }
];

export const additionalProjects: AdditionalProject[] = [
  {
    title: "Study Hub",
    category: "Full-Stack Web Application",
    description:
      "A collaborative academic platform designed for student resource sharing, organized subject archives, and discussion channels.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/anushka06onu",
    highlights: [
      "Structured subject-wise document cataloging",
      "Tag-based search and filter system",
      "Responsive interface for desktop and mobile study sessions"
    ]
  },
  {
    title: "Mail Server Infrastructure (Linux)",
    category: "Systems & Networking",
    description:
      "A self-hosted, authenticated Linux mail server stack configured from scratch with Postfix MTA, Dovecot IMAP/POP3, and Roundcube webmail.",
    technologies: ["Linux", "Postfix", "Dovecot", "OpenDKIM", "Roundcube"],
    github: "https://github.com/anushka06onu/Mail-Server-Using-Postfix-Dovecot",
    highlights: [
      "MTA/MDA routing with Postfix and Dovecot",
      "DKIM, SPF, and DMARC email authentication setup",
      "Secure TLS encryption and virtual mailbox user management"
    ]
  },
  {
    title: "Air-Writing Bangla Character Recognition",
    category: "Computer Vision & Human-Computer Interaction",
    description:
      "A real-time hand-gesture tracking and computer vision pipeline for recognizing in-air Bangla alphanumeric character writing using fingertip trajectories.",
    technologies: ["Python", "OpenCV", "MediaPipe", "Scikit-learn", "NumPy"],
    github: "https://github.com/anushka06onu",
    highlights: [
      "MediaPipe fingertip coordinate extraction and trajectory smoothing",
      "Temporal canvas buffer for multi-stroke character capture",
      "Feature extraction and classification pipeline for Bangla script"
    ]
  }
];
