"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { getIcon } from "@/lib/icon-map";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What I Do"
          title="Services built for shipping real products"
          description="From a native-feeling mobile app to the AI feature that makes your product feel smart — I cover the full stack."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <StaggerItem key={service.slug}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Card className="group h-full p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-muted">{service.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services#${service.slug}`}
                      className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
