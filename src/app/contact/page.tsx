import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { Hero } from "@/components/ui/Hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Seren Tech. Tell us what you're building, managing, or trying to improve.",
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description:
      "Get in touch with Seren Tech. Tell us what you're building, managing, or trying to improve.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let's start a conversation"
        description="Interested in testing Seren Nudge or speaking to Seren Tech about an operational workflow? Send us a message."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-xl font-semibold text-charcoal">Send us a message</h2>
            <ContactForm />
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-lg font-semibold text-charcoal">Contact details</h2>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="font-medium text-muted-light">Company</dt>
                  <dd className="mt-1 text-charcoal">{siteConfig.legalName}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-light">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium text-coral transition-colors hover:text-coral-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-muted-light">Website</dt>
                  <dd className="mt-1">
                    <a
                      href={siteConfig.url}
                      className="font-medium text-coral transition-colors hover:text-coral-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                    >
                      www.serentech.co.za
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-background p-8">
              <h3 className="font-semibold text-charcoal">Who we work with</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>Businesses and food outlets</li>
                <li>Estates and residential communities</li>
                <li>Churches and event organisers</li>
                <li>Venues and carwashes</li>
                <li>Community and safety organisations</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
