import { site } from "@/lib/content";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";

export function TrustStats() {
  return (
    <section className="border-y border-border bg-surface/40 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {site.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted">
            Technologies I work with
          </p>
          <Marquee>
            {site.techLogos.map((tech) => (
              <span
                key={tech}
                className="text-lg font-medium text-muted/80 transition-colors hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
