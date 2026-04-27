import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStep {
  step: number;
  title: string;
  description: string;
  icon?: LucideIcon;
  badge?: string;
  duration?: string;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

const Timeline = ({ steps, className }: TimelineProps) => {
  return (
    <div className={cn("relative space-y-0", className)}>
      {steps.map((step, i) => {
        const Icon = step.icon;
        const isLast = i === steps.length - 1;

        return (
          <div key={step.step} className="relative flex gap-6 pb-8 last:pb-0">
            {/* Connector line */}
            {!isLast && (
              <div className="absolute left-5 top-10 h-full w-px bg-border" />
            )}

            {/* Step indicator */}
            <div className="relative flex-none">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary-50">
                {Icon ? (
                  <Icon className="h-4 w-4 text-primary" />
                ) : (
                  <span className="text-xs font-bold text-primary">{step.step}</span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 rounded-md border border-border bg-card p-5 transition-all duration-200 hover:scale-[1.02]">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  {step.badge && (
                    <span className="mb-1.5 inline-block rounded-full bg-primary-50 px-2 py-0.5 text-xs font-semibold text-primary">
                      {step.badge}
                    </span>
                  )}
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                </div>
                {step.duration && (
                  <span className="shrink-0 rounded-full bg-secondary-50 px-2.5 py-1 text-xs font-medium text-secondary">
                    {step.duration}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
