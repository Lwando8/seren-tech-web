type SectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.14em] ${
            light ? "text-accent-teal" : "text-deep-teal"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/65" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
