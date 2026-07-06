"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { GradientBlobs, GridBackdrop } from "@/components/ui/background-decor";
import { CursorGlow } from "@/components/ui/cursor-glow";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-28">
      <GridBackdrop />
      <GradientBlobs />
      <CursorGlow />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-sm text-muted backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
            {site.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {site.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted text-pretty"
          >
            {site.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" size="lg">
              Hire Me
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="/projects" variant="secondary" size="lg">
              View Projects
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 animate-float rounded-[2rem] border border-border bg-gradient-to-br from-accent/20 via-surface to-violet-500/10 backdrop-blur-sm" />
          <div className="absolute inset-6 rounded-3xl border border-border bg-surface/80 p-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="mt-6 space-y-3 font-mono text-xs text-muted">
              <p><span className="text-accent">const</span> engineer = {"{"}</p>
              <p className="pl-4">stack: [<span className="text-emerald-400">&quot;Flutter&quot;</span>, <span className="text-emerald-400">&quot;Next.js&quot;</span>],</p>
              <p className="pl-4">focus: <span className="text-emerald-400">&quot;AI-powered products&quot;</span>,</p>
              <p className="pl-4">clients: <span className="text-accent">&quot;global&quot;</span>,</p>
              <p>{"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
