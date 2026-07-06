"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/content";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const company = formData.get("company")?.toString() ?? "";
    const budget = formData.get("budget")?.toString() ?? "";
    const details = formData.get("details")?.toString() ?? "";

    const subject = `New project inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      budget ? `Budget: ${budget}` : null,
      "",
      "Project details:",
      details,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
            Company <span className="text-muted">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">
            Budget <span className="text-muted">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <option value="">Select a range</option>
            <option value="< $5k">Under $5,000</option>
            <option value="$5k - $15k">$5,000 – $15,000</option>
            <option value="$15k - $50k">$15,000 – $50,000</option>
            <option value="$50k+">$50,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="details" className="mb-1.5 block text-sm font-medium">
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          placeholder="What are you building, and what would make this project a success?"
          className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden />
        Send Message
      </button>

      {submitted ? (
        <p role="status" className="text-sm text-muted">
          Your email app should open with this message pre-filled — just hit send.
        </p>
      ) : null}
    </form>
  );
}
