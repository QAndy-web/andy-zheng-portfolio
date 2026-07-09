type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
      {description ? <p className="mt-5 text-base leading-8 text-steel sm:text-lg">{description}</p> : null}
    </div>
  );
}
