import { Link } from "@tanstack/react-router";
import { site } from "@/data/content";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex min-w-0 items-center gap-3"
      aria-label={`${site.fullName} — home`}
    >
      <img
        src="/cobse.png"
        alt={site.fullName}
        className={`h-auto w-full max-w-[min(18rem,38vw)] object-contain object-left sm:max-w-[16rem] 2xl:max-w-[18rem] ${
          inverted ? "rounded-sm bg-white p-1.5" : ""
        }`}
      />
    </Link>
  );
}
