import { siteConfig } from "../content/site";
import { Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)] py-12 px-4 sm:px-6 transition-colors">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1">
          <p className="font-mono text-sm font-semibold text-[var(--text-main)]">
            {siteConfig.name}
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Health Informatics · Intelligent Systems · Backend Engineering
          </p>
        </div>

        <div className="flex items-center gap-5 text-xs font-mono">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[var(--primary-accent)] transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[var(--primary-accent)] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="flex items-center gap-1 hover:text-[var(--primary-accent)] transition-colors"
            aria-label="Email Address"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[var(--primary-accent)] transition-colors"
            aria-label="Curriculum Vitae"
          >
            <FileDown className="w-4 h-4" />
            <span>CV</span>
          </a>
        </div>

        <div className="text-xs font-mono text-[var(--text-muted)] text-center md:text-right">
          <p>Built with Next.js &amp; TypeScript</p>
          <p className="text-[11px] text-[var(--text-muted)] opacity-80">Last updated: 2026</p>
        </div>
      </div>
    </footer>
  );
}
