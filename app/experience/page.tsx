import type { Metadata } from "next";
import { experience } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Experience",
  description: "A timeline of the companies and clients I've worked with.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title="Experience"
        description="Where I've worked, what I built, and what it led to."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <ol className="space-y-10 border-l border-border pl-8">
            {experience.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.06} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <Card className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-xl font-semibold">
                      {item.role} <span className="text-muted">· {item.company}</span>
                    </h2>
                    <span className="text-sm font-medium text-accent">{item.duration}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.location}</p>

                  <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted">
                    Responsibilities
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {item.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3 text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted">
                    Achievements
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {item.achievements.map((a) => (
                      <li key={a} className="flex gap-3 text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <li key={tech} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
