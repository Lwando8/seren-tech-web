export const siteConfig = {
  name: "Seren Tech",
  legalName: "Seren Tech (Pty) Ltd",
  tagline: "Practical technology for operations that need clarity",
  description:
    "Seren Tech builds digital systems that help teams manage requests, communication, customer flow, and everyday operational work with more confidence.",
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

export const howWeThink = [
  {
    title: "Clear workflows",
    description:
      "We design systems around what people need to do next, not around unnecessary complexity.",
  },
  {
    title: "Better communication",
    description:
      "We help reduce uncertainty by making updates, statuses, and handoffs easier to see and act on.",
  },
  {
    title: "Practical technology",
    description:
      "We focus on tools that can work in real operational environments, not just polished demos.",
  },
] as const;

export const serenNudgeFeatureChips = [
  "QR access",
  "Order tracking",
  "Ready alerts",
  "Pickup communication",
  "WhatsApp-assisted updates",
] as const;

/** Primary site navigation (header + footer) */
export const navLinks = [
  { href: "/", label: "Home", exact: true as const },
  { href: "/about", label: "About", exact: false as const },
  { href: "/seren-nudge", label: "Seren Nudge", exact: false as const },
  { href: "/contact", label: "Contact", exact: false as const },
] as const;

export const bottomNavLinks = [
  { href: "/", label: "Home", exact: true as const },
  { href: "/about", label: "About", exact: false as const },
  { href: "/seren-nudge", label: "Seren Nudge", exact: false as const },
  { href: "/contact", label: "Contact", exact: false as const },
] as const;

export const footerProductLinks = [
  { href: "/seren-nudge", label: "Seren Nudge" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLegalLinks = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms-of-service", label: "Terms of Use" },
  { href: "/legal/account-deletion", label: "Delete account" },
] as const;

/** @deprecated Prefer howWeThink — kept for any residual imports */
export const whySerenTech = howWeThink;

function isNavActive(pathname: string, href: string, exact?: boolean) {
  if (exact) return pathname === href;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export { isNavActive };
