import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAvailableSerenNudgeScreenshots } from "@/lib/seren-nudge-screenshots";
import {
  howWeThink,
  serenNudgeFeatureChips,
  siteConfig,
  whoWeWorkWith,
} from "@/lib/site";

export default function HomePage() {
  const screenshots = getAvailableSerenNudgeScreenshots();
  const heroShot =
    screenshots.find((s) => s.src.includes("business-dashboard")) ??
    screenshots.find((s) => s.src.includes("customer-tracking")) ??
    screenshots[0];
  const previewShots = screenshots
    .filter((s) =>
      ["business-dashboard", "customer-tracking", "business-orders"].some((key) =>
        s.src.includes(key),
      ),
    )
    .slice(0, 2);

  return (
    <>
      <Hero
        eyebrow={siteConfig.legalName}
        title="Practical technology for operations that need clarity."
        description="Seren Tech builds digital systems that help teams manage requests, communication, customer flow, and everyday operational work with more confidence."
        primaryCta={{ href: "/seren-nudge", label: "View Seren Nudge" }}
        secondaryCta={{ href: "/seren-nudge/request-access", label: "Request access" }}
        visual={
          heroShot ? (
            <div className="relative mx-auto max-w-[280px] sm:max-w-[300px] lg:ml-auto lg:mr-4">
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

      <section
        className="mx-auto max-w-6xl section-pad"
        aria-labelledby="now-testing-heading"
      >
        <SectionHeader
          id="now-testing-heading"
          eyebrow="Now testing"
          title="Seren Nudge"
          description="Queue, order, QR, pickup, and ready-alert workflows for customer-facing operations."
        />

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft lg:rounded-[2rem]">
          <div className="grid items-stretch lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-deep-teal">
                Current product
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                Queue, order, and pickup communication made simpler.
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                Seren Nudge helps teams manage requests, QR flows, ready alerts, and pickup
                communication from one simple operational layer.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {serenNudgeFeatureChips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-charcoal"
                  >
                    {chip}
                  </li>
                ))}
              </ul>

              <Link
                href="/seren-nudge"
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-deep-teal px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:bg-coral-hover hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2"
              >
                Explore Seren Nudge
              </Link>
            </div>

            <div className="relative border-t border-border bg-[linear-gradient(160deg,_var(--background)_0%,_#eef5f3_100%)] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              {previewShots.length > 0 ? (
                <div className="relative mx-auto flex max-w-sm items-end justify-center gap-4 sm:gap-5">
                  {previewShots.map((shot, index) => (
                    <div
                      key={shot.src}
                      className={
                        index === 0
                          ? "w-[48%] shrink-0"
                          : "mb-6 w-[42%] shrink-0 opacity-95"
                      }
                    >
                      <ScreenshotFrame
                        src={shot.src}
                        alt={shot.alt}
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-full min-h-[240px] items-center justify-center rounded-2xl border border-dashed border-border bg-surface/60 px-6 text-center text-sm text-muted">
                  Product screens coming soon
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-border bg-surface"
        aria-labelledby="who-heading"
      >
        <div className="mx-auto max-w-3xl section-pad text-center">
          <SectionHeader
            id="who-heading"
            eyebrow="Audience"
            title={whoWeWorkWith.title}
            description={whoWeWorkWith.description}
            align="center"
          />
        </div>
      </section>

      <section className="bg-charcoal text-white" aria-labelledby="think-heading">
        <div className="mx-auto max-w-6xl section-pad">
          <SectionHeader
            id="think-heading"
            eyebrow="How we think"
            title="Built around clarity, communication, and momentum."
            light
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {howWeThink.map((item) => (
              <div
                key={item.title}
                className="card-lift rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to explore Seren Nudge?"
        description="Request controlled testing access, or tell us about the operational workflows you're trying to improve."
        primaryLabel="Request access"
        primaryHref="/seren-nudge/request-access"
      />
    </>
  );
}
