import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FloatingBackground from "./FloatingBackground";

interface Stat {
  value: string;
  label: string;
}

interface HeroSectionProps {
  badge?: string;
  headline: string;
  headlineAccent?: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
  stats?: Stat[];
  proofPoints?: string[];
}

const HeroSection = ({
  badge,
  headline,
  headlineAccent,
  subheadline,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA,
  stats = [],
  proofPoints = [],
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <FloatingBackground variant="hero" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {badge && (
            <div className="mb-8 flex justify-center animate-fade-in-down">
              <span className="section-label">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                {badge}
              </span>
            </div>
          )}

          <h1 className="animate-fade-in-up fill-backwards text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            {headline}
            {headlineAccent && (
              <>
                {" "}
                <span className="text-accent">{headlineAccent}</span>
              </>
            )}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up animate-delay-100 fill-backwards text-lg leading-8 text-muted-foreground sm:text-xl">
            {subheadline}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up animate-delay-200 fill-backwards">
            <Button
              size="lg"
              onClick={onPrimaryCTA}
              className="h-12 gap-2 bg-primary px-8 text-base font-semibold text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-primary-600"
            >
              {primaryCTA}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onSecondaryCTA}
              className="h-12 gap-2 px-8 text-base"
            >
              <Play className="h-4 w-4" />
              {secondaryCTA}
            </Button>
          </div>

          {proofPoints.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 animate-fade-in-up animate-delay-300 fill-backwards">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  {point}
                </div>
              ))}
            </div>
          )}
        </div>

        {stats.length > 0 && (
          <div className="mx-auto mt-16 max-w-4xl animate-fade-in-up animate-delay-400 fill-backwards">
            <div className="divider-gradient mb-8" />
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 text-center"
                >
                  <dt className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
