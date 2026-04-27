import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BrochureModalProps {
  onClose: () => void;
}

const programmes = [
  "Online Immersion (₹999)",
  "India Immersion (₹9,999)",
  "Global Exposure (₹24,999)",
  "I want to compare all tracks",
];

export default function BrochureModal({ onClose }: BrochureModalProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", programme: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/10 p-4 backdrop-blur-sm">
      <Card className="relative w-full max-w-md border-border/80 bg-card shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <CardContent className="space-y-5 px-6 py-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-secondary/60">
              <CheckCircle2 className="h-7 w-7 text-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-foreground">Brochure on its way</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                We have sent the program details to <span className="font-medium text-foreground">{form.email}</span>.
              </p>
            </div>
            <Button className="w-full" onClick={onClose}>
              Done
            </Button>
          </CardContent>
        ) : (
          <>
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl font-semibold">Download the brochure</CardTitle>
              <CardDescription className="leading-6">
                Get the full program breakdown, pricing, scholarship information, and track comparison in one place.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="brochure-name">Full name</Label>
                  <Input
                    id="brochure-name"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brochure-email">Email address</Label>
                  <Input
                    id="brochure-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brochure-phone">Phone number</Label>
                  <Input
                    id="brochure-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brochure-programme">Track of interest</Label>
                  <select
                    id="brochure-programme"
                    name="programme"
                    value={form.programme}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled>
                      Select a track
                    </option>
                    {programmes.map((programme) => (
                      <option key={programme} value={programme}>
                        {programme}
                      </option>
                    ))}
                  </select>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send me the brochure"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  No spam. Just the program details you need to make an informed decision.
                </p>
              </form>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}
