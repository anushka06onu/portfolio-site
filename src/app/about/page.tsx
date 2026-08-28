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
  CheckCircle2
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

      {/* Header Profile */}
      <header className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 border-b border-[var(--border-color)] pb-8">
        <div className="flex-1 space-y-4">
          <span className="mono-tag text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
            Biographical Overview
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-main)]">
            Fateha Hossain
          </h1>
          <p className="text-base sm:text-lg font-mono text-[var(--secondary-accent)]">
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
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[var(--primary-accent)] text-white font-medium hover:opacity-90"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)]"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="w-40 sm:w-48 shrink-0">
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
      </header>

      {/* Formal Education & Distinction */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)] flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[var(--primary-accent)]" />
          <span>Formal Academic Education</span>
        </h2>

        <div className="editorial-card p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[var(--border-subtle)] pb-3">
            <div>
              <h3 className="text-lg font-bold text-[var(--text-main)]">
                {siteConfig.education[0].degree}
              </h3>
              <p className="text-sm font-mono text-[var(--primary-accent)]">
                {siteConfig.education[0].institution} · {siteConfig.education[0].location}
              </p>
            </div>
            <span className="mono-tag text-xs text-[var(--text-muted)] font-medium">
              {siteConfig.education[0].period}
            </span>
          </div>

          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            {siteConfig.education[0].notes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--primary-accent)] shrink-0 mt-0.5" />
                <span>{note}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-[var(--border-subtle)]">
            <p className="text-xs font-mono text-[var(--text-muted)]">
              {siteConfig.additionalTraining}
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Leadership */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
          Research, Professional &amp; Leadership Roles
        </h2>
        <div className="space-y-4">
          {siteConfig.experience.map((role, idx) => (
            <ExperienceItem key={idx} role={role} />
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="pt-8 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[var(--primary-accent)] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>View Featured Projects</span>
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 text-[var(--text-main)] hover:text-[var(--primary-accent)]"
        >
          <span>Get in Touch</span>
        </Link>
      </div>
    </div>
  );
}
