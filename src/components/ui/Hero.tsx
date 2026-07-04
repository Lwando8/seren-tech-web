import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  dark?: boolean;
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  dark = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        dark
          ? "bg-charcoal text-white"
          : "bg-gradient-to-b from-surface via-surface to-background"
      }`}
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-soft blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-coral-soft blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        {eyebrow && (
          <p
            className={`mb-4 text-sm font-semibold uppercase tracking-widest ${
              dark ? "text-gold" : "text-accent-teal"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
          {title}
        </h1>
        <p
          className={`mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl ${
            dark ? "text-white/75" : "text-muted"
          }`}
        >
          {description}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 ${
                  dark
                    ? "border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                    : "border-border text-charcoal hover:border-charcoal/20 hover:bg-surface"
                }`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
