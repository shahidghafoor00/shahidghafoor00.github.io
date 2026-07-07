import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Languages as LanguagesIcon, CheckCircle2, Briefcase } from "lucide-react";
import { site } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description: site.bio.short,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Me" title={`Hi, I'm ${site.name.split(" ")[0]}`} />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[320px_1fr]">
          <Reveal>
            <div className="sticky top-24 space-y-6">
              <div className="mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-accent/10 lg:mx-0">
                <Image
                  src="/images/profile.jpg"
                  alt={site.name}
                  width={500}
                  height={625}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2 text-muted">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden />
                  {site.location}
                </p>
                <p className="flex items-center gap-2 text-muted">
                  <LanguagesIcon className="h-4 w-4 text-accent" aria-hidden />
                  {site.languages.join(", ")}
                </p>
                <p className="flex items-center gap-2 text-muted">
                  <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden />
                  {site.availability}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Button href="/contact" className="w-full">
                  Get in Touch
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            {site.bio.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <p className="text-lg text-muted text-pretty">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="mt-10">
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
                  <Briefcase className="h-4 w-4 text-accent" aria-hidden />
                  Industries I&apos;ve Worked With
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {site.industries.map((industry) => (
                    <Badge key={industry}>{industry}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
