import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/data/content";

const quickLinks = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Recognized Boards", to: "/COBSE-Recognized-Educational-Boards-List" as const },
  { label: "Members", to: "/members" as const },
  { label: "Academic Programmes", to: "/Programme" as const },
  { label: "Verification", to: "/COBSE-Approval" as const },
];

const resourceLinks = [
  { label: "News & Updates", to: "/#updates" as const },
  { label: "Notices & Circulars", to: "/#notices" as const },
  { label: "Board Directory", to: "/COBSE-Recognized-Educational-Boards-List" as const },
];

const footerInstitutions = [
  { name: "COBSE Association", src: "/images/footer/association.png" },
  { name: "Central Board of Secondary Education", src: "/images/footer/cbse.png" },
  { name: "Ministry of Education, Government of India", src: "/images/footer/mhrd_gov.png" },
  {
    name: "National Council of Educational Research and Training",
    src: "/images/footer/ncert.png",
  },
  { name: "National Council for Teacher Education", src: "/images/footer/ncte.png" },
  { name: "National Institute of Open Schooling", src: "/images/footer/nios.png" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-4 border-primary-soft bg-primary-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            A voluntary, non-profit association of boards of school education, working as a platform
            for coordination, information sharing and collaboration in school education.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-sky-200">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <a
                  href={l.to}
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resources">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-sky-200">
            Resources
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {resourceLinks.map((l) => (
              <li key={l.to}>
                <a
                  href={l.to}
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-sky-200">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span className="space-y-1">
                <a href={`mailto:${site.email}`} className="block hover:underline">
                  {site.email}
                </a>
                <a href={`mailto:${site.altEmail}`} className="block hover:underline">
                  {site.altEmail}
                </a>
              </span>
            </li>
            <li>{site.officeHours}</li>
            <li>
              <a href={`mailto:${site.email}`} className="underline hover:no-underline">
                Email the secretariat
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section aria-label="Education institutions" className="container-page pb-10">
        <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-sky-200">
          Education Institutions
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {footerInstitutions.map((institution) => (
            <li
              key={institution.src}
              className="flex h-24 items-center justify-center rounded-lg border border-white/15 bg-white p-3"
            >
              <img
                src={institution.src}
                alt={institution.name}
                loading="lazy"
                className="max-h-16 max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>© 1979–2026 Council of Boards of School Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
