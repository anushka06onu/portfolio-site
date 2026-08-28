import { siteConfig } from "../content/site";
import { Mail, FileDown, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "./Icons";

export default function ContactSection() {
  return (
    <section id="contact" className="editorial-card p-8 sm:p-10 space-y-6">
      <div className="max-w-2xl space-y-3">
        <span className="mono-tag text-xs uppercase tracking-wider text-[var(--primary-accent)] font-semibold">
          Collaboration &amp; Inquiries
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
          Interested in my research or engineering work?
        </h3>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          I’m open to research collaboration, graduate-study opportunities, and conversations about health informatics, trustworthy intelligent systems, and backend engineering.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
        <a
          href={`mailto:${siteConfig.links.email}`}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[var(--primary-accent)] text-white font-medium hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          <span>Email Me ({siteConfig.links.email})</span>
        </a>

        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-colors"
        >
          <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
          <span>Connect on LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
        </a>

        <a
          href={siteConfig.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-colors"
        >
          <FileDown className="w-4 h-4" />
          <span>Download Curriculum Vitae (PDF)</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
        </a>
      </div>

      <div className="pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono">Location: {siteConfig.location}</p>
        <p className="font-mono">Direct inquiries typically answered within 24–48 hours.</p>
      </div>
    </section>
  );
}
