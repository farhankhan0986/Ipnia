import { Target, Eye, Heart, Users, Lightbulb, TrendingUp, Award, Globe2, BookOpen, Zap } from "lucide-react";
import Navbar from "@/components/ui-premium/Navbar";
import Footer from "@/components/ui-premium/Footer";
import FloatingBackground from "@/components/ui-premium/FloatingBackground";
import StatsCounter from "@/components/ui-premium/StatsCounter";
import FeatureCards from "@/components/ui-premium/FeatureCards";
import CTASection from "@/components/ui-premium/CTASection";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: "500+", label: "Learners Enrolled", numericValue: 500, suffix: "+" },
  { value: "90%", label: "Course Completion", numericValue: 90, suffix: "%" },
  { value: "3", label: "Program Tracks", numericValue: 3 },
  { value: "80+", label: "Tools Covered", numericValue: 80, suffix: "+" },
];

const values = [
  {
    title: "Execution Over Theory",
    description: "We believe learning only becomes valuable when it creates action. Every module is built around doing, not just consuming.",
    icon: Zap,
  },
  {
    title: "Radical Transparency",
    description: "We're honest about outcomes, pricing, and what our programs do and don't cover. No hype, no vague promises.",
    icon: Eye,
  },
  {
    title: "Career-First Design",
    description: "Every decision — from curriculum to support structure — is made by asking: does this move learners closer to their career goal?",
    icon: TrendingUp,
  },
  {
    title: "Human-Centered Support",
    description: "We provide real mentorship, guided feedback, and accommodation support because we know the human side matters.",
    icon: Heart,
  },
  {
    title: "Global Thinking",
    description: "Through international exposure tracks, we connect learners to global perspectives and networks that extend beyond India.",
    icon: Globe2,
  },
  {
    title: "Structured Freedom",
    description: "We give learners a clear path while honoring their pace. The structure is rigorous but never rigid.",
    icon: Lightbulb,
  },
];

const team = [
  {
    name: "Farhan Khan",
    role: "Founder & Director",
    bio: "Technologist and educator passionate about bridging the gap between AI education and industry readiness.",
  },
  {
    name: "Program Lead",
    role: "Curriculum Design",
    bio: "Expert in AI/ML curriculum design with experience building industry-aligned learning pathways.",
  },
  {
    name: "Career Coach",
    role: "Placement & Outcomes",
    bio: "Dedicated to turning program graduates into confident, interview-ready professionals.",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <FloatingBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label mb-6 inline-flex">About IPNIA</span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              We're building the{" "}
              <span className="text-gradient">future of AI education</span>{" "}
              in India
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              IPNIA — Indian Platform for Next-Gen Industry-AI — was founded to solve a single problem:
              the gap between how AI is taught and what careers actually require.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="card-premium p-8 lg:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-violet-600/10">
                <Target className="h-6 w-6 text-brand-500" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">Our Mission</h2>
              <p className="text-base leading-7 text-muted-foreground">
                To create the most execution-focused AI education experience in India — one that helps
                learners move from fragmented knowledge to verified, career-ready capability in
                months, not years.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                We do this by combining structured curriculum, mentored internships, global exposure,
                and honest career guidance into one cohesive experience.
              </p>
            </div>

            <div className="card-premium p-8 lg:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/10">
                <Eye className="h-6 w-6 text-violet-500" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">Our Vision</h2>
              <p className="text-base leading-7 text-muted-foreground">
                A world where any motivated learner in India can access a clear, credible, and
                affordable path into the AI economy — regardless of their starting background or
                institution.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                We envision IPNIA as the leading platform for practical AI capability development —
                the place where India's next generation of AI professionals are born.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-y border-border/40 bg-secondary/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="section-label mb-6 inline-flex">
                <BookOpen className="h-3 w-3" />
                Our Story
              </span>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Born from a frustration with the status quo
              </h2>
              <div className="space-y-4 text-base leading-7 text-muted-foreground">
                <p>
                  IPNIA was created after observing hundreds of students spending months on
                  online courses — only to arrive at interviews with knowledge but no credibility,
                  and skills but no proof.
                </p>
                <p>
                  The problem wasn't effort. It was structure. Most platforms optimize for
                  content consumption. We optimize for career outcomes.
                </p>
                <p>
                  We built IPNIA around three non-negotiables: execution-first learning, real
                  support structures, and transparent outcome alignment. Everything else follows from
                  those principles.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { year: "2023", event: "IPNIA founded in Delhi with a single online program" },
                { year: "2024", event: "India Immersion track launched with on-site internship" },
                { year: "2024", event: "Global Exposure program introduced" },
                { year: "2025", event: "500+ learners enrolled across all tracks" },
                { year: "2026", event: "Expanding partnerships and international learning destinations" },
              ].map((item) => (
                <div key={item.year} className="flex items-start gap-4">
                  <div className="flex h-10 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                    {item.year}
                  </div>
                  <div className="rounded-xl border border-border/40 bg-card px-4 py-3 text-sm text-muted-foreground flex-1">
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label mb-4 inline-flex">Our Values</span>
            <h2 className="section-heading">What drives every decision we make</h2>
          </div>
          <FeatureCards cards={values} columns={3} />
        </div>
      </section>

      {/* Team */}
      <section className="border-y border-border/40 bg-secondary/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label mb-4 inline-flex">
              <Users className="h-3 w-3" />
              The Team
            </span>
            <h2 className="section-heading">People who care about your outcome</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="card-premium p-6 text-center hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-600 text-2xl font-bold text-white shadow-glow-sm">
                  {member.name[0]}
                </div>
                <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        badge="Join IPNIA"
        headline="Start your AI career journey today"
        subheadline="Join hundreds of learners who chose execution over passive learning."
        primaryCTA="Explore Programs"
        secondaryCTA="Contact Us"
        onPrimaryCTA={() => navigate("/programs")}
        onSecondaryCTA={() => navigate("/contact")}
        variant="gradient"
      />

      <Footer />
    </div>
  );
};

export default About;
