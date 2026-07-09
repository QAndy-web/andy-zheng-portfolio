import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-ink/50">
      <div className="container-pad flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-2xl text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-steel">{profile.label}</p>
        </div>
        <Link
          href="#top"
          className="inline-flex items-center gap-2 text-sm font-semibold text-steel transition hover:text-white"
          aria-label="Back to top"
        >
          Back to top
          <ArrowUp className="h-4 w-4" />
        </Link>
      </div>
    </footer>
  );
}
