import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { MotionDiv } from "@/components/Motion";

type PreviewCardProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function PreviewCard({ number, title, description, href, icon: Icon }: PreviewCardProps) {
  return (
    <MotionDiv
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="h-full"
    >
      <Link href={href} className="glass group flex h-full flex-col rounded-lg p-6 transition hover:border-gold/45">
        <div className="flex items-start justify-between gap-4">
          <span className="eyebrow">{number} / {title}</span>
          <span className="rounded-full border border-line bg-white/5 p-3 text-gold transition group-hover:border-gold/50">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-8 text-lg leading-8 text-white">{description}</p>
        <span className="mt-8 inline-flex text-sm font-semibold text-cobalt transition group-hover:text-white">
          Open section
        </span>
      </Link>
    </MotionDiv>
  );
}
