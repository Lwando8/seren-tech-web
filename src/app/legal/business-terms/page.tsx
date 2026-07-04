import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Business Terms",
  description: "Terms of service for businesses using Seren Nudge.",
  openGraph: {
    title: `Business Terms | ${siteConfig.name}`,
    description: "Terms of service for businesses using Seren Nudge.",
  },
};

export default function BusinessTermsPage() {
  return (
    <LegalPageLayout title="Seren Nudge Business Terms" lastUpdated="July 2026">
      <p>
        These Business Terms govern the use of Seren Nudge by restaurants, cafés, and other
        hospitality businesses subscribing to the service.
      </p>

      <h2>1. Service Description</h2>
      <p>
        Seren Nudge provides a digital ordering, queue management and customer engagement platform
        for hospitality businesses. The service enables businesses to receive orders, communicate
        order status, and manage customer collections through QR codes, WhatsApp, and mobile
        applications.
      </p>

      <h2>2. Subscription Plans</h2>
      <p>Seren Nudge offers the following subscription plans:</p>
      <ul>
        <li>
          <strong>Free:</strong> R0/month — 250 QR scans/month, 50 menu orders/month
        </li>
        <li>
          <strong>Starter:</strong> R599/month — 3,500 QR scans/month, 750 menu orders/month
        </li>
        <li>
          <strong>Pro:</strong> R1,499/month — 7,500 QR scans/month, 2,000 menu orders/month
        </li>
      </ul>
      <p>
        Pricing is subject to change with notice. Businesses will be notified before any price
        increases take effect.
      </p>

      <h2>3. Payment Processing</h2>
      <p>
        Seren Nudge is not a payment processor. Businesses are responsible for configuring their
        own payment methods and receiving payments directly from customers. Supported payment
        options may include pay-at-counter, Yoco, Paystack, or other approved payment providers.
      </p>
      <p>
        Seren Tech does not take custody of customer funds. All payments are made directly between
        the customer and the business.
      </p>

      <h2>4. Business Obligations</h2>
      <p>Businesses using Seren Nudge must:</p>
      <ul>
        <li>Provide accurate business information, menus, and pricing</li>
        <li>Fulfill orders honestly and in a timely manner</li>
        <li>Comply with applicable food safety, health, and consumer protection laws</li>
        <li>Respond to customer enquiries and handle refunds where appropriate</li>
        <li>Not engage in any prohibited activities as outlined in the Acceptable Use Policy</li>
        <li>Maintain valid payment provider accounts where applicable</li>
      </ul>

      <h2>5. Account Suspension and Termination</h2>
      <p>
        Seren Tech reserves the right to suspend or terminate business accounts that violate these
        Terms, the Acceptable Use Policy, or engage in fraudulent or unlawful activity.
      </p>
      <p>
        Businesses may cancel their subscription at any time. No refunds are provided for partial
        months.
      </p>

      <h2>6. Data and Privacy</h2>
      <p>
        Business data is handled in accordance with our Privacy Policy. Businesses are responsible
        for complying with applicable data protection laws when processing customer information
        through the platform.
      </p>

      <h2>7. Service Availability</h2>
      <p>
        While we aim for high availability, Seren Tech does not guarantee uninterrupted service.
        The platform may be unavailable for maintenance, upgrades, or due to circumstances beyond
        our control.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Seren Tech is not liable for loss of business,
        revenue, profits, or indirect damages arising from the use of Seren Nudge. Our total
        liability is limited to the subscription fees paid by the business in the preceding twelve
        months.
      </p>

      <h2>9. Changes to Terms</h2>
      <p>
        These Terms may be updated from time to time. Businesses will be notified of material
        changes. Continued use of the service after changes take effect constitutes acceptance of
        the updated Terms.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Republic of South Africa and are subject to
        the jurisdiction of South African courts.
      </p>

      <h2>11. Contact</h2>
      <p>For questions about these Terms, please contact:</p>
      <p>
        {siteConfig.legalName}
        <br />
        Email:{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-coral hover:underline">
          {siteConfig.email}
        </a>
        <br />
        Website:{" "}
        <a href={siteConfig.url} className="text-coral hover:underline">
          www.serentech.co.za
        </a>
      </p>

      <p className="mt-10 border-t border-border pt-6 text-xs text-muted-light">
        These documents are provided for operational and compliance transparency. They may be
        updated from time to time. For legal questions, contact Seren Tech at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-coral hover:underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
