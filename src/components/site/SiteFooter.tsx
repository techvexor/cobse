import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/data/content";

const quickLinks = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Recognized Boards", to: "/recognized-boards" as const },
  { label: "Academic Programmes", to: "/academic-programmes" as const },
  { label: "Membership", to: "/membership" as const },
  { label: "Verification", to: "/verification" as const },
];

const resourceLinks = [
  { label: "News & Updates", to: "/news" as const },
  { label: "Notices & Circulars", to: "/notices" as const },
  { label: "Resources", to: "/resources" as const },
  { label: "FAQs", to: "/faq" as const },
  { label: "Important Links", to: "/important-links" as const },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" as const },
  { label: "Terms & Conditions", to: "/terms" as const },
  { label: "Disclaimer", to: "/disclaimer" as const },
  { label: "Accessibility", to: "/accessibility" as const },
  { label: "Sitemap", to: "/sitemap" as const },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            A voluntary, non-profit association of boards of school education,
            working as a platform for coordination, information sharing and
            collaboration in school education.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-accent">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resources">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-accent">
            Resources
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {resourceLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-accent">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span className="space-y-1">
                <a href={`mailto:${site.email}`} className="block hover:underline">
                  {site.email}
                </a>
                <a
                  href={`mailto:${site.altEmail}`}
                  className="block hover:underline"
                >
                  {site.altEmail}
                </a>
              </span>
            </li>
            <li>{site.officeHours}</li>
            <li>
              <Link to="/contact" className="underline hover:no-underline">
                Send an enquiry
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>
            © 1979–2026 Council of Boards of School Education. All rights
            reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary-foreground hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
