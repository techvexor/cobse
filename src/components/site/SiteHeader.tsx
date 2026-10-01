import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Logo } from "./Logo";

const mainNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "COBSE Approval", href: "/COBSE-Approval" },
  { label: "Programme", href: "/Programme" },
  { label: "Members", href: "/members" },
  { label: "School Boards", href: "/COBSE-Recognized-Educational-Boards-List" },
  { label: "Contact", href: "/#contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const matchingPages = mainNavItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background shadow-[0_2px_12px_rgba(11,41,69,0.06)]">
      <div className="container-page flex min-h-[68px] flex-wrap items-center gap-3 py-3 xl:min-h-[76px] xl:flex-nowrap xl:gap-4">
        <div className="w-[min(18rem,38vw)] shrink-0 sm:w-64 2xl:w-72">
          <Logo />
        </div>

        <div className="relative hidden min-w-0 flex-1 md:block xl:w-56 2xl:w-64 2xl:flex-none">
          <label htmlFor="page-search" className="sr-only">
            Search pages
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 hidden size-5 -translate-y-1/2 text-muted-foreground sm:block sm:left-4"
            aria-hidden="true"
          />
          <input
            id="page-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setSearchQuery("");
            }}
            placeholder="Search pages"
            className="h-11 w-full rounded-lg border border-border bg-white px-3 text-sm text-foreground shadow-sm outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-muted-foreground focus:border-primary-soft focus:ring-2 focus:ring-primary-soft/20 sm:pl-12 sm:pr-4"
          />
          {searchQuery.trim() && (
            <ul
              aria-label="Search results"
              className="absolute inset-x-0 top-full z-20 mt-2 max-h-72 overflow-y-auto rounded-lg border border-border bg-white p-2 shadow-raised"
            >
              {matchingPages.length > 0 ? (
                matchingPages.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setSearchQuery("")}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {item.label}
                    </a>
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-sm text-muted-foreground">No matching pages.</li>
              )}
            </ul>
          )}
        </div>

        <nav aria-label="Main" className="hidden shrink-0 items-center gap-0.5 xl:ml-auto xl:flex">
          {mainNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative whitespace-nowrap rounded-md px-2 py-3 text-xs font-medium text-foreground/85 transition-colors duration-200 hover:bg-secondary hover:text-primary after:absolute after:inset-x-2 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary-soft after:transition-transform after:duration-200 hover:after:scale-x-100 2xl:px-2.5 2xl:text-[13px]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-expanded={searchOpen}
            aria-controls="mobile-search"
            aria-label={searchOpen ? "Close search" : "Search pages"}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          >
            {searchOpen ? <X className="size-5" /> : <Search className="size-5" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div
          id="mobile-search"
          className="border-t border-border bg-background px-4 py-3 md:hidden"
        >
          <label htmlFor="mobile-page-search" className="sr-only">
            Search pages
          </label>
          <div className="relative mx-auto max-w-7xl">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="mobile-page-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setSearchQuery("");
              }}
              placeholder="Search pages"
              className="h-11 w-full rounded-lg border border-border bg-white pl-10 pr-4 text-sm text-foreground shadow-sm outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-muted-foreground focus:border-primary-soft focus:ring-2 focus:ring-primary-soft/20"
            />
            {searchQuery.trim() && (
              <ul
                aria-label="Search results"
                className="absolute inset-x-0 top-full z-20 mt-2 max-h-72 overflow-y-auto rounded-lg border border-border bg-white p-2 shadow-raised"
              >
                {matchingPages.length > 0 ? (
                  matchingPages.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => {
                          setSearchQuery("");
                          setSearchOpen(false);
                        }}
                        className="block rounded-md px-3 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-2 text-sm text-muted-foreground">No matching pages.</li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background shadow-lg xl:hidden"
        >
          <ul className="container-page grid gap-1 py-3">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
