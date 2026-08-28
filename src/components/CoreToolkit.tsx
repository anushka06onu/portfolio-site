export default function CoreToolkit() {
  const tools = [
    { name: "Python", category: "Language / AI", color: "hover:border-[#3776AB] hover:text-[#3776AB]" },
    { name: "PyTorch", category: "Deep Learning", color: "hover:border-[#EE4C2C] hover:text-[#EE4C2C]" },
    { name: "FastAPI", category: "Backend / APIs", color: "hover:border-[#009688] hover:text-[#009688]" },
    { name: "Spring Boot", category: "Enterprise Backend", color: "hover:border-[#6DB33F] hover:text-[#6DB33F]" },
    { name: "Laravel", category: "Full-Stack Backend", color: "hover:border-[#FF2D20] hover:text-[#FF2D20]" },
    { name: "React", category: "Frontend UI", color: "hover:border-[#61DAFB] hover:text-[#61DAFB]" },
    { name: "TypeScript", category: "Typed JS", color: "hover:border-[#3178C6] hover:text-[#3178C6]" },
    { name: "MySQL", category: "Relational DB", color: "hover:border-[#4479A1] hover:text-[#4479A1]" },
    { name: "PostgreSQL", category: "Relational DB", color: "hover:border-[#4169E1] hover:text-[#4169E1]" },
    { name: "LightGBM", category: "Tabular ML", color: "hover:border-[#14B8A6] hover:text-[#14B8A6]" },
    { name: "Docker", category: "Containerization", color: "hover:border-[#2496ED] hover:text-[#2496ED]" },
    { name: "Linux", category: "Systems / CLI", color: "hover:border-[#FCC624] hover:text-[#FCC624]" }
  ];

  return (
    <section id="toolkit" className="space-y-5" aria-labelledby="toolkit-heading">
      <div className="border-b border-[var(--border-color)] pb-3">
        <span className="text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider font-mono">
          04 / Core Toolkit
        </span>
        <h2
          id="toolkit-heading"
          className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
        >
          Core Technologies &amp; Systems
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={`editorial-card p-3.5 flex flex-col justify-center items-center text-center gap-1 transition-all duration-200 cursor-default group ${tool.color}`}
          >
            <span className="text-sm font-bold text-[var(--text-main)] group-hover:scale-105 transition-transform">
              {tool.name}
            </span>
            <span className="text-[11px] text-[var(--text-muted)] font-mono">
              {tool.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
