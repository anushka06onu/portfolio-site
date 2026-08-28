import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../content/site";
import { featuredProjects } from "../content/projects";
import { researchDirection, researchOutputs, thesisDetails } from "../content/research";
import CoreToolkit from "../components/CoreToolkit";
import ContactSection from "../components/ContactSection";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import {
  ArrowDown,
  ArrowRight,
  FileDown,
  ExternalLink,
  Building2,
  Calendar,
  Activity,
  ShieldCheck,
  Server,
  FileText
} from "lucide-react";

export default function HomePage() {
  const resilinet = featuredProjects.find((p) => p.slug === "resilinet")!;
  const computepulse = featuredProjects.find((p) => p.slug === "computepulse")!;
  const primaryExperience = siteConfig.experience.slice(0, 2);

  const pillars = [
    {
      icon: <Activity className="w-4 h-4 text-teal-500" />,
      title: "Health Informatics",
      desc: "Medical imaging and clinical-data research"
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-cyan-500" />,
      title: "Trustworthy ML",
      desc: "Explainability and reproducible evaluation"
    },
    {
      icon: <Server className="w-4 h-4 text-blue-500" />,
      title: "Backend Systems",
      desc: "APIs, data pipelines and deployed applications"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Calm ambient glow behind hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] hero-ambient-glow -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-12 space-y-16 sm:space-y-20">
        {/* 1. HERO SECTION */}
        <section className="space-y-6 pt-2 sm:pt-4" aria-labelledby="hero-heading">
          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-10">
            <div className="flex-1 space-y-4">
              {/* Eyebrow */}
              <p className="text-xs font-semibold tracking-wider text-[var(--primary-accent)] uppercase font-mono">
                HEALTH INFORMATICS · INTELLIGENT SYSTEMS · BACKEND ENGINEERING
              </p>

              {/* Main Headline */}
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-main)] leading-[1.15]"
              >
                I build <span className="text-gradient-cyan">reliable intelligent systems</span> for healthcare and complex infrastructure.
              </h1>

              {/* Introduction */}
              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl font-normal">
                I’m Fateha Hossain, a final-year CSE student and Research Assistant working in health informatics, explainable machine learning and backend engineering.
              </p>

              {/* Action Buttons & Social Links */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-sm font-medium">
                <a
                  href="#work"
                  className="btn-gradient inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-950 font-semibold shadow-md shadow-teal-500/20"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)]"
                  aria-label="View Curriculum Vitae"
                >
                  <FileDown className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span>View CV</span>
                </a>

                <div className="flex items-center gap-2 pl-1">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)]"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)]"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Portrait with Radiant Ring */}
            <div className="shrink-0 w-40 sm:w-48 lg:w-52">
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-teal-500/30 via-cyan-500/20 to-blue-500/30 shadow-xl shadow-teal-500/10">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface)]">
                  <Image
                    src="/fateha-hossain.jpg"
                    alt="Portrait of Fateha Hossain"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 160px, 208px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Three Specialization Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[var(--border-subtle)]">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="editorial-card p-4 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-[var(--surface-subtle)] border border-[var(--border-subtle)]">
                    {pillar.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-main)]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-5">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. SELECTED WORK (BENTO GRID) */}
        <section id="work" className="space-y-6 scroll-mt-20" aria-labelledby="work-heading">
          <div className="border-b border-[var(--border-color)] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider font-mono">
                01 / Selected Work
              </span>
              <h2
                id="work-heading"
                className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
              >
                Selected Work
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1 font-mono"
            >
              <span>View all projects ({featuredProjects.length + 3})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* 1. ResiliNet */}
            <article className="editorial-card editorial-card-accent p-5 sm:p-6 flex flex-col justify-between gap-5">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
                  <span className="text-xs font-semibold text-[var(--primary-accent)] tracking-wide font-mono">
                    NETWORK INTELLIGENCE
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full font-mono font-medium bg-[var(--surface-subtle)] text-[var(--text-muted)] border border-[var(--border-color)]">
                    Research prototype
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-main)]">
                    <Link href="/projects/resilinet" className="hover:text-[var(--primary-accent)] transition-colors">
                      ResiliNet
                    </Link>
                  </h3>
                </div>

                <div className="relative w-full h-44 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface-subtle)] shadow-inner">
                  <Image
                    src="/projects/resilinet/overview.png?v=3"
                    alt="ResiliNet Interface Screenshot"
                    fill
                    unoptimized
                    className="object-cover object-top hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>

                <p className="text-sm leading-6 text-[var(--text-muted)]">
                  An explainable SDN research prototype combining congestion-risk forecasting, policy-aware routing and reproducible Mininet experiments.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-color)] space-y-3">
                <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                  <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">Python</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">LightGBM</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">Mininet</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">FastAPI</span>
                </div>

                <div className="flex items-center gap-2 pt-0.5 text-xs font-medium">
                  <Link
                    href="/projects/resilinet"
                    className="btn-gradient inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-slate-950 font-semibold shadow-sm"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {resilinet.links.demo && (
                    <a
                      href={resilinet.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {resilinet.links.github && (
                    <a
                      href={resilinet.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)]"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </article>

            {/* 2. ComputePulse */}
            <article className="editorial-card editorial-card-accent p-5 sm:p-6 flex flex-col justify-between gap-5">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
                  <span className="text-xs font-semibold text-[var(--secondary-accent)] tracking-wide font-mono">
                    PREDICTIVE INFRASTRUCTURE
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full font-mono font-medium bg-[var(--surface-subtle)] text-[var(--text-muted)] border border-[var(--border-color)]">
                    Hackathon prototype
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-main)]">
                    <Link href="/projects/computepulse" className="hover:text-[var(--primary-accent)] transition-colors">
                      ComputePulse
                    </Link>
                  </h3>
                </div>

                <div className="relative w-full h-44 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface-subtle)] shadow-inner">
                  <Image
                    src="/projects/computepulse/dashboard.png?v=3"
                    alt="ComputePulse Dashboard Screenshot"
                    fill
                    unoptimized
                    className="object-cover object-top hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>

                <p className="text-sm leading-6 text-[var(--text-muted)]">
                  A GPU-cluster monitoring prototype combining simulated telemetry, explainable risk scoring and operational alerts.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-color)] space-y-3">
                <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                  <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">FastAPI</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">LightGBM</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">React</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">SHAP</span>
                </div>

                <div className="flex items-center gap-2 pt-0.5 text-xs font-medium">
                  <Link
                    href="/projects/computepulse"
                    className="btn-gradient inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-slate-950 font-semibold shadow-sm"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {computepulse.links.demo && (
                    <a
                      href={computepulse.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {computepulse.links.github && (
                    <a
                      href={computepulse.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)]"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </article>

            {/* 3. Dental VFM Thesis & Research (Full Width) */}
            <article className="md:col-span-2 editorial-card p-5 sm:p-6 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
                  <span className="text-xs font-semibold text-[var(--primary-accent)] tracking-wide font-mono">
                    MEDICAL IMAGE ANALYSIS
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full font-mono font-medium bg-[var(--surface-subtle)] text-[var(--text-muted)] border border-[var(--border-color)]">
                    Undergraduate thesis
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)]">
                    <Link href="/research" className="hover:text-[var(--primary-accent)] transition-colors">
                      Vision Foundation Models for Dental Radiographs
                    </Link>
                  </h3>
                </div>

                <p className="text-sm leading-6 text-[var(--text-muted)]">
                  Ongoing research evaluating parameter-efficient adaptation of vision foundation models (DINOv2, BiomedCLIP, MedSAM) for medical-image classification across DentIRO radiograph datasets.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                  <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">PyTorch</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">DINOv2</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">PEFT (LoRA/BitFit)</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">Grad-CAM</span>
                </div>

                <Link
                  href="/research"
                  className="btn-gradient inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-slate-950 font-semibold text-xs shadow-sm self-start sm:self-auto"
                >
                  <span>View Research Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/projects"
              className="text-sm font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1.5"
            >
              <span>View all engineering projects (GCPC, Study Hub, Mail Server, Academic Analytics)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 3. RESEARCH SNAPSHOT (SPLIT PANEL) */}
        <section id="research" className="space-y-6 scroll-mt-20" aria-labelledby="research-heading">
          <div className="border-b border-[var(--border-color)] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider font-mono">
                02 / Research Snapshot
              </span>
              <h2
                id="research-heading"
                className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
              >
                Research Direction
              </h2>
            </div>
            <Link
              href="/research"
              className="text-xs font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1 font-mono"
            >
              <span>All 6 Research Manuscripts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Left Narrative */}
            <div className="lg:col-span-2 editorial-card p-5 sm:p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[var(--primary-accent)] font-mono text-xs font-semibold uppercase">
                  <Activity className="w-4 h-4" />
                  <span>Medical AI &amp; Vision Models</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)]">
                  Trustworthy Medical AI
                </h3>
                <p className="text-sm leading-6 text-[var(--text-muted)]">
                  My current work focuses on trustworthy medical AI, particularly parameter-efficient vision models and explainable analysis of panoramic radiographs. My earlier research includes low-resource Bangla NLP.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <Link
                  href="/research"
                  className="btn-outline w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-xs text-[var(--text-main)] font-semibold"
                >
                  <span>View All Research →</span>
                </Link>
              </div>
            </div>

            {/* Right 3 Compact Research Entries */}
            <div className="lg:col-span-3 space-y-3">
              {/* 1. PMAM */}
              <div className="editorial-card p-4 sm:p-4.5 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-[var(--text-main)]">
                    PMAM Journal Study
                  </h4>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--primary-accent)] border border-[var(--border-subtle)]">
                    Manuscript in preparation
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-5">
                  Pediatric morphology alignment module for explainable, uncertainty-aware multi-disease detection in panoramic radiographs.
                </p>
              </div>

              {/* 2. Thesis */}
              <div className="editorial-card p-4 sm:p-4.5 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-[var(--text-main)]">
                    Undergraduate Thesis
                  </h4>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--secondary-accent)] border border-[var(--border-subtle)]">
                    Ongoing
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-5">
                  Parameter-efficient adaptation (LoRA, BitFit, VPT) of Vision Foundation Models for dental radiograph classification.
                </p>
              </div>

              {/* 3. Hematological Classification */}
              <div className="editorial-card p-4 sm:p-4.5 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-[var(--text-main)]">
                    Health Informatics Conference Study
                  </h4>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                    Under review
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-5">
                  Benchmarked and explainable machine learning approach to tri-class hematological classification for compensated microcytosis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. EXPERIENCE (2 COMPACT ROLES) */}
        <section id="experience" className="space-y-6 scroll-mt-20" aria-labelledby="exp-heading">
          <div className="border-b border-[var(--border-color)] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider font-mono">
                03 / Experience
              </span>
              <h2
                id="exp-heading"
                className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
              >
                Experience
              </h2>
            </div>
            <Link
              href="/about"
              className="text-xs font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1 font-mono"
            >
              <span>More Experience &amp; Bio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1. Research Assistant */}
            <div className="editorial-card p-5 space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
                <div>
                  <h4 className="text-base font-bold text-[var(--text-main)]">
                    Research Assistant
                  </h4>
                  <p className="text-xs font-medium text-[var(--primary-accent)] flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Health Informatics Research Lab</span>
                  </p>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>2026 – Present</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-6">
                Contributing to healthcare-oriented machine-learning experiments, reproducible evaluation, and research manuscript preparation.
              </p>
            </div>

            {/* 2. Backend Developer Intern */}
            <div className="editorial-card p-5 space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
                <div>
                  <h4 className="text-base font-bold text-[var(--text-main)]">
                    Backend Developer Intern
                  </h4>
                  <p className="text-xs font-medium text-[var(--primary-accent)] flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>CSE-Tech</span>
                  </p>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>2026 – Present</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-6">
                Developing backend features and database-backed APIs across Spring Boot, Laravel, and FastAPI applications.
              </p>
            </div>
          </div>
        </section>

        {/* 5. CORE TOOLKIT */}
        <CoreToolkit />

        {/* 6. CONTACT SECTION */}
        <ContactSection />
      </div>
    </div>
  );
}
