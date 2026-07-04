import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Event Vendor Terms",
  description: "Terms of service for event vendors using Seren Nudge.",
  openGraph: {
    title: `Event Vendor Terms | ${siteConfig.name}`,
    description: "Terms of service for event vendors using Seren Nudge.",
  },
};

export default function EventVendorTermsPage() {
  return (
    <LegalPageLayout title="Seren Nudge Event Vendor Terms" lastUpdated="July 2026">
      <p>
        These Event Vendor Terms govern the use of Seren Nudge by vendors operating at events,
        festivals, markets, and similar temporary venues.
      </p>

      <h2>1. Service Description</h2>
      <p>
        Seren Nudge enables event vendors to receive orders, manage queues, and notify customers
        when orders are ready through QR codes, WhatsApp, and mobile applications.
      </p>

      <h2>2. Event Vendor Pricing</h2>
      <p>Event vendors are charged on a per-completed-order basis:</p>
      <ul>
        <li>
          <strong>First event:</strong> R2.50 per completed order
        </li>
        <li>
          <strong>Future events:</strong> R3.50 per completed order
        </li>
      </ul>
      <p>
        <strong>Only completed orders are billed.</strong> Cancelled, failed, draft, and abandoned
        orders are not charged.
      </p>
      <p>No subscription is required for event vendors.</p>

      <h2>3. What Counts as a Completed Order</h2>
      <p>
        A completed order is an order that has been confirmed, prepared, and collected by the
        customer. Orders that are cancelled before preparation or not collected are not considered
        completed.
      </p>

      <h2>4. Payment Processing</h2>
      <p>
        Seren Nudge is not a payment processor. Vendors are responsible for configuring their own
        payment methods and receiving payments directly from customers. Supported payment options
        may include pay-at-counter, Yoco, Paystack, or other approved payment providers.
      </p>
      <p>
        Seren Tech does not take custody of customer funds. All payments are made directly between
        the customer and the vendor.
      </p>

      <h2>5. Vendor Obligations</h2>
      <p>Event vendors using Seren Nudge must:</p>
      <ul>
        <li>Provide accurate business information, menus, and pricing</li>
        <li>Fulfill orders honestly and in a timely manner</li>
        <li>Comply with applicable food safety, health, and consumer protection laws</li>
        <li>Respond to customer enquiries and handle refunds where appropriate</li>
        <li>Not engage in any prohibited activities as outlined in the Acceptable Use Policy</li>
        <li>Maintain valid payment provider accounts where applicable</li>
        <li>Ensure staff are trained to use the platform correctly</li>
      </ul>

      <h2>6. Event Setup and Activation</h2>
      <p>
        Vendors must activate their Seren Nudge account for each event. Once an event is
        complete, the vendor may deactivate until their next event. Transaction fees apply only
        when the account is active and processing orders.
      </p>

      <h2>7. Billing and Invoicing</h2>
      <p>
        Vendors will be invoiced after each event based on the number of completed orders
        processed. Invoices must be paid within the timeframe specified. Failure to pay may result
        in account suspension.
      </p>

      <h2>8. Account Suspension and Termination</h2>
      <p>
        Seren Tech reserves the right to suspend or terminate vendor accounts that violate these
        Terms, the Acceptable Use Policy, or engage in fraudulent or unlawful activity.
      </p>

      <h2>9. Data and Privacy</h2>
      <p>
        Vendor data is handled in accordance with our Privacy Policy. Vendors are responsible for
        complying with applicable data protection laws when processing customer information through
        the platform.
      </p>

      <h2>10. Service Availability</h2>
      <p>
        While we aim for high availability, Seren Tech does not guarantee uninterrupted service.
        The platform may be unavailable for maintenance, upgrades, or due to circumstances beyond
        our control.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Seren Tech is not liable for loss of business,
        revenue, profits, or indirect damages arising from the use of Seren Nudge. Our total
        liability is limited to the transaction fees paid by the vendor in the preceding twelve
        months.
      </p>

      <h2>12. Changes to Terms</h2>
      <p>
        These Terms may be updated from time to time. Vendors will be notified of material changes.
        Continued use of the service after changes take effect constitutes acceptance of the
        updated Terms.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Republic of South Africa and are subject to
        the jurisdiction of South African courts.
      </p>

      <h2>14. Contact</h2>
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
