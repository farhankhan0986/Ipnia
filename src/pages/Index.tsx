import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  Sparkles,
  Zap,
  BarChart3,
  Brain,
  Code2,
  Database,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import BrochureModal from "@/components/BrochureModal";
import StickyCTA from "@/components/StickyCTA";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

import {
  Navbar,
  Footer,
  HeroSection,
  FeatureCards,
  PricingCards,
  TestimonialCards,
  FAQAccordion,
  CTASection,
  ToolGrid,
  Timeline,
  LogoCloud,
} from "@/components/ui-premium";

const heroStats = [
  { value: "90 days", label: "to interview readiness" },
  { value: "₹999", label: "starting price" },
  { value: "3", label: "immersive tracks", numericValue: 3 },
  { value: "80+", label: "tools covered", numericValue: 80, suffix: "+" },
];

const logoPartners = [
  { name: "Google", abbr: "Google" },
  { name: "Microsoft", abbr: "Microsoft" },
  { name: "AWS", abbr: "AWS" },
  { name: "OpenAI", abbr: "OpenAI" },
  { name: "Meta AI", abbr: "Meta AI" },
  { name: "Databricks", abbr: "Databricks" },
  { name: "HuggingFace", abbr: "HuggingFace" },
  { name: "Snowflake", abbr: "Snowflake" },
];

const whyFeatures = [
  {
    title: "Execution-First Curriculum",
    description: "Built around output, not passive content consumption. Every module produces something real.",
    icon: Zap,
    badge: "Core principle",
  },
  {
    title: "Structured Career Path",
    description: "Clear progression from AI foundations through specialization to interview-ready proof of work.",
    icon: TrendingUp,
  },
  {
    title: "High-Trust Support System",
    description: "Mentorship, internship exposure, accommodation support, and scholarship options reduce friction.",
    icon: ShieldCheck,
  },
  {
    title: "Industry-Aligned Tools",
    description: "Master 80+ tools actually used in AI jobs — not outdated textbook frameworks.",
    icon: Database,
  },
  {
    title: "Real-World Projects",
    description: "Build a portfolio that hiring managers recognize and value. Not toy exercises.",
    icon: Code2,
  },
  {
    title: "Career Outcomes Focus",
    description: "IPNIA tracks graduate outcomes and continuously updates the program to reflect actual job requirements.",
    icon: BarChart3,
  },
];

const journeySteps = [
  {
    step: 1,
    title: "AI Foundations",
    description: "Python, ML basics, prompt engineering, and core AI tooling. Build the right mental model.",
    badge: "Week 1–3",
    duration: "3 weeks",
    icon: Brain,
  },
  {
    step: 2,
    title: "Domain Specialization",
    description: "Deep-dive into your target domain — data analytics, NLP, computer vision, or AI workflows.",
    badge: "Week 4–7",
    duration: "4 weeks",
    icon: BarChart3,
  },
  {
    step: 3,
    title: "Execution & Portfolio",
    description: "Build real, portfolio-worthy projects through internship-style execution with guided feedback.",
    badge: "Week 8–10",
    duration: "3 weeks",
    icon: Code2,
  },
  {
    step: 4,
    title: "Career Launch",
    description: "Interview prep, resume review, mock sessions, and direct introductions to hiring partners.",
    badge: "Week 11–12",
    duration: "2 weeks",
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "AI Operations Associate",
    company: "Bangalore",
    quote: "IPNIA gave me structure. I stopped collecting random tutorials and started building proof I could actually discuss in interviews.",
    rating: 5,
  },
  {
    name: "Riya Sharma",
    role: "Data & AI Analyst",
    company: "Delhi",
    quote: "The biggest shift was confidence. The program made AI feel less abstract and much more connected to real work I could show.",
    rating: 5,
  },
  {
    name: "Karthik Rao",
    role: "Junior AI Project Contributor",
    company: "Hyderabad",
    quote: "The immersion format felt serious in the best way. It created real momentum and kept me accountable all the way through.",
    rating: 5,
  },
];

