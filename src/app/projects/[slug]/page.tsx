import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { featuredProjects } from "../../../content/projects";
import { siteConfig } from "../../../content/site";
import { GithubIcon } from "../../../components/Icons";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  FileCode2,
  Scale
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return featuredProjects.map((p) => ({
    slug: p.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Technical Case Study | Fateha Hossain`,
      description: project.summary,
      images: [
        {
          url: `/projects/${project.slug}/${
            project.slug === "computepulse" || project.slug === "academic-analytics"
              ? "dashboard.svg"
              : "overview.svg"
          }`
        }
      ]
    }
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const study = project.caseStudy;
  const diagramPath = `/projects/${project.slug}/${
    project.slug === "computepulse" || project.slug === "academic-analytics"
      ? "dashboard.svg"
      : "overview.svg"
  }`;

  const diagramCaption =
    project.slug === "resilinet"
      ? "Figure 1: ResiliNet SDN emulation topology, rolling telemetry ingestion, LightGBM risk classifier, and TreeSHAP attribution pipeline."
      : project.slug === "computepulse"
      ? "Figure 1: ComputePulse multi-node telemetry stream, LightGBM fault risk scoring, and SHAP root-cause feature attribution."
      : project.slug === "healthcare-analytics"
      ? "Figure 1: Healthcare Analytics data processing, in-fold cross-validation pipeline, and SHAP biomarker attribution breakdown."
      : "Figure 1: DIU Academic Analytics deterministic credit-weighted projection engine and multi-semester scenario planner.";

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* Top Back Navigation */}
      <div>
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Selected Work</span>
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-3 border-b border-[var(--border-color)] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="mono-tag text-xs font-semibold text-[var(--primary-accent)]">
            {project.categoryTrack}
          </span>
          <span className="mono-tag text-xs px-2.5 py-0.5 rounded bg-[var(--surface-subtle)] border border-[var(--border-color)] text-[var(--text-muted)]">
            {project.statusLabel}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-main)]">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg font-medium text-[var(--secondary-accent)]">
          {project.tagline}
        </p>

        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          {project.summary}
        </p>

        {/* Action Links Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[var(--primary-accent)] text-white font-medium hover:opacity-90 transition-opacity"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Source Repository</span>
            </a>
          )}

          {project.links.methodology && (
            <a
              href={project.links.methodology}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--secondary-accent)] hover:border-[var(--secondary-accent)] transition-colors"
            >
              <span>Methodology Document</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </header>

      {/* Main Architecture Diagram */}
      <section className="space-y-2">
        <h2 className="mono-tag text-xs text-[var(--text-muted)] font-semibold">
          Architecture &amp; System Overview
        </h2>
        <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface)] p-2 shadow-sm">
          <Image
            src={diagramPath}
            alt={`${project.title} Architecture Diagram`}
            fill
            priority
            className="object-contain p-3"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
        <p className="text-xs font-mono text-[var(--text-muted)] text-center">
          {diagramCaption}
        </p>
      </section>

      {/* Structured Sections */}
      <div className="space-y-8 text-[var(--text-main)]">
        {/* 1. Problem & Context */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[var(--primary-accent)]" />
            <span>Problem &amp; Context</span>
          </h2>
          <div className="space-y-2 text-sm text-[var(--text-muted)] leading-relaxed">
            <p>{study.problem}</p>
            <p>{study.context}</p>
          </div>
        </section>

        {/* 2. My Role & Contribution */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[var(--primary-accent)]" />
            <span>Role &amp; Contributions</span>
          </h2>
          <div className="editorial-card p-5 bg-[var(--surface-subtle)] space-y-3">
            <p className="text-sm text-[var(--text-main)] leading-relaxed">
              {study.role}
            </p>
            <div className="pt-2 border-t border-[var(--border-color)]">
              <span className="mono-tag text-xs font-semibold text-[var(--primary-accent)] block mb-1">
                Verified Evidence Points:
              </span>
              <ul className="space-y-1 text-xs text-[var(--text-muted)]">
                {project.evidence.map((ev, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary-accent)] shrink-0 mt-0.5" />
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. System Architecture & Decisions */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[var(--primary-accent)]" />
            <span>Architecture &amp; Engineering Decisions</span>
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            {study.architecture.overview}
          </p>

          <ul className="space-y-1.5 pt-1">
            {study.architecture.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-xs sm:text-sm text-[var(--text-muted)] flex items-start gap-2"
              >
                <span className="font-mono text-[var(--primary-accent)] font-bold">{idx + 1}.</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-2 pt-3">
            <h3 className="mono-tag text-xs font-semibold text-[var(--secondary-accent)]">
              Decision Log &amp; Trade-offs
            </h3>
            <div className="space-y-2">
              {study.decisions.map((dec, i) => (
                <div
                  key={i}
                  className="editorial-card p-4 space-y-1.5 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-2 text-[var(--primary-accent)] font-mono font-semibold">
                    <Scale className="w-3.5 h-3.5" />
                    <span>{dec.decision}</span>
                  </div>
                  <p className="text-[var(--text-main)]">
                    <strong className="font-mono text-xs text-[var(--text-muted)]">Rationale: </strong>
                    {dec.rationale}
                  </p>
                  <p className="text-[var(--text-muted)] pt-1 border-t border-[var(--border-subtle)]">
                    <strong className="font-mono text-xs text-[var(--secondary-accent)]">Trade-off: </strong>
                    {dec.tradeoff}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Methodology & Evaluation */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
            <FileCode2 className="w-4 h-4 text-[var(--primary-accent)]" />
            <span>Experimental Methodology &amp; Evaluation</span>
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            {study.methodology}
          </p>

          <div className="editorial-card p-4 space-y-2.5">
            <h3 className="mono-tag text-xs font-semibold text-[var(--text-main)]">
              Evaluation Metrics &amp; Targets
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {study.evaluation.metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-2 rounded bg-[var(--surface-subtle)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-muted)] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-accent)]" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[var(--text-muted)] pt-1">
              {study.evaluation.summary}
            </p>
          </div>
        </section>

        {/* 5. Implemented and Verified Capabilities */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Implemented and Verified Capabilities</span>
          </h2>
          <ul className="space-y-1.5">
            {study.results.map((res, i) => (
              <li
                key={i}
                className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-xs sm:text-sm text-[var(--text-main)] flex items-start gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Limitations & Boundaries */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>Limitations &amp; Scope Constraints</span>
          </h2>
          <div className="p-4 rounded-lg border border-amber-500/20 bg-amber-500/5 space-y-2">
            <p className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
              Scientific Boundaries &amp; Future Scope:
            </p>
            <ul className="space-y-1 text-xs sm:text-sm text-[var(--text-muted)]">
              {study.limitations.map((lim, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. Key Learnings */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[var(--primary-accent)]" />
            <span>Key Learnings</span>
          </h2>
          <div className="space-y-2">
            {study.learnings.map((learn, i) => (
              <div
                key={i}
                className="editorial-card p-3.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed"
              >
                <span className="font-mono text-xs font-semibold text-[var(--primary-accent)] block mb-0.5">
                  Insight {i + 1}:
                </span>
                {learn}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <div className="pt-6 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[var(--primary-accent)] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Selected Work</span>
        </Link>
        <Link
          href="/research"
          className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text-main)]"
        >
          <span>Explore Research Roadmap</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
