import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { siteConfig } from "../../content/site";
import ExperienceItem from "../../components/ExperienceItem";
import SkillsMatrix from "../../components/SkillsMatrix";
import {
  ArrowLeft,
  GraduationCap,
  FileDown,
  Mail,
  CheckCircle2,
  Award,
  BookOpen
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Fateha Hossain",
  description:
    "Academic background, research background, engineering experience, honors, certifications, and curriculum vitae of Fateha Hossain."
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-14 space-y-12">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header Profile with Radiant Ring */}
      <header className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 border-b border-[var(--border-color)] pb-8">
        <div className="flex-1 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary-accent)]">
            Biographical Overview
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-main)]">
            Fateha Hossain
          </h1>
          <p className="text-base sm:text-lg font-medium text-[var(--secondary-accent)]">
            Health Informatics Researcher &amp; Software Engineer
          </p>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {siteConfig.narrative.aboutText}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 text-sm font-medium">
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-slate-950 font-semibold shadow-md shadow-teal-500/20"
            >
              <FileDown className="w-4 h-4" />
              <span>View CV (PDF)</span>
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="btn-outline inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)]"
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

      {/* Formal Education & Academic Distinction */}
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
              <p className="text-sm font-medium text-[var(--primary-accent)]">
                {siteConfig.education[0].institution} · {siteConfig.education[0].location}
              </p>
            </div>
            <span className="text-sm text-[var(--text-muted)] font-medium">
              {siteConfig.education[0].period}
            </span>
          </div>

          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            {siteConfig.education[0].notes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--primary-accent)] shrink-0 mt-0.5" />
                <span>{note}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 p-3 rounded-lg bg-[var(--primary-accent-subtle)] border border-[var(--primary-accent)]/20 text-sm text-[var(--primary-accent)] font-medium">
            <Award className="w-4 h-4 shrink-0" />
            <span>Academic Standing: Current CGPA 3.92 / 4.00 · 3× Dean&apos;s Award · 75% Merit Waiver</span>
          </div>
        </div>
      </section>

      {/* Honors, Awards & 12 Coursera Certifications */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)] flex items-center gap-2">
          <Award className="w-5 h-5 text-[var(--primary-accent)]" />
          <span>Honors, Awards &amp; Professional Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Dean's Award */}
          <div className="editorial-card p-6 space-y-3">
            <div className="flex items-center gap-2 text-[var(--primary-accent)] font-semibold text-base">
              <Award className="w-5 h-5" />
              <span>3× Dean&apos;s Honor List Award</span>
            </div>
            <p className="text-xs font-semibold text-[var(--secondary-accent)]">
              Faculty of Science &amp; Information Technology, DIU (Spring 2024, Fall 2024, Spring 2025)
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Conferred 3 times across consecutive academic semesters in recognition of sustained academic excellence and maintaining high semester grade point averages (CGPA 3.92 / 4.00).
            </p>
          </div>

          {/* 75% Merit Waiver */}
          <div className="editorial-card p-6 space-y-3">
            <div className="flex items-center gap-2 text-[var(--secondary-accent)] font-semibold text-base">
              <Award className="w-5 h-5" />
              <span>75% Merit-Based Tuition Waiver</span>
            </div>
            <p className="text-xs font-semibold text-[var(--primary-accent)]">
              Daffodil International University (2022 – 2026)
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Awarded 75% tuition scholarship continuously across consecutive academic semesters based on top-tier academic merit.
            </p>
          </div>

          {/* 12 Coursera Certifications */}
          <div className="editorial-card p-6 space-y-3">
            <div className="flex items-center gap-2 text-[var(--secondary-accent)] font-semibold text-base">
              <BookOpen className="w-5 h-5" />
              <span>12× Professional Course Certifications</span>
            </div>
            <p className="text-xs font-semibold text-[var(--primary-accent)]">
              Coursera (DeepLearning.AI, Stanford Online, Google &amp; Meta)
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Completed 12 comprehensive certifications covering Machine Learning, Deep Learning Specializations, Python for Data Science, Backend API Design, and Cloud Systems.
            </p>
          </div>
        </div>
      </section>

      {/* Full Experience & Leadership Roles */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
          Research, Professional, Leadership &amp; Teaching Roles
        </h2>
        <div className="space-y-4">
          {siteConfig.experience.map((role, idx) => (
            <ExperienceItem key={idx} role={role} showTech={true} />
          ))}
        </div>
      </section>

      {/* Technical Capabilities Matrix */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
          Technical Capabilities &amp; Skills Inventory
        </h2>
        <SkillsMatrix />
      </section>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 text-sm font-medium">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-[var(--primary-accent)] hover:underline font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>View All Projects</span>
        </Link>
        <a
          href={`mailto:${siteConfig.links.email}`}
          className="inline-flex items-center gap-1.5 text-[var(--text-main)] hover:text-[var(--primary-accent)] font-medium"
        >
          <span>Get in Touch ({siteConfig.links.email})</span>
        </a>
      </div>
    </div>
  );
}
