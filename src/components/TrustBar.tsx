const stats = [
  { value: "5M+", label: "New AI Jobs Created" },
  { value: "27%", label: "Salary Premium" },
  { value: "3–5×", label: "Productivity Boost" },
  { value: "85%", label: "Job Satisfaction" },
  { value: "75%", label: "Skills Gap — Unfilled" },
];

const partners = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
  { src: "/apple-logo.svg", alt: "Apple" },
];

export default function TrustBar() {
  return (
    <div className="w-full bg-card border-b border-border py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center min-w-[100px]">
              <span className="text-2xl font-bold text-foreground">{s.value}</span>
              <span className="text-xs text-muted-foreground text-center leading-tight">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-5" />

        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Industry Partners</span>
          {partners.map((p) => (
            <img key={p.alt} src={p.src} alt={p.alt} className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          ))}
        </div>
      </div>
    </div>
  );
}
