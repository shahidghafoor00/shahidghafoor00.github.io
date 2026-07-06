import { Calendar, Mail } from "lucide-react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { GradientBlobs } from "@/components/ui/background-decor";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden py-24">
      <GradientBlobs />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Let&apos;s Build Something Amazing Together.
          </h2>
          <p className="mt-6 text-lg text-muted text-pretty">
            Have a product idea, or need a hand shipping the one you&apos;re already building?
            I&apos;d love to hear about it.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={site.bookCallUrl} size="lg">
              <Calendar className="h-4 w-4" aria-hidden />
              Book a Call
            </Button>
            <Button href={`mailto:${site.email}`} variant="secondary" size="lg">
              <Mail className="h-4 w-4" aria-hidden />
              Send Email
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
