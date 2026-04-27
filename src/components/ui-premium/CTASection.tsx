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
        variant === "dark" && "bg-foreground",
        variant === "gradient" && "bg-primary",
        variant === "default" && "bg-background",
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
                  ? "bg-accent-50 text-accent"
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
            variant === "gradient" || variant === "dark" ? "text-background" : "text-foreground"
          )}
        >
          {headline}
        </h2>

        {subheadline && (
          <p
            className={cn(
              "mx-auto mt-4 max-w-xl text-base leading-7 sm:text-lg",
              variant === "gradient" || variant === "dark" ? "text-background/80" : "text-muted"
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
              "h-12 gap-2 px-8 text-base font-semibold transition-all duration-200",
              variant === "gradient" || variant === "dark"
                ? "bg-background text-foreground hover:scale-105"
                : "bg-primary text-primary-foreground hover:scale-105 hover:bg-primary-600"
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
                "h-12 px-8 text-base transition-all duration-200 hover:scale-105",
                variant === "gradient" || variant === "dark"
                  ? "border-background bg-transparent text-background hover:bg-background/10"
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
