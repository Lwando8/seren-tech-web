import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payment Flow",
  description: "How payments work on Seren Nudge — payment flow and payment processing.",
  openGraph: {
    title: `Payment Flow | ${siteConfig.name}`,
    description: "How payments work on Seren Nudge.",
  },
};

export default function PaymentFlowPage() {
  return (
    <LegalPageLayout title="How Payments Work on Seren Nudge" lastUpdated="July 2026">
      <p>
        <strong>Seren Nudge is not a payment processor.</strong>
      </p>
      <p>
        Seren Nudge enables businesses to receive orders but does not act as a payment processor.
      </p>
      <p>
        Customers pay participating businesses directly using the payment method configured by that
        business.
      </p>

      <h2>Supported Payment Options</h2>
      <p>Businesses may configure one or more of the following payment methods:</p>
      <ul>
        <li>Pay at counter</li>
        <li>Online payment link</li>
        <li>Yoco</li>
        <li>Paystack</li>
        <li>Other supported providers</li>
      </ul>

      <h2>Payment Flow for Online Orders</h2>
      <ol className="ml-5 list-decimal space-y-1.5">
        <li>Customer places an order through the Seren Nudge platform.</li>
        <li>Customer is presented with the business&apos;s configured payment method.</li>
        <li>Customer completes payment directly with the business or payment provider.</li>
        <li>Payment confirmation is received by the business or supported payment provider.</li>
        <li>Order is confirmed and sent to the business for preparation.</li>
        <li>Business prepares the order.</li>
        <li>Customer receives a ready notification.</li>
        <li>Customer collects the order using a secure collection PIN.</li>
      </ol>

      <h2>Payment Flow for WhatsApp Orders</h2>
      <p>
        For WhatsApp orders, the customer may receive a payment link after checkout. Online orders
        are only confirmed once payment is confirmed by the business or supported payment provider
        workflow.
      </p>

      <h2>Pay at Counter</h2>
      <p>
        For businesses that prefer cash or card-on-collection, customers may select &ldquo;pay at
        counter&rdquo; and complete payment when collecting the order.
      </p>

      <h2>Important Notes</h2>
      <p>
        <strong>Seren Tech does not take custody of customer funds.</strong>
      </p>
      <p>
        <strong>Seren Tech does not store customer card details.</strong>
      </p>
      <p>
        All payments are processed directly between the customer and the participating business or
        through the business&apos;s chosen payment provider (such as Yoco or Paystack).
      </p>
      <p>
        Seren Tech earns revenue from subscription fees charged to businesses and transaction fees
        charged to event vendors — not from customer payments.
      </p>

      <h2>Contact</h2>
      <p>For questions about payment processing, please contact:</p>
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
