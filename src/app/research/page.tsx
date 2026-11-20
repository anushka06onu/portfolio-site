import Link from "next/link";
import { Metadata } from "next";
import { researchDirection, researchOutputs, thesisDetails, authoredBook } from "../../content/research";
import { siteConfig } from "../../content/site";
import ResearchCard from "../../components/ResearchCard";
import {
  ArrowLeft,
  Microscope,
  FileDown,
  Activity,
  ShieldCheck,
  Eye,
  Target,
  Sparkles,
  Layers,
  FileCode2,
  BookMarked,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research Direction & Outputs — Fateha Hossain Anushka",
  description:
    "Health informatics research, Vision Foundation Models, parameter-efficient adaptation for dental radiography, accepted ICERIE 2027 papers, and authored compiler textbook by Fateha Hossain Anushka."
};

export default function ResearchPage() {
  const pillarIcons = [
    <Activity key="1" className="w-4 h-4 text-teal-400" />,
    <ShieldCheck key="2" className="w-4 h-4 text-cyan-400" />,
    <Eye key="3" className="w-4 h-4 text-blue-400" />
  ];

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
        <span className="mono-tag text-xs font-semibold text-[var(--primary-accent)]">
          Research Direction &amp; Vision
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-main)]">
          Health Informatics, <span className="text-gradient-cyan">Vision Foundation Models</span> &amp; NLP
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
          {researchDirection.overview}
        </p>
      </header>

      {/* Undergraduate Thesis Deep Dive */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
          <div className="flex items-center gap-2">
            <Microscope className="w-5 h-5 text-[var(--primary-accent)]" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
              Undergraduate Thesis Research
            </h2>
          </div>
          <span className="mono-tag text-xs px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30">
            Journal Manuscript (Under Review) · 2026
          </span>
        </div>

        <div className="editorial-card editorial-card-accent p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mono-tag text-xs text-[var(--secondary-accent)] font-semibold">
                {thesisDetails.role}
              </span>
              <span className="text-xs text-[var(--text-muted)]">·</span>
              <span className="mono-tag text-xs text-[var(--text-muted)]">
                Health Informatics Research Lab (HIRL)
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] leading-snug">
              {thesisDetails.title}
            </h3>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <h4 className="mono-tag text-xs font-bold uppercase text-[var(--primary-accent)] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Findings &amp; Architecture</span>
            </h4>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              {thesisDetails.description}
            </p>
          </div>

          {/* Objective */}
          <div className="space-y-1.5 bg-[var(--surface-subtle)]/70 p-4 rounded-xl border border-[var(--border-subtle)]">
            <h4 className="mono-tag text-xs font-bold uppercase text-[var(--secondary-accent)] flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              <span>Methodological Objective</span>
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-main)] leading-relaxed">
              {thesisDetails.objective}
            </p>
          </div>

          {/* Motivation */}
          <div className="space-y-1.5">
            <h4 className="mono-tag text-xs font-bold uppercase text-emerald-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clinical Significance &amp; Motivation</span>
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {thesisDetails.motivation}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="mono-tag text-xs px-2.5 py-1 rounded-md bg-[var(--surface-subtle)] text-[var(--text-main)] border border-[var(--border-subtle)] font-medium">
              DINOv2-Small
            </span>
            <span className="mono-tag text-xs px-2.5 py-1 rounded-md bg-[var(--surface-subtle)] text-[var(--text-main)] border border-[var(--border-subtle)] font-medium">
              LoRA &amp; Bottleneck Adapters
            </span>
            <span className="mono-tag text-xs px-2.5 py-1 rounded-md bg-[var(--surface-subtle)] text-[var(--text-main)] border border-[var(--border-subtle)] font-medium">
              2.63% Parameter Updates
            </span>
            <span className="mono-tag text-xs px-2.5 py-1 rounded-md bg-[var(--surface-subtle)] text-[var(--text-main)] border border-[var(--border-subtle)] font-medium">
              ResNet-50 Patient-Split Benchmark
            </span>
            <span className="mono-tag text-xs px-2.5 py-1 rounded-md bg-[var(--surface-subtle)] text-[var(--text-main)] border border-[var(--border-subtle)] font-medium">
              Grad-CAM Off-Tooth Error Audit
            </span>
          </div>
        </div>
      </section>

      {/* Authored Academic Book Feature */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
          <div className="flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-[var(--secondary-accent)]" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
              Authored Academic Textbook
            </h2>
          </div>
          <span className="mono-tag text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            Published · Distributed to Students
          </span>
        </div>

        <div className="editorial-card p-6 sm:p-8 space-y-4">
          <div className="space-y-1.5">
            <span className="mono-tag text-xs text-[var(--secondary-accent)] font-semibold">
              Sole Author · Academic Textbook &amp; Laboratory Manual
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
              {authoredBook.title}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {authoredBook.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {authoredBook.topics.map((topic) => (
              <span
                key={topic}
                className="mono-tag px-2.5 py-0.5 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] text-xs font-medium"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center gap-3">
            <a
              href={authoredBook.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface-subtle)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-all font-mono"
            >
              <span>Read Companion Book (Google Drive)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
          Core Research Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {researchDirection.corePillars.map((pillar, idx) => (
            <div key={idx} className="editorial-card p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border-subtle)]">
                  {pillarIcons[idx]}
                </div>
                <span className="mono-tag text-xs text-[var(--primary-accent)] font-bold">
                  0{idx + 1}
                </span>
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

      {/* Research Outputs & Conference Manuscripts */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
            Publications, Manuscripts &amp; Research Datasets
          </h2>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            2 Accepted (ICERIE 2027) · 4 Under Review · 1 Published Corpus · 1 Book
          </span>
        </div>

        <div className="space-y-4">
          {researchOutputs.map((output, idx) => (
            <ResearchCard key={idx} output={output} />
          ))}
        </div>
      </section>

      {/* Research Journey Context */}
      <section className="editorial-card editorial-card-accent p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-[var(--text-main)] flex items-center gap-2">
          <FileCode2 className="w-5 h-5 text-[var(--primary-accent)]" />
          <span>Methodological Continuity: From Low-Resource NLP to Clinical AI</span>
        </h3>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          My experimental methodology originated in low-resource Natural Language Processing, where lack of standardized benchmarks required building custom corpora (such as the 50,513-sentence Upobhasha parallel dataset), handling dialect variations, and establishing rigorous multi-model evaluation frameworks.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          In my research at the Health Informatics Research Lab and in my undergraduate thesis, I translate these principles to clinical AI—where data scarcity demands parameter-efficient adaptation (LoRA, BitFit, bottleneck adapters) and diagnostic stakes require rigorous feature attribution (SHAP, Grad-CAM, Integrated Gradients).
        </p>
        <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-2 items-center">
          <span className="mono-tag text-xs font-semibold text-[var(--text-muted)] mr-1">
            Focus Areas:
          </span>
          {researchDirection.topics.map((t) => (
            <span
              key={t}
              className="mono-tag px-2.5 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Footer Actions */}
      <div className="pt-6 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-[var(--primary-accent)] hover:underline font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore Implementation Case Studies</span>
        </Link>
        <a
          href={siteConfig.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[var(--text-main)] hover:text-[var(--primary-accent)] font-medium"
        >
          <FileDown className="w-4 h-4 text-[var(--primary-accent)]" />
          <span>View Curriculum Vitae (PDF)</span>
        </a>
      </div>
    </div>
  );
}
