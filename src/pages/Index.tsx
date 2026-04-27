import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

import BrochureModal from "@/components/BrochureModal";
import StickyCTA from "@/components/StickyCTA";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeToggle from "@/components/ThemeToggle";

const navigationLinks = [
  { href: "#tracks", label: "Choose Your Track" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#insights", label: "Blog" },
];

const heroProof = [
  "Structured AI foundations",
  "Internship-style execution",
  "Career guidance and outcomes support",
  "Scholarship options for select tracks",
];

const stats = [
  { value: "90 days", label: "to become interview ready" },
  { value: "3 tracks", label: "with increasing support and exposure" },
  { value: "1:1", label: "guided feedback and mentor support" },
  { value: "75%", label: "skills gap employers still struggle to fill" },
];

const featureCards = [
  {
    title: "Built for career movement",
    description: "The program is designed around what helps learners become credible contributors, not passive consumers.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Simple path, strong structure",
    description: "Each track follows a clear progression from foundations to execution to interview-facing proof.",
    icon: Clock3,
  },
  {
    title: "High-trust support system",
    description: "Mentorship, internship exposure, accommodation support, and scholarship guidance reduce decision friction.",
    icon: ShieldCheck,
  },
];

const tracks = [
  {
    name: "Online Immersion",
    price: "₹999",
    duration: "2 months",
    path: "/payment/ai-course",
    badge: "Best for getting started",
    scholarship: "Scholarship review available",
    features: [
      "General AI tools foundation",
      "Online internship experience",
      "Lifetime access to course materials",
      "Career support and community access",
    ],
  },
  {
    name: "India Immersion",
    price: "₹9,999",
    duration: "3 months",
    path: "/payment/ml-course",
    badge: "Most popular",
    scholarship: "Priority scholarship consideration",
    features: [
      "Everything in Online Immersion",
      "Domain-specific specialization",
      "On-site internship with accommodation and meals",
      "Mentorship, evaluation, certificate, and recommendation letter",
    ],
  },
  {
    name: "Global Exposure",
    price: "₹24,999",
    duration: "3 months plus global week",
    path: "/payment/global-course",
    badge: "Highest support tier",
    scholarship: "Limited merit scholarship seats",
    features: [
      "Everything in India Immersion",
      "International learning trip",
      "Global networking and startup visits",
      "Visa and logistics support",
    ],
  },
];

const comparisonRows = [
  { label: "AI foundations", values: ["Included", "Included", "Included"] },
  { label: "Domain specialization", values: ["Overview", "Deep focus", "Deep focus"] },
  { label: "Internship model", values: ["Online", "On-site", "On-site + international"] },
  { label: "Accommodation and meals", values: ["No", "Included", "Included"] },
  { label: "Scholarship access", values: ["Available", "Priority", "Limited merit seats"] },
  { label: "Career support", values: ["Included", "Included", "Priority support"] },
];

const careerOutcomes = [
  {
    role: "AI Operations Associate",
    range: "₹4L-₹7L",
    detail: "For learners entering structured roles around AI workflows, tooling, and business support.",
  },
  {
    role: "Prompting and Workflow Specialist",
    range: "₹5L-₹9L",
    detail: "For learners using AI across research, productivity, and process design in modern teams.",
  },
  {
    role: "Junior AI Project Contributor",
    range: "₹6L-₹12L",
    detail: "For candidates with stronger project proof, delivery confidence, and internship-style exposure.",
  },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Aspiring AI Analyst",
    quote: "IPNIA gave me structure. I stopped collecting random tutorials and started building proof I could actually discuss in interviews.",
  },
  {
    name: "Riya Sharma",
    role: "Business Graduate",
    quote: "The biggest shift was confidence. The program made AI feel less abstract and much more connected to real work.",
  },
  {
    name: "Karthik Rao",
    role: "Early-Career Learner",
    quote: "The immersion format felt serious in the best way. It created momentum and kept me accountable all the way through.",
  },
];

