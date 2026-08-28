import Link from "next/link";
import { Metadata } from "next";
import { researchDirection, researchOutputs } from "../../content/research";
import { siteConfig } from "../../content/site";
import ResearchCard from "../../components/ResearchCard";
import {
  ArrowLeft,
  BookOpen,
  Microscope,
  Cpu,
  FileText,
  FileDown,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research Direction & Outputs",
  description:
    "Health informatics research, trustworthy machine learning, explainable AI, and medical-image classification work by Fateha Hossain."
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-14 space-y-12">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-4 border-b border-[var(--border-color)] pb-8">
        <span className="mono-tag text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
          Research Direction &amp; Vision
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-main)]">
          Health Informatics &amp; Trustworthy Systems
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
          {researchDirection.overview}
        </p>
      </header>

      {/* Research Pillars */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
          Core Research Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {researchDirection.corePillars.map((pillar, idx) => (
            <div key={idx} className="editorial-card p-6 space-y-3">
              <div className="w-8 h-8 rounded-md bg-[var(--primary-accent-subtle)] text-[var(--primary-accent)] flex items-center justify-center font-mono font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-[var(--text-main)]">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Outputs */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
            Manuscripts &amp; Project Outputs
          </h2>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            Statuses follow strict academic guidelines
          </span>
        </div>

        <div className="space-y-4">
          {researchOutputs.map((output, idx) => (
            <ResearchCard key={idx} output={output} />
          ))}
        </div>
      </section>

      {/* Research Journey Context */}
      <section className="editorial-card p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-[var(--text-main)] flex items-center gap-2">
          <Microscope className="w-5 h-5 text-[var(--primary-accent)]" />
          <span>Research Evolution: From Bangla NLP to Health Informatics</span>
        </h3>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          My experimental foundation was forged through Bangla Natural Language Processing research, where low-resource challenges required building custom benchmark corpora, establishing stringent evaluation baselines, and addressing annotation noise. This experience shaped my methodological standards—understanding that model performance is only as trustworthy as the underlying data provenance.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          In my current role as a Research Assistant at the Health Informatics Research Lab and through my undergraduate thesis, I translate these principles to clinical informatics and medical imaging, where errors have tangible consequences and model explainability is a prerequisite for clinical adoption.
        </p>
        <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-2 items-center">
          <span className="mono-tag text-xs font-semibold text-[var(--text-muted)] mr-1">
            Focus Areas:
          </span>
          {researchDirection.topics.map((t) => (
            <span
              key={t}
              className="mono-tag px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Footer Actions */}
      <div className="pt-6 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[var(--primary-accent)] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore Implementation Case Studies</span>
        </Link>
        <a
          href={siteConfig.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[var(--text-main)] hover:text-[var(--primary-accent)]"
        >
          <FileDown className="w-4 h-4" />
          <span>Download Curriculum Vitae (PDF)</span>
        </a>
      </div>
    </div>
  );
}
