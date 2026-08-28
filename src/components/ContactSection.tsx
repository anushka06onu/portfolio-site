import { siteConfig } from "../content/site";
import { Mail, FileDown, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "./Icons";

export default function ContactSection() {
  return (
    <section id="contact" className="editorial-card p-6 sm:p-8 space-y-5">
      <div className="max-w-2xl space-y-2">
        <span className="mono-tag text-xs text-[var(--primary-accent)] font-semibold">
          Collaboration &amp; Inquiries
        </span>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
          Interested in my research or engineering work?
        </h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          I’m open to research collaboration, graduate-study opportunities, and conversations about health informatics, explainable machine learning, and backend software engineering.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-xs">
        <a
          href={`mailto:${siteConfig.links.email}`}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[var(--primary-accent)] text-white font-medium hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          <span>Email Me ({siteConfig.links.email})</span>
        </a>

        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-colors"
        >
          <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
          <span>LinkedIn Profile</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
        </a>

        <a
          href={siteConfig.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-colors"
        >
          <FileDown className="w-4 h-4" />
          <span>View Curriculum Vitae (PDF)</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
        </a>
      </div>

      <div className="pt-3 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono">{siteConfig.location} · Available by email and LinkedIn</p>
      </div>
    </section>
  );
}
