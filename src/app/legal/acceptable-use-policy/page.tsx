import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Acceptable Use Policy for Seren Nudge — how businesses, vendors and customers may use the platform.",
  openGraph: {
    title: `Acceptable Use Policy | ${siteConfig.name}`,
    description: "Acceptable Use Policy for Seren Nudge.",
  },
};

export default function AcceptableUsePolicyPage() {
  return (
    <LegalPageLayout title="Seren Nudge Acceptable Use Policy" lastUpdated="July 2026">
      <p>
        This Acceptable Use Policy explains how businesses, event vendors and customers may use
        Seren Nudge.
      </p>

      <h2>Permitted Use</h2>
      <p>
        Seren Nudge may only be used for lawful commercial purposes, including restaurants, cafés,
        bakeries, church cafés, food trucks, event vendors, stadium concessions and other approved
        hospitality businesses.
      </p>

      <h2>Prohibited Activities</h2>
      <p>Users may not use Seren Nudge to:</p>
      <ul>
        <li>Sell illegal goods or services</li>
        <li>Promote fraud or scams</li>
        <li>Sell counterfeit or stolen goods</li>
        <li>Infringe intellectual property rights</li>
        <li>Distribute malware or harmful software</li>
        <li>Send spam or unsolicited communications</li>
        <li>Harass or abuse users</li>
        <li>Misrepresent a business</li>
        <li>Interfere with platform operations</li>
        <li>Violate South African law</li>
      </ul>

      <h2>Prohibited Products</h2>
      <p>Prohibited products include:</p>
      <ul>
        <li>Illegal drugs or controlled substances</li>
        <li>Weapons or explosives where prohibited</li>
        <li>Counterfeit goods</li>
        <li>Fraudulent financial services</li>
        <li>Illegal gambling services</li>
        <li>Stolen property</li>
        <li>Any product or service prohibited by law</li>
      </ul>

      <h2>Business Responsibilities</h2>
      <p>Businesses are responsible for:</p>
      <ul>
        <li>Accurate business information</li>
        <li>Accurate menus and pricing</li>
        <li>Fulfilling customer orders honestly</li>
        <li>Complying with food safety and consumer protection laws</li>
        <li>Managing refunds where applicable</li>
        <li>Maintaining valid payment provider accounts</li>
      </ul>

      <h2>Customer Responsibilities</h2>
      <p>Customers are responsible for:</p>
      <ul>
        <li>Placing genuine orders</li>
        <li>Providing accurate contact information</li>
        <li>Collecting completed orders within a reasonable time</li>
        <li>Treating staff respectfully</li>
        <li>Not misusing the platform</li>
      </ul>

      <h2>Enforcement</h2>
      <p>
        Seren Tech may suspend accounts, remove businesses, investigate abuse, refuse access or
        report unlawful activity where required.
      </p>

      <h2>Reporting Abuse</h2>
      <p>
        To report abuse or policy violations, please contact us at:{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-coral hover:underline">
          {siteConfig.email}
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
