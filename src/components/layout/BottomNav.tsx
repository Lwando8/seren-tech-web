"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { bottomNavIcons } from "@/lib/nav-icons";
import { bottomNavLinks, isNavActive } from "@/lib/site";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
      aria-hidden={false}
    >
      <nav
        className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-white/10 bg-charcoal/88 px-1.5 py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:gap-1 sm:px-2"
        aria-label="Primary navigation"
      >
        {bottomNavLinks.map((link) => {
          const active = isNavActive(pathname, link.href, link.exact);
          const Icon = bottomNavIcons[link.href];

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`group relative flex min-w-[3.25rem] flex-col items-center justify-center rounded-full px-2.5 py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal sm:min-w-[4.5rem] sm:px-3.5 ${
                active
                  ? "bg-white/12 text-white"
                  : "text-white/55 hover:bg-white/6 hover:text-white/90"
              }`}
            >
              {Icon && (
                <Icon
                  className={`h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5 ${
                    active ? "text-gold" : "text-current"
                  }`}
                />
              )}
              <span className="mt-0.5 text-[0.625rem] font-medium leading-none tracking-wide sm:text-[0.6875rem]">
                {link.label}
              </span>
              {active && (
                <span
                  className="absolute -bottom-0.5 h-0.5 w-4 rounded-full bg-gold"
                  aria-hidden="true"
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
