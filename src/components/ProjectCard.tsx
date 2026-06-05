import Badge from "./Badge";

export type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  highlights?: string[];
  features?: string[];
  problem?: string;
  solution?: string;
  images?: string[];
  tech: string[];
  links?: {
    github?: string;
    demo?: string;
  };
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 shadow-lg backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(520px_circle_at_85%_-10%,rgba(56,189,248,0.18),transparent_60%)]" />
      <div>
        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
        <p className="mt-1 text-[13px] text-neutral-300">
          {p.category} • {p.status}
        </p>
      </div>

      <p className="mt-4 text-sm leading-6 text-neutral-200">{p.description}</p>

      <div className="mt-4">
        <p className="text-sm font-medium text-white/90">Highlights</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-200">
          {(p.features || p.highlights || []).map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      {p.links && (p.links.github || p.links.demo) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {p.links.github && (
            <a
              href={p.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-sm btn-emerald btn-hover btn-shine hover:bg-emerald-500"
            >
              GitHub
            </a>
          )}
          {p.links.demo && (
            <a
              href={p.links.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-sm btn-glass btn-hover btn-shine hover:bg-white/20"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
