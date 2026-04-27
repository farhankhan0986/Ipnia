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

const iconBgColors = [
  "bg-primary-50 text-primary",
  "bg-secondary-50 text-secondary",
  "bg-accent-50 text-accent",
  "bg-primary-50 text-primary",
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
        const iconBgColor = iconBgColors[i % iconBgColors.length];

        return (
          <div
            key={card.title}
            className="card-flat group p-6 hover:scale-[1.02]"
          >
            {/* Icon */}
            <div
              className={cn(
                "mb-5 flex h-12 w-12 items-center justify-center rounded-md",
                iconBgColor
              )}
            >
              <Icon className="h-6 w-6" />
            </div>

            {/* Badge */}
            {card.badge && (
              <span className="mb-3 inline-block rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {card.badge}
              </span>
            )}

            <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
              {card.title}
            </h3>
            <p className="text-sm leading-6 text-muted">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCards;
