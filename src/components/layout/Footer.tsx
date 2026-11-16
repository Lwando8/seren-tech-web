import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import {
  footerLegalLinks,
  footerProductLinks,
  navLinks,
  siteConfig,
} from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background text-charcoal dark:bg-ink dark:text-white">
      {/* Clear floating bottom nav; keep content readable behind it on mobile */}
      <div className="mx-auto max-w-6xl px-5 pb-32 pt-12 sm:px-8 sm:pb-28 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size="footer" className="mb-5" />
            <p className="max-w-sm text-sm leading-relaxed text-muted dark:text-white/65">
              {siteConfig.description}
            </p>
            <dl className="mt-8 space-y-2 text-sm text-muted dark:text-white/70">
              <div>
                <dt className="sr-only">Company</dt>
                <dd className="font-medium text-charcoal dark:text-white/90">
                  {siteConfig.legalName}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-deep-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal dark:hover:text-accent-teal"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Website</dt>
                <dd>
                  <a
                    href={siteConfig.url}
                    className="transition-colors hover:text-deep-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal dark:hover:text-accent-teal"
                  >
                    www.serentech.co.za
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-light dark:text-white/45">
              Navigate
            </h2>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-deep-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal dark:text-white/75 dark:hover:text-accent-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-light dark:text-white/45">
              Product
            </h2>
            <ul className="flex flex-col gap-2.5">
              {footerProductLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-deep-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal dark:text-white/75 dark:hover:text-accent-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-light dark:text-white/45">
              Legal
            </h2>
            <ul className="flex flex-col gap-2.5">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-deep-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal dark:text-white/75 dark:hover:text-accent-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2">
              <Link
                href="/legal/acceptable-use-policy"
                className="text-xs text-muted-light transition-colors hover:text-deep-teal dark:text-white/45 dark:hover:text-accent-teal"
              >
                Acceptable Use
              </Link>
              <Link
                href="/pricing"
                className="text-xs text-muted-light transition-colors hover:text-deep-teal dark:text-white/45 dark:hover:text-accent-teal"
              >
                Pricing
              </Link>
              <Link
                href="/compliance/merchant-compliance-pack"
                className="text-xs text-muted-light transition-colors hover:text-deep-teal dark:text-white/45 dark:hover:text-accent-teal"
              >
                Merchant Compliance
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <p className="text-sm text-muted-light dark:text-white/45">
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-sm text-muted-light dark:text-white/40">South Africa</p>
        </div>
      </div>

      {/* Soft fade behind floating bottom menu so legal/copyright stay readable */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-background via-background/85 to-transparent dark:from-ink dark:via-ink/85"
        aria-hidden
      />
    </footer>
  );
}
