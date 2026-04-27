import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCard {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  gradient?: string;
}

interface FeatureCardsProps {
  cards: FeatureCard[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const gradients = [
  "from-brand-500/10 to-violet-600/10",
  "from-violet-500/10 to-purple-600/10",
  "from-purple-500/10 to-pink-600/10",
  "from-pink-500/10 to-rose-600/10",
];

const iconColors = [
  "text-brand-500",
  "text-violet-500",
  "text-purple-500",
  "text-pink-500",
];

const FeatureCards = ({ cards, columns = 3, className }: FeatureCardsProps) => {
  const gridClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={cn(`grid gap-6 ${gridClass}`, className)}>
      {cards.map((card, i) => {
        const Icon = card.icon;
        const gradient = card.gradient ?? gradients[i % gradients.length];
        const iconColor = iconColors[i % iconColors.length];

        return (
          <div
            key={card.title}
            className="card-premium group p-6 hover:-translate-y-1"
          >
            {/* Icon */}
            <div
              className={cn(
                "mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br",
                gradient
              )}
            >
              <Icon className={cn("h-6 w-6", iconColor)} />
            </div>

            {/* Badge */}
            {card.badge && (
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {card.badge}
              </span>
            )}

            <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {card.title}
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCards;
