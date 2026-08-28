import { siteConfig } from "../content/site";
import { Mail, FileDown, ArrowUpRight, Sparkles } from "lucide-react";
import { LinkedinIcon } from "./Icons";

export default function ContactSection() {
  return (
    <section id="contact" className="editorial-card editorial-card-accent p-6 sm:p-9 space-y-6 overflow-hidden">
      <div className="max-w-2xl space-y-2.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary-accent-subtle)] border border-[var(--primary-accent)]/20 text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Collaboration &amp; Inquiries</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
          Interested in my research or engineering work?
        </h3>
        <p className="text-base text-[var(--text-muted)] leading-relaxed">
          I’m open to research collaboration, graduate-study opportunities, and conversations about health informatics, explainable machine learning, and backend software engineering.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1 text-sm font-medium">
        <a
          href={`mailto:${siteConfig.links.email}`}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-semibold shadow-md shadow-teal-500/20 transition-all"
        >
          <Mail className="w-4 h-4" />
          <span>Email Me ({siteConfig.links.email})</span>
        </a>

        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
        >
          <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
          <span>LinkedIn Profile</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
        </a>

        <a
          href={siteConfig.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:bg-[var(--surface-subtle)] transition-all"
        >
          <FileDown className="w-4 h-4 text-[var(--primary-accent)]" />
          <span>View Curriculum Vitae (PDF)</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
        </a>
      </div>

      <div className="pt-3 border-t border-[var(--border-subtle)] text-sm text-[var(--text-muted)] flex flex-wrap items-center justify-between gap-2">
        <p>{siteConfig.location} · Available by email and LinkedIn</p>
      </div>
    </section>
  );
}
