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
    <LegalPageLayout title="Privacy Policy" lastUpdated="4 November 2026">
      <p>
        This Privacy Policy explains how {siteConfig.legalName} (&ldquo;Seren Tech&rdquo;,
        &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;), a company registered in the
        Republic of South Africa, collects, uses, discloses, and protects personal information when
        you use the Seren Nudge mobile application and related services (the &ldquo;App&rdquo;).
        This Policy is intended to comply with the Protection of Personal Information Act, 2013
        (&ldquo;POPIA&rdquo;).
      </p>
      <p>
        By using the App, you acknowledge that you have read and understood this Policy. If you do
        not agree with this Policy, please do not use the App.
      </p>

      <h2>1. Introduction</h2>
      <p>
        1.1 {siteConfig.legalName} acts as the &ldquo;responsible party&rdquo; under POPIA for
        personal information processed through the App.
      </p>
      <p>
        1.2 The Information Officer for POPIA purposes is <strong>Lwando Kelembe</strong>.
      </p>
      <p>
        1.3 The purpose of this Policy is to describe how we collect, use, share, store, secure,
        and retain personal information, as well as the rights available to you under South African
        law.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        <strong>2.1 Information from Users (customers):</strong>
      </p>
      <ul>
        <li>Name and surname</li>
        <li>Email address</li>
        <li>Mobile phone number</li>
        <li>
          Payment information (processed via a licensed third-party payment processor — we do not
          store full card details on our servers)
        </li>
        <li>Order history and preferences</li>
        <li>Optional profile information and feedback</li>
      </ul>

      <p>
        <strong>2.2 Information from Vendors (restaurants/food vendors/event vendors):</strong>
      </p>
      <ul>
        <li>Business name, contact person, and contact details</li>
        <li>Menu items, pricing, and availability</li>
        <li>
          Branding and Client Identity (CI) information (including business logo URL / branding
          assets you provide as text/URL fields)
        </li>
        <li>Billing details and transaction records</li>
        <li>
          Business / venue address or place descriptions you enter (these are business profile
          fields, not device GPS)
        </li>
      </ul>

      <p>
        <strong>2.3 Information collected automatically:</strong>
      </p>
      <ul>
        <li>Device information (device model, operating system, unique identifiers)</li>
        <li>App usage analytics and performance metrics</li>
        <li>Log data (IP address, timestamps, error logs)</li>
      </ul>

      <p>
        <strong>2.4 Camera (Android CAMERA permission):</strong>
      </p>
      <p>
        If you grant camera access, the App uses the device camera <strong>only to scan QR codes</strong>{" "}
        (for example business, venue, session, or collection QR codes) so we can open the correct
        ordering or collection flow and support order notifications. We do <strong>not</strong>{" "}
        capture, upload, or store camera images or video from QR scanning. Camera access can be
        revoked in device settings; QR features that need the camera will then be unavailable.
      </p>

      <p>
        <strong>2.5 Device location:</strong>
      </p>
      <p>
        The App does <strong>not</strong> request Android location permissions and does{" "}
        <strong>not</strong> collect or store device GPS / location history. Separately, business
        and venue <strong>address text</strong> that vendors or venues enter as part of their
        profile or events is stored as ordinary business data (see §2.2).
      </p>

      <h2>3. How We Use Information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Process and deliver orders placed through the App</li>
        <li>Notify customers when orders are ready and support order tracking</li>
        <li>
          Provide services to Vendors, including menu management, Client Identity (CI) templates,
          and billing support
        </li>
        <li>
          Facilitate payments and resolve payment-related queries through a licensed third-party
          payment processor
        </li>
        <li>
          Communicate with Users and Vendors regarding service updates, support, and changes to
          policies
        </li>
        <li>
          Improve the App&rsquo;s functionality, reliability, and customer experience through
          analytics and diagnostics
        </li>
        <li>Comply with legal obligations and enforce our Terms and Conditions</li>
      </ul>

      <h2>4. Sharing of Data</h2>
      <p>
        <strong>4.1 Vendors:</strong> We share only the minimum customer information necessary for
        Vendors to fulfil orders (e.g., order contents, collection details, and relevant contact
        fields if needed for collection or support).
      </p>
      <p>
        <strong>4.2 Payment processor:</strong> We share data with a licensed third-party payment
        processor strictly to facilitate and reconcile payments. We do not store full card details
        on our servers.
      </p>
      <p>
        <strong>4.3 Event Partners and Service Providers:</strong> We may share data with event
        organizers and service providers (e.g., cloud hosting, analytics, push notifications) under
        appropriate contractual safeguards.
      </p>
      <p>
        <strong>4.4 Legal Compliance and Protection:</strong> We may disclose information where
        required by law, a valid legal process, or to protect our rights, Users, Vendors, or the
        public.
      </p>
      <p>
        <strong>4.5 No Sale of Personal Data:</strong> We do not sell personal information to third
        parties.
      </p>

      <h2>5. Storage &amp; Security</h2>
      <p>
        <strong>5.1 Infrastructure:</strong> Data is stored on secure cloud infrastructure (e.g.,
        Firebase / Google Cloud) with industry-standard security controls.
      </p>
      <p>
        <strong>5.2 Access Controls:</strong> Access is restricted to authorized personnel on a
        need-to-know basis. We employ authentication, role-based access controls, and monitoring.
      </p>
      <p>
        <strong>5.3 Encryption:</strong> Data is encrypted in transit (TLS). Where appropriate, we
        apply encryption at rest.
      </p>
      <p>
        <strong>5.4 Security Measures:</strong> We implement reasonable technical and
        organizational measures to prevent unauthorized access, loss, misuse, or alteration of
        personal information.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        <strong>6.1 Account data:</strong> We retain account profile information while your account
        remains active. After account closure, we delete or anonymise account personal information
        within <strong>90 days</strong>, except where a longer period is required by law or this
        Policy (for example order/payment records below).
      </p>
      <p>
        <strong>6.2 Orders, transactions, and payment records:</strong> Order, transaction, and
        payment-related records are retained for <strong>5 years</strong> to meet South African tax
        and accounting requirements. Deletion or anonymisation requests for these records may be
        limited to the extent required by law during that period.
      </p>
      <p>
        <strong>6.3 Device location:</strong> The App does not collect device location data.
      </p>
      <p>
        <strong>6.4 Camera / QR:</strong> QR scanning does not create stored camera images. Decoded
        QR content is used only to open the relevant App flow.
      </p>
      <p>
        6.5 When personal information is no longer required for the purposes above, we will securely
        delete or anonymise it in accordance with our procedures and applicable laws.
      </p>

      <h2>7. Your Rights (POPIA)</h2>
      <p>Under POPIA, you have the right to:</p>
      <ul>
        <li>Request access to your personal information</li>
        <li>
          Request correction, update, or deletion of personal information (subject to lawful
          retention obligations)
        </li>
        <li>Object to the processing of personal information for direct marketing purposes</li>
        <li>
          Withdraw consent where processing is based on consent (without affecting the lawfulness of
          processing before withdrawal)
        </li>
        <li>Lodge a complaint with the Information Regulator (South Africa)</li>
      </ul>
      <p>
        <strong>Information Regulator (South Africa):</strong>
      </p>
      <ul>
        <li>
          Website:{" "}
          <a
            href="https://inforegulator.org.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coral hover:underline"
          >
            https://inforegulator.org.za/
          </a>
        </li>
        <li>Email: complaints.IR@justice.gov.za / inforeg@justice.gov.za</li>
      </ul>
      <p>To exercise your rights, contact the Information Officer using the details in Section 10.</p>

      <h2>8. Children&rsquo;s Data</h2>
      <p>
        8.1 The App is <strong>not directed at children</strong>. Persons under 18 may use the App
        only with the consent of a parent or legal guardian.
      </p>
      <p>
        8.2 If we become aware that we have collected personal information from a child without
        appropriate parent or guardian consent, we will take steps to delete such information as
        required by law.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        9.1 We may update this Privacy Policy from time to time. Material changes will be
        communicated via the App and/or by email.
      </p>
      <p>
        9.2 Continued use of the App after changes take effect constitutes acceptance of the updated
        Policy.
      </p>

      <h2>10. Contact Us</h2>
      <p>For privacy enquiries, requests, or complaints, please contact:</p>
      <p>
        <strong>{siteConfig.legalName}</strong>
        <br />
        <strong>Information Officer:</strong> Lwando Kelembe
        <br />
        Email:{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-coral hover:underline">
          {siteConfig.email}
        </a>
        <br />
        Address: 64 Stallion Road, Beaulieu Estates, Midrand, 1684
      </p>
      <p>
        You also have the right to lodge a complaint with the Information Regulator (South Africa)
        using the contact details in Section 7.
      </p>

      <p className="mt-10 border-t border-border pt-6 text-xs text-muted-light">
        &copy; {siteConfig.legalName}. All rights reserved.
      </p>
    </LegalPageLayout>
  );
}
