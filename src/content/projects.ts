import { Project, AdditionalProject } from "./types";

export const featuredProjects: Project[] = [
  {
    slug: "resilinet",
    title: "ResiliNet",
    tagline: "Explainable ML-Assisted SDN Digital Twin & Predictive Routing",
    category: "Network Intelligence · Explainable AI",
    categoryTrack: "Network Intelligence · Explainable AI",
    status: "prototype",
    statusLabel: "Research prototype · Emulated SDN validation pipeline",
    summary:
      "An explainable ML-assisted SDN digital twin for link-congestion forecasting, policy-aware OpenFlow routing, and reproducible Mininet experiments.",
    whyItMatters:
      "Standard SDN reactive routing only adjusts paths after packet loss occurs. ResiliNet explores estimating congestion risk before queue exhaustion happens, using TreeSHAP values to provide transparent feature attribution for routing decisions.",
    myContribution:
      "Designed the experiment architecture, telemetry ingestion pipeline, LightGBM congestion-risk classifier integration, TreeSHAP explanation formatting, FastAPI backend endpoints, and automated test suite.",
    evidence: [
      "61 automated backend tests and 11 frontend tests",
      "Three controlled routing policies: static/no-reroute, reactive-threshold, and predictive-ML",
      "Four seed-controlled Mininet scenarios: normal operation, gradual congestion, sudden traffic surge, and concurrent service-class flows",
      "SHA-256 experiment run provenance tracking and artifact validation"
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
        "In software-defined networks, conventional routing algorithms react to link congestion only after packet loss and latency spikes have degraded traffic quality. In addition, black-box machine learning models for traffic steering lack transparency, making it difficult for network operators to interpret automated decisions.",
      context:
        "Developed as an academic research prototype investigating the combination of SDN telemetry, machine learning risk forecasting, and explainable decision support with reproducible artifact tracking.",
      role:
        "Project Creator & Lead Developer. Formulated the digital twin architecture, implemented telemetry collection and feature engineering pipelines, integrated the LightGBM classifier, formatted TreeSHAP local explanations, and built the FastAPI control endpoints.",
      architecture: {
        overview:
          "ResiliNet couples a simulated/emulated SDN data plane with an asynchronous machine learning inference service and an operator dashboard.",
        highlights: [
          "Data Plane Emulation: Mininet topology with OpenFlow switches managed through the Ryu SDN controller.",
          "Telemetry Collector: Periodic port-stats polling computing link utilization, packet delta, and queue depth.",
          "Predictive Inference Pipeline: LightGBM classifier estimating short-horizon link-congestion risk from rolling telemetry features.",
          "Explainability Engine: TreeSHAP local feature attribution decomposing the influence of port counters, burst history, and utilization deltas.",
          "Policy Engine: Three controlled routing baselines (static/no-reroute, reactive-threshold, and predictive-ML).",
          "Provenance & Artifact Logger: Run parameters, model configurations, and telemetry logs recorded with SHA-256 hashes for reproducibility."
        ]
      },
      decisions: [
        {
          decision: "LightGBM for Telemetry Classification",
          rationale:
            "LightGBM was selected for compatibility with structured rolling-window telemetry, efficient inference, and direct support for TreeSHAP local explanations.",
          tradeoff:
            "Requires manual feature engineering of rolling windows rather than automated sequence representation."
        },
        {
          decision: "TreeSHAP for Local Feature Attribution",
          rationale:
            "TreeSHAP computes exact Shapley values with mathematical consistency on tree ensembles, providing per-flow feature attribution without stochastic sampling variance.",
          tradeoff:
            "Tied directly to tree-based estimators."
        },
        {
          decision: "Deterministic Fallback Invariants",
          rationale:
            "If model risk scores fall below confidence thresholds or telemetry is unavailable, routing deterministically falls back to standard shortest-path without interrupting active flows.",
          tradeoff:
            "Requires continuous health monitoring of the inference service."
        }
      ],
      methodology:
        "Constructed four seed-controlled Mininet experimental scenarios: normal operation (steady background traffic), gradual congestion (incremental load ramp), sudden traffic surge (burst injection), and concurrent service-class flows. Verified execution workflows with automated test fixtures.",
      evaluation: {
        metrics: [
          "Model inference latency recorded as an evaluation target; comparative benchmark pending",
          "Classifier ROC-AUC and PR-AUC across rolling telemetry validation sets",
          "Test Suite Coverage (61 backend unit/integration tests, 11 frontend tests)",
          "Artifact schema validation and hash verification across mock runs"
        ],
        summary:
          "Automated test suites verify route computation, fallback behavior, SHAP vector formatting, and telemetry serialization."
      },
      results: [
        "Implemented an end-to-end telemetry, prediction, explanation, and routing architecture.",
        "Verified system behavior through automated backend and frontend test suites.",
        "Implemented reproducible campaign orchestration, artifact validation, and statistical evaluation pipelines.",
        "Completed mock campaign runs for pipeline verification; real comparative Mininet performance benchmark remains pending."
      ],
      limitations: [
        "The real comparative Mininet emulation campaign has not yet been published; physical-network and hardware-testbed validation remain future work.",
        "Current model assumes a fixed topology; dynamic topology discovery and online model adaptation are areas for future research."
      ],
      learnings: [
        "Explainability in automated infrastructure is essential: operators require clear feature attribution before trusting predictive route adjustments.",
        "Rigorous automated testing and deterministic fallback invariants are as important for system credibility as the machine learning model itself."
      ],
      statusNote:
        "Research prototype with automated test verification. Real comparative Mininet campaign pending final evaluation."
    }
  },
  {
    slug: "computepulse",
    title: "ComputePulse",
    tagline: "Predictive GPU-Cluster Intelligence & Failure-Risk Forecasting",
    category: "Predictive Infrastructure · Machine Learning",
    categoryTrack: "Predictive Infrastructure · Machine Learning",
    status: "prototype",
    statusLabel: "Hackathon prototype · Synthetic telemetry demonstration",
    summary:
      "A predictive GPU-cluster intelligence prototype that combines telemetry monitoring, LightGBM risk scoring, explainable alert presentation, and an operational dashboard.",
    whyItMatters:
      "Hardware degradation and thermal stress in GPU clusters can disrupt compute jobs. ComputePulse explores proactive anomaly alerting and feature-level attribution using simulated cluster metrics.",
    myContribution:
      "Served as Team Lead. Directed the project scope, built the Python/FastAPI backend and telemetry simulation service, integrated the LightGBM risk model, and designed the dashboard interface.",
    evidence: [
      "Telemetry-driven GPU node health monitoring",
      "LightGBM-based risk model estimating node fault probability",
      "SHAP-based feature attribution for thermal and memory utilization anomalies",
      "Rule-based mitigation recommendations and alert triage UI",
      "Fully deployed demonstration web interface"
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
        "GPU clusters operate under intense thermal and memory workloads. Identifying early warning signals of node stress before job crashes occur helps infrastructure teams prioritize maintenance.",
      context:
        "Created during a competitive hackathon and subsequently organized into a clean prototype demonstrating how predictive models and explainability can aid hardware operations.",
      role:
        "Team Lead & Backend/ML Developer. Led team coordination, built the FastAPI backend and simulated metric feeds, integrated the LightGBM risk estimator, and created the triage dashboard.",
      architecture: {
        overview:
          "A telemetry processing pipeline that ingests simulated GPU sensor metrics (temperature, memory utilization, fan speed, power draw) and computes anomaly risk scores with root-cause indicators.",
        highlights: [
          "Telemetry Simulation Service: Generates multi-node sensor streams across nominal and stressed operating profiles.",
          "Anomaly Risk Estimator: LightGBM model estimating node failure likelihood based on rolling telemetry trends.",
          "Attribution Layer: SHAP feature breakdown highlighting whether thermal creep, power spikes, or memory pressure drive the risk score.",
          "Operator Dashboard: Interactive cluster node grid, time-series charts, and rule-based mitigation recommendations."
        ]
      },
      decisions: [
        {
          decision: "Separation of Inference Backend and React Dashboard",
          rationale:
            "Decoupling the FastAPI analytics backend from the React visualization frontend allowed clean API contracts and independent development.",
          tradeoff:
            "Required maintaining OpenAPI schemas across both services."
        },
        {
          decision: "Tiered Risk Status Bands (Nominal, Elevated, Critical)",
          rationale:
            "Provides an immediate visual triage heuristic for operators before inspecting multi-sensor graphs.",
          tradeoff:
            "Threshold boundaries require calibration depending on hardware tolerance."
        }
      ],
      methodology:
        "Tested against synthetic multi-node operational profiles simulating thermal stress patterns and memory load spikes.",
      evaluation: {
        metrics: [
          "Risk classification consistency on synthetic evaluation sets",
          "UI rendering responsiveness under periodic data polling",
          "End-to-end API response times"
        ],
        summary:
          "Demonstrated automated risk scoring and visual feature attribution across simulated multi-node cluster configurations."
      },
      results: [
        "Built and deployed a functional demonstration platform with live telemetry feeds.",
        "Demonstrated automated pre-failure alerts identifying simulated cooling unit stress before critical thermal thresholds.",
        "Recognized for end-to-end prototype completeness and clean interface design."
      ],
      limitations: [
        "Validated on synthetic and simulated telemetry distributions rather than production NVIDIA DCGM enterprise cluster feeds.",
        "Workload mitigation recommendations are rule-based advisory suggestions rather than executed orchestrations."
      ],
      learnings: [
        "Delivering a complete prototype under tight deadlines requires rigorous agreement on data schemas early in development.",
        "Operational dashboards are most effective when they present clear, actionable root causes alongside aggregate scores."
      ],
      statusNote:
        "Completed hackathon prototype and functional demo. Role: Team Lead."
    }
  },
  {
    slug: "healthcare-analytics",
    title: "Healthcare Analytics Platform",
    tagline: "Reproducible Risk Modeling & Explainable Decision Support",
    category: "Health Informatics · Responsible ML",
    categoryTrack: "Health Informatics · Responsible ML",
    status: "prototype",
    statusLabel: "Research prototype · Structured clinical data exploration",
    summary:
      "A research prototype exploring reproducible risk modeling, cross-validation protocols, and explainable decision support across public structured health datasets.",
    whyItMatters:
      "Machine learning models for healthcare must prioritize validation transparency, data provenance, and feature attribution over unvalidated diagnostic claims.",
    myContribution:
      "Implemented data preprocessing and cross-validation pipelines, structured SHAP feature contribution plots, developed the web exploration interface, and authored the methodology documentation.",
    evidence: [
      "Stratified cross-validation across structured biomarker datasets",
      "Model calibration and probability evaluation",
      "Feature-level risk attribution using SHAP summary plots",
      "Explicit documentation of dataset scope, limitations, and ethical boundaries"
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
        "Predictive healthcare demos frequently present optimistic metrics without proper validation or interpretability. Real health informatics workflows require transparent calibration, baseline comparisons, and clear disclosures of data boundaries.",
      context:
        "Developed as part of academic research exploration in health informatics, focusing on responsible machine learning practices and explainability in structured clinical data analysis.",
      role:
        "Lead Developer & Researcher. Built the data cleaning and preprocessing pipelines, implemented stratified cross-validation routines, trained baseline classifiers, and developed the web interface.",
      architecture: {
        overview:
          "An analytical pipeline connecting structured tabular health records to calibrated classifiers and an explainable decision-support dashboard.",
        highlights: [
          "Data Preprocessing: Handles missing value imputation and biomarker scaling strictly within cross-validation folds.",
          "Model Benchmarks: Evaluates Logistic Regression, Random Forest, and Gradient Boosted trees under stratified cross-validation.",
          "Calibration Assessment: Evaluates predicted probabilities to ensure reliable risk indicators.",
          "Explainability Layer: SHAP feature importance plots showing relative biomarker contributions.",
          "Exploration UI: Interactive scenario planner allowing inspection of risk score variations across biomarker profiles."
        ]
      },
      decisions: [
        {
          decision: "Responsible Framing as Decision Support",
          rationale:
            "Framed all model outputs as statistical risk indicators rather than medical diagnoses, including prominent disclaimers regarding clinical validation boundaries.",
          tradeoff:
            "Avoids sensational claims while maintaining scientific integrity."
        },
        {
          decision: "Strict In-Fold Preprocessing",
          rationale:
            "All scalers and imputers were fit strictly within cross-validation splits to prevent data leakage and overly optimistic evaluation.",
          tradeoff:
            "Slightly increased training runtime during pipeline evaluation."
        }
      ],
      methodology:
        "Evaluated on public benchmark tabular health datasets (chronic kidney disease, cardiovascular indicators) using ROC-AUC, PR-AUC, and stratified cross-validation.",
      evaluation: {
        metrics: [
          "Stratified 5-Fold ROC-AUC and PR-AUC",
          "Brier score probability calibration",
          "SHAP attribution consistency across biomarker subgroups"
        ],
        summary:
          "Demonstrated that calibrated models paired with feature attribution provide transparent insights into biomarker risk factors."
      },
      results: [
        "Constructed a clean, reproducible healthcare analytics repository with documented data schemas.",
        "Implemented transparent SHAP visualizations explaining individual risk scores based on physiological indicators.",
        "Established an ethical and methodological foundation for healthcare machine learning experiments."
      ],
      limitations: [
        "Trained and evaluated on public benchmark datasets; has not undergone clinical trial validation or electronic health record (EHR) integration.",
        "Not intended or approved for clinical diagnostic use."
      ],
      learnings: [
        "In healthcare applications, probability reliability and data leakage prevention are far more critical than raw accuracy numbers.",
        "Transparent error analysis and limitation disclosures build necessary trust with reviewers and practitioners."
      ],
      statusNote:
        "Research prototype exploring structured health data. Repository contains methodology documentation."
    }
  },
  {
    slug: "academic-analytics",
    title: "DIU Academic Analytics Platform",
    tagline: "Deterministic Credit-Weighted Analytics & Student Academic Planning",
    category: "Full-Stack Product Engineering",
    categoryTrack: "Full-Stack Product Engineering",
    status: "complete",
    statusLabel: "Completed Full-Stack Web Platform · Live Deployment",
    summary:
      "A cloud-backed academic planning platform with authenticated records, credit-weighted GPA analytics, goal-feasibility calculations, and interactive reporting.",
    whyItMatters:
      "Undergraduates often face difficulty planning multi-semester graduation trajectories. This platform provides deterministic, mathematically exact projections and scenario modeling without unnecessary algorithmic complexity.",
    myContribution:
      "Designed the full application architecture, implemented the credit-weighted calculation engine, structured state management with Zustand, and deployed the production web application.",
    evidence: [
      "Deterministic credit-hour weighted CGPA calculations",
      "Goal-feasibility scenario solver (calculating required GPA per remaining credit)",
      "User authentication and cloud record synchronization",
      "Responsive dashboard with Recharts visual trend analysis"
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
        "University student portals typically display past grades without providing forward-looking scenario modeling or degree planning calculators. Students frequently miscalculate credit-weighted impact when planning retakes or upcoming semester course loads.",
      context:
        "Built to address student academic planning needs at Daffodil International University, transforming manual grade calculations into a modern, cloud-synchronized web application.",
      role:
        "Sole Architect & Full-Stack Developer. Conceived the feature set, designed UI workflows, implemented calculation logic and state persistence, and deployed to production.",
      architecture: {
        overview:
          "A client-side rendered Single Page Application (SPA) backed by Firebase Authentication and Firestore data synchronization.",
        highlights: [
          "State Store (Zustand): Centralized store managing semester records, course credits, grade points, and target CGPA settings.",
          "Calculation Engine: Pure deterministic TypeScript functions computing cumulative GPA, earned credits, and required semester target averages.",
          "Visualization Layer: Interactive semester-by-semester GPA trends and credit distribution charts using Recharts.",
          "Cloud Sync: User-authenticated data persistence with offline cache support."
        ]
      },
      decisions: [
        {
          decision: "Deterministic Mathematical Formulation over Probabilistic Models",
          rationale:
            "Academic grading is strictly deterministic governed by credit-weighted arithmetic. Using machine learning would introduce unnecessary error into degree planning.",
          tradeoff:
            "Focuses purely on rule-based projection rather than predictive difficulty scoring."
        },
        {
          decision: "Zustand for State Management over Redux",
          rationale:
            "Zustand provided minimal boilerplate, clean TypeScript typing, and fast local persistence hooks without complex boilerplate.",
          tradeoff:
            "Slightly smaller ecosystem of pre-built devtool extensions."
        }
      ],
      methodology:
        "Validated against DIU university grading policies and credit weighting formulas across 12-semester degree plans.",
      evaluation: {
        metrics: [
          "Mathematical accuracy verified against official student transcripts",
          "Zero layout shift and instant calculation updates",
          "Responsive client-side interaction without perceptible lag"
        ],
        summary:
          "Live in production and used by peer undergraduate students for degree planning."
      },
      results: [
        "Deployed a reliable, production-ready platform with zero server runtime maintenance overhead.",
        "Empowered students to simulate scenarios (e.g., target GPA requirements over remaining semesters).",
        "Demonstrated solid full-stack engineering, clean UI architecture, and robust state management."
      ],
      limitations: [
        "Currently tailored to DIU standard 4.00 grading scales; multi-institution scale customization is a planned extension.",
        "Requires manual entry of past courses in the absence of direct university SIS API access."
      ],
      learnings: [
        "Good engineering is about choosing the simplest right tool for the job—not forcing machine learning where deterministic logic is exact.",
        "User experience in data-heavy tools relies on immediate visual feedback and zero input latency."
      ],
      statusNote:
        "Completed production platform with active deployment. Projections are deterministic calculations."
    }
  }
];

export const additionalProjects: AdditionalProject[] = [
  {
    title: "DIU GCPC Official Website",
    category: "Production Web Engineering",
    status: "Official website of DIU Girls’ Computer Programming Club",
    role: "Lead Developer & Maintainer",
    description:
      "Developed and deployed the official web platform for the DIU Girls’ Computer Programming Club, providing centralized access to club activities, events, initiatives, and organizational information.",
    contribution:
      "Designed and implemented the responsive interface, structured the public-facing content, integrated deployment workflows, and maintained the platform for a real university organization.",
    highlights: [
      "Officially deployed on university domain for DIU GCPC",
      "Dynamic event management with wing-specific activities and registration modals",
      "Interactive certificate verification desk with student ID verification",
      "Clean URL routing, HTTPS enforcement, and custom responsive design system"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Firebase", "Vite", "Apache"],
    demo: "https://gcpc.daffodilvarsity.edu.bd/",
    github: "https://github.com/anushka06onu/GCPC-DIU",
    institution: "https://daffodilvarsity.edu.bd/"
  },
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
  }
];
