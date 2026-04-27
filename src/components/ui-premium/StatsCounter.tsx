import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  numericValue?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

interface StatsCounterProps {
  stats: Stat[];
  className?: string;
  variant?: "default" | "cards" | "minimal";
}

const useCountUp = (target: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start || target === undefined || target === null) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return count;
};

const StatCard = ({ stat, start }: { stat: Stat; start: boolean }) => {
  const count = useCountUp(stat.numericValue ?? 0, 1800, start);

  const displayValue = stat.numericValue
    ? `${stat.prefix ?? ""}${count.toLocaleString()}${stat.suffix ?? ""}`
    : stat.value;

  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <div className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {displayValue}
      </div>
      <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
      {stat.description && (
        <div className="text-xs text-muted-foreground/70">{stat.description}</div>
      )}
    </div>
  );
};

const StatsCounter = ({ stats, className, variant = "default" }: StatsCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (variant === "cards") {
    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-2 gap-4 sm:grid-cols-4", className)}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card-premium p-5 text-center"
          >
            <StatCard stat={stat} start={started} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("grid grid-cols-2 gap-8 sm:grid-cols-4", className)}
    >
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} start={started} />
      ))}
    </div>
  );
};

export default StatsCounter;
