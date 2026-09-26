import { Link } from "@tanstack/react-router";
import { site } from "@/data/content";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label={`${site.fullName} — home`}
    >
      <span
        aria-hidden="true"
        className={`flex size-11 shrink-0 items-center justify-center rounded-sm border font-display text-[15px] font-extrabold tracking-tight ${
          inverted
            ? "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground"
            : "border-primary/15 bg-primary text-primary-foreground"
        }`}
      >
        CB
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg font-extrabold tracking-tight ${
            inverted ? "text-primary-foreground" : "text-primary"
          }`}
        >
          COBSE
        </span>
        <span
          className={`block text-[11px] font-medium uppercase tracking-[0.11em] ${
            inverted ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          Council of Boards of School Education
        </span>
      </span>
    </Link>
  );
}
