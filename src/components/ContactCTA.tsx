import React from "react";
import ContactForm from "./ContactForm";
import { site } from "../content/site";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <div className="relative isolate overflow-hidden rounded-[32px] bg-gradient-to-r from-emerald-500/12 via-sky-500/10 to-purple-500/12 p-[1px] ring-1 ring-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_140%_at_50%_120%,rgba(56,189,248,0.2),transparent)]" />
      <div className="grid gap-10 rounded-[30px] bg-[#0c1117]/85 p-8 backdrop-blur-2xl lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-emerald-200">Let’s collaborate</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Build the next ML/AI experience together.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-neutral-200">
            I blend full-stack craft with applied AI. Email is best, but LinkedIn and GitHub are just a click away.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`mailto:${site.links.email}`}
              className="btn-base btn-lg btn-emerald btn-hover btn-shine shadow-[0_15px_40px_rgba(16,185,129,0.25)]"
            >
              Email me
            </a>
            <Link
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-lg btn-glass btn-hover btn-shine hover:bg-white/15"
            >
              LinkedIn
            </Link>
            {site.links.github ? (
              <Link
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-lg btn-glass btn-hover btn-shine hover:bg-white/15"
              >
                GitHub
              </Link>
            ) : null}
          </div>
        </div>

        <div className="lg:justify-self-end">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
