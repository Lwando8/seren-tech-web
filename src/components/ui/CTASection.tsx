import Link from "next/link";
import { siteConfig } from "@/lib/site";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  showEmail?: boolean;
};

export function CTASection({
  title,
  description,
  primaryLabel = "Contact Seren Tech",
  primaryHref = "/contact",
  showEmail = true,
}: CTASectionProps) {
  return (
    <section className="bg-charcoal text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-charcoal-soft px-8 py-14 sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-coral/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">{description}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-soft"
              >
                {primaryLabel}
              </Link>
              {showEmail && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-soft"
                >
                  {siteConfig.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
