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
  BookOpen,
  Users,
  Languages,
  BookMarked,
  ExternalLink
} from "lucide-react";
import { LinkedinIcon } from "../../components/Icons";

export const metadata: Metadata = {
  title: "About Fateha Hossain Anushka",
  description:
    "Academic background, research background, engineering experience, honors, certifications, and curriculum vitae of Fateha Hossain Anushka."
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

      {/* Hero Header with Portrait */}
      <header className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-8 border-b border-[var(--border-color)] pb-10">
        <div className="space-y-4 max-w-xl text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-accent-subtle)] border border-[var(--primary-accent)]/20 text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
            <span>Curriculum Vitae &amp; Background</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-main)]">
            About <span className="text-gradient-cyan">{siteConfig.fullName}</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {siteConfig.narrative.aboutText}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-sm font-medium">
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-slate-950 font-semibold shadow-md shadow-teal-500/20"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)]"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${siteConfig.links.email}`}
              className="btn-outline inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)]"
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
                src="/anushka.jpg"
                alt="Fateha Hossain Anushka"
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
                <a
                  href="https://daffodilvarsity.edu.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center gap-1"
                >
                  <span>{siteConfig.education[0].institution}</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
                <span> · {siteConfig.education[0].location}</span>
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
        </div>
      </section>

      {/* Authored Academic Book */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)] flex items-center gap-2">
          <BookMarked className="w-5 h-5 text-[var(--secondary-accent)]" />
          <span>Authored Academic Book</span>
        </h2>

        <div className="editorial-card p-6 sm:p-7 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-2.5">
            <span className="mono-tag text-xs font-semibold text-[var(--secondary-accent)]">
              Academic Textbook &amp; Laboratory Manual · Published (2026)
            </span>
            <span className="mono-tag text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              Distributed in Print &amp; Online
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)]">
            {siteConfig.authoredBook.title}
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {siteConfig.authoredBook.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.authoredBook.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface-subtle)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-all font-mono"
            >
              <span>Read Companion Book (Google Drive)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/research"
              className="text-xs font-semibold text-[var(--primary-accent)] hover:underline inline-flex items-center gap-1 font-mono"
            >
              <span>View in Research Roadmap →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Honors, Awards & Professional Certifications */}
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
              Faculty of Science &amp; Information Technology, DIU
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Conferred 3 times across consecutive academic semesters in recognition of sustained academic excellence and maintaining high semester grade point averages (Current CGPA: 3.93 / 4.00).
            </p>
          </div>

          {/* 75% Merit Waiver */}
          <div className="editorial-card p-6 space-y-3">
            <div className="flex items-center gap-2 text-[var(--secondary-accent)] font-semibold text-base">
              <Award className="w-5 h-5" />
              <span>75% Merit-Based Tuition Waiver</span>
            </div>
            <p className="text-xs font-semibold text-[var(--primary-accent)]">
              Daffodil International University (Brilliant Academic Result)
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Received a 75% tuition fee waiver scholarship continuously across consecutive academic semesters based on top-tier academic merit.
            </p>
          </div>

          {/* IBM Data Science Professional Certificate */}
          <div className="editorial-card p-6 space-y-3">
            <div className="flex items-center gap-2 text-[var(--primary-accent)] font-semibold text-base">
              <BookOpen className="w-5 h-5" />
              <span>IBM Data Science Professional Certificate</span>
            </div>
            <p className="text-xs font-semibold text-[var(--secondary-accent)]">
              Coursera / IBM (12 Courses Completed)
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Completed all 12 courses under the IBM Data Science Professional Certificate, covering data analysis, Python, machine learning models, databases, and scientific reporting.
            </p>
            <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono">
              <a
                href="https://www.coursera.org/account/accomplishments/professional-cert/WWJZILGDM7FR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--primary-accent)] hover:underline"
              >
                <span>Certificate Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[var(--text-muted)]">·</span>
              <a
                href="https://drive.google.com/drive/folders/1T3DoAOkKDGgGMIEczYR9X5VK_T0JrPtn?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--secondary-accent)] hover:underline"
              >
                <span>12 Certificates Folder</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Udemy Developer Bootcamps */}
          <div className="editorial-card p-6 space-y-3">
            <div className="flex items-center gap-2 text-[var(--secondary-accent)] font-semibold text-base">
              <BookOpen className="w-5 h-5" />
              <span>Java Mastery &amp; MySQL Bootcamps</span>
            </div>
            <p className="text-xs font-semibold text-[var(--primary-accent)]">
              Udemy Professional Bootcamps
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Completed &apos;The Complete Java Programming Mastery - Developers Bootcamp&apos; and &apos;Complete MySQL Bootcamp: Learn SQL Step by Step&apos; covering enterprise backend design and query optimization.
            </p>
            <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono">
              <a
                href="https://www.udemy.com/certificate/UC-abd5aef1-dc70-44bc-9a99-00c545c85fb0/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--primary-accent)] hover:underline"
              >
                <span>Java Certificate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[var(--text-muted)]">·</span>
              <a
                href="https://www.udemy.com/certificate/UC-649f5e58-4e3b-4ac5-bf39-34cb8fa5c73b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--secondary-accent)] hover:underline"
              >
                <span>MySQL Certificate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Mentorship */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)] flex items-center gap-2">
          <Users className="w-5 h-5 text-[var(--primary-accent)]" />
          <span>Leadership &amp; Mentorship</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteConfig.leadership.map((item, idx) => (
            <div key={idx} className="editorial-card p-5 space-y-2">
              <div className="flex items-start justify-between gap-2 border-b border-[var(--border-subtle)] pb-2">
                <h3 className="text-sm font-bold text-[var(--text-main)]">{item.title}</h3>
                <span className="text-xs font-mono text-[var(--primary-accent)] shrink-0">{item.period}</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Full Experience & Professional Roles */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
          Work Experience &amp; Professional Roles
        </h2>
        <div className="space-y-4">
          {siteConfig.experience.map((role, idx) => (
            <ExperienceItem key={idx} role={role} showTech={true} />
          ))}
        </div>
      </section>

      {/* Language Proficiency */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)] flex items-center gap-2">
          <Languages className="w-5 h-5 text-[var(--primary-accent)]" />
          <span>Language Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {siteConfig.languages.map((lang, idx) => (
            <div key={idx} className="editorial-card p-5 space-y-1.5">
              <h3 className="text-base font-bold text-[var(--text-main)]">{lang.language}</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {lang.proficiency}
              </p>
            </div>
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
