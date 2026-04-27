import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin, ArrowRight, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  programs: [
    { label: "Online Immersion", href: "/programs" },
    { label: "India Immersion", href: "/programs" },
    { label: "Global Exposure", href: "/programs" },
    { label: "Scholarships", href: "/programs" },
  ],
  company: [
    { label: "About IPNIA", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/" },
  ],
  resources: [
    { label: "Career Guide", href: "/" },
    { label: "Tools Catalog", href: "/" },
    { label: "FAQ", href: "/" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background">
      {/* CTA strip */}
      <div className="border-b border-border bg-primary-50 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ready to transform your AI career?
          </h3>
          <p className="max-w-xl text-base text-muted">
            Join hundreds of learners who have turned structured learning into real career momentum.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/programs"
              className="btn-premium"
            >
              Explore Programs
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline-premium"
            >
              Talk to Admissions
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-base font-bold tracking-[0.18em] text-foreground">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              IPNIA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Indian Platform for Next-Gen Industry-AI. A professional route from AI learning to real career execution.
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Mail className="h-4 w-4 text-primary" />
                Info@Ipnia.com
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Phone className="h-4 w-4 text-primary" />
                011-4553-4440
              </div>
              <div className="flex items-start gap-2 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                A199 Gujranwala Town, Part 01, Delhi 110009
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted transition-all duration-200 hover:scale-105 hover:bg-primary-50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Programs</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-gradient mt-10" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} IPNIA. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted">
            <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-foreground">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
