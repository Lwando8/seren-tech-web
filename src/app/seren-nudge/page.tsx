import type { Metadata } from "next";
import { ProductScreenshotCarousel } from "@/components/ui/ProductScreenshotCarousel";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAvailableSerenNudgeScreenshots } from "@/lib/seren-nudge-screenshots";
import { serenNudgeAudience, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seren Nudge",
  description:
    "Seren Nudge helps teams manage requests, QR flows, ready alerts, and pickup communication from one simple operational layer.",
  openGraph: {
    title: `Seren Nudge | ${siteConfig.name}`,
    description:
      "Queue, order, and pickup communication made simpler. Now in controlled testing.",
  },
};

const features = [
  {
    title: "QR-based customer access",
    description: "Customers scan a QR code to view menus, place orders, or check order status.",
  },
  {
    title: "Order tracking",
    description: "Customers can follow their order from placed to ready without asking staff.",
  },
  {
    title: "Ready-for-pickup alerts",
    description: "Automatic notifications tell customers the moment their order is ready.",
  },
  {
    title: "Business order dashboard",
    description: "Staff manage active orders, preparation, and readiness from one clean view.",
  },
  {
    title: "Pickup and collection support",
    description: "Secure collection flows help match the right order to the right customer.",
  },
  {
    title: "WhatsApp-assisted ordering and updates",
    description: "Customers can order and receive updates through familiar WhatsApp flows.",
  },
];

export default function SerenNudgePage() {
  const screenshots = getAvailableSerenNudgeScreenshots();

  return (
    <>
      <Hero
        eyebrow="Now testing"
        title="Seren Nudge"
        description="Queue, order, and pickup communication made simpler."
        primaryCta={{ href: "/seren-nudge/request-access", label: "Request access" }}
        secondaryCta={{ href: "/contact", label: "Contact Seren Tech" }}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-lg leading-relaxed text-muted sm:text-xl">{serenNudgeAudience}</p>
        <p className="mt-5 leading-relaxed text-muted">
          Seren Nudge helps teams manage requests, QR flows, ready alerts, and pickup communication
          from one simple operational layer. Customers can scan, track, or receive updates through
          supported channels, while teams manage active requests, pickup readiness, and collection
          from a clean dashboard.
        </p>
      </section>

      <section
        className="border-y border-border bg-surface"
        aria-labelledby="features-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeader
            id="features-heading"
            eyebrow="What it does"
            title="One simple operational layer"
            description="Practical workflows for teams that need clearer request handling, status updates, and pickup communication."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <h3 className="font-semibold text-charcoal">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {screenshots.length > 0 && (
        <section
          className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
          aria-labelledby="gallery-heading"
        >
          <header className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-teal">
              Product screens
            </p>
            <h2
              id="gallery-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl"
            >
              See Seren Nudge in action
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              From customer QR flows to business order control, Seren Nudge keeps the pickup
              journey simple and visible.
            </p>
          </header>

          <div className="mt-10 -mx-5 px-5 sm:-mx-8 sm:px-8">
            <ProductScreenshotCarousel
              screenshots={screenshots}
              labelledBy="gallery-heading"
            />
          </div>
        </section>
      )}

      <CTASection
        title="Interested in testing Seren Nudge?"
        description="We're working with a small group of organisations during testing. Tell us about your environment and we'll be in touch."
        primaryLabel="Request access"
        primaryHref="/seren-nudge/request-access"
      />
    </>
  );
}
