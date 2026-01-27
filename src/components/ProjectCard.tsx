type Project = {
  title: string;
  type: string;
  description: string;
  highlights: string[];
  tech: string[];
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-xl border p-4">
      <h3 className="font-semibold">{p.title}</h3>
      <p className="text-xs text-gray-500">{p.type}</p>
      <p className="mt-2 text-sm">{p.description}</p>

      <ul className="mt-2 list-disc pl-5 text-sm">
        {p.highlights.map(h => <li key={h}>{h}</li>)}
      </ul>

      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        {p.tech.map(t => (
          <span key={t} className="border rounded px-2 py-1">{t}</span>
        ))}
      </div>
    </div>
  );
}

