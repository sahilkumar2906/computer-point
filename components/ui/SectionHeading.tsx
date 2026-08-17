interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`mb-10 flex max-w-2xl flex-col md:mb-14 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-wide uppercase ${
            light ? "bg-white/10 text-white/80" : "bg-[var(--brand-blue)]/8 text-[var(--brand-blue)]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>{subtitle}</p>
      )}
    </div>
  );
}
