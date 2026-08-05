import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { howWeThink, siteConfig, whoWeWorkWith } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Seren Tech — a South African technology company building practical products for operational clarity.",
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "Learn about Seren Tech — a South African technology company building practical products for operational clarity.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="Technology with direction and purpose"
        description="Seren Tech is a South African technology company building practical products that help organisations operate with more clarity, communication, and confidence."
      />

      <section className="mx-auto max-w-3xl section-pad">
        <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted">
          <p>
            We build for the environments where things actually happen — front counters, service
            desks, busy floors, and teams coordinating under pressure. Our products are designed to
            reduce friction, improve visibility, and help people coordinate without unnecessary
            complexity.
          </p>
          <p>
            The name <strong className="font-semibold text-charcoal">Seren</strong> reflects the
            idea of a guiding star: calm, clear, reliable direction through complexity. That is the
            standard we hold ourselves to — technology that helps people understand what is
            happening, who needs to act, and what comes next.
          </p>
        </div>

        <blockquote className="mt-12 rounded-2xl border border-border bg-surface p-8 shadow-soft">
          <p className="text-xl font-medium leading-relaxed text-charcoal">
            &ldquo;Build technology that brings clarity, dignity, and momentum to everyday
            operations.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-muted">Our ethos</footer>
        </blockquote>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl section-pad">
          <SectionHeader
            eyebrow="How we think"
            title="Built around clarity, communication, and momentum."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {howWeThink.map((item) => (
              <div
                key={item.title}
                className="card-lift rounded-2xl border border-border bg-background p-6 shadow-soft"
              >
                <h3 className="font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl section-pad">
        <SectionHeader
          eyebrow="Audience"
          title={whoWeWorkWith.title}
          description={whoWeWorkWith.description}
        />
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl section-pad">
          <SectionHeader
            eyebrow="What we build"
            title="Practical software for everyday operations"
            description="Seren Tech builds practical software for business operations, customer communication, and everyday workflow clarity — starting with queue and order communication."
          />
          <p className="mt-6 leading-relaxed text-muted">
            See{" "}
            <Link
              href="/seren-nudge"
              className="font-medium text-deep-teal underline-offset-2 hover:underline"
            >
              Seren Nudge
            </Link>
            , our current product in testing.
          </p>
        </div>
      </section>

      <CTASection
        title="Work with Seren Tech"
        description="Tell us about your organisation and the operational challenges you're facing. We'll help you think through the right approach."
      />
    </>
  );
}
