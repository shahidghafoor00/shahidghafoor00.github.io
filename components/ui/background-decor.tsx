export function GradientBlobs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}
    >
      <div className="absolute -top-32 -left-32 h-96 w-96 animate-float rounded-full bg-accent/20 blur-3xl" />
      <div
        className="absolute top-1/3 -right-32 h-96 w-96 animate-float rounded-full bg-violet-500/20 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-72 w-72 animate-float rounded-full bg-emerald-400/10 blur-3xl"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}

export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-20 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)] ${className ?? ""}`}
    />
  );
}
