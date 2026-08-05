"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { isNavActive, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:gap-6 sm:px-8 sm:py-3.5">
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ModeToggle />
          <Link
            href="/seren-nudge/request-access"
            className="rounded-full bg-deep-teal px-3.5 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:bg-coral-hover hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2 sm:px-5 sm:py-2.5"
          >
            Request access
          </Link>
        </div>
      </div>
    </header>
  );
}
