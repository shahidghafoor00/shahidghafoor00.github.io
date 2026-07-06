import type { Metadata } from "next";
import { services } from "@/lib/content";
import { getIcon } from "@/lib/icon-map";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: "Mobile, backend, AI integration, and MVP development services for startups and growing companies.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What I Do"
        title="Services"
        description="Whatever stage your product is at, I can help you build the next piece of it."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <Reveal key={service.slug} delay={index * 0.05}>
                <Card id={service.slug} className="scroll-mt-24 p-8 sm:p-10">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-7 w-7" aria-hidden />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold">{service.title}</h2>
                      <p className="mt-3 text-muted text-pretty">{service.description}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <Button href="/contact" size="lg">
            Discuss Your Project
          </Button>
        </div>
      </section>
    </>
  );
}
