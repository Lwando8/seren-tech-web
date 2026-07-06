import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Merchant Compliance Pack",
  description:
    "Seren Tech Merchant Compliance Pack — prepared for payment providers, banks, financial institutions and enterprise partners.",
  openGraph: {
    title: `Merchant Compliance Pack | ${siteConfig.name}`,
    description: "Merchant Compliance Pack for Seren Nudge.",
  },
};

export default function MerchantCompliancePackPage() {
  return (
    <LegalPageLayout title="Seren Tech Merchant Compliance Pack" lastUpdated="July 2026">
      <p className="text-base font-medium text-charcoal">
        Prepared for payment providers, banks, financial institutions and enterprise partners.
      </p>

      <h2>Company Overview</h2>
      <p>
        <strong>Legal Name:</strong> {siteConfig.legalName}
        <br />
        <strong>Primary Product:</strong> Seren Nudge
        <br />
        <strong>Industry:</strong> Software as a Service
        <br />
        <strong>Business Model:</strong> Subscription software and transaction-based services for
        hospitality, food service and event vendors.
      </p>

      <h2>What is Seren Nudge?</h2>
      <p>
        Seren Nudge is a hybrid ordering, queue management and customer engagement platform that
        enables businesses to receive and manage orders through QR codes, WhatsApp and mobile
        applications.
      </p>
      <p>
        The platform helps reduce queues, improve customer communication and increase operational
        efficiency.
      </p>
      <p>
        <strong>Target customers:</strong>
      </p>
      <ul>
        <li>Restaurants</li>
        <li>Cafés</li>
        <li>Bakeries</li>
        <li>Church cafés</li>
        <li>Food trucks</li>
        <li>Event vendors</li>
        <li>Stadium concessions</li>
        <li>Corporate cafeterias</li>
      </ul>

      <h2>How Payments Work</h2>
      <p>
        <strong>Seren Nudge is not a payment processor.</strong>
      </p>
      <p>Participating businesses choose how they receive payment.</p>
      <p>Supported payment methods may include:</p>
      <ul>
        <li>Pay at counter</li>
        <li>Yoco payment links</li>
        <li>Paystack payment links</li>
        <li>Other supported payment links or providers</li>
      </ul>
      <p>
        <strong>
          Payments are made directly between the customer and the participating business.
        </strong>
      </p>
      <p>
        <strong>Seren Tech does not take custody of customer funds.</strong>
      </p>
      <p>Seren Tech earns revenue from:</p>
      <ul>
        <li>Subscription fees charged to businesses</li>
        <li>Transaction fees charged to event vendors</li>
      </ul>

      <h2>Merchant Onboarding</h2>
      <p>Businesses provide:</p>
      <ul>
        <li>Business name</li>
        <li>Contact person</li>
        <li>Email address</li>
        <li>Telephone number</li>
        <li>Business category</li>
        <li>Business address</li>
        <li>Payment preference</li>
      </ul>
      <p>Business accounts may be reviewed before activation.</p>
      <p>Seren Tech may request further information where necessary.</p>

      <h2>Customer Information Collected</h2>
      <p>Customer data may include:</p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Mobile number</li>
        <li>Order history</li>
        <li>Order status</li>
        <li>Collection PIN</li>
        <li>Notification preferences</li>
      </ul>
      <p>Only information required to operate Seren Nudge is collected.</p>

      <h2>Data Security</h2>
      <p>Seren Nudge uses:</p>
      <ul>
        <li>Firebase Authentication</li>
        <li>Cloud Firestore</li>
        <li>Firebase Cloud Functions</li>
        <li>HTTPS communication</li>
        <li>Role-based access controls</li>
      </ul>
      <p>
        <strong>Seren Tech does not store customer card details.</strong>
      </p>

      <h2>Payment Flow</h2>
      <ol className="ml-5 list-decimal space-y-1.5">
        <li>Customer places an order.</li>
        <li>Order is received by the participating business.</li>
        <li>Customer pays through the business&apos;s selected payment method.</li>
        <li>Payment is confirmed by the business or supported provider integration.</li>
        <li>Business prepares the order.</li>
        <li>Customer receives a ready notification.</li>
        <li>Customer collects using a secure collection PIN.</li>
      </ol>

      <h2>Pricing Summary</h2>
      <p>
        <strong>Free Trial:</strong>
        <br />
        Complimentary for new businesses
        <br />
        250 QR scans
        <br />
        50 menu orders
        <br />
        Full platform access
        <br />
        Up to 30 days (whichever limit is reached first)
      </p>
      <p>
        <strong>Starter:</strong>
        <br />
        R599/month
        <br />
        3,500 QR scans/month
        <br />
        750 menu orders/month
      </p>
      <p>
        <strong>Pro:</strong>
        <br />
        R1,499/month
        <br />
        7,500 QR scans/month
        <br />
        2,000 menu orders/month
      </p>
      <p>
        <strong>Event Vendors:</strong>
        <br />
        First event: R2.50 per completed order
        <br />
        Future events: R3.50 per completed order
        <br />
        No subscription required
        <br />
        <strong>Only completed orders are billed</strong>
      </p>

      <h2>Compliance Documents</h2>
      <p>Seren Tech maintains:</p>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Acceptable Use Policy</li>
        <li>Business Terms</li>
        <li>Event Vendor Terms</li>
        <li>Merchant onboarding procedures</li>
      </ul>

      <h2>Demo Access</h2>
      <p>
        A demonstration account may be provided for payment provider review. Demo should show:
      </p>
      <ul>
        <li>Customer ordering</li>
        <li>WhatsApp ordering</li>
        <li>Business dashboard</li>
        <li>Order preparation</li>
        <li>Ready notification</li>
        <li>Collection verification</li>
      </ul>

      <h2>Contact</h2>
      <p>For questions or to request a demo, please contact:</p>
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
