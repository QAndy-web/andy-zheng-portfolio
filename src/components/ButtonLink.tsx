import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", external = false }: ButtonLinkProps) {
  const styles = {
    primary: "border-gold bg-gold text-ink hover:bg-[#e5c77f]",
    secondary: "border-white/18 bg-white/8 text-white hover:border-cobalt hover:bg-cobalt/12",
    ghost: "border-transparent bg-transparent text-steel hover:text-white",
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
