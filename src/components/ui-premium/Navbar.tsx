import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
  isPage?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/", isPage: true },
  { label: "Programs", href: "/programs", isPage: true },
  { label: "About", href: "/about", isPage: true },
  { label: "Careers", href: "/careers", isPage: true },
  { label: "Contact", href: "/contact", isPage: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 border-b border-border bg-background" />
      <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-base font-bold tracking-[0.18em] text-foreground transition-opacity hover:opacity-80"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          IPNIA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.isPage ? (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-md px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />

          {!loading && !user && (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:scale-105 hover:bg-primary-600"
                >
                  Start Your Journey
                </Button>
              </Link>
            </>
          )}

          {!loading && user && (
            <div className="flex items-center gap-2">
              <Link to="/dashboard">
                <Avatar className="h-8 w-8 cursor-pointer border border-primary/30 ring-2 ring-primary/10 transition-all hover:ring-primary/30">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {user.user_metadata?.full_name?.[0] || user.email?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>
              </Link>
              <Button variant="ghost" size="sm" onClick={signOut}>
                Sign out
              </Button>
            </div>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "relative overflow-hidden transition-all duration-300 ease-premium md:hidden",
          mobileOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="border-b border-border bg-background px-4 pb-6 pt-3">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-md px-3.5 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3.5 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {!loading && !user && (
            <div className="mt-4 flex flex-col gap-2">
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full">
                  Sign in
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground hover:scale-105 hover:bg-primary-600">
                  Start Your Journey
                </Button>
              </Link>
            </div>
          )}

          {!loading && user && (
            <div className="mt-4 flex flex-col gap-2">
              <Link to="/dashboard" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full">
                  Dashboard
                </Button>
              </Link>
              <Button variant="ghost" className="w-full" onClick={() => { signOut(); setMobileOpen(false); }}>
                Sign out
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
