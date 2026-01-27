import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Badge from "../components/Badge";
import ProjectCard from "../components/ProjectCard";
import { site } from "../content/site";

export default function HomePage() {
  return (
    <main>
      <Container>
        <section className="pt-10">
          <h1 className="text-2xl font-semibold">{site.name}</h1>
          <p className="mt-2 text-gray-600">{site.headline}</p>
          <p className="mt-4 max-w-xl text-sm text-gray-700">{site.about}</p>
        </section>

        <section className="mt-10">
          <SectionTitle title="Featured Projects" />
          <div className="grid gap-4 sm:grid-cols-2">
            {site.projects.slice(0, 2).map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <SectionTitle title="Skills" />
          <div className="flex flex-wrap gap-2">
            {Object.values(site.skills).flat().map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

