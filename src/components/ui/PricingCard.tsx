import Link from "next/link";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PricingCardProps = {
  name: string;
  subtitle?: string | null;
  price?: string | null;
  priceSuffix?: string | null;
  description: string;
  features: readonly string[];
  trialEndsNote?: readonly string[];
  cta: string;
  ctaNote?: string | null;
  highlighted?: boolean;
  badge?: string | null;
  href?: string;
};

export function PricingCard({
  name,
  subtitle,
  price,
  priceSuffix,
  description,
  features,
  trialEndsNote,
  cta,
  ctaNote,
  highlighted = false,
  badge,
  href = "/contact",
}: PricingCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border bg-surface p-8 shadow-[0_8px_30px_rgba(28,28,30,0.06)] sm:p-9 ${
        highlighted
          ? "border-coral/40 ring-1 ring-coral/20"
          : "border-border"
      }`}
    >
      <div className="min-h-[1.75rem]">
        {badge && (
          <span className="inline-block rounded-full bg-coral px-3 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        )}
      </div>

      <div className="mt-2">
        <h3 className="text-xl font-semibold text-charcoal">{name}</h3>
        {subtitle && (
          <p className="mt-1 text-sm font-medium text-accent-teal">{subtitle}</p>
        )}
      </div>

      <div className="mt-5 min-h-[3.5rem]">
        {price ? (
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tight text-charcoal sm:text-[2.75rem]">
              {price}
            </span>
            {priceSuffix && (
              <span className="text-base text-muted">{priceSuffix}</span>
            )}
          </div>
        ) : (
          <p className="text-2xl font-semibold tracking-tight text-charcoal">
            Try before you subscribe
          </p>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>

      <ul className="mt-8 flex-1 space-y-3.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-charcoal">
            <CheckIcon
              className={`mt-0.5 size-5 shrink-0 ${
                highlighted ? "text-coral" : "text-gold"
              }`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {trialEndsNote && (
        <div className="mt-6 rounded-2xl border border-border bg-background p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-light">
            Trial ends after
          </p>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {trialEndsNote.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-muted-light">(whichever comes first)</p>
        </div>
      )}

      <div className="mt-8">
        <Link
          href={href}
          className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 ${
            highlighted
              ? "bg-coral text-white hover:bg-coral-hover"
              : "border border-border bg-background text-charcoal hover:border-charcoal/20 hover:bg-surface"
          }`}
        >
          {cta}
        </Link>
        {ctaNote && (
          <p className="mt-3 text-center text-xs text-muted-light">{ctaNote}</p>
        )}
      </div>
    </article>
  );
}

type EventVendorPricingCardProps = {
  title: string;
  subtitle: string;
  description: string;
  firstEvent: { amount: string; label: string };
  futureEvents: { amount: string; label: string };
  billingNote: string;
  cta: string;
  href?: string;
};

export function EventVendorPricingCard({
  title,
  subtitle,
  description,
  firstEvent,
  futureEvents,
  billingNote,
  cta,
  href = "/contact",
}: EventVendorPricingCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-gradient-to-br from-ink to-charcoal-soft p-8 text-white shadow-[0_12px_40px_rgba(28,28,30,0.12)] sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold">{subtitle}</p>
      <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/75">{description}</p>

      <div className="mt-8 grid flex-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-medium text-gold">{firstEvent.label}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold">{firstEvent.amount}</span>
            <span className="text-sm text-white/70">per completed order</span>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-medium text-gold">{futureEvents.label}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold">{futureEvents.amount}</span>
            <span className="text-sm text-white/70">per completed order</span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-white/80">{billingNote}</p>

      <div className="mt-8">
        <Link
          href={href}
          className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-soft"
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
