import { site } from "../content/site";

export default function ContactCTA() {
  return (
    <div className="card-glow relative overflow-hidden px-8 py-14 sm:px-16 sm:py-20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-400/40 via-sky-400/80 to-purple-500/40 opacity-50 dark:opacity-80" />
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
      
      <div className="relative z-10 max-w-xl">
        <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-[var(--font-playfair)]">
          Let's build something extraordinary.
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg">
          Whether you have a project in mind, want to discuss NLP research, or just want to connect — my inbox is always open.
        </p>
      </div>

      <div className="relative z-10 flex-shrink-0 flex flex-col gap-4 w-full sm:w-auto">
        <a
          href={`mailto:${site.links.email}`}
          className="btn-base btn-lg btn-emerald btn-hover btn-shine hover:bg-emerald-500 w-full"
        >
          Say Hello
        </a>
        <a
          href={site.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="btn-base btn-lg btn-glass btn-hover btn-shine w-full"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}
