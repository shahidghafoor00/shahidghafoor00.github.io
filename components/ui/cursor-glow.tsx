"use client";

import { useEffect, useRef } from "react";

export function CursorGlow({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function handlePointerMove(event: PointerEvent) {
      const rect = el!.getBoundingClientRect();
      el!.style.setProperty("--x", `${event.clientX - rect.left}px`);
      el!.style.setProperty("--y", `${event.clientY - rect.top}px`);
    }

    const parent = el.parentElement;
    parent?.addEventListener("pointermove", handlePointerMove);
    return () => parent?.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 ${className ?? ""}`}
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--color-accent) 12%, transparent) 0%, transparent 70%)",
      }}
    />
  );
}
