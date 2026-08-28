import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../content/site";
import { ArrowRight, ExternalLink, FileDown, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] hero-ambient-glow -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-16 space-y-20 sm:space-y-28">
        
        {/* 1. HERO SECTION */}
        <section className="space-y-6 pt-4" aria-labelledby="hero-heading">
          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12">
            <div className="flex-1 space-y-4">
              <p className="text-xs font-semibold tracking-wider text-[var(--primary-accent)] uppercase">
                {siteConfig.hero.eyebrow}
              </p>

              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-main)] leading-[1.15]"
              >
                {siteConfig.hero.headline}
              </h1>

              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl font-normal">
                {siteConfig.hero.intro}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3 text-sm font-medium">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-md shadow-teal-500/20 transition-all"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
                >
                  <FileDown className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span>View CV</span>
                </a>

                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--primary-accent)] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[#0077B5] hover:border-[#0077B5] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Medium Clean Portrait */}
            <div className="shrink-0 w-36 sm:w-44">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface)] shadow-lg shadow-teal-500/5">
                <Image
                  src="/fateha-hossain.jpg"
                  alt="Fateha Hossain"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 144px, 176px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. SELECTED WORK (3 Clean Projects Only) */}
        <section id="work" className="space-y-8 scroll-mt-20" aria-labelledby="work-heading">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
            <h2
              id="work-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
            >
              Selected Work
            </h2>
            <Link
              href="/projects"
              className="text-sm font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1"
            >
              <span>All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-8">
            {/* Project 1: ResiliNet */}
            <article className="editorial-card p-6 sm:p-7 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="relative w-full md:w-1/2 h-52 sm:h-60 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface-subtle)] shrink-0">
                <Image
                  src="/projects/resilinet/overview.png?v=2"
                  alt="ResiliNet Interface"
                  fill
                  unoptimized
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                    ResiliNet
                  </h3>
                  <p className="mt-2 text-base text-[var(--text-muted)] leading-relaxed">
                    An explainable SDN research prototype combining congestion-risk forecasting, policy-aware routing and reproducible Mininet experiments.
                  </p>
                </div>

                <div className="text-sm text-[var(--text-main)] font-medium">
                  Python · LightGBM · Mininet · FastAPI
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-medium">
                  <Link
                    href="/projects/resilinet"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-sm transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://anushka06onu.github.io/ResiliNet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/anushka06onu/ResiliNet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Project 2: ComputePulse */}
            <article className="editorial-card p-6 sm:p-7 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="relative w-full md:w-1/2 h-52 sm:h-60 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface-subtle)] shrink-0">
                <Image
                  src="/projects/computepulse/dashboard.png?v=2"
                  alt="ComputePulse Dashboard"
                  fill
                  unoptimized
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                    ComputePulse
                  </h3>
                  <p className="mt-2 text-base text-[var(--text-muted)] leading-relaxed">
                    A hackathon prototype for GPU-cluster health monitoring, explainable risk scoring and operational alerting using simulated telemetry.
                  </p>
                </div>

                <div className="text-sm text-[var(--text-main)] font-medium">
                  FastAPI · LightGBM · React · SHAP
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-medium">
                  <Link
                    href="/projects/computepulse"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-sm transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://compute-pulse-live-demo-2026.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/anushka06onu/ComputePulse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Project 3: Healthcare / Thesis Work */}
            <article className="editorial-card p-6 sm:p-7 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="relative w-full md:w-1/2 h-52 sm:h-60 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface-subtle)] shrink-0">
                <Image
                  src="/projects/healthcare-analytics/overview.png?v=2"
                  alt="Vision Foundation Models for Dental Radiographs"
                  fill
                  unoptimized
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                    Vision Foundation Models for Dental Radiographs
                  </h3>
                  <p className="mt-2 text-base text-[var(--text-muted)] leading-relaxed">
                    Ongoing undergraduate research evaluating parameter-efficient adaptation of vision foundation models for medical-image classification.
                  </p>
                </div>

                <div className="text-sm text-[var(--text-main)] font-medium">
                  PyTorch · DINOv2 · PEFT · Grad-CAM
                </div>

                <div className="pt-2 flex items-center gap-4 text-sm font-medium">
                  <Link
                    href="/research"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-sm transition-all"
                  >
                    <span>View Research</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 3. RESEARCH (Clean Two-Column Snapshot) */}
        <section id="research" className="space-y-6 scroll-mt-20" aria-labelledby="research-heading">
          <div className="border-b border-[var(--border-color)] pb-3">
            <h2
              id="research-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
            >
              Research
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left side overview */}
            <div className="space-y-4">
              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                My current work focuses on health informatics and trustworthy medical AI. I am investigating parameter-efficient adaptation of vision foundation models for dental radiographs and contributing to research on explainable, uncertainty-aware analysis of panoramic images.
              </p>
              <div className="pt-2">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 text-sm font-semibold shadow-sm transition-all"
                >
                  <span>View Research &amp; Publications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right side snapshot list */}
            <div className="space-y-4 border-l border-[var(--border-color)] pl-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
                  Undergraduate Thesis
                </span>
                <p className="text-base font-semibold text-[var(--text-main)]">
                  Vision foundation models for dental radiograph classification
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-[var(--secondary-accent)] uppercase tracking-wider">
                  Research Assistant Study
                </span>
                <p className="text-base font-semibold text-[var(--text-main)]">
                  Pediatric morphology alignment in panoramic radiographs
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                  Earlier Research
                </span>
                <p className="text-base font-semibold text-[var(--text-main)]">
                  Bangla NLP and low-resource language modelling
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. EXPERIENCE (2 Compact Entries) */}
        <section id="experience" className="space-y-6 scroll-mt-20" aria-labelledby="exp-heading">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
            <h2
              id="exp-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
            >
              Experience
            </h2>
            <Link
              href="/about"
              className="text-sm font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1"
            >
              <span>More About Me</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="editorial-card p-6 space-y-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold text-[var(--text-main)]">
                  Research Assistant
                </h3>
                <span className="text-xs text-[var(--text-muted)] font-medium">
                  2026 – Present
                </span>
              </div>
              <p className="text-sm font-medium text-[var(--primary-accent)]">
                Health Informatics Research Lab
              </p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed pt-1">
                Contributing to healthcare-oriented machine-learning experiments, evaluation and manuscript preparation.
              </p>
            </div>

            <div className="editorial-card p-6 space-y-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold text-[var(--text-main)]">
                  Backend Developer Intern
                </h3>
                <span className="text-xs text-[var(--text-muted)] font-medium">
                  2026 – Present
                </span>
              </div>
              <p className="text-sm font-medium text-[var(--primary-accent)]">
                Software Engineering Company
              </p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed pt-1">
                Developing backend features and database-backed APIs across Spring Boot and Laravel projects.
              </p>
            </div>
          </div>
        </section>

        {/* 5. CONTACT */}
        <section id="contact" className="editorial-card p-8 sm:p-10 space-y-4" aria-labelledby="contact-heading">
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
          >
            Let’s connect
          </h2>
          <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-xl">
            I’m open to graduate-study opportunities, research collaboration and conversations about health informatics and software systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-sm font-medium">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[#0077B5] transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-all"
            >
              <FileDown className="w-4 h-4 text-[var(--primary-accent)]" />
              <span>View CV</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
