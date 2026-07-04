import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Seren Nudge platform users.",
  openGraph: {
    title: `Terms of Service | ${siteConfig.name}`,
    description: "Terms of Service for Seren Nudge platform users.",
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Seren Nudge Terms of Service" lastUpdated="July 2026">
      <p>
        These Terms of Service govern the use of Seren Nudge by all users — including businesses,
        event vendors, and customers.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using Seren Nudge, you agree to be bound by these Terms of Service. If you
        do not agree, you may not use the platform.
      </p>

      <h2>2. Service Description</h2>
      <p>
        Seren Nudge is a digital ordering, queue management, and customer engagement platform
        operated by {siteConfig.legalName}. The platform enables businesses to receive orders and
        customers to place orders through QR codes, WhatsApp, and mobile applications.
      </p>

      <h2>3. User Accounts</h2>
      <p>
        Businesses and event vendors must create an account to use Seren Nudge. Customers may
        place orders without creating an account, but must provide contact information for order
        notifications.
      </p>
      <p>Account holders are responsible for:</p>
      <ul>
        <li>Maintaining the confidentiality of login credentials</li>
        <li>All activity that occurs under their account</li>
        <li>Notifying Seren Tech immediately of any unauthorized access</li>
      </ul>

      <h2>4. Acceptable Use</h2>
      <p>
        Users must comply with the Seren Nudge Acceptable Use Policy. Prohibited activities
        include fraud, harassment, distributing malware, selling illegal goods, and any activity
        that violates South African law.
      </p>

      <h2>5. Payment and Billing</h2>
      <p>
        <strong>Business Subscriptions:</strong> Subscription fees are charged monthly in advance.
        Businesses are responsible for maintaining valid payment information.
      </p>
      <p>
        <strong>Event Vendor Billing:</strong> Event vendors are charged per completed order. Only
        completed orders are billed — cancelled, failed, draft, and abandoned orders are not
        charged.
      </p>
      <p>
        <strong>Customer Payments:</strong> Customer payments are made directly to the business or
        vendor using the payment method configured by that business. Seren Tech does not process
        payments or take custody of customer funds.
      </p>

      <h2>6. Data and Privacy</h2>
      <p>
        Seren Tech collects and processes personal information in accordance with our Privacy
        Policy. By using the platform, you consent to this processing.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        All content, software, trademarks, and other intellectual property associated with Seren
        Nudge are owned by {siteConfig.legalName} or its licensors. Users may not copy, modify, or
        distribute any part of the platform without authorization.
      </p>

      <h2>8. Service Availability</h2>
      <p>
        Seren Tech aims to provide reliable service but does not guarantee uninterrupted
        availability. The platform may be temporarily unavailable for maintenance, upgrades, or due
        to circumstances beyond our control.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        Seren Nudge is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest
        extent permitted by law, Seren Tech disclaims all warranties, express or implied,
        including warranties of merchantability, fitness for a particular purpose, and
        non-infringement.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Seren Tech is not liable for indirect, incidental,
        special, consequential, or punitive damages arising from the use of or inability to use the
        platform. Our total liability is limited to the fees paid by the user in the preceding
        twelve months.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        Users agree to indemnify and hold harmless {siteConfig.legalName}, its officers, directors,
        employees, and agents from any claims, damages, or expenses arising from their use of the
        platform or violation of these Terms.
      </p>

      <h2>12. Account Suspension and Termination</h2>
      <p>
        Seren Tech reserves the right to suspend or terminate accounts that violate these Terms,
        engage in prohibited activities, or for any other reason at our discretion.
      </p>
      <p>
        Users may terminate their account at any time. Businesses may cancel subscriptions with no
        refunds for partial months.
      </p>

      <h2>13. Changes to Terms</h2>
      <p>
        These Terms may be updated from time to time. Material changes will be communicated to
        users. Continued use of the platform after changes take effect constitutes acceptance of
        the updated Terms.
      </p>

      <h2>14. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of the Republic of South Africa. Any disputes arising
        from these Terms or use of the platform are subject to the jurisdiction of South African
        courts.
      </p>

      <h2>15. Contact</h2>
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
