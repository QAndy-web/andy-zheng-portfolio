import { Github, Linkedin, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <div id="top" className="container-pad py-16 sm:py-24">
      <SectionHeading
        eyebrow="06 / Contact"
        title="Let's Connect"
        description="I'm always open to conversations about finance, markets, internships, research, and global business."
      />

      <section className="mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-3">
        <a href={`mailto:${profile.email}`} className="glass rounded-lg p-6 transition hover:border-gold/45">
          <Mail className="h-7 w-7 text-gold" aria-hidden="true" />
          <h2 className="mt-6 font-serif text-2xl text-white">Email</h2>
          <p className="mt-3 break-words text-sm text-steel">{profile.email}</p>
          <p className="mt-2 break-words text-sm text-steel">{profile.secondaryEmail}</p>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="glass rounded-lg p-6 transition hover:border-gold/45">
          <Linkedin className="h-7 w-7 text-gold" aria-hidden="true" />
          <h2 className="mt-6 font-serif text-2xl text-white">LinkedIn</h2>
          <p className="mt-3 text-sm text-steel">Professional profile placeholder</p>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="glass rounded-lg p-6 transition hover:border-gold/45">
          <Github className="h-7 w-7 text-gold" aria-hidden="true" />
          <h2 className="mt-6 font-serif text-2xl text-white">GitHub</h2>
          <p className="mt-3 text-sm text-steel">Project profile placeholder</p>
        </a>
      </section>

      <div className="mt-12 flex justify-center">
        <ButtonLink href={profile.resumeUrl}>View Resume PDF</ButtonLink>
      </div>
    </div>
  );
}
