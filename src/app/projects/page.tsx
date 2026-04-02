import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ProjectCard, { Project } from "../../components/ProjectCard";
import { site } from "../../content/site";

export default function ProjectsPage() {
  return (
    <main>
      <div className="relative overflow-hidden bg-[radial-gradient(900px_circle_at_10%_-20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_circle_at_90%_-10%,rgba(249,115,22,0.18),transparent_55%),linear-gradient(180deg,#0b0f14,rgba(7,10,12,0.96))]">
        <div className="ambient-orb right-10 top-10 h-40 w-40 bg-amber-400/25" />
        <Container>
          <div className="pt-12 pb-14">
          <SectionTitle
            title="Projects"
            subtitle="Presented as case studies. Some code is private."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {site.projects.map((p: Project) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>
        </Container>
      </div>
    </main>
  );
}
