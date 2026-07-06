import { process } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";

export function ProcessSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How I Work"
          title="A clear, predictable process"
          description="Six steps that keep every project on time and on scope."
        />

        <StaggerGroup className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div
            aria-hidden
            className="absolute top-6 left-0 hidden h-px w-full bg-border lg:block"
          />
          {process.map((item, index) => (
            <StaggerItem key={item.step} className="relative text-center lg:text-left">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-accent lg:mx-0">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-semibold">{item.step}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
