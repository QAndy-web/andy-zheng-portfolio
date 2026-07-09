import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/profile";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project ? `${project.title} | Andy Zheng` : "Project | Andy Zheng",
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const sections = [
    ["Overview", project.description],
    ["Objective", "Frame a focused finance or research question and turn it into a clear analytical output."],
    ["Process", "Collect context, define assumptions, build the model or analysis, and communicate the key takeaways."],
    ["Tools", project.tools.join(", ")],
    ["What I learned", "Good analysis depends on clean assumptions, clear structure, and the ability to explain uncertainty."],
  ];

  return (
    <div id="top" className="container-pad py-16 sm:py-24">
      <SectionHeading eyebrow={project.category} title={project.title} description={project.description} />

      <section className="mx-auto mt-16 grid max-w-4xl gap-5">
        {sections.map(([title, description]) => (
          <article key={title} className="glass rounded-lg p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-white">{title}</h2>
            <p className="mt-4 leading-8 text-steel">{description}</p>
          </article>
        ))}
      </section>

      <div className="mx-auto mt-10 max-w-4xl">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
