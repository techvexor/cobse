import type { ReactNode } from "react";
import { Link, type LinkProps } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  to?: LinkProps["to"];
}

export function PageHeader({
  title,
  intro,
  crumbs = [],
  children,
}: {
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-border bg-surface-tint">
      <div className="container-page py-10 lg:py-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary hover:underline">
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5" aria-hidden="true" />
                {c.to && i < crumbs.length - 1 ? (
                  <Link
                    to={c.to}
                    className="hover:text-primary hover:underline"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-primary">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-4 max-w-4xl font-display text-3xl font-extrabold text-primary lg:text-[2.6rem] lg:leading-[1.12]">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground lg:text-base">
            {intro}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 font-display text-2xl font-extrabold text-primary lg:text-[2rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  );
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md border border-border border-l-4 border-l-primary-soft bg-surface-tint px-4 py-3 text-sm leading-relaxed text-foreground/85">
      {children}
    </p>
  );
}
