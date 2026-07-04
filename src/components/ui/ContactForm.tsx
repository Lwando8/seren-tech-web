"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

const interestOptions = [
  "Seren Nudge testing",
  "Business enquiry",
  "Partnership enquiry",
  "General enquiry",
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const company = data.get("company") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const interest = data.get("interest") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Seren Tech enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company || "—"}\nEmail: ${email}\nPhone: ${phone || "—"}\nProduct interest: ${interest || "—"}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="text-lg font-semibold text-charcoal">Thank you for reaching out.</p>
        <p className="mt-2 text-muted">
          Your email client should open with your message ready to send. If it did not, please email
          us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-coral hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Name <span className="text-coral">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-charcoal placeholder:text-muted-light focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-charcoal">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-charcoal placeholder:text-muted-light focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20"
            placeholder="Organisation name"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
            Email <span className="text-coral">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-charcoal placeholder:text-muted-light focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20"
            placeholder="you@company.co.za"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Phone <span className="text-muted-light">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-charcoal placeholder:text-muted-light focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20"
            placeholder="+27 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-charcoal">
          What is this about?
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-charcoal focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Message <span className="text-coral">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-sm text-charcoal placeholder:text-muted-light focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20"
          placeholder="Tell us what you're building, managing, or trying to improve."
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
