"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { isNavActive, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 sm:px-8 sm:py-3.5">
        <Logo priority />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isNavActive(pathname, link.href, link.exact);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2",
                  active
                    ? "bg-teal-soft text-deep-teal"
                    : "text-muted hover:bg-surface hover:text-charcoal",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/seren-nudge/request-access"
          className="shrink-0 rounded-full bg-deep-teal px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:bg-coral-hover hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2 sm:px-5 sm:py-2.5"
        >
          Request access
        </Link>
      </div>
    </header>
  );
}
