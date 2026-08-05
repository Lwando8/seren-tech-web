import type { Metadata } from "next";
import { ProductScreenshotCarousel } from "@/components/ui/ProductScreenshotCarousel";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAvailableSerenNudgeScreenshots } from "@/lib/seren-nudge-screenshots";
import { serenNudgeFeatureChips, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seren Nudge",
  description:
    "Seren Nudge helps teams manage customer orders, QR flows, ready alerts, and pickup communication from one simple operational layer.",
  openGraph: {
    title: `Seren Nudge | ${siteConfig.name}`,
    description:
      "Queue, order, and pickup communication made simpler. Now in controlled testing.",
  },
};

const explanationPanels = [
  {
    title: "Customer flow",
    description:
      "Customers can scan, track, or receive updates through supported channels.",
  },
  {
    title: "Business control",
    description:
      "Teams can view active orders, manage pickup readiness, and keep the queue moving.",
  },
  {
    title: "Pickup clarity",
    description:
      "Ready alerts and status updates help reduce confusion around collection.",
  },
] as const;

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
  const heroShot =
    screenshots.find((s) => s.src.includes("business-dashboard")) ??
    screenshots.find((s) => s.src.includes("customer-tracking")) ??
    screenshots[0];

  return (
    <>
      <Hero
        eyebrow="Now testing"
        title="Queue, order, and pickup communication made simpler."
        description="Seren Nudge helps teams manage customer orders, QR flows, ready alerts, and pickup communication from one simple operational layer."
        primaryCta={{ href: "/seren-nudge/request-access", label: "Request access" }}
        secondaryCta={{ href: "/contact", label: "Contact Seren Tech" }}
        visual={
          heroShot ? (
            <div className="relative mx-auto max-w-[280px] sm:max-w-[300px] lg:ml-auto">
              <div
                className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_center,_var(--teal-soft),_transparent_70%)]"
                aria-hidden="true"
              />
              <ScreenshotFrame
                src={heroShot.src}
                alt={heroShot.alt}
                caption={heroShot.caption}
                priority
              />
            </div>
          ) : undefined
        }
      />

      <section className="mx-auto max-w-6xl section-pad" aria-labelledby="explain-heading">
        <SectionHeader
          id="explain-heading"
          eyebrow="Seren Nudge"
          title="One simple operational layer"
          description="Practical workflows for teams that need clearer request handling, status updates, and pickup communication."
        />

        <ul className="mt-8 flex flex-wrap gap-2">
          {serenNudgeFeatureChips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-charcoal shadow-soft"
            >
              {chip}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {explanationPanels.map((panel) => (
            <div
              key={panel.title}
              className="card-lift rounded-2xl border border-border bg-surface p-6 shadow-soft sm:p-7"
            >
              <h3 className="text-lg font-semibold text-charcoal">{panel.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{panel.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface" aria-labelledby="features-heading">
        <div className="mx-auto max-w-6xl section-pad">
          <SectionHeader
            id="features-heading"
            eyebrow="What it does"
            title="Built for the moments that matter"
            description="From first scan to ready-for-pickup — keep customers informed and teams in control."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-lift rounded-2xl border border-border bg-background p-6"
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
          className="mx-auto max-w-6xl section-pad"
          aria-labelledby="gallery-heading"
        >
          <header className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-deep-teal">
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
