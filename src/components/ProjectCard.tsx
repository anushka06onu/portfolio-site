import Badge from "./Badge";

type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  tech: string[];
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-neutral-900">{p.title}</h3>
          <p className="mt-1 text-xs text-neutral-500">
            {p.category} • {p.status}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm text-neutral-600">{p.description}</p>

      <div className="mt-4">
        <p className="text-sm font-medium text-neutral-800">Highlights</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-600">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </div>
  );
}
