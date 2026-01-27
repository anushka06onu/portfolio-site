import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "../../components/ProjectCard";
import { site } from "../../content/site";

export default function ProjectsPage() {
  return (
    <main>
      <Container>
        <div className="pt-10 pb-12">
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
    </main>
  );
}
