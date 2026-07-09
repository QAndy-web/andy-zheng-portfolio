import Link from "next/link";
import { MotionDiv } from "@/components/Motion";

type ProjectCardProps = {
  title: string;
  slug: string;
  category: string;
  description: string;
  tools: string[];
};

export function ProjectCard({ title, slug, category, description, tools }: ProjectCardProps) {
  return (
    <MotionDiv whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 24 }}>
      <article className="glass flex h-full flex-col rounded-lg p-6 transition hover:border-cobalt/50">
        <p className="eyebrow">{category}</p>
        <h2 className="mt-4 font-serif text-3xl text-white">{title}</h2>
        <p className="mt-4 flex-1 leading-7 text-steel">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span key={tool} className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-steel">
              {tool}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${slug}`}
          className="mt-8 inline-flex text-sm font-semibold text-cobalt transition hover:text-white"
        >
          View Details
        </Link>
      </article>
    </MotionDiv>
  );
}
