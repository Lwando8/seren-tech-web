import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: "How to request deletion of your Seren Nudge account and what happens to your data.",
  openGraph: {
    title: `Delete Your Account | ${siteConfig.name}`,
    description: "Account deletion process for Seren Nudge.",
  },
};

export default function AccountDeletionPage() {
  const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Account deletion request"
  )}`;

  return (
    <LegalPageLayout title="Delete Your Seren Nudge Account" lastUpdated="4 November 2026">
      <p>
        This page explains how to request deletion of your account for Seren Nudge, a mobile
        application developed by Seren Tech (Pty) Ltd.
      </p>

      <h2>How to Request Account Deletion</h2>
      <p>
        To request deletion of your Seren Nudge account, send an email to{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-coral hover:underline">
          info@serentech.co.za
        </a>{" "}
        with the subject line "Account deletion request". You must send the request from the email
        address associated with your account.
      </p>

      <p>Please include the following information in your email:</p>
      <ul>
        <li>Your account email address</li>
        <li>Your account type (customer, vendor or venue)</li>
        <li>For vendor accounts: your business name</li>
      </ul>

      <p>
        <a
          href={mailtoLink}
          className="inline-block rounded-lg bg-deep-teal px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:bg-coral-hover hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2"
        >
          Send Account Deletion Request
        </a>
      </p>

      <h2>What Happens Next</h2>
      <p>
        Once we receive your request, we will confirm that it came from the account holder. After
        confirmation, we will close your account and delete or anonymise your account personal
        information within 90 days of account closure.
      </p>

      <h2>Data Retention</h2>
      <p>
        While most account data will be deleted or anonymised within 90 days, some records must be
        retained to comply with South African law:
      </p>
      <p>
        <strong>Order, transaction and payment records</strong> are retained for 5 years to meet
        South African tax and accounting requirements. After 5 years, these records are deleted.
      </p>
      <p>
        This retention policy is consistent with the data retention periods described in our{" "}
        <a href="/legal/privacy-policy" className="text-coral hover:underline">
          Privacy Policy
        </a>{" "}
        (sections 6.1 and 6.2).
      </p>

      <h2>Partial Data Deletion</h2>
      <p>
        If you would like to delete specific personal data (for example, your phone number) without
        closing your account entirely, you can request this using the same email address. We will
        process your request in accordance with applicable data protection laws and our operational
        requirements.
      </p>

      <h2>Questions?</h2>
      <p>
        If you have questions about account deletion or data retention, please refer to our{" "}
        <a href="/legal/privacy-policy" className="text-coral hover:underline">
          Privacy Policy
        </a>{" "}
        or contact us at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-coral hover:underline">
          info@serentech.co.za
        </a>
        .
      </p>

      <p className="mt-10 border-t border-border pt-6 text-xs text-muted-light">
        &copy; Seren Tech (Pty) Ltd. All rights reserved.
      </p>
    </LegalPageLayout>
  );
}
