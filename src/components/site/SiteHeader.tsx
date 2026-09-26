import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navItems, site } from "@/data/content";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="bg-primary-deep text-primary-foreground">
        <div className="container-page flex h-9 items-center justify-between gap-4 text-[12px]">
          <p className="truncate font-medium tracking-wide">{site.fullName}</p>
          <nav aria-label="Utility" className="hidden items-center gap-5 sm:flex">
            <Link to="/accessibility" className="hover:underline">
              Accessibility
            </Link>
            <Link to="/sitemap" className="hover:underline">
              Sitemap
            </Link>
            <Link to="/important-links" className="hover:underline">
              Important Links
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav
          aria-label="Main"
          className="hidden items-center gap-1 xl:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-sm px-2.5 py-2 text-[13.5px] font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{
                className: "bg-secondary text-primary",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/verification">Verify a Board</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-primary xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background xl:hidden"
        >
          <ul className="container-page grid gap-1 py-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  className="block rounded-sm px-3 py-2.5 text-sm font-medium text-foreground/85 hover:bg-secondary"
                  activeProps={{ className: "bg-secondary text-primary" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <Link to="/verification" onClick={() => setOpen(false)}>
                  Verify a Board
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
