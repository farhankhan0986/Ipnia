import { Briefcase, Users, Award, TrendingUp, CheckCircle2, Star, ArrowRight, GraduationCap, Handshake, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/ui-premium/Navbar";
import Footer from "@/components/ui-premium/Footer";
import FloatingBackground from "@/components/ui-premium/FloatingBackground";
import FeatureCards from "@/components/ui-premium/FeatureCards";
import TestimonialCards from "@/components/ui-premium/TestimonialCards";
import CTASection from "@/components/ui-premium/CTASection";
import StatsCounter from "@/components/ui-premium/StatsCounter";

const careerStats = [
  { value: "85%", label: "Placement Rate", numericValue: 85, suffix: "%" },
  { value: "₹6.5L", label: "Avg. First CTC" },
  { value: "3 months", label: "Avg. Time to Placement" },
  { value: "50+", label: "Hiring Partners", numericValue: 50, suffix: "+" },
];

const opportunities = [
  {
    title: "Internship Program",
    description: "Gain real-world experience through our structured internship tracks — online or on-site at our Delhi campus.",
    icon: Briefcase,
    badge: "Active",
  },
  {
    title: "1:1 Mentorship",
    description: "Work directly with industry practitioners who provide guided feedback on your projects, code, and career direction.",
    icon: Users,
    badge: "Included in all tracks",
  },
  {
    title: "Placement Support",
    description: "Resume reviews, mock interviews, LinkedIn optimization, and direct introductions to hiring partners.",
    icon: TrendingUp,
    badge: "Post-program",
  },
  {
    title: "Certification & Recognition",
    description: "Receive completion certificates and recommendation letters that verify your skills and commitment to employers.",
    icon: Award,
    badge: "On completion",
  },
  {
    title: "Alumni Network",
    description: "Join a growing community of IPNIA graduates who share opportunities, advice, and collaboration across India.",
    icon: Handshake,
    badge: "Lifetime access",
  },
  {
    title: "Global Exposure",
    description: "Our top-tier track includes an international learning trip with visits to startups, tech hubs, and global professionals.",
    icon: MapPin,
    badge: "Global track",
  },
];

const successStories = [
  {
    name: "Aarav Mehta",
    role: "AI Operations Associate",
    company: "FinTech Startup, Bangalore",
    quote: "IPNIA gave me structure. I stopped collecting random tutorials and started building proof I could actually discuss in interviews. Got my first offer within 6 weeks of completing the program.",
    rating: 5,
  },
  {
    name: "Riya Sharma",
    role: "Data & AI Analyst",
    company: "Consulting Firm, Delhi",
    quote: "The immersion format changed everything. It wasn't just content — it was accountability, feedback, and community. I walked out of the program feeling genuinely ready.",
    rating: 5,
  },
  {
    name: "Karthik Rao",
    role: "Junior AI Project Contributor",
    company: "Product Agency, Hyderabad",
    quote: "The India Immersion track pushed me beyond what I thought was possible. The on-site internship, combined with mentorship, created a level of confidence I'd never had before.",
    rating: 5,
  },
];

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <FloatingBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label mb-6 inline-flex">
              <GraduationCap className="h-3 w-3" />
              Careers & Placement
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              We don't just teach AI.{" "}
              <span className="text-gradient">We help you land the job.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              From internship experience to placement support, IPNIA is built around one outcome:
              your first (or next) AI role.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate("/programs")}
                className="btn-premium"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40 bg-secondary/30 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StatsCounter stats={careerStats} />
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label mb-4 inline-flex">What we offer</span>
            <h2 className="section-heading">Every advantage you need to succeed</h2>
            <p className="mx-auto mt-4 max-w-xl section-subheading text-muted-foreground">
              IPNIA combines internship, mentorship, and placement support into a single integrated career program.
            </p>
          </div>
          <FeatureCards cards={opportunities} columns={3} />
        </div>
      </section>

      {/* How placement works */}
      <section className="border-y border-border/40 bg-secondary/20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label mb-6 inline-flex">Placement Process</span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A structured path from learning to landing
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Our placement process starts on day one — not after graduation.
                We build interview readiness into the program itself.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Portfolio Building",
                  desc: "Build 2–3 real projects during the program that demonstrate your capability to employers.",
                },
                {
                  step: "02",
                  title: "Resume & LinkedIn Review",
                  desc: "Our career coaches review and optimize your professional presence before you start applying.",
                },
                {
                  step: "03",
                  title: "Mock Interviews",
                  desc: "Practice with real-format technical and behavioral interviews with experienced practitioners.",
                },
                {
                  step: "04",
                  title: "Employer Introductions",
                  desc: "We make direct introductions to our network of hiring partners actively looking for AI talent.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                    {item.step}
                  </div>
                  <div className="card-premium px-4 py-3 flex-1">
                    <div className="font-semibold text-foreground text-sm">{item.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label mb-4 inline-flex">
              <Star className="h-3 w-3" />
              Student Success
            </span>
            <h2 className="section-heading">Real people. Real careers.</h2>
          </div>
          <TestimonialCards testimonials={successStories} columns={3} />
        </div>
      </section>

      <CTASection
        badge="Career Launch"
        headline="Your AI career starts here"
        subheadline="Join learners who chose structure, support, and real execution to land their AI roles."
        primaryCTA="Start Your Journey"
        secondaryCTA="Talk to Admissions"
        onPrimaryCTA={() => navigate("/programs")}
        onSecondaryCTA={() => navigate("/contact")}
        variant="gradient"
      />

      <Footer />
    </div>
  );
};

export default Careers;
