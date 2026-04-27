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
          className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-5"
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
      {/* Minimal geometric shapes with low opacity */}
      <div
        className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, var(--secondary) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default FloatingBackground;
