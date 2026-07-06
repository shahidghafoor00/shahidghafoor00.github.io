import { MapPin, Languages as LanguagesIcon, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-accent/10">
            <div className="flex h-full items-center justify-center text-6xl font-semibold text-accent/40">
              {site.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">About Me</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Turning ambitious ideas into production-grade software.
          </h2>
          <p className="mt-6 text-lg text-muted text-pretty">{site.bio.paragraphs[0]}</p>
          <p className="mt-4 text-muted text-pretty">{site.bio.paragraphs[1]}</p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" aria-hidden />
              {site.location}
            </span>
            <span className="flex items-center gap-2">
              <LanguagesIcon className="h-4 w-4 text-accent" aria-hidden />
              {site.languages.join(", ")}
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden />
              {site.availability}
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/about" variant="secondary">
              More About Me
            </Button>
            <Button href={site.resumeUrl} variant="ghost">
              Download Resume
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
