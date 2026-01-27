import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "../../components/ProjectCard";
import { site } from "../../content/site";

export default function ProjectsPage() {
  return (
    <main>
      <div className="relative overflow-hidden bg-[radial-gradient(900px_circle_at_10%_-20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_circle_at_90%_-10%,rgba(249,115,22,0.18),transparent_55%),linear-gradient(180deg,#0b0f14,rgba(7,10,12,0.96))]">
        <div className="pointer-events-none absolute right-10 top-10 h-40 w-40 rounded-full bg-amber-400/25 blur-3xl" />
        <Container>
          <div className="pt-12 pb-14">
          <SectionTitle
            title="Projects"
            subtitle="Presented as case studies. Some are learning-focused or not public as code."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {site.projects.map((p) => (
              <ProjectCard key={p.title} p={p as any} />
            ))}
          </div>
        </div>
        </Container>
      </div>
    </main>
  );
}
