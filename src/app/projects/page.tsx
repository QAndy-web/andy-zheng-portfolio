import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <div id="top" className="container-pad py-16 sm:py-24">
      <SectionHeading
        eyebrow="03 / Projects"
        title="Projects"
        description="Finance, valuation, statistics, and market research work presented in a concise portfolio format."
      />

      <section className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </section>
    </div>
  );
}
