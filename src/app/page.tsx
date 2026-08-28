import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../content/site";
import { featuredProjects } from "../content/projects";
import { ArrowRight, ExternalLink, FileDown, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export default function HomePage() {
  const resilinet = featuredProjects.find((p) => p.slug === "resilinet")!;
  const computepulse = featuredProjects.find((p) => p.slug === "computepulse")!;

  return (
    <div className="relative overflow-hidden">
      {/* Layered Radiant Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] hero-ambient-glow -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-16 space-y-20 sm:space-y-28">
        
        {/* 1. HERO SECTION (Asymmetric Split & Strong Hero) */}
        <section className="pt-2 sm:pt-6" aria-labelledby="hero-heading">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-14">
            
            {/* Left Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[var(--border-color)] bg-[var(--surface-subtle)] text-xs font-mono font-medium text-[var(--primary-accent)] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>HEALTH INFORMATICS / INTELLIGENT SYSTEMS</span>
              </div>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-main)] leading-[1.12]"
              >
                I design <span className="text-gradient-cyan">trustworthy intelligent systems</span> for healthcare and critical infrastructure.
              </h1>

              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl font-normal">
                {siteConfig.hero.intro}
              </p>

              {/* Action Buttons & Profiles */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-sm font-medium">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all"
                >
                  <span>Selected Work</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
                >
                  <FileDown className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span>View CV</span>
                </a>

                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--primary-accent)] transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[#0077B5] hover:border-[#0077B5] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual: Large 280-320px Portrait */}
            <div className="shrink-0 w-64 sm:w-72 lg:w-80">
              <div className="relative p-1.5 rounded-3xl bg-gradient-to-b from-teal-500/40 via-cyan-500/20 to-blue-500/10 shadow-2xl shadow-teal-500/10">
                <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden border border-[var(--border-color)] bg-[var(--surface)]">
                  <Image
                    src="/fateha-hossain.jpg"
                    alt="Fateha Hossain"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  />
                  {/* Subtle technical overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070B11]/90 via-[#070B11]/40 to-transparent p-4 text-left">
                    <p className="text-xs font-mono font-semibold text-[var(--primary-accent)] uppercase">
                      Research Assistant
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      Dhaka, Bangladesh · DIU CSE
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. SELECTED WORK (Bento-Style Layout) */}
        <section id="work" className="space-y-8 scroll-mt-20" aria-labelledby="work-heading">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
            <div>
              <span className="text-xs font-mono font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
                FLAGSHIP IMPLEMENTATIONS
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
              className="text-sm font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1"
            >
              <span>All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {/* Bento Card 1: ResiliNet (Teal Accent & Shadow) */}
            <article className="editorial-panel shadow-resilinet p-6 sm:p-7 flex flex-col justify-between gap-6 border-teal-500/20 bg-gradient-to-b from-[var(--surface)] to-[var(--surface-subtle)]">
              <div className="space-y-4">
                {/* Simulated Browser Frame */}
                <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[#0A1017] shadow-inner">
                  <div className="browser-header">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] font-mono text-slate-400">resilinet-telemetry.local</span>
                  </div>
                  <div className="relative w-full h-48 sm:h-52">
                    <Image
                      src="/projects/resilinet/overview.png?v=2"
                      alt="ResiliNet Topology and Simulation Interface"
                      fill
                      unoptimized
                      className="object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                    ResiliNet
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                    An explainable SDN research prototype combining congestion-risk forecasting, policy-aware routing and reproducible Mininet experiments.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-4">
                <div className="text-xs font-mono font-medium text-[var(--primary-accent)]">
                  Python · LightGBM · Mininet · FastAPI
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                  <Link
                    href={resilinet.links.caseStudy}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-sm transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  {resilinet.links.demo && (
                    <a
                      href={resilinet.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {resilinet.links.github && (
                    <a
                      href={resilinet.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </article>

            {/* Bento Card 2: ComputePulse (Blue-Violet Accent & Shadow) */}
            <article className="editorial-panel shadow-computepulse p-6 sm:p-7 flex flex-col justify-between gap-6 border-blue-500/20 bg-gradient-to-b from-[var(--surface)] to-[var(--surface-subtle)]">
              <div className="space-y-4">
                {/* Simulated Browser Frame */}
                <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[#0A1017] shadow-inner">
                  <div className="browser-header">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] font-mono text-slate-400">computepulse-telemetry.local</span>
                  </div>
                  <div className="relative w-full h-48 sm:h-52">
                    <Image
                      src="/projects/computepulse/dashboard.png?v=2"
                      alt="ComputePulse GPU Dashboard"
                      fill
                      unoptimized
                      className="object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                    ComputePulse
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                    A hackathon prototype for GPU-cluster health monitoring, explainable risk scoring and operational alerting using simulated telemetry.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-4">
                <div className="text-xs font-mono font-medium text-[var(--blue-accent)]">
                  FastAPI · LightGBM · React · SHAP
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                  <Link
                    href={computepulse.links.caseStudy}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-sm transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  {computepulse.links.demo && (
                    <a
                      href={computepulse.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {computepulse.links.github && (
                    <a
                      href={computepulse.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </article>

            {/* Bento Card 3: Full-Width Healthcare & Thesis Research Editorial Card */}
            <article className="lg:col-span-2 editorial-panel shadow-healthcare p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 border-sky-500/20 bg-gradient-to-br from-[var(--surface)] via-[var(--surface-subtle)] to-[var(--surface)]">
              <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[#070B10] shadow-md shrink-0">
                <Image
                  src="/projects/thesis-pipeline.svg"
                  alt="Research Pipeline Architecture Illustration"
                  width={1000}
                  height={480}
                  unoptimized
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              <div className="space-y-4 flex-1">
                <span className="text-xs font-mono font-semibold text-[var(--secondary-accent)] uppercase tracking-wider">
                  UNDERGRADUATE THESIS · HEALTH INFORMATICS
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
                  Vision Foundation Models for Dental Radiographs
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  Ongoing undergraduate research evaluating parameter-efficient adaptation (LoRA, BitFit, VPT) of vision foundation models for medical-image classification on the DentIRO dataset with Grad-CAM interpretability.
                </p>

                <div className="text-xs font-mono font-medium text-[var(--secondary-accent)]">
                  PyTorch · DINOv2 · PEFT · Grad-CAM
                </div>

                <div className="pt-2 flex items-center gap-4 text-sm font-medium">
                  <Link
                    href="/research"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-md shadow-teal-500/15 transition-all"
                  >
                    <span>View Research &amp; Publications</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* 3. RESEARCH (Vertical Timeline Layout) */}
        <section id="research" className="space-y-8 scroll-mt-20" aria-labelledby="research-heading">
          <div className="border-b border-[var(--border-color)] pb-3">
            <span className="text-xs font-mono font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
              INVESTIGATION &amp; METHODOLOGY
            </span>
            <h2
              id="research-heading"
              className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
            >
              Research
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left side overview */}
            <div className="space-y-5">
              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
                My current work focuses on health informatics and trustworthy medical AI. I am investigating parameter-efficient adaptation of vision foundation models for dental radiographs and contributing to research on explainable, uncertainty-aware analysis of panoramic images.
              </p>

              <div className="pt-2">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] text-sm font-semibold transition-all shadow-sm"
                >
                  <span>All Research &amp; Publications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right side vertical timeline */}
            <div className="relative pl-6 space-y-6 border-l-2 border-teal-500/30">
              <div className="relative space-y-1">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-teal-400 ring-4 ring-[#070B11]" />
                <span className="text-xs font-mono font-semibold text-[var(--primary-accent)]">
                  2026 · JOURNAL MANUSCRIPT (IN PREPARATION)
                </span>
                <h4 className="text-base font-bold text-[var(--text-main)]">
                  PMAM for Pediatric Panoramic Radiographs
                </h4>
                <p className="text-xs text-[var(--text-muted)]">
                  Research Assistant · Health Informatics Research Lab
                </p>
              </div>

              <div className="relative space-y-1">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-[#070B11]" />
                <span className="text-xs font-mono font-semibold text-[var(--secondary-accent)]">
                  2026 · UNDERGRADUATE THESIS (ONGOING)
                </span>
                <h4 className="text-base font-bold text-[var(--text-main)]">
                  Vision Foundation Models for Dental Radiographs
                </h4>
                <p className="text-xs text-[var(--text-muted)]">
                  Lead Researcher · Benchmarking DINOv2 / BiomedCLIP / MedSAM with PEFT
                </p>
              </div>

              <div className="relative space-y-1">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-500 ring-4 ring-[#070B11]" />
                <span className="text-xs font-mono font-semibold text-[var(--text-muted)]">
                  2026 · CONFERENCE MANUSCRIPTS (UNDER REVIEW)
                </span>
                <h4 className="text-base font-bold text-[var(--text-main)]">
                  Health Informatics &amp; Low-Resource Bangla NLP
                </h4>
                <p className="text-xs text-[var(--text-muted)]">
                  Co-Author · 1 Hematological ML + 3 NLP translation &amp; dialect studies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. EXPERIENCE (Compact Horizontal Timeline) */}
        <section id="experience" className="space-y-8 scroll-mt-20" aria-labelledby="exp-heading">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
            <div>
              <span className="text-xs font-mono font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
                TRACK RECORD
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
              className="text-sm font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1"
            >
              <span>More About Me</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="editorial-card p-6 sm:p-7 space-y-2 border-l-4 border-l-teal-500">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold text-[var(--text-main)]">
                  Research Assistant
                </h3>
                <span className="text-xs font-mono text-[var(--text-muted)] font-medium">
                  2026 — Present
                </span>
              </div>
              <p className="text-sm font-medium text-[var(--primary-accent)]">
                Health Informatics Research Lab
              </p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed pt-1">
                Contributing to healthcare-oriented machine-learning experiments, pediatric morphology alignment, and manuscript preparation.
              </p>
            </div>

            <div className="editorial-card p-6 sm:p-7 space-y-2 border-l-4 border-l-blue-500">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold text-[var(--text-main)]">
                  Backend Developer Intern
                </h3>
                <span className="text-xs font-mono text-[var(--text-muted)] font-medium">
                  2026 — Present
                </span>
              </div>
              <p className="text-sm font-medium text-[var(--blue-accent)]">
                Software Engineering Company
              </p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed pt-1">
                Building database-backed APIs and backend features across Spring Boot, Laravel, and FastAPI environments.
              </p>
            </div>
          </div>
        </section>

        {/* 5. CONTACT (Full-Width Styled Closing Band) */}
        <section
          id="contact"
          className="rounded-3xl p-8 sm:p-12 border border-teal-500/25 bg-gradient-to-br from-[#0D141D] via-[#0A1A28] to-[#070B11] shadow-xl shadow-teal-500/5 space-y-6"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
              LET’S CONNECT
            </span>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]"
            >
              Interested in collaboration or research?
            </h2>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              I’m open to graduate-study opportunities, research collaboration and conversations about health informatics and software systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-sm font-medium">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-md shadow-teal-500/20 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email ({siteConfig.links.email})</span>
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[#0077B5] transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-all"
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
