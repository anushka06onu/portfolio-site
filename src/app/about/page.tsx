import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { siteConfig } from "../../content/site";
import ExperienceItem from "../../components/ExperienceItem";
import {
  ArrowLeft,
  GraduationCap,
  FileDown,
  Mail,
  CheckCircle2,
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Fateha Hossain",
  description:
    "Academic background, research background, engineering experience, and curriculum vitae of Fateha Hossain."
};

export default function AboutPage() {
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

      {/* Header Profile with Radiant Ring */}
      <header className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 border-b border-[var(--border-color)] pb-8">
        <div className="flex-1 space-y-4">
          <span className="mono-tag text-xs font-semibold text-[var(--primary-accent)]">
            Biographical Overview
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-main)]">
            Fateha Hossain
          </h1>
          <p className="text-base sm:text-lg font-mono text-[var(--secondary-accent)] font-medium">
            Health Informatics Researcher &amp; Software Engineer
          </p>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {siteConfig.narrative.aboutText}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold shadow-md shadow-teal-500/20"
            >
              <FileDown className="w-4 h-4" />
              <span>View CV (PDF)</span>
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
            >
              <Mail className="w-4 h-4 text-[var(--primary-accent)]" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="w-40 sm:w-48 shrink-0">
          <div className="relative p-1 rounded-2xl bg-gradient-to-br from-teal-500/30 via-cyan-500/20 to-blue-500/30 shadow-xl shadow-teal-500/10">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface)] shadow-sm">
              <Image
                src="/fateha-hossain.jpg"
                alt="Fateha Hossain"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 160px, 192px"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Formal Education & Distinction */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)] flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[var(--primary-accent)]" />
          <span>Formal Academic Education</span>
        </h2>

        <div className="editorial-card editorial-card-accent p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[var(--border-subtle)] pb-2.5">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)]">
                {siteConfig.education[0].degree}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[var(--primary-accent)] font-medium">
                {siteConfig.education[0].institution} · {siteConfig.education[0].location}
              </p>
            </div>
            <span className="mono-tag text-xs text-[var(--text-muted)] font-medium">
              {siteConfig.education[0].period}
            </span>
          </div>

          <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--text-muted)]">
            {siteConfig.education[0].notes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary-accent)] shrink-0 mt-0.5" />
                <span>{note}</span>
              </li>
            ))}
          </ul>

          {siteConfig.education[0].distinction && (
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[var(--primary-accent-subtle)] border border-[var(--primary-accent)]/20 text-xs text-[var(--primary-accent)] font-medium">
              <Award className="w-4 h-4 shrink-0" />
              <span>Academic distinction: {siteConfig.education[0].distinction}</span>
            </div>
          )}

          <div className="pt-2 border-t border-[var(--border-subtle)]">
            <p className="text-xs font-mono text-[var(--text-muted)]">
              {siteConfig.additionalTraining}
            </p>
          </div>
        </div>
      </section>

      {/* Full Experience & Leadership */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
          Research, Professional, Leadership &amp; Teaching Roles
        </h2>
        <div className="space-y-4">
          {siteConfig.experience.map((role, idx) => (
            <ExperienceItem key={idx} role={role} />
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[var(--primary-accent)] hover:underline font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>View Featured Projects</span>
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 text-[var(--text-main)] hover:text-[var(--primary-accent)] font-medium"
        >
          <span>Get in Touch</span>
        </Link>
      </div>
    </div>
  );
}
