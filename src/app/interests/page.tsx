import { MotionDiv } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { interests } from "@/data/profile";

export default function InterestsPage() {
  return (
    <div id="top" className="container-pad py-16 sm:py-24">
      <SectionHeading
        eyebrow="04 / Interests & Habits"
        title="Interests & Habits"
        description="A more personal view of the routines, curiosities, and global perspective behind the resume."
      />

      <section className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {interests.map((item) => (
          <MotionDiv
            key={item.title}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="glass rounded-lg p-6"
          >
            <item.icon className="h-7 w-7 text-gold" aria-hidden="true" />
            <h2 className="mt-8 font-serif text-3xl text-white">{item.title}</h2>
            <p className="mt-4 leading-8 text-steel">{item.description}</p>
          </MotionDiv>
        ))}
      </section>
    </div>
  );
}
