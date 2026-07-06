import { ArrowRight } from "lucide-react";
import { experience } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function ExperiencePreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Career" title="Experience" align="left" />

        <ol className="mt-14 space-y-10 border-l border-border pl-8">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
              <p className="text-sm font-medium text-accent">{item.duration}</p>
              <h3 className="mt-1 text-xl font-semibold">
                {item.role} · <span className="text-muted">{item.company}</span>
              </h3>
              <p className="mt-3 text-muted">{item.responsibilities[0]}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.technologies.slice(0, 5).map((tech) => (
                  <li key={tech} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14">
          <Button href="/experience" variant="secondary" size="lg">
            Full Experience <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
