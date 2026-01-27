import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { site } from "../../content/site";

export default function ContactPage() {
  return (
    <main>
      <Container>
        <div className="pt-10">
          <SectionTitle
            title="Contact"
            subtitle="If you’d like to discuss a project or collaboration, feel free to reach out."
          />

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-700">
              Email:{" "}
              <a className="underline underline-offset-4" href={`mailto:${site.links.email}`}>
                {site.links.email}
              </a>
            </p>

            <p className="mt-2 text-sm text-neutral-700">
              LinkedIn:{" "}
              <a
                className="underline underline-offset-4"
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {site.links.linkedin}
              </a>
            </p>

            {site.links.github ? (
              <p className="mt-2 text-sm text-neutral-700">
                GitHub:{" "}
                <a
                  className="underline underline-offset-4"
                  href={site.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.links.github}
                </a>
              </p>
            ) : (
              <p className="mt-2 text-sm text-neutral-500">
                GitHub: not linked (some work is private / ongoing)
              </p>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
