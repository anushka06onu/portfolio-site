import { siteConfig } from "../content/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)] py-8 px-4 sm:px-6 transition-colors">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-[var(--text-muted)]">
          © 2026 {siteConfig.name}
        </p>

        <div className="flex items-center gap-6 font-medium">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary-accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077B5] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="hover:text-[var(--primary-accent)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
