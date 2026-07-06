export const trialLimits = {
  qrScans: 250,
  menuOrders: 50,
  days: 30,
} as const;

export const subscriptionPlans = [
  {
    id: "trial",
    name: "Start Free",
    subtitle: "Complimentary Free Trial",
    price: null,
    priceSuffix: null,
    description: "Perfect for evaluating Seren Nudge before subscribing.",
    features: [
      `${trialLimits.qrScans} QR Scans`,
      `${trialLimits.menuOrders} Menu Orders`,
      "Full Platform Access",
      `${trialLimits.days} Days`,
    ],
    trialEndsNote: [
      `${trialLimits.qrScans} QR scans`,
      `${trialLimits.menuOrders} menu orders`,
      `${trialLimits.days} days`,
    ],
    cta: "Start Free",
    ctaNote: "No credit card required.",
    highlighted: false,
    badge: null,
  },
  {
    id: "starter",
    name: "Starter",
    subtitle: null,
    price: "R599",
    priceSuffix: "/month",
    description: "For growing teams managing customer-facing requests and daily operations.",
    features: [
      "3,500 QR Scans",
      "750 Menu Orders",
      "WhatsApp Ordering",
      "QR Ordering",
      "Ready Notifications",
      "Collection PIN Verification",
      "Business Analytics",
    ],
    cta: "Choose Starter",
    ctaNote: null,
    highlighted: false,
    badge: null,
  },
  {
    id: "pro",
    name: "Pro",
    subtitle: null,
    price: "R1,499",
    priceSuffix: "/month",
    description: "Built for high-volume businesses.",
    features: [
      "7,500 QR Scans",
      "2,000 Menu Orders",
      "Everything in Starter",
      "Priority Support",
      "Future Pro Features",
    ],
    cta: "Choose Pro",
    ctaNote: null,
    highlighted: true,
    badge: "Most Popular",
  },
] as const;

export const eventVendorPricing = {
  title: "Event Vendors",
  subtitle: "No Monthly Subscription",
  description: "Perfect for festivals, stadiums and temporary vendors.",
  firstEvent: { amount: "R2.50", label: "First Event" },
  futureEvents: { amount: "R3.50", label: "Future Events" },
  billingNote: "Only completed orders are billed.",
  cta: "Get Started",
} as const;

export const pricingFaq = [
  {
    question: "Is Seren Nudge free?",
    answer:
      "Every new business receives a complimentary Free Trial that includes 250 QR scans, 50 menu orders, full platform access, and up to 30 days. Once the trial ends, businesses choose the subscription that best suits their needs.",
  },
] as const;
