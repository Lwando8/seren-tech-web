import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footerProductLinks, navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-charcoal pb-28 text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="dark" size="footer" className="mb-4" />
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Practical technology for businesses, estates, events, and communities across South
              Africa.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Navigation
            </h2>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Products
            </h2>
            <ul className="space-y-2.5">
              {footerProductLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/80 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Contact
            </h2>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>{siteConfig.legalName}</li>
              <li>
                <a
                  href={siteConfig.url}
                  className="transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  www.serentech.co.za
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:flex-wrap lg:gap-6">
            <Link
              href="/legal/privacy-policy"
              className="text-sm text-white/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="text-sm text-white/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Terms of Service
            </Link>
            <Link
              href="/legal/acceptable-use-policy"
              className="text-sm text-white/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Acceptable Use
            </Link>
            <Link
              href="/legal/business-terms"
              className="text-sm text-white/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Business Terms
            </Link>
            <Link
              href="/legal/event-vendor-terms"
              className="text-sm text-white/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Event Vendor Terms
            </Link>
            <Link
              href="/compliance/merchant-compliance-pack"
              className="text-sm text-white/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Merchant Compliance
            </Link>
            <Link
              href="/compliance/payment-flow"
              className="text-sm text-white/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Payment Flow
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-white/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm text-white/60 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Contact
            </Link>
          </div>
          <p className="text-sm text-white/50">
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
