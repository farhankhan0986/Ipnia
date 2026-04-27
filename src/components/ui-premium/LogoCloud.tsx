import { cn } from "@/lib/utils";

interface Logo {
  name: string;
  abbr?: string;
  url?: string;
}

interface LogoCloudProps {
  title?: string;
  logos: Logo[];
  className?: string;
}

const LogoCloud = ({ title, logos, className }: LogoCloudProps) => {
  return (
    <div className={cn("", className)}>
      {title && (
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted">
          {title}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center gap-2 opacity-50 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
          >
            {logo.url ? (
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 w-auto object-contain"
              />
            ) : (
              <div className="flex h-8 items-center">
                <span className="text-base font-bold tracking-tight text-foreground">
                  {logo.abbr ?? logo.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCloud;
