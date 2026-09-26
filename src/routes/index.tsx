import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeading, Notice } from "@/components/site/PageHeader";
import {
  glanceStats,
  keyFunctions,
  news,
  notices,
  programmes,
  quickAccess,
  site,
  verificationSteps,
  importantLinks,
} from "@/data/content";
import { boards } from "@/data/boards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "COBSE — Council of Boards of School Education in India" },
      {
        name: "description",
        content:
          "COBSE is a voluntary, non-profit association of school education boards in India, supporting coordination, information sharing, academic development and board information.",
      },
      {
        property: "og:title",
        content: "COBSE — Council of Boards of School Education in India",
      },
      {
        property: "og:description",
        content:
          "Coordination, information sharing and collaboration among school education boards. Explore recognized boards, verification guidance and membership information.",
      },
    ],
  }),
  component: Home,
});

const dateFmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

function Home() {
  const featured = boards.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-deep text-primary-foreground">
        <img
          src={heroImage}
          alt="Abstract network of connected education boards across a map of India"
          width={1600}
          height={1200}
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/92 to-primary-deep/55" />
        <div className="container-page relative py-16 lg:py-24">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
              {site.positioning}
            </p>
            <h1 className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.1] lg:text-[3.15rem]">
              Council of Boards of School Education
            </h1>
            <p className="mt-4 font-display text-lg font-semibold text-primary-foreground/90 lg:text-xl">
              Connecting boards. Supporting quality. Strengthening school
              education.
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-primary-foreground/75">
              COBSE serves as a platform for coordination, information sharing
              and collaboration among school education boards, supporting the
              development and improvement of school education systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/recognized-boards">
                  Explore Recognized Boards
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/about">About COBSE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick access */}
      <section className="border-b border-border bg-background">
        <div className="container-page grid gap-px overflow-hidden py-10 sm:grid-cols-2 lg:grid-cols-5 lg:py-12">
          {quickAccess.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex flex-col gap-3 rounded-sm border border-border bg-card p-5 transition-colors hover:border-primary-soft/60 hover:bg-surface-tint"
            >
              <item.icon
                className="size-6 text-primary-soft transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
              <h2 className="font-display text-[15px] font-bold text-primary">
                {item.title}
              </h2>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="About COBSE"
              intro="COBSE is a voluntary, non-profit and autonomous association working in the field of school education, bringing together boards of school education from across India and associated boards elsewhere."
            />
            <ul className="mt-6 grid gap-3 text-[15px] leading-relaxed text-foreground/85 sm:grid-cols-2">
              {[
                "Coordination among boards",
                "Information sharing",
                "Educational development",
                "Curriculum-related discussions",
                "Quality improvement",
                "Collaboration between boards",
              ].map((point) => (
                <li key={point} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <Button asChild variant="link" className="mt-5 px-0 text-primary">
              <Link to="/about">
                Read more about COBSE
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-sm border border-border bg-surface-tint p-7">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-primary-soft">
              COBSE at a glance
            </h3>
            <dl className="mt-6 grid gap-6 sm:grid-cols-2">
              {glanceStats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-extrabold text-primary">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-[13px] leading-snug text-muted-foreground">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Figures shown are institutional descriptors, not verified counts.
              Numerical statistics will be published only from official source
              records.
            </p>
          </div>
        </div>
      </section>

      {/* Key functions */}
      <section className="section-y bg-surface-tint">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our work"
            title="What COBSE does"
            intro="Six areas describe the everyday work of the council and its member boards."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {keyFunctions.map((f) => (
              <article
                key={f.title}
                className="rounded-sm border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-raised"
              >
                <f.icon className="size-6 text-primary-soft" aria-hidden="true" />
                <h3 className="mt-4 font-display text-base font-bold text-primary">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Boards preview */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Directory"
              title="Recognized educational boards"
              intro="Find education boards and access available board information by name, state or location."
            />
            <Button asChild variant="outline">
              <Link to="/recognized-boards">Open full directory</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((b) => (
              <article
                key={b.slug}
                className="flex flex-col rounded-sm border border-border bg-card p-6 shadow-card"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent-foreground/70">
                  {b.category}
                </span>
                <h3 className="mt-2 font-display text-base font-bold leading-snug text-primary">
                  {b.name}
                </h3>
                <dl className="mt-4 space-y-1.5 text-[13px] text-muted-foreground">
                  <div className="flex gap-2">
                    <dt className="font-medium text-foreground/70">State:</dt>
                    <dd>{b.state}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-foreground/70">Location:</dt>
                    <dd>{b.city}</dd>
                  </div>
                </dl>
                <Button asChild variant="link" className="mt-4 justify-start px-0">
                  <Link
                    to="/recognized-boards/$slug"
                    params={{ slug: b.slug }}
                  >
                    View board details
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Notice>
              Directory information is provided for reference. Users should
              verify current details directly with the concerned board.
            </Notice>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="section-y bg-primary-deep text-primary-foreground">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Verification
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold lg:text-[2rem]">
              Board &amp; credential verification
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-primary-foreground/75">
              Before enrolling with a board or accepting a certificate, confirm
              its status with the concerned board or the competent education
              authority.
            </p>
            <Button asChild className="mt-6" variant="secondary">
              <Link to="/verification">Learn how to verify a board</Link>
            </Button>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2">
            {verificationSteps.map((s) => (
              <li
                key={s.step}
                className="rounded-sm border border-primary-foreground/15 bg-primary-foreground/5 p-5"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                  {s.step}
                </span>
                <h3 className="mt-2 font-display text-[15px] font-bold">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-primary-foreground/70">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Programmes + membership */}
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="Academic"
              title="Academic programmes"
              intro="Stages of school education and related programmes offered by boards and councils."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {programmes.slice(0, 4).map((p) => (
                <li
                  key={p.title}
                  className="rounded-sm border border-border bg-card p-5"
                >
                  <h3 className="font-display text-[15px] font-bold text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
            <Button asChild variant="link" className="mt-4 px-0">
              <Link to="/academic-programmes">
                All academic programmes
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <aside className="rounded-sm border border-border bg-surface-tint p-7">
            <p className="eyebrow">Membership</p>
            <h2 className="mt-2 font-display text-xl font-extrabold text-primary">
              A platform for collaboration in school education
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
              Boards of school education and comparable education bodies may
              seek membership or participation in the council's activities.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/membership">Membership information</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Contact the secretariat</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* News + notices */}
      <section className="section-y bg-surface-tint">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-end justify-between gap-4">
              <SectionHeading eyebrow="Updates" title="Latest updates" />
              <Button asChild variant="link" className="px-0">
                <Link to="/news">All news</Link>
              </Button>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {news.slice(0, 4).map((n) => (
                <li
                  key={n.slug}
                  className="flex flex-col rounded-sm border border-border bg-card p-5"
                >
                  <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
                    <time dateTime={n.date}>{dateFmt(n.date)}</time>
                    <span aria-hidden="true">•</span>
                    <span className="font-medium text-primary-soft">
                      {n.category}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-[15px] font-bold leading-snug text-primary">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                    {n.excerpt}
                  </p>
                  <Button asChild variant="link" className="mt-3 justify-start px-0">
                    <Link to="/news/$slug" params={{ slug: n.slug }}>
                      Read more
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <SectionHeading eyebrow="Documents" title="Notices &amp; circulars" />
              <Button asChild variant="link" className="px-0">
                <Link to="/notices">All notices</Link>
              </Button>
            </div>
            <ul className="mt-8 divide-y divide-border rounded-sm border border-border bg-card">
              {notices.slice(0, 4).map((n) => (
                <li key={n.title} className="flex gap-3 p-4">
                  <FileText
                    className="mt-0.5 size-4 shrink-0 text-primary-soft"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[14px] font-medium leading-snug text-foreground">
                      {n.title}
                    </p>
                    <p className="mt-1 text-[12px] text-muted-foreground">
                      <time dateTime={n.date}>{dateFmt(n.date)}</time> · {n.category}{" "}
                      · {n.size}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Important links + contact CTA */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="External"
            title="Important links"
            intro="Official websites of ministries, councils and statutory authorities relevant to education in India."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {importantLinks.slice(0, 6).map((l) => (
              <li key={l.name}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-3 rounded-sm border border-border bg-card p-4 text-[14px] font-medium text-foreground transition-colors hover:border-primary-soft/60 hover:bg-surface-tint"
                >
                  {l.name}
                  <ExternalLink
                    className="mt-0.5 size-4 shrink-0 text-primary-soft"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-sm border border-border bg-surface-tint p-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-xl font-extrabold text-primary">
                Have a question for the secretariat?
              </h2>
              <p className="mt-2 text-[14.5px] text-muted-foreground">
                Write to {site.email} or send an enquiry through the contact
                form.
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/contact">Contact COBSE</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
