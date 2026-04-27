import { CheckCircle2, Globe2, MapPin, Laptop, Clock, Users, Award, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/ui-premium/Navbar";
import Footer from "@/components/ui-premium/Footer";
import FloatingBackground from "@/components/ui-premium/FloatingBackground";
import CTASection from "@/components/ui-premium/CTASection";
import PricingCards from "@/components/ui-premium/PricingCards";
import Timeline from "@/components/ui-premium/Timeline";
import { useAuth } from "@/contexts/AuthContext";

const journeySteps = [
  {
    step: 1,
    title: "AI Foundations",
    description: "Master Python, machine learning basics, data handling, and core AI tools. Build your thinking framework.",
    badge: "Week 1–3",
    duration: "3 weeks",
    icon: Laptop,
  },
  {
    step: 2,
    title: "Domain Specialization",
    description: "Deep-dive into your chosen domain — data analytics, NLP, computer vision, or AI workflows.",
    badge: "Week 4–7",
    duration: "4 weeks",
    icon: Award,
  },
  {
    step: 3,
    title: "Execution & Projects",
    description: "Build real projects, complete internship-style tasks, and develop portfolio-worthy proof of work.",
    badge: "Week 8–10",
    duration: "3 weeks",
    icon: CheckCircle2,
  },
  {
    step: 4,
    title: "Career Readiness",
    description: "Interview prep, resume review, mock sessions, and placement support to land your first AI role.",
    badge: "Week 11–12",
    duration: "2 weeks",
    icon: Users,
  },
];

const Programs = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleCTA = (path: string) => {
    if (!user) {
      navigate("/login", { state: { redirectTo: path } });
    } else {
      navigate(path);
    }
  };

  const pricingCards = [
    {
      name: "Online Immersion",
      price: "₹999",
      duration: "2 months · Fully remote",
      description: "The perfect starting point. Build solid AI foundations from anywhere.",
      badge: "Best for getting started",
      highlighted: false,
      scholarship: "Scholarship review available",
      features: [
        { text: "AI fundamentals & tools foundation", included: true },
        { text: "Online internship experience", included: true },
        { text: "Lifetime access to course materials", included: true },
        { text: "Career support & community access", included: true },
        { text: "Certificate of completion", included: true },
        { text: "On-site experience", included: false },
        { text: "Accommodation & meals", included: false },
        { text: "International exposure", included: false },
      ],
      ctaLabel: "Start Your Journey",
      onCTA: () => handleCTA("/payment/ai-course"),
    },
    {
      name: "India Immersion",
      price: "₹9,999",
      duration: "3 months · Delhi campus",
      description: "Immersive on-site experience with mentorship, internship, and career support.",
      badge: "Most Popular",
      highlighted: true,
      scholarship: "Priority scholarship consideration",
      features: [
        { text: "Everything in Online Immersion", included: true },
        { text: "Domain-specific specialization", included: true },
        { text: "On-site internship experience", included: true },
        { text: "Accommodation & meals provided", included: true },
        { text: "1:1 mentorship sessions", included: true },
        { text: "Evaluation, certificate & recommendation", included: true },
        { text: "International exposure", included: false },
        { text: "Global networking & startup visits", included: false },
      ],
      ctaLabel: "Apply for India Immersion",
      onCTA: () => handleCTA("/payment/ml-course"),
    },
    {
      name: "Global Exposure",
      price: "₹24,999",
      duration: "3 months + global week",
      description: "The highest support tier with international learning and global network access.",
      badge: "Premium Tier",
      highlighted: false,
      scholarship: "Limited merit scholarship seats",
      features: [
        { text: "Everything in India Immersion", included: true },
        { text: "International learning trip", included: true },
        { text: "Global networking & startup visits", included: true },
        { text: "Visa & logistics support", included: true },
        { text: "Priority placement support", included: true },
        { text: "Extended mentorship access", included: true },
        { text: "Alumni network access", included: true },
        { text: "Executive career coaching", included: true },
      ],
      ctaLabel: "Apply for Global Exposure",
      onCTA: () => handleCTA("/payment/global-course"),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <FloatingBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label mb-6 inline-flex">Programs</span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Three paths to{" "}
              <span className="text-gradient">AI career readiness</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Choose the track that matches your ambition, budget, and readiness.
              All programs share the same execution-first foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Program comparison */}
      <section className="py-4 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingCards cards={pricingCards} />
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Full program comparison</h2>
            <p className="mt-2 text-muted-foreground">See exactly what's included in each track.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-premium">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-secondary/30">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold text-foreground">Online</th>
                    <th className="px-6 py-4 text-center font-semibold text-primary">India Immersion</th>
                    <th className="px-6 py-4 text-center font-semibold text-foreground">Global</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "AI foundations", values: ["✓", "✓", "✓"] },
                    { label: "Domain specialization", values: ["Overview", "Deep focus", "Deep focus"] },
                    { label: "Internship model", values: ["Online", "On-site", "On-site + International"] },
                    { label: "Accommodation & meals", values: ["—", "✓ Included", "✓ Included"] },
                    { label: "1:1 Mentorship", values: ["—", "✓", "✓ Priority"] },
                    { label: "Scholarship access", values: ["Available", "Priority", "Merit seats"] },
                    { label: "Career support", values: ["✓", "✓", "✓ Priority"] },
                    { label: "Recommendation letter", values: ["—", "✓", "✓"] },
                    { label: "International trip", values: ["—", "—", "✓"] },
                  ].map((row, i) => (
                    <tr key={row.label} className="border-b border-border/40 last:border-0">
                      <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                      {row.values.map((val, j) => (
                        <td
                          key={j}
                          className={`px-6 py-4 text-center ${j === 1 ? "bg-primary/5 font-medium text-foreground" : "text-muted-foreground"}`}
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="border-y border-border/40 bg-secondary/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="section-label mb-6 inline-flex">
                <Clock className="h-3 w-3" />
                Learning Journey
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A clear path from foundations to career readiness
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Every track follows the same proven progression. The difference is depth, support, and exposure.
              </p>
            </div>
            <Timeline steps={journeySteps} />
          </div>
        </div>
      </section>

      {/* Career outcomes */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label mb-4 inline-flex">Career Outcomes</span>
            <h2 className="section-heading">Roles our learners move towards</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground section-subheading">
              Outcomes depend on background and performance. Here are the typical roles IPNIA prepares learners for.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                role: "AI Operations Associate",
                range: "₹4L–₹7L",
                detail: "Structured roles around AI workflows, tooling, and business support.",
                icon: "⚙️",
              },
              {
                role: "Prompting & Workflow Specialist",
                range: "₹5L–₹9L",
                detail: "Using AI across research, productivity, and process design in modern teams.",
                icon: "🎯",
              },
              {
                role: "Junior AI Project Contributor",
                range: "₹6L–₹12L",
                detail: "Candidates with stronger project proof, delivery confidence, and internship exposure.",
                icon: "🚀",
              },
            ].map((outcome) => (
              <div key={outcome.role} className="card-premium p-6 hover:-translate-y-1">
                <div className="mb-4 text-3xl">{outcome.icon}</div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Typical role path
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{outcome.role}</h3>
                <div className="mb-3 text-2xl font-bold text-primary">{outcome.range}</div>
                <p className="text-sm leading-6 text-muted-foreground">{outcome.detail}</p>
                <div className="mt-2 text-xs text-muted-foreground/60">
                  Indicative annual salary range in India
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        badge="Ready to begin?"
        headline="Start your AI journey today"
        subheadline="Pick the track that fits your goals. Scholarship options available."
        primaryCTA="Apply Now"
        secondaryCTA="Download Free Career Guide"
        onPrimaryCTA={() => handleCTA("/payment/ml-course")}
        onSecondaryCTA={() => navigate("/contact")}
        variant="gradient"
      />

      <Footer />
    </div>
  );
};

export default Programs;
