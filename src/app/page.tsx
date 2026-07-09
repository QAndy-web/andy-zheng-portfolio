import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { MotionDiv, MotionSection } from "@/components/Motion";
import { PreviewCard } from "@/components/PreviewCard";
import { floatingTopics, previews, profile } from "@/data/profile";

export default function Home() {
  return (
    <div id="top">
      <section className="container-pad grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="eyebrow">{profile.label}</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight text-white/92 sm:text-4xl">
            {profile.headline}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">{profile.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/resume">View Resume</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              Explore Projects
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Contact Me
            </ButtonLink>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="relative min-h-[520px]"
          aria-label="Finance and economics focus areas"
        >
          <div className="absolute inset-0 rounded-full bg-cobalt/10 blur-3xl" aria-hidden="true" />
          <div className="glass relative h-full min-h-[520px] overflow-hidden rounded-lg p-6">
            <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-gold/30" />
            <div className="absolute bottom-10 left-8 h-44 w-44 rounded-full border border-cobalt/25" />
            <div className="relative grid h-full content-center gap-4">
              {floatingTopics.map((topic, index) => (
                <div
                  key={topic}
                  className={`rounded-lg border border-line bg-ink/70 p-5 shadow-glow backdrop-blur transition hover:border-gold/40 ${
                    index % 2 === 0 ? "mr-10" : "ml-10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-serif text-2xl text-white">{topic}</span>
                    <span className="text-xs font-semibold text-gold">0{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionDiv>
      </section>

      <MotionSection
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="container-pad pb-24"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Portfolio Sections</p>
            <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">Explore the site</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-white">
            Start a conversation
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {previews.map((preview) => (
            <PreviewCard key={preview.href} {...preview} />
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
