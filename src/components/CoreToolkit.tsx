export default function CoreToolkit() {
  const tools = [
    { name: "Python", color: "hover:border-[#3776AB] hover:text-[#3776AB]" },
    { name: "PyTorch", color: "hover:border-[#EE4C2C] hover:text-[#EE4C2C]" },
    { name: "FastAPI", color: "hover:border-[#009688] hover:text-[#009688]" },
    { name: "Spring Boot", color: "hover:border-[#6DB33F] hover:text-[#6DB33F]" },
    { name: "Laravel", color: "hover:border-[#FF2D20] hover:text-[#FF2D20]" },
    { name: "React / TypeScript", color: "hover:border-[#3178C6] hover:text-[#3178C6]" },
    { name: "PostgreSQL", color: "hover:border-[#4169E1] hover:text-[#4169E1]" },
    { name: "Docker", color: "hover:border-[#2496ED] hover:text-[#2496ED]" }
  ];

  return (
    <section id="toolkit" className="space-y-5" aria-labelledby="toolkit-heading">
      <div className="border-b border-[var(--border-color)] pb-3">
        <span className="text-xs font-semibold text-[var(--primary-accent)] uppercase tracking-wider font-mono">
          04 / Toolkit
        </span>
        <h2
          id="toolkit-heading"
          className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
        >
          Core Toolkit
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={`editorial-card py-3.5 px-4 flex items-center justify-center text-center transition-all duration-200 cursor-default group ${tool.color}`}
          >
            <span className="text-sm sm:text-base font-bold text-[var(--text-main)] group-hover:scale-105 transition-transform">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
