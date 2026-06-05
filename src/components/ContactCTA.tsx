import { site } from "../content/site";
import ContactForm from "./ContactForm";

export default function ContactCTA() {
  return (
    <div className="card-glow relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-400/40 via-sky-400/80 to-purple-500/40 opacity-50 dark:opacity-80" />
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-6 font-[var(--font-playfair)]">
          Let's build something extraordinary.
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg mb-8 max-w-lg">
          Whether you have a project in mind, want to discuss NLP research, or just want to connect — my inbox is always open. Fill out the form or reach out directly.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${site.links.email}`}
            className="btn-base btn-md btn-glass btn-hover"
          >
            Email directly
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-md btn-glass btn-hover"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full lg:w-[450px] flex-shrink-0 bg-white/40 dark:bg-black/20 p-6 sm:p-8 rounded-2xl border border-black/5 dark:border-white/5 backdrop-blur-md">
        <ContactForm />
      </div>
    </div>
  );
}
