import Link from "next/link";
import type { ReactNode } from "react";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  dark?: boolean;
  /** Optional product visual (e.g. screenshot frame) */
  visual?: ReactNode;
  children?: ReactNode;
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  dark = false,
  visual,
  children,
}: HeroProps) {
  const hasVisual = Boolean(visual);

  return (
    <section
      className={`relative overflow-hidden ${
        dark
          ? "bg-ink text-white"
          : "bg-[radial-gradient(ellipse_at_top_right,_var(--teal-soft),_transparent_55%),linear-gradient(to_bottom,_var(--surface),_var(--background))]"
      }`}
    >
      {!dark && (
        <>
          <div
            className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-teal-soft blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-coral-soft blur-3xl"
            aria-hidden="true"
          />
        </>
      )}

      <div
        className={`relative mx-auto max-w-6xl section-pad ${
          hasVisual
            ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16"
            : ""
        }`}
      >
        <div>
          {eyebrow && (
            <p
              className={`mb-4 text-sm font-semibold uppercase tracking-[0.14em] ${
                dark ? "text-accent-teal" : "text-deep-teal"
              }`}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className={`max-w-3xl font-semibold tracking-tight ${
              hasVisual
                ? "text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
                : "text-4xl leading-tight sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl ${
              dark ? "text-white/70" : "text-muted"
            }`}
          >
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-deep-teal px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:bg-coral-hover hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className={`inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2 ${
                    dark
                      ? "border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                      : "border-border bg-surface/80 text-charcoal hover:border-deep-teal/25 hover:bg-surface"
                  }`}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          {children}
        </div>

        {visual && (
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">{visual}</div>
        )}
      </div>
    </section>
  );
}