const faqItems = [
  {
    question: "Who should apply to IPNIA?",
    answer: "The programs are best suited for students, fresh graduates, and early professionals who want stronger AI capability with clearer career direction.",
  },
  {
    question: "Do I need to be highly technical before joining?",
    answer: "No. The tracks are designed to help motivated learners build foundations first, then move into execution and specialization with guidance.",
  },
  {
    question: "Why choose an immersion track over a standard online course?",
    answer: "The immersion tracks add more accountability, in-person structure, internship exposure, and stronger support around completion and readiness.",
  },
  {
    question: "Are scholarships available?",
    answer: "Yes. Merit-based scholarships are available for select tracks. Download the Career Guide or contact admissions to learn about eligibility.",
  },
  {
    question: "Can I learn more before applying?",
    answer: "Absolutely. Download the free Career Guide, review scholarship options, or request a callback before starting an application.",
  },
];

const Index = () => {
  const [showBrochure, setShowBrochure] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleTrackSelection = (paymentPath: string) => {
    if (!user) {
      navigate("/login", { state: { redirectTo: paymentPath } });
      return;
    }
    navigate(paymentPath);
  };

  const pricingCards = [
    {
      name: "Online Immersion",
      price: "₹999",
      duration: "2 months · Fully remote",
      description: "Build solid AI foundations from anywhere. The perfect starting point.",
      badge: "Best for getting started",
      highlighted: false,
      scholarship: "Scholarship review available",
      features: [
        { text: "AI fundamentals & tools", included: true },
        { text: "Online internship experience", included: true },
        { text: "Lifetime course access", included: true },
        { text: "Career support & community", included: true },
        { text: "Completion certificate", included: true },
        { text: "On-site experience", included: false },
        { text: "International exposure", included: false },
      ],
      ctaLabel: "Start Your Journey",
      onCTA: () => handleTrackSelection("/payment/ai-course"),
    },
    {
      name: "India Immersion",
      price: "₹9,999",
      duration: "3 months · Delhi campus",
      description: "On-site learning with mentorship, internship, and full career support.",
      badge: "Most Popular",
      highlighted: true,
      scholarship: "Priority scholarship consideration",
      features: [
        { text: "Everything in Online Immersion", included: true },
        { text: "Domain-specific specialization", included: true },
        { text: "On-site internship experience", included: true },
        { text: "Accommodation & meals", included: true },
        { text: "1:1 Mentorship sessions", included: true },
        { text: "Recommendation letter", included: true },
        { text: "International exposure", included: false },
      ],
      ctaLabel: "Apply for India Immersion",
      onCTA: () => handleTrackSelection("/payment/ml-course"),
    },
    {
      name: "Global Exposure",
      price: "₹24,999",
      duration: "3 months + global week",
      description: "The highest support tier — internship, mentorship, and international access.",
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
      ],
      ctaLabel: "Apply for Global Exposure",
      onCTA: () => handleTrackSelection("/payment/global-course"),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div id="progress-bar" className="progress-bar" />
      <Navbar />

      {/* HERO */}
      <HeroSection
        badge="Premium AI Education — Built for Real Career Movement"
        headline="Accelerate your AI career with structured learning &"
        headlineAccent="real outcomes"
        subheadline="IPNIA helps students and early professionals move from fragmented AI learning to a structured, execution-first path. 90 days to interview readiness."
        primaryCTA="Explore Programs"
        secondaryCTA="Download Free Career Guide"
        onPrimaryCTA={() => navigate("/programs")}
        onSecondaryCTA={() => setShowBrochure(true)}
        stats={heroStats}
        proofPoints={[
          "Structured AI foundations",
          "Internship-style execution",
          "Career guidance & placement",
          "Scholarship options available",
        ]}
      />

      {/* TRUSTED BY */}
      <section className="border-y border-border/40 bg-secondary/20 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LogoCloud
            title="Powered by the tools used at the world's leading AI organizations"
            logos={logoPartners}
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label mb-4 inline-flex">
              <Sparkles className="h-3 w-3" />
              Why IPNIA
            </span>
            <h2 className="section-heading">
              A cleaner, higher-trust model for AI education
            </h2>
            <p className="mx-auto mt-4 max-w-2xl section-subheading text-muted-foreground">
              IPNIA is designed around one central idea: education should create execution,
              not just knowledge. We reduce noise and create clear paths.
            </p>
          </div>
          <FeatureCards cards={whyFeatures} columns={3} />
        </div>
      </section>

      {/* PROGRAMS / PRICING */}
      <section id="tracks" className="border-y border-border/40 bg-secondary/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label mb-4 inline-flex">Programs</span>
            <h2 className="section-heading">
              Three paths. Increasing support &amp; exposure.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl section-subheading text-muted-foreground">
              Start with the level that matches your ambition, budget, and readiness.
              Every track shares the same execution-first foundation.
            </p>
          </div>
          <PricingCards cards={pricingCards} />
          <div className="mt-6 text-center">
            <Button
              variant="ghost"
              onClick={() => navigate("/programs")}
              className="gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              View full program comparison
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="section-label mb-6 inline-flex">
                <Clock3 className="h-3 w-3" />
                Learning Journey
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A clear path from foundations to career readiness
              </h2>
              <p className="mb-6 text-base leading-7 text-muted-foreground">
                Every track follows the same proven 12-week progression — foundations,
                specialization, execution, and placement readiness.
              </p>
              <Button
                onClick={() => navigate("/programs")}
                className="gap-2 bg-gradient-to-r from-brand-500 to-violet-600 text-white shadow-glow-sm hover:shadow-glow hover:opacity-90"
              >
                Explore Full Program
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <Timeline steps={journeySteps} />
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section id="tools" className="border-y border-border/40 bg-secondary/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label mb-4 inline-flex">
              <Database className="h-3 w-3" />
              Tools &amp; Technologies
            </span>
            <h2 className="section-heading">
              Master the 80+ Essential Industry Tools
            </h2>
            <p className="mx-auto mt-4 max-w-2xl section-subheading text-muted-foreground">
              From Python and PyTorch to Kafka, Kubernetes, and LangChain — learn the exact stack
              AI teams use every day. Searchable by category.
            </p>
          </div>
          <ToolGrid />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label mb-4 inline-flex">Testimonials</span>
            <h2 className="section-heading">Real confidence is the outcome</h2>
            <p className="mx-auto mt-4 max-w-xl section-subheading text-muted-foreground">
              Hear from learners who traded passive study for structured execution — and got results.
            </p>
          </div>
          <TestimonialCards testimonials={testimonials} columns={3} />
          <div className="mt-8 text-center">
            <Button
              variant="ghost"
              onClick={() => navigate("/careers")}
              className="gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              See more success stories
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border/40 bg-secondary/20 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="section-label mb-4 inline-flex">FAQ</span>
            <h2 className="section-heading">Common questions before you apply</h2>
          </div>
          <FAQAccordion items={faqItems} />
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Have more questions?{" "}
              <button
                onClick={() => navigate("/contact")}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Contact our admissions team
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        badge="Start Today"
        headline="Your AI career starts with one decision"
        subheadline="Join hundreds of learners who chose structure over scattered tutorials — and are now in AI roles."
        primaryCTA="Start Your Journey"
        secondaryCTA="Download Free Career Guide"
        onPrimaryCTA={() => navigate("/programs")}
        onSecondaryCTA={() => setShowBrochure(true)}
        variant="gradient"
      />

      <Footer />

      {showBrochure && <BrochureModal onClose={() => setShowBrochure(false)} />}
      <StickyCTA />
    </div>
  );
};

export default Index;
