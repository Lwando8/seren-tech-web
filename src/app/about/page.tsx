import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

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

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-6 text-lg leading-relaxed text-muted">
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

        <blockquote className="mt-12 rounded-2xl border border-border bg-surface p-8">
          <p className="text-xl font-medium leading-relaxed text-charcoal">
            &ldquo;Build technology that brings clarity, dignity, and momentum to everyday
            operations.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-muted">Our ethos</footer>
        </blockquote>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeader
            eyebrow="What we focus on"
            title="Systems that make operations visible"
            description="We are not interested in technology for its own sake. We build tools that help real teams do their work better."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Operational clarity",
                text: "Everyone knows the current state — requests, tasks, orders, or service updates.",
              },
              {
                title: "Timely communication",
                text: "The right people are notified at the right moment, with the context they need.",
              },
              {
                title: "Accountability",
                text: "Actions are recorded, traceable, and connected to the people responsible.",
              },
              {
                title: "Practical design",
                text: "Interfaces that work under pressure, on mobile, and in the field.",
              },
              {
                title: "Local relevance",
                text: "Built with South African operational realities in mind.",
              },
              {
                title: "Scalable foundations",
                text: "Systems designed to grow as your operational needs evolve.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow="What we build"
          title="Practical software for everyday operations"
          description="Seren Tech builds practical software for business operations, customer communication, and everyday workflow clarity — starting with queue and order communication."
        />
        <p className="mt-6 text-muted leading-relaxed">
          See{" "}
          <Link href="/seren-nudge" className="font-medium text-coral hover:underline">
            Seren Nudge
          </Link>
          , our current product in testing, or learn about our{" "}
          <Link href="/services" className="font-medium text-coral hover:underline">
            custom development services
          </Link>
          .
        </p>
      </section>

      <CTASection
        title="Work with Seren Tech"
        description="Tell us about your organisation and the operational challenges you're facing. We'll help you think through the right approach."
      />
    </>
  );
}
