import { Download } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { resume, profile } from "@/data/profile";

export default function ResumePage() {
  return (
    <div id="top" className="container-pad py-16 sm:py-24">
      <SectionHeading
        eyebrow="02 / Resume"
        title="Resume"
        description="A polished online resume view for finance, investment banking, internship, and university conversations."
      />

      <div className="mt-10 flex justify-center">
        <a
          href={profile.resumeUrl}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[#e5c77f]"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6">
        <section className="glass rounded-lg p-6 sm:p-8">
          <p className="eyebrow">Education</p>
          {resume.education.map((item) => (
            <div key={item.title} className="mt-6">
              <h2 className="font-serif text-3xl text-white">{item.title}</h2>
              <p className="mt-2 text-lg text-cobalt">{item.institution}</p>
              {item.details.map((detail) => (
                <p key={detail} className="mt-4 leading-7 text-steel">{detail}</p>
              ))}
            </div>
          ))}
        </section>

        <section className="glass rounded-lg p-6 sm:p-8">
          <p className="eyebrow">Experience</p>
          <div className="mt-6 grid gap-5">
            {resume.experience.map((item) => (
              <article key={item.role} className="rounded-lg border border-line bg-white/[0.035] p-5">
                <h2 className="font-serif text-2xl text-white">{item.role}</h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{item.company}</p>
                <p className="mt-4 leading-7 text-steel">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass rounded-lg p-6 sm:p-8">
          <p className="eyebrow">Skills</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {resume.skills.map((skill) => (
              <span key={skill} className="rounded-full border border-line bg-white/5 px-4 py-2 text-sm text-white">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