const faqItems = [
  {
    value: "faq-1",
    question: "Who should apply to IPNIA?",
    answer:
      "The programs are best suited for students, fresh graduates, and early professionals who want stronger AI capability with clearer career direction.",
  },
  {
    value: "faq-2",
    question: "Do I need to be highly technical before joining?",
    answer:
      "No. The tracks are designed to help motivated learners build foundations first, then move into execution and specialization with guidance.",
  },
  {
    value: "faq-3",
    question: "Why choose an immersion track over a standard online course?",
    answer:
      "The immersion tracks add more accountability, in-person structure, internship exposure, and stronger support around completion and readiness.",
  },
  {
    value: "faq-4",
    question: "Can I learn more before applying?",
    answer:
      "Yes. The softer path is intentional. You can download the brochure, review scholarship options, or request a callback before starting an application.",
  },
];

const insightCards = [
  {
    category: "Career Readiness",
    title: "What hiring teams actually look for in entry-level AI candidates",
    body: "A concise breakdown of project quality, communication, and execution signals that influence first impressions.",
  },
  {
    category: "Program Design",
    title: "Why execution-first learning outperforms passive AI consumption",
    body: "A closer look at why structure, feedback, and applied repetition matter more than endless content.",
  },
  {
    category: "Track Selection",
    title: "How to choose between online, immersion, and global exposure",
    body: "A practical decision guide based on pace, budget, support needs, and intended outcomes.",
  },
];

const ProgressBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      const bar = document.getElementById("progress-bar");
      if (bar) {
        bar.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div id="progress-bar" className="progress-bar" style={{ width: 0 }} />;
};

