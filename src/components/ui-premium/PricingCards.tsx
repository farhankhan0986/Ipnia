import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCard {
  name: string;
  price: string;
  originalPrice?: string;
  duration: string;
  description: string;
  badge?: string;
  highlighted?: boolean;
  features: PricingFeature[];
  ctaLabel: string;
  onCTA: () => void;
  scholarship?: string;
}

interface PricingCardsProps {
  cards: PricingCard[];
  className?: string;
}

const PricingCards = ({ cards, className }: PricingCardsProps) => {
  return (
    <div
      className={cn(
        "grid gap-6 lg:grid-cols-3",
        className
      )}
    >
      {cards.map((card) => (
        <div
          key={card.name}
          className={cn(
            "relative flex flex-col rounded-2xl border p-6 transition-all duration-300",
            card.highlighted
              ? "border-primary/40 bg-gradient-to-b from-primary/5 to-card shadow-glow"
              : "border-border/60 bg-card shadow-premium hover:shadow-premium-hover hover:-translate-y-1"
          )}
        >
          {/* Badge */}
          {card.badge && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className={cn(
                "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
                card.highlighted
                  ? "bg-primary text-primary-foreground shadow-glow-sm"
                  : "bg-secondary text-secondary-foreground border border-border/60"
              )}>
                {card.highlighted && <Zap className="h-3 w-3" />}
                {card.badge}
              </span>
            </div>
          )}

          {/* Header */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">{card.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight text-foreground">
                {card.price}
              </span>
              {card.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {card.originalPrice}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{card.duration}</p>

            {card.scholarship && (
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {card.scholarship}
              </div>
            )}
          </div>

          <div className="divider-gradient mb-6" />

          {/* Features */}
          <ul className="mb-8 flex flex-col gap-3 flex-1">
            {card.features.map((feature) => (
              <li
                key={feature.text}
                className={cn(
                  "flex items-start gap-3 text-sm",
                  feature.included ? "text-foreground" : "text-muted-foreground/50 line-through"
                )}
              >
                <CheckCircle2
                  className={cn(
                    "mt-0.5 h-4 w-4 shrink-0",
                    feature.included ? "text-primary" : "text-muted-foreground/30"
                  )}
                />
                {feature.text}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button
            onClick={card.onCTA}
            variant={card.highlighted ? "default" : "outline"}
            className={cn(
              "w-full gap-2",
              card.highlighted
                ? "bg-gradient-to-r from-brand-500 to-violet-600 text-white shadow-glow-sm hover:shadow-glow hover:opacity-90"
                : ""
            )}
          >
            {card.ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
