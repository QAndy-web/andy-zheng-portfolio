import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";

export default function TimelinePage() {
  return (
    <div id="top" className="container-pad py-16 sm:py-24">
      <SectionHeading
        eyebrow="05 / Timeline"
        title="My Path"
        description="A clean vertical timeline of the experiences and interests shaping my direction."
      />
      <Timeline />
    </div>
  );
}
