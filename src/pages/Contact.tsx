import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/ui-premium/Navbar";
import Footer from "@/components/ui-premium/Footer";
import FloatingBackground from "@/components/ui-premium/FloatingBackground";
import FAQAccordion from "@/components/ui-premium/FAQAccordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const faqItems = [
  {
    question: "How do I apply to a program?",
    answer: "You can apply directly through the Programs page. Select your track, create an account if you don't have one, and proceed to the application form.",
  },
  {
    question: "Can I get a scholarship?",
    answer: "Yes. Scholarship options are available for select tracks. Download our Career Guide or contact admissions to learn about eligibility criteria.",
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a 7-day review period. If the program isn't the right fit within the first week, reach out to our team for a full refund.",
  },
  {
    question: "Do I need prior coding experience?",
    answer: "No prior coding experience is required for the foundation tracks. Motivated learners from all backgrounds are welcome.",
  },
  {
    question: "How quickly can I expect a response?",
    answer: "Our admissions team typically responds within 24 hours on business days. For urgent queries, call us directly.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    toast({
      title: "Message sent!",
      description: "Our admissions team will get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <FloatingBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label mb-6 inline-flex">
              <MessageSquare className="h-3 w-3" />
              Contact Us
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              We're here to help you{" "}
              <span className="text-gradient">make the right decision</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Have questions about programs, scholarships, or careers? Our admissions team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            {/* Info side */}
            <div className="space-y-8">
              {/* Contact info */}
              <div className="card-premium p-6">
                <h2 className="mb-6 text-xl font-bold text-foreground">Get in touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Email</div>
                      <a href="mailto:Info@Ipnia.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Info@Ipnia.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Phone</div>
                      <a href="tel:01145534440" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        011-4553-4440
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Office</div>
                      <p className="text-sm text-muted-foreground">
                        A199 Gujranwala Town, Part 01<br />
                        Delhi 110009, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Hours</div>
                      <p className="text-sm text-muted-foreground">
                        Monday–Saturday<br />
                        9:00 AM – 7:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="card-premium p-6">
                <h2 className="mb-4 text-lg font-bold text-foreground">Quick actions</h2>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => navigate("/programs")}
                    className="flex items-center justify-between rounded-xl border border-border/40 px-4 py-3 text-sm text-foreground transition-all hover:border-primary/30 hover:bg-primary/5"
                  >
                    <span className="font-medium">Explore Programs</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button
                    onClick={() => navigate("/programs")}
                    className="flex items-center justify-between rounded-xl border border-border/40 px-4 py-3 text-sm text-foreground transition-all hover:border-primary/30 hover:bg-primary/5"
                  >
                    <span className="font-medium">Download Free Career Guide</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button
                    onClick={() => navigate("/careers")}
                    className="flex items-center justify-between rounded-xl border border-border/40 px-4 py-3 text-sm text-foreground transition-all hover:border-primary/30 hover:bg-primary/5"
                  >
                    <span className="font-medium">View Career Support</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card-premium p-8">
              <h2 className="mb-2 text-xl font-bold text-foreground">Send us a message</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                We respond within 24 business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Program enquiry"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you'd like to know..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full gap-2 bg-gradient-to-r from-brand-500 to-violet-600 text-white shadow-glow-sm hover:shadow-glow hover:opacity-90"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to our Privacy Policy. We'll never share your details.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/40 py-20 sm:py-28 bg-secondary/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="section-label mb-4 inline-flex">FAQ</span>
            <h2 className="section-heading">Common questions</h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
