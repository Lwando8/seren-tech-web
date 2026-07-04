import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Seren Nudge pricing plans for businesses and event vendors.",
  openGraph: {
    title: `Pricing | ${siteConfig.name}`,
    description: "Seren Nudge pricing plans for businesses and event vendors.",
  },
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <header className="mb-16 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Seren Nudge Pricing
        </h1>
        <p className="mt-4 text-lg text-muted">
          Simple, transparent pricing for businesses and event vendors
        </p>
      </header>

      <div className="mb-20">
        <h2 className="mb-8 text-center text-2xl font-semibold text-charcoal">
          Business Subscriptions
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Free Plan */}
          <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-charcoal">Free</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-charcoal">R0</span>
              <span className="ml-2 text-muted">/month</span>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-muted">
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                250 QR scans/month
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                50 menu orders/month
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                WhatsApp ordering
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                QR code ordering
              </li>
            </ul>
          </div>

          {/* Starter Plan */}
          <div className="rounded-xl border-2 border-coral bg-white p-8 shadow-lg">
            <div className="mb-2 inline-block rounded-full bg-coral px-3 py-1 text-xs font-semibold text-white">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-charcoal">Starter</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-charcoal">R599</span>
              <span className="ml-2 text-muted">/month</span>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-muted">
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                3,500 QR scans/month
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                750 menu orders/month
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                WhatsApp ordering
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                QR code ordering
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Priority support
              </li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-charcoal">Pro</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-charcoal">R1,499</span>
              <span className="ml-2 text-muted">/month</span>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-muted">
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                7,500 QR scans/month
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                2,000 menu orders/month
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                WhatsApp ordering
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                QR code ordering
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Priority support
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-3 mt-0.5 size-5 flex-shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advanced analytics
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-gradient-to-br from-charcoal to-charcoal-soft p-8 text-white shadow-lg sm:p-12">
        <h2 className="mb-6 text-2xl font-semibold">Event Vendor Pricing</h2>
        <p className="mb-8 text-white/80">
          Pay-as-you-go pricing for event vendors. No subscription required.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-lg font-semibold text-gold">First Event</h3>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">R2.50</span>
              <span className="ml-2 text-white/70">per completed order</span>
            </div>
          </div>
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-lg font-semibold text-gold">Future Events</h3>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">R3.50</span>
              <span className="ml-2 text-white/70">per completed order</span>
            </div>
          </div>
        </div>
        <p className="mt-8 rounded-lg bg-white/5 p-4 text-sm text-white/90">
          <strong className="text-gold">Only completed orders are billed.</strong> Cancelled,
          failed, draft, and abandoned orders are not charged.
        </p>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-teal-soft p-8 text-center">
        <h2 className="mb-3 text-xl font-semibold text-charcoal">
          Need a custom plan or have questions?
        </h2>
        <p className="mb-6 text-muted">
          Contact us to discuss enterprise pricing or custom requirements.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center justify-center rounded-lg bg-coral px-6 py-3 font-semibold text-white transition-colors hover:bg-coral-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
