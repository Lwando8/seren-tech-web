import type { Metadata } from "next";
import Link from "next/link";
import { EventVendorPricingCard, PricingCard } from "@/components/ui/PricingCard";
import {
  eventVendorPricing,
  pricingFaq,
  subscriptionPlans,
  trialLimits,
} from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Seren Nudge pricing — complimentary Free Trial, Starter and Pro subscriptions, and event vendor pay-as-you-go rates.",
  openGraph: {
    title: `Pricing | ${siteConfig.name}`,
    description:
      "Try Seren Nudge free, then choose Starter, Pro, or event vendor pricing that fits your business.",
  },
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <header className="mb-16 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-teal">
          Seren Nudge
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Start with a complimentary Free Trial, then choose the plan that fits your business — or
          pay per order at events.
        </p>
      </header>

      <section aria-labelledby="subscriptions-heading">
        <h2 id="subscriptions-heading" className="sr-only">
          Business subscriptions
        </h2>
        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {subscriptionPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              subtitle={plan.subtitle}
              price={plan.price}
              priceSuffix={plan.priceSuffix}
              description={plan.description}
              features={plan.features}
              trialEndsNote={"trialEndsNote" in plan ? plan.trialEndsNote : undefined}
              cta={plan.cta}
              ctaNote={plan.ctaNote}
              highlighted={plan.highlighted}
              badge={plan.badge}
            />
          ))}
        </div>
      </section>

      <section className="mt-10 lg:mt-12" aria-labelledby="event-vendors-heading">
        <h2 id="event-vendors-heading" className="sr-only">
          Event vendor pricing
        </h2>
        <EventVendorPricingCard
          title={eventVendorPricing.title}
          subtitle={eventVendorPricing.subtitle}
          description={eventVendorPricing.description}
          firstEvent={eventVendorPricing.firstEvent}
          futureEvents={eventVendorPricing.futureEvents}
          billingNote={eventVendorPricing.billingNote}
          cta={eventVendorPricing.cta}
        />
      </section>

      <section
        className="mt-16 rounded-3xl border border-border bg-surface p-8 sm:p-10"
        aria-labelledby="trial-explainer-heading"
      >
        <h2
          id="trial-explainer-heading"
          className="text-2xl font-semibold tracking-tight text-charcoal"
        >
          How the Free Trial Works
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Every new business receives a complimentary Seren Nudge Free Trial.
        </p>
        <p className="mt-4 font-medium text-charcoal">The trial includes:</p>
        <ul className="mt-3 space-y-2 text-muted">
          <li>• {trialLimits.qrScans} QR scans</li>
          <li>• {trialLimits.menuOrders} menu orders</li>
          <li>• Full platform access</li>
          <li>• Up to {trialLimits.days} days</li>
        </ul>
        <p className="mt-6 leading-relaxed text-muted">
          The trial ends when any one of these limits is reached.
        </p>
        <p className="mt-3 leading-relaxed text-muted">
          Upgrade at any time to continue accepting customer orders.
        </p>
      </section>

      <section className="mt-16" aria-labelledby="faq-heading">
        <h2
          id="faq-heading"
          className="text-2xl font-semibold tracking-tight text-charcoal"
        >
          Frequently asked questions
        </h2>
        <dl className="mt-8 space-y-8">
          {pricingFaq.map((item) => (
            <div key={item.question} className="rounded-2xl border border-border bg-background p-6">
              <dt className="font-semibold text-charcoal">{item.question}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16 rounded-3xl border border-border bg-teal-soft p-8 text-center sm:p-10">
        <h2 className="text-xl font-semibold text-charcoal">
          Ready to try Seren Nudge?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          Start your complimentary Free Trial or speak to Seren Tech about the right plan for your
          business.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
