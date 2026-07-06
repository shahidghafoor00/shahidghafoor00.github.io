import type { Metadata } from "next";
import { Calendar, Mail, Phone } from "lucide-react";
import { site } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, TwitterIcon, WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss a new project, a role, or just to say hi.",
};

export default function ContactPage() {
  const socials = [
    { label: site.phone, Icon: Phone, href: `tel:${site.phone.replace(/\s+/g, "")}` },
    { label: "GitHub", Icon: GitHubIcon, href: site.social.github },
    { label: "LinkedIn", Icon: LinkedInIcon, href: site.social.linkedin },
    { label: "Twitter", Icon: TwitterIcon, href: site.social.twitter },
    { label: "WhatsApp", Icon: WhatsAppIcon, href: site.social.whatsapp },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Build Something Amazing Together."
        description="Tell me about your project and I'll get back to you within one business day."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <Card className="p-8">
              <ContactForm />
            </Card>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <Card className="p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Prefer something faster?
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                <Button href={site.bookCallUrl} className="w-full">
                  <Calendar className="h-4 w-4" aria-hidden />
                  Book a Call
                </Button>
                <Button href={`mailto:${site.email}`} variant="secondary" className="w-full">
                  <Mail className="h-4 w-4" aria-hidden />
                  Send Email
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Find me elsewhere
              </h2>
              <ul className="mt-4 space-y-3">
                {socials.map(({ label, Icon, href }) => {
                  const external = href.startsWith("http");
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        className="flex items-center gap-3 text-sm text-muted hover:text-foreground"
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
