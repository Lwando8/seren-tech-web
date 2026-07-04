import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicesPageItems } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Seren Tech helps organisations design and build practical software systems — from workflow analysis to custom app development.",
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description:
      "Seren Tech helps organisations design and build practical software systems — from workflow analysis to custom app development.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Design and build practical software systems"
        description="Beyond our own products, Seren Tech works with organisations to analyse workflows, define product direction, and build custom operational technology."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow="What we offer"
          title="From idea to working system"
          description="We bring the same practical mindset from our product ecosystem to custom engagements — focused on clarity, usability, and real-world deployment."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {servicesPageItems.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-charcoal text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeader
            eyebrow="How we work"
            title="Practical from the first conversation"
            description="We start by understanding your environment — not by pitching a generic solution."
            light
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understand",
                text: "We map your current workflows, pain points, and the people involved.",
              },
              {
                step: "02",
                title: "Design",
                text: "We define a practical product direction with clear priorities and scope.",
              },
              {
                step: "03",
                title: "Build & deploy",
                text: "We develop, test, and launch systems designed for your operational reality.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Have a project in mind?"
        description="Tell us what you're building, managing, or trying to improve. We'll help you think through the right system."
      />
    </>
  );
}
