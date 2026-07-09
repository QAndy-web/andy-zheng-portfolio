import { SectionHeading } from "@/components/SectionHeading";
import { MotionDiv } from "@/components/Motion";
import { profileHighlights } from "@/data/profile";

export default function ProfilePage() {
  return (
    <div id="top" className="container-pad py-16 sm:py-24">
      <SectionHeading
        eyebrow="01 / Profile"
        title="Profile"
        description="Curious about how economics, markets, and people shape business decisions."
      />

      <section className="mx-auto mt-14 grid max-w-5xl gap-6 text-lg leading-9 text-steel">
        <p>
          I am an Economics student interested in the way markets, companies, and people interact. Finance appeals to me
          because it combines analytical rigor with judgment, communication, and a clear view of how businesses grow.
        </p>
        <p>
          My professional interests include investment banking, valuation, M&A, market research, and global business. I am
          building technical skills through Excel financial modeling, DCF valuation, comparable company analysis, revenue
          forecasting, and R statistics projects.
        </p>
        <p>
          I also bring an international perspective, with interest in the U.S., China, Asia-Pacific markets, and Japanese
          culture. I want my work to connect data with context and help people make sharper decisions.
        </p>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {profileHighlights.map((item) => (
          <MotionDiv
            key={item.title}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="glass rounded-lg p-6"
          >
            <item.icon className="h-7 w-7 text-gold" aria-hidden="true" />
            <h2 className="mt-6 font-serif text-2xl text-white">{item.title}</h2>
            <p className="mt-4 leading-7 text-steel">{item.description}</p>
          </MotionDiv>
        ))}
      </section>
    </div>
  );
}
