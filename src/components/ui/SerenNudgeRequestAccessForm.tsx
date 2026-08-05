"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

const aboutOptions = [
  "Business operations testing",
  "Customer-facing workflow testing",
  "On-site operations testing",
  "Partnership enquiry",
  "Other",
] as const;

const inputClassName =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-charcoal placeholder:text-muted-light transition-colors focus:border-deep-teal focus:outline-none focus:ring-2 focus:ring-accent-teal/25";

export function SerenNudgeRequestAccessForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const fullName = data.get("fullName") as string;
    const company = data.get("company") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const role = data.get("role") as string;
    const about = data.get("about") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent("Seren Nudge access request");
    const body = encodeURIComponent(
      `Request type: seren_nudge_access_request\n\n` +
        `Full name: ${fullName}\n` +
        `Company / organisation: ${company}\n` +
        `Company email: ${email}\n` +
        `Phone: ${phone || "—"}\n` +
        `Role / position: ${role || "—"}\n` +
        `What is this about?: ${about}\n\n` +
        `Testing use case:\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-background p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-deep-teal">
          Request submitted
        </p>
        <p className="mt-3 text-xl font-semibold text-charcoal">Thank you — we&apos;ve got it</p>
        <p className="mt-4 leading-relaxed text-muted">
          Thanks — we&apos;ve received your Seren Nudge access request. If approved for testing,
          we&apos;ll send instructions to your email address. Please also check your spam or junk
          folder if you don&apos;t see the email.
        </p>
        <p className="mt-5 rounded-xl border border-accent-teal/25 bg-teal-soft/50 px-4 py-3 text-sm leading-relaxed text-muted">
          For iPhone testing, install Apple TestFlight before opening the invite link from your
          access email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-charcoal">
            Full name <span className="text-deep-teal">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className={inputClassName}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-charcoal">
            Company / organisation name <span className="text-deep-teal">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={inputClassName}
            placeholder="Business or organisation name"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
            Company email <span className="text-deep-teal">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClassName}
            placeholder="you@company.co.za"
          />
          <p className="mt-1.5 text-xs text-muted-light">
            Use the email address we should send access instructions to.
          </p>
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Phone number <span className="text-muted-light">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClassName}
            placeholder="+27 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-charcoal">
          Role / position <span className="text-muted-light">(optional)</span>
        </label>
        <input
          id="role"
          name="role"
          type="text"
          autoComplete="organization-title"
          className={inputClassName}
          placeholder="Owner, manager, operations lead..."
        />
      </div>

      <div>
        <label htmlFor="about" className="mb-1.5 block text-sm font-medium text-charcoal">
          What is this about? <span className="text-deep-teal">*</span>
        </label>
        <select id="about" name="about" required className={inputClassName} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {aboutOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Tell us briefly about your business or testing use case{" "}
          <span className="text-deep-teal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClassName} resize-y`}
          placeholder="Example: We want to test QR request tracking and ready-for-pickup alerts during busy service periods."
        />
        <p className="mt-1.5 text-xs text-muted-light">
          A short explanation helps us understand whether Seren Nudge is the right fit for your
          test.
        </p>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-deep-teal px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:bg-coral-hover hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2 sm:w-auto"
      >
        Submit request
      </button>
    </form>
  );
}
