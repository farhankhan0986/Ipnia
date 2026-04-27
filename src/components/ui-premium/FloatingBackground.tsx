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
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
        <div className="bg-dots absolute inset-0 opacity-40" />
      </div>
    );
  }

  if (variant === "subtle") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
        <div
          className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
        />
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* Grid */}
      <div className="bg-grid absolute inset-0 opacity-30" />

      {/* Blobs */}
      <div
        className="absolute -left-40 -top-40 h-[500px] w-[500px] animate-blob rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
      />
      <div
        className="absolute -right-40 top-1/3 h-[400px] w-[400px] animate-blob rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[350px] w-[350px] animate-blob rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />

      {/* Fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
    </div>
  );
};

export default FloatingBackground;
