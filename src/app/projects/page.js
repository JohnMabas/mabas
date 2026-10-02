import PageContainer from "@/components/PageContainer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Projects",
  description: `A selection of projects and work by ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <PageContainer>
      {/* ── Heading ──────────────────────────────────── */}
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          Projects
        </h1>
        <p className="mt-3 text-zinc-500 leading-relaxed max-w-xl">
          A selection of work exploring web architecture, real client products,
          and side projects I have built or contributed to.
        </p>
      </header>

      {/* ── Project list ─────────────────────────────── */}
      <section aria-label="Projects list">
        {projects.length === 0 ? (
          <p className="text-zinc-500">No projects yet — check back soon.</p>
        ) : (
          <div>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </section>
    </PageContainer>
  );
}