const Index = () => {
  const [showBrochure, setShowBrochure] = useState(false);
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleTrackSelection = (paymentPath: string) => {
    if (!user) {
      navigate("/login", { state: { redirectTo: paymentPath } });
      return;
    }

    navigate(paymentPath);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ProgressBar />

      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="text-base font-semibold tracking-[0.22em] text-foreground"
          >
            IPNIA
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="outline" className="hidden sm:inline-flex" onClick={() => setShowBrochure(true)}>
              Download brochure
            </Button>
            <Button onClick={() => scrollToSection("signup")}>Apply now</Button>

            {!loading && !user && (
              <>
                <Link to="/signup" className="hidden lg:block">
                  <Button variant="ghost">Sign up</Button>
                </Link>
                <Link to="/login" className="hidden lg:block">
                  <Button variant="ghost">Sign in</Button>
                </Link>
                <ThemeToggle />
              </>
            )}

            {!loading && user && (
              <div className="hidden items-center gap-2 pl-1 lg:flex">
                <Avatar className="h-8 w-8 border border-border">
                  <AvatarFallback>
                    {user.user_metadata?.full_name?.[0] || user.email?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  Sign out
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-border/70">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-6 rounded-full px-3 py-1 text-xs font-semibold">
                Premium AI education designed for real career movement
              </Badge>

              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Accelerate your AI career with practical learning, real execution, and clearer outcomes.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                IPNIA helps students and early professionals move from fragmented AI learning to a
                more credible, structured path. The experience is built to feel calm, rigorous, and
                professionally useful from the start.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" onClick={() => scrollToSection("tracks")}>
                  Explore programs
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => setShowBrochure(true)}>
                  Download brochure
                </Button>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="ghost"
                  className="justify-start px-0 text-sm text-muted-foreground hover:bg-transparent hover:text-foreground"
                  onClick={() => scrollToSection("scholarships")}
                >
                  View scholarship options
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start px-0 text-sm text-muted-foreground hover:bg-transparent hover:text-foreground"
                  onClick={() => scrollToSection("outcomes")}
                >
                  See career outcomes
                </Button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {heroProof.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Card className="border-border/80 bg-card shadow-soft">
                <CardHeader className="space-y-3">
                  <CardDescription className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Program snapshot
                  </CardDescription>
                  <CardTitle className="text-2xl font-semibold">
                    A structured route from AI learning to job-facing confidence.
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-border/80 bg-secondary/40 p-4">
                      <div className="text-sm text-muted-foreground">Starting price</div>
                      <div className="mt-2 text-3xl font-semibold text-foreground">₹999</div>
                    </div>
                    <div className="rounded-lg border border-border/80 bg-secondary/40 p-4">
                      <div className="text-sm text-muted-foreground">Delivery model</div>
                      <div className="mt-2 text-lg font-semibold text-foreground">Online, India, Global</div>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-lg border border-border/80 p-4">
                    <div className="flex items-start gap-3">
                      <Clock3 className="mt-0.5 h-4 w-4 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">Clear progression</div>
                        <div className="text-sm text-muted-foreground">
                          Foundations, execution, and placement readiness are built into the structure.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users2 className="mt-0.5 h-4 w-4 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">Guided support</div>
                        <div className="text-sm text-muted-foreground">
                          Mentors and reviewers help learners move beyond theory into proof of skill.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe2 className="mt-0.5 h-4 w-4 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">Career-facing design</div>
                        <div className="text-sm text-muted-foreground">
                          Stronger tracks add on-site or international exposure to widen your signal.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-border/80 bg-card p-5 shadow-soft">
                    <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-border/60 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A cleaner, higher-trust model for AI education.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                IPNIA is designed around one central idea: education should create execution. The
                platform reduces noise, strengthens accountability, and makes the path from learning
                to employability easier to understand.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {featureCards.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="border-border/80 bg-card shadow-soft">
                    <CardHeader className="space-y-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-secondary/50 text-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="tracks" className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Choose your track
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Three paths with increasing support, immersion, and career exposure.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                The track system is intentionally simple. Start with the level of support and exposure
                that matches your ambition, budget, and readiness.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {tracks.map((track, index) => (
                <Card
                  key={track.name}
                  className={`border-border/80 bg-card shadow-soft ${index === 1 ? "border-primary/30" : ""}`}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl font-semibold">{track.name}</CardTitle>
                        <CardDescription className="mt-2 text-sm">{track.duration}</CardDescription>
                      </div>
                      <Badge variant={index === 1 ? "default" : "secondary"} className="rounded-full">
                        {track.badge}
                      </Badge>
                    </div>
                    <div className="text-4xl font-semibold tracking-tight text-foreground">{track.price}</div>
                    <div className="text-sm font-medium text-accent">{track.scholarship}</div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {track.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                          <div className="text-sm leading-6 text-muted-foreground">{feature}</div>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant={index === 1 ? "default" : "outline"}
                      className="w-full"
                      onClick={() => handleTrackSelection(track.path)}
                    >
                      Apply for {track.name}
                    </Button>
                    <Button variant="ghost" className="w-full" onClick={() => scrollToSection("scholarships")}>
                      Check scholarship eligibility
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border/80 bg-card shadow-soft">
              <div className="border-b border-border/70 px-6 py-5">
                <h3 className="text-xl font-semibold text-foreground">Program comparison</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  A quick way to compare the three tracks side by side.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead>
                    <tr className="border-b border-border/70">
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">Feature</th>
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">Online</th>
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">India Immersion</th>
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">Global Exposure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.label} className="border-b border-border/60 last:border-b-0">
                        <td className="px-6 py-4 text-sm font-medium text-foreground">{row.label}</td>
                        {row.values.map((value) => (
                          <td key={`${row.label}-${value}`} className="px-6 py-4 text-sm text-muted-foreground">
                            {value}
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

        <section id="outcomes" className="border-y border-border/60 bg-secondary/35 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Career outcomes
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Clearer role paths make decisions easier.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Outcomes always depend on background and performance, but IPNIA is designed to move
                learners toward credible AI-enabled roles with stronger project proof and execution habits.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {careerOutcomes.map((outcome) => (
                <Card key={outcome.role} className="border-border/80 bg-card shadow-soft">
                  <CardHeader>
                    <CardDescription>Typical role path</CardDescription>
                    <CardTitle className="text-xl font-semibold">{outcome.role}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-3xl font-semibold text-foreground">{outcome.range}</div>
                    <div className="text-sm text-muted-foreground">Indicative annual salary range in India</div>
                    <p className="text-sm leading-6 text-muted-foreground">{outcome.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="scholarships" className="border-b border-border/60 py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Scholarships
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A softer entry point for higher-commitment decisions.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Scholarship options help learners explore stronger tracks without rushing into a hard
                conversion. It is one of the clearest ways to reduce hesitation before applying.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  Merit-based review for select immersion tracks
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  Better for learners who want clarity before committing
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  Can be paired with brochure and callback support
                </div>
              </div>
            </div>

            <Card className="border-border/80 bg-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Scholarship support</CardTitle>
                <CardDescription>Start with the calmest next step.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="lg" className="w-full" onClick={() => setShowBrochure(true)}>
                  Download scholarship details
                </Button>
                <Button variant="outline" size="lg" className="w-full" onClick={() => scrollToSection("contact")}>
                  Request a callback
                </Button>
                <p className="text-sm leading-6 text-muted-foreground">
                  This path works best for learners comparing price, support level, and scholarship eligibility before applying.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="border-b border-border/60 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Why IPNIA
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Premium by design, not by decoration.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Execution-first curriculum",
                  body: "The experience is structured around output, not passive content consumption.",
                  icon: Sparkles,
                },
                {
                  title: "Real-world exposure",
                  body: "Projects, domain work, and internship-style tasks help narrow the theory-to-job gap.",
                  icon: BadgeCheck,
                },
                {
                  title: "Support that feels accountable",
                  body: "Mentorship, accommodation support, and guided progression create stronger completion momentum.",
                  icon: Users2,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-border/80 bg-card shadow-soft">
                    <CardHeader className="space-y-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-secondary/50 text-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Testimonials
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Real confidence is one of the strongest outcomes.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className="border-border/80 bg-card shadow-soft">
                    <CardContent className="space-y-5 p-6">
                      <p className="text-base leading-7 text-foreground">"{testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="border-b border-border/60 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Blog
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Editorial blocks that reinforce trust and decision quality.
                </h2>
              </div>
              <Button variant="outline" onClick={() => setShowBrochure(true)}>
                Download brochure
              </Button>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {insightCards.map((insight) => (
                <Card key={insight.title} className="border-border/80 bg-card shadow-soft">
                  <CardHeader>
                    <CardDescription>{insight.category}</CardDescription>
                    <CardTitle className="text-xl font-semibold">{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">{insight.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Common questions before you apply.
              </h2>
            </div>

            <div className="mt-10 rounded-2xl border border-border/80 bg-card px-6 py-2 shadow-soft">
              <Accordion type="single" collapsible>
                {faqItems.map((item) => (
                  <AccordionItem key={item.value} value={item.value} className="border-border/70">
                    <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-6 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="signup" className="py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Next step
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Start with the action that matches your confidence level.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                If you need context first, take the softer route through brochure or callback support.
                If you are ready, move directly into the application path.
              </p>
            </div>

            <Card className="border-border/80 bg-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Choose your next step</CardTitle>
                <CardDescription>A calmer conversion path with less pressure.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg" onClick={() => handleTrackSelection("/payment/ml-course")}>
                  Apply for India Immersion
                </Button>
                <Button variant="outline" size="lg" className="w-full" onClick={() => setShowBrochure(true)}>
                  Get the full brochure
                </Button>
                <Button variant="ghost" size="lg" className="w-full" onClick={() => scrollToSection("contact")}>
                  Contact admissions
                </Button>

                {!loading && !user && (
                  <div className="rounded-lg border border-border/80 bg-secondary/40 p-4 text-sm text-muted-foreground">
                    Want to compare options first? Create an account or sign in and we will keep your application path intact.
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      <Link to="/signup" className="sm:flex-1">
                        <Button variant="ghost" className="w-full">
                          Create account
                        </Button>
                      </Link>
                      <Link to="/login" className="sm:flex-1">
                        <Button variant="ghost" className="w-full">
                          Sign in
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}

                {!loading && user && (
                  <div className="rounded-lg border border-border/80 bg-secondary/40 p-4 text-sm text-muted-foreground">
                    Signed in as <span className="font-medium text-foreground">{user.email}</span>. You can continue directly to any program application.
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-border/70 py-10">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">IPNIA</h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Indian Platform for Next-Gen Industry-AI. A more professional route from AI learning to AI execution.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>Info@Ipnia.com</p>
              <p>01145534440</p>
              <p>A199 Gujranwala Town Part 01, Delhi 110009</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Programs</h4>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>Online Immersion</p>
              <p>India Immersion</p>
              <p>Global Exposure</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>Brochure</p>
              <p>Scholarship support</p>
              <p>Career readiness guidance</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 w-full max-w-7xl px-4 text-sm text-muted-foreground sm:px-6 lg:px-8">
          © 2026 IPNIA. All rights reserved.
        </div>
      </footer>

      {showBrochure && <BrochureModal onClose={() => setShowBrochure(false)} />}
      <StickyCTA />
    </div>
  );
};

export default Index;
