import type { Metadata } from "next";
import Link from "next/link";
import { SerenNudgeRequestAccessForm } from "@/components/ui/SerenNudgeRequestAccessForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request access to Seren Nudge",
  description:
    "Request controlled testing access to Seren Nudge. Share your details and receive setup instructions if your test environment is a good fit.",
  openGraph: {
    title: `Request access to Seren Nudge | ${siteConfig.name}`,
    description:
      "Request controlled testing access to Seren Nudge for your organisation.",
  },
};

const testingSteps = [
  "Submit your request using the form below.",
  "We'll review your details and send you an access email if your test setup is a good fit.",
  "If you're testing on iPhone, download Apple TestFlight first.",
  "Open the invite link from the access email and install Seren Nudge through TestFlight.",
  "Register in the app using your details.",
  "If the verification email does not appear in your inbox, check your spam or junk folder.",
];

export default function SerenNudgeRequestAccessPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-teal">
          Seren Nudge · Controlled testing
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Request access to Seren Nudge
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Seren Nudge is currently available for controlled testing. Share your details and
          we&apos;ll follow up with access instructions.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Complete the form below so we can understand who you are, where you&apos;ll be testing
          Seren Nudge, and how best to support your setup.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-12">
        <aside className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-charcoal">How testing access works</h2>
            <ol className="mt-5 space-y-4">
              {testingSteps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-soft text-xs font-semibold text-accent-teal"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-xl border border-border bg-background px-4 py-3 text-xs leading-relaxed text-muted-light">
              Access is currently limited while Seren Nudge is being tested and refined.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-charcoal">Password guidance</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              During registration, create a secure password with at least 8 characters. Use a mix of
              letters and numbers. If the app asks for additional requirements, follow the on-screen
              password instructions.
            </p>
          </div>

          <p className="text-sm text-muted">
            Prefer a general enquiry?{" "}
            <Link href="/contact" className="font-medium text-coral hover:underline">
              Contact Seren Tech
            </Link>
          </p>
        </aside>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="mb-6 text-xl font-semibold text-charcoal">Access request form</h2>
            <SerenNudgeRequestAccessForm />
          </div>
        </div>
      </div>
    </div>
  );
}
