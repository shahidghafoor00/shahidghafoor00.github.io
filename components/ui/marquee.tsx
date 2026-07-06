import type { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode[] }) {
  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max shrink-0 animate-marquee items-center gap-12 pr-12">
        {children}
        <div aria-hidden className="flex items-center gap-12 pl-12">
          {children}
        </div>
      </div>
    </div>
  );
}
