"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "../content/site";
import { Menu, X, FileDown, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Selected Work", href: "/#work" },
    { label: "Research", href: "/#research" },
    { label: "Experience", href: "/#experience" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border-color)] bg-[var(--bg-color)]/90 backdrop-blur-md transition-colors">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 h-16">
          <Link
            href="/"
            className="font-mono text-sm sm:text-base font-semibold tracking-tight text-[var(--text-main)] hover:text-[var(--primary-accent)] transition-colors"
          >
            {siteConfig.name} <span className="text-[var(--primary-accent)]">/</span> <span className="text-xs text-[var(--text-muted)] font-normal hidden sm:inline">Health Informatics &amp; Systems</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace("/#", "/"));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-[var(--primary-accent)] font-medium"
                      : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1.5 text-xs font-mono font-medium text-[var(--text-main)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
              <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
            </a>

            <ThemeToggle />
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="p-2 rounded-md border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--surface-subtle)]"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--surface)] px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm py-1.5 text-[var(--text-muted)] hover:text-[var(--primary-accent)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[var(--border-color)]">
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 text-xs font-mono text-[var(--primary-accent)]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
