import { cn } from "@/lib/utils";

interface FloatingBackgroundProps {
  className?: string;
  variant?: "hero" | "subtle" | "grid" | "dots";
}

const FloatingBackground = ({
  className,
  variant = "hero",
}: FloatingBackgroundProps) => {
  if (variant === "grid") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
        <div className="bg-grid absolute inset-0 opacity-40 dark:opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
        <div className="bg-dots absolute inset-0 opacity-30 dark:opacity-15" />
      </div>
    );
  }

  if (variant === "subtle") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
        <div
          className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-3xl dark:opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* Grid */}
      <div className="bg-grid absolute inset-0 opacity-25 dark:opacity-10" />

      {/* Blob 1 */}
      <div
        className="absolute -left-40 -top-40 h-[500px] w-[500px] animate-blob rounded-full opacity-20 dark:opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      {/* Blob 2 */}
      <div
        className="absolute -right-40 top-1/3 h-[420px] w-[420px] animate-blob rounded-full opacity-15 dark:opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      {/* Blob 3 */}
      <div
        className="absolute bottom-0 left-1/3 h-[360px] w-[360px] animate-blob rounded-full opacity-15 dark:opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--muted) 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />

      {/* Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/20 to-[var(--background)]" />
    </div>
  );
};

export default FloatingBackground;