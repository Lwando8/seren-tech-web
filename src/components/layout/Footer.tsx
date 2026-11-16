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
    <footer className="border-t border-border bg-ink pb-28 text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="dark" size="footer" className="mb-5" />
            <p className="max-w-sm text-sm leading-relaxed text-white/65">
              {siteConfig.description}
            </p>
            <dl className="mt-8 space-y-2 text-sm text-white/70">
              <div>
                <dt className="sr-only">Company</dt>
                <dd className="font-medium text-white/90">{siteConfig.legalName}</dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-accent-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
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
                    className="transition-colors hover:text-accent-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                  >
                    www.serentech.co.za
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Navigate
            </h2>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-accent-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Product
            </h2>
            <ul className="flex flex-col gap-2.5">
              {footerProductLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-accent-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Legal
            </h2>
            <ul className="flex flex-col gap-2.5">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-accent-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2">
              <Link
                href="/legal/acceptable-use-policy"
                className="text-xs text-white/45 transition-colors hover:text-accent-teal"
              >
                Acceptable Use
              </Link>
              <Link
                href="/pricing"
                className="text-xs text-white/45 transition-colors hover:text-accent-teal"
              >
                Pricing
              </Link>
              <Link
                href="/compliance/merchant-compliance-pack"
                className="text-xs text-white/45 transition-colors hover:text-accent-teal"
              >
                Merchant Compliance
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/45">
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-sm text-white/40">South Africa</p>
        </div>
      </div>
    </footer>
  );
}
