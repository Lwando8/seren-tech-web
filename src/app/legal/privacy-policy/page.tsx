import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Seren Nudge — how we collect, use, and protect personal information.",
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: "Privacy Policy for Seren Nudge.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Seren Nudge Privacy Policy" lastUpdated="July 2026">
      <p>
        This Privacy Policy describes how {siteConfig.legalName} (&ldquo;Seren Tech&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, and protects personal information when
        you use Seren Nudge or interact with our services.
      </p>
      <p>
        We are committed to handling personal information responsibly and in accordance with
        applicable South African law, including the Protection of Personal Information Act, 2013
        (POPIA).
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Business Information:</strong> Business name, contact person, email address,
          telephone number, business address, business category, and payment preferences.
        </li>
        <li>
          <strong>Customer Information:</strong> Name, email address, mobile number, order history,
          order status, collection PIN, and notification preferences.
        </li>
        <li>
          <strong>Order Information:</strong> Menu items ordered, order quantities, order amounts,
          payment method, order timestamps, and order status.
        </li>
        <li>
          <strong>Technical Information:</strong> Device type, browser type, IP address, and
          platform usage data.
        </li>
      </ul>

      <h2>2. How We Use Information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Process and manage orders between customers and businesses</li>
        <li>Send order notifications and status updates</li>
        <li>Enable secure order collection using collection PINs</li>
        <li>Provide, maintain, and improve Seren Nudge</li>
        <li>Process subscriptions and transaction fees</li>
        <li>Respond to enquiries and provide customer support</li>
        <li>Prevent fraud and ensure platform security</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfill the purposes
        described in this policy, unless a longer retention period is required by law. Order
        records are typically retained for operational and tax compliance purposes.
      </p>

      <h2>4. Data Security</h2>
      <p>
        Seren Nudge uses Firebase Authentication, Cloud Firestore, Firebase Cloud Functions, and
        HTTPS communication to protect personal information. We implement role-based access
        controls to limit data access to authorized personnel only.
      </p>
      <p>
        <strong>Seren Tech does not store customer card details.</strong> Payment information is
        handled directly by the business or approved payment providers.
      </p>

      <h2>5. Data Sharing</h2>
      <p>We may share personal information with:</p>
      <ul>
        <li>
          <strong>Participating Businesses:</strong> Customer order information is shared with the
          business fulfilling the order.
        </li>
        <li>
          <strong>Service Providers:</strong> Trusted third-party providers who assist with
          hosting, communication services, and platform operations.
        </li>
        <li>
          <strong>Legal Authorities:</strong> When required by law or to protect the safety and
          integrity of the platform.
        </li>
      </ul>
      <p>We do not sell personal information to third parties.</p>

      <h2>6. Customer Rights</h2>
      <p>
        Under POPIA, you may have rights regarding your personal information, including the right
        to request access to, correction of, or deletion of your personal information, subject to
        certain exceptions.
      </p>
      <p>
        To exercise these rights, please contact us using the details below. We will respond within
        a reasonable timeframe and may need to verify your identity before processing certain
        requests.
      </p>

      <h2>7. Third-Party Services</h2>
      <p>
        Seren Nudge may integrate with third-party services such as WhatsApp, Yoco, Paystack, and
        other payment or communication providers. These services have their own privacy policies
        and terms of service.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted with an
        updated &ldquo;Last updated&rdquo; date. Continued use of the platform after changes take
        effect constitutes acceptance of the updated policy.
      </p>

      <h2>9. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, please contact:</p>
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
