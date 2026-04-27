import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialCardsProps {
  testimonials: Testimonial[];
  className?: string;
  columns?: 2 | 3;
}

const TestimonialCards = ({
  testimonials,
  className,
  columns = 3,
}: TestimonialCardsProps) => {
  return (
    <div
      className={cn(
        `grid gap-6`,
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
        className
      )}
    >
      {testimonials.map((t) => (
        <div
          key={t.name}
          className="card-flat group flex flex-col gap-4 p-6 hover:scale-[1.02]"
        >
          {/* Stars */}
          <div className="flex items-center gap-0.5">
            {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="flex-1 text-sm leading-7 text-foreground">
            <Quote className="mb-2 h-4 w-4 text-accent/60" />
            "{t.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {t.avatar ? (
                <img src={t.avatar} alt={t.name} className="h-full w-full rounded-full object-cover" />
              ) : (
                t.name[0]
              )}
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">{t.name}</div>
              <div className="text-xs text-muted">
                {t.role}{t.company && `, ${t.company}`}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCards;
