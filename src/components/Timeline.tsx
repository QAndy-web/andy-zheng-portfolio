import { timelineItems } from "@/data/profile";

export function Timeline() {
  return (
    <ol className="mx-auto mt-16 max-w-4xl">
      {timelineItems.map((item, index) => (
        <li key={item} className="grid gap-5 sm:grid-cols-[120px_1fr]">
          <div className="pb-10 text-sm font-semibold text-gold">0{index + 1}</div>
          <div className="relative border-l border-line pb-10 pl-8">
            <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-gold shadow-[0_0_0_8px_rgba(215,180,106,0.12)]" />
            <div className="glass rounded-lg p-6">
              <h2 className="font-serif text-2xl text-white">{item}</h2>
              <p className="mt-3 leading-7 text-steel">
                A step in a longer path of building discipline, perspective, technical skill, and professional direction.
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
