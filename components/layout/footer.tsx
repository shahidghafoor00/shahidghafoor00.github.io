import Link from "next/link";
import { Mail } from "lucide-react";
import { site, services } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { NewsletterForm } from "@/components/layout/newsletter-form";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {site.name}
            <span className="text-accent">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted">{site.bio.short}</p>
          <div className="mt-5 flex items-center gap-4">
            <a href={site.social.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-muted hover:text-foreground">
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-muted hover:text-foreground">
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Send email" className="text-muted hover:text-foreground">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-semibold">Navigation</h3>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="text-sm font-semibold">Services</h3>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`} className="text-sm text-muted hover:text-foreground">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold">Stay in touch</h3>
          <p className="mt-4 text-sm text-muted">
            Get occasional notes on shipping software and freelancing.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="mx-auto max-w-6xl px-6 text-center text-sm text-muted">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
