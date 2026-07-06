import { Reveal } from "@/components/ui/reveal";
import { GridBackdrop } from "@/components/ui/background-decor";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-20 sm:pt-24">
      <GridBackdrop />
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-lg text-muted text-pretty">{description}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
