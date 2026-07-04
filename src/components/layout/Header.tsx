import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4">
        <Logo priority />

        <p className="hidden max-w-md text-center text-sm leading-snug text-muted md:block lg:max-w-lg lg:text-[0.9375rem]">
          {siteConfig.tagline}
        </p>

        <Link
          href="/contact"
          className="shrink-0 rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-coral-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 sm:px-5 sm:py-2.5"
        >
          Contact us
        </Link>
      </div>

      <p className="border-t border-border/50 px-5 py-2 text-center text-xs leading-snug text-muted md:hidden">
        {siteConfig.tagline}
      </p>
    </header>
  );
}
