import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingBackground from "./FloatingBackground";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  primaryCTA: string;
  secondaryCTA?: string;
  onPrimaryCTA: () => void;
  onSecondaryCTA?: () => void;
  variant?: "default" | "dark" | "gradient";
  className?: string;
}

const CTASection = ({
  badge,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA,
  variant = "gradient",
  className,
}: CTASectionProps) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 sm:py-28",
        variant === "dark" && "bg-slate-950",
        variant === "gradient" && "bg-gradient-to-br from-brand-600 via-violet-600 to-purple-700",
        variant === "default" && "bg-secondary/50",
        className
      )}
    >
      {variant !== "dark" && <FloatingBackground variant="subtle" />}

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {badge && (
          <div className="mb-6 flex justify-center">
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest",
                variant === "gradient"
                  ? "border border-white/20 bg-white/10 text-white"
                  : "section-label"
              )}
            >
              {badge}
            </span>
          </div>
        )}

        <h2
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
            variant === "gradient" ? "text-white" : "text-foreground"
          )}
        >
          {headline}
        </h2>

        {subheadline && (
          <p
            className={cn(
              "mx-auto mt-4 max-w-xl text-base leading-7 sm:text-lg",
              variant === "gradient" ? "text-white/80" : "text-muted-foreground"
            )}
          >
            {subheadline}
          </p>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            onClick={onPrimaryCTA}
            className={cn(
              "h-12 gap-2 px-8 text-base font-semibold",
              variant === "gradient"
                ? "bg-white text-violet-700 shadow-lg hover:bg-white/90"
                : "bg-gradient-to-r from-brand-500 to-violet-600 text-white shadow-glow-sm hover:shadow-glow hover:opacity-90"
            )}
          >
            {primaryCTA}
            <ArrowRight className="h-4 w-4" />
          </Button>
          {secondaryCTA && onSecondaryCTA && (
            <Button
              size="lg"
              variant="outline"
              onClick={onSecondaryCTA}
              className={cn(
                "h-12 px-8 text-base",
                variant === "gradient"
                  ? "border-white/30 bg-transparent text-white hover:bg-white/10"
                  : ""
              )}
            >
              {secondaryCTA}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
