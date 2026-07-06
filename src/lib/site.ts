export const siteConfig = {
  name: "Seren Tech",
  legalName: "Seren Tech (Pty) Ltd",
  tagline: "Practical technology for real-world operations",
  description:
    "Seren Tech builds digital systems that help businesses communicate clearly, manage workflows, and reduce operational friction.",
  url: "https://www.serentech.co.za",
  email: "info@serentech.co.za",
  locale: "en_ZA",
} as const;

export const whoWeWorkWith = {
  title: "Who we work with",
  description:
    "Seren Tech works with organisations that need clearer workflows, faster communication, and better visibility across daily operations. Whether teams are managing customer interactions, internal processes, service requests, or time-sensitive updates, we help create systems that make the next step clear.",
} as const;

export const serenNudgeAudience =
  "Seren Nudge is designed for environments where people place requests, wait for updates, and need a clear signal when something is ready.";

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/seren-nudge", label: "Seren Nudge" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const bottomNavLinks = [
  { href: "/", label: "Home", exact: true as const },
  { href: "/about", label: "About", exact: false as const },
  { href: "/seren-nudge", label: "Seren Nudge", exact: false as const },
  { href: "/contact", label: "Contact", exact: false as const },
] as const;

export const footerProductLinks = [
  { href: "/seren-nudge", label: "Seren Nudge", external: false as const },
] as const;

export const whySerenTech = [
  {
    title: "Built for practical environments",
    description:
      "Systems designed for queues, counters, and front-line teams — not abstract dashboards.",
  },
  {
    title: "South African operational realities",
    description:
      "Connectivity, staffing, and on-the-ground constraints inform how we design workflows and interfaces.",
  },
  {
    title: "Customer-facing digital workflows",
    description:
      "From orders and queue communication to pickup readiness — tools that keep customers informed.",
  },
  {
    title: "Clean workflows",
    description:
      "Clear steps, fewer handoffs, and interfaces that help people know what to do next.",
  },
  {
    title: "Communication & visibility",
    description:
      "Better accountability through timely alerts, shared context, and operational transparency.",
  },
] as const;

function isNavActive(pathname: string, href: string, exact?: boolean) {
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export { isNavActive };
