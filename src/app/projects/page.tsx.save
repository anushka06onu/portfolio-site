import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "../../components/ProjectCard";
import { site } from "../../content/site";

export default function ProjectsPage() {
  return (
    <main>
      <Container>
        <div className="pt-10">
          <SectionTitle
            title="Projects"
            subtitle="Presented as case studies. Some work is ongoing or not public yet."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {site.projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

