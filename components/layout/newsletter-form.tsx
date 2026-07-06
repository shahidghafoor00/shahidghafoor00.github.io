"use client";

export function NewsletterForm() {
  return (
    <form className="mt-4 flex gap-2" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        required
        placeholder="you@company.com"
        className="w-full min-w-0 rounded-lg border border-border bg-surface px-3 py-2 text-sm placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      />
      <button
        type="submit"
        className="shrink-0 rounded-lg bg-accent px-3 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
      >
        Join
      </button>
    </form>
  );
}
