import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { homepageServices } from "@/lib/services";
import { whySerenTech } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Seren Tech (Pty) Ltd"
        title="Practical technology for real-world operations."
        description="Seren Tech builds digital systems that help businesses communicate clearly, manage workflows, and reduce operational friction."
        primaryCta={{ href: "/seren-nudge", label: "View Seren Nudge" }}
        secondaryCta={{ href: "/contact", label: "Contact Seren Tech" }}
      />

      <section
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"
        aria-labelledby="now-testing-heading"
      >
        <SectionHeader
          id="now-testing-heading"
          eyebrow="Now testing"
          title="Seren Nudge"
          description="Queue, order, QR, pickup, and ready-alert workflows for businesses and customer-facing environments."
        />
        <div className="mt-12 rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-teal">
                Current product
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-charcoal sm:text-3xl">
                Queue, order, and pickup communication made simpler.
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Seren Nudge helps businesses manage customer orders, QR flows, ready alerts, and
                pickup communication from one simple operational layer.
              </p>
              <Link
                href="/seren-nudge"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
              >
                View Seren Nudge
              </Link>
            </div>
            <ul className="grid gap-3 text-sm text-muted sm:grid-cols-2">
              {[
                "QR-based customer access",
                "Order tracking",
                "Ready-for-pickup alerts",
                "Business order dashboard",
                "Pickup and collection support",
                "WhatsApp-assisted ordering",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-4 py-3"
                >
                  <span
                    className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-white" aria-labelledby="why-heading">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeader
            id="why-heading"
            eyebrow="Why Seren Tech"
            title="Built for the work that happens on the ground"
            description="We focus on systems that help people know what is happening, who needs to act, and what comes next."
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whySerenTech.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"
        aria-labelledby="services-heading"
      >
        <SectionHeader
          id="services-heading"
          eyebrow="Services"
          title="From strategy to working systems"
          description="We help organisations design, build, and connect practical software for their operational needs."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homepageServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-coral transition-colors hover:text-coral-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
          >
            Explore our services &rarr;
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-surface" aria-labelledby="about-preview-heading">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                id="about-preview-heading"
                eyebrow="About Seren"
                title="A guiding star through complexity"
                description="The name Seren reflects calm, clear, reliable direction — the kind of clarity operational teams need when managing queues, orders, and daily coordination."
              />
              <p className="mt-6 text-muted leading-relaxed">
                Seren Tech is a South African technology company building practical software for
                business operations, customer communication, and everyday workflow clarity — for
                businesses, events, and communities.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-coral transition-colors hover:text-coral-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
              >
                Our story <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-gold-soft to-coral-soft blur-2xl"
                aria-hidden="true"
              />
              <blockquote className="relative rounded-2xl border border-border bg-background p-8 text-center">
                <p className="text-lg font-medium leading-relaxed text-charcoal">
                  &ldquo;Build technology that brings clarity, dignity, and momentum to everyday
                  operations.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-muted">Seren Tech ethos</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's talk about your environment"
        description="Whether you run a café, manage a venue, or organise events — we'd like to hear what you're building, managing, or trying to improve."
        primaryLabel="Get in touch"
        primaryHref="/contact"
      />
    </>
  );
}
