import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
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
} from "@/data/content";
import { boards } from "@/data/boards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "COBSE — Council of Boards of School Education in India" },
      {
        name: "description",
        content:
          "COBSE (Council of Boards of School Education in India) is an association of school education boards supporting coordination, information sharing and collaboration among boards.",
      },
      {
        property: "og:title",
        content: "COBSE — Council of Boards of School Education in India",
      },
      {
        property: "og:description",
        content:
          "Official COBSE information on the Council of Boards of School Education in India, board coordination, member boards and educational verification guidance.",
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

const heroSlides = [
  {
    src: "/images/hero/cobse_approved_education.png",
    alt: "COBSE and school education collaboration",
  },
  {
    src: "/images/hero/cobse_government_approved.png",
    alt: "School education boards and official information",
  },
  {
    src: "/images/hero/education_ministry.png",
    alt: "School education institutions and official education information",
  },
  {
    src: "/images/hero/national_education_policy.webp",
    alt: "National education policy and school education discussions",
  },
  {
    src: "/images/hero/school_exams.jpg",
    alt: "School examinations and education board processes",
  },
  {
    src: "/images/hero/school_students.jpeg",
    alt: "School students learning in the education system",
  },
];

function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateActiveSlide = () => setActiveSlide(api.selectedScrollSnap());
    updateActiveSlide();
    api.on("select", updateActiveSlide);

    return () => {
      api.off("select", updateActiveSlide);
    };
  }, [api]);

  useEffect(() => {
    if (!api || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => api.scrollNext(), 6500);
    return () => window.clearInterval(interval);
  }, [api]);

  return (
    <section id="top" className="relative w-full bg-primary-deep text-primary-foreground">
      <Carousel
        aria-label="Featured COBSE and school education images"
        opts={{ loop: true }}
        setApi={setApi}
        className="relative w-full overflow-hidden"
      >
        <CarouselContent className="ml-0">
          {heroSlides.map((slide, index) => (
            <CarouselItem
              key={slide.src}
              aria-label={`${slide.alt}, slide ${index + 1} of ${heroSlides.length}`}
              className="relative h-[280px] bg-background pl-0 sm:h-[360px] lg:h-[420px]"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
                className="absolute inset-0 size-full object-cover object-center"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <h1 className="sr-only">{site.fullName} in India</h1>

        <CarouselPrevious className="left-3 top-1/2 z-20 size-10 -translate-y-1/2 border-white/50 bg-primary-deep/65 text-white hover:bg-primary-deep hover:text-white sm:left-6 lg:left-8" />
        <CarouselNext className="right-3 top-1/2 z-20 size-10 -translate-y-1/2 border-white/50 bg-primary-deep/65 text-white hover:bg-primary-deep hover:text-white sm:right-6 lg:right-8" />

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center rounded-full border border-white/20 bg-primary-deep/70 px-3 py-2 backdrop-blur-sm">
          <div className="flex items-center gap-1.5" aria-label="Choose slide">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Show image ${index + 1} of ${heroSlides.length}`}
                aria-current={activeSlide === index ? "true" : undefined}
                className={`size-2 rounded-full transition-[background-color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  activeSlide === index
                    ? "scale-125 bg-white"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}

function Home() {
  const featured = boards.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Quick access */}
      <section className="border-b border-border bg-background">
        <div className="container-page grid gap-px overflow-hidden py-10 sm:grid-cols-2 lg:grid-cols-5 lg:py-12">
          {quickAccess.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-[border-color,background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-soft/60 hover:bg-surface-tint hover:shadow-card"
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
      <section id="about" className="section-y scroll-mt-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="About COBSE"
              intro="COBSE (Council of Boards of School Education in India) is an association of school education boards working to strengthen coordination, information sharing and cooperation in the field of school education."
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

          <div className="rounded-xl border border-border bg-surface-tint p-7">
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
      <section className="section-y bg-muted">
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
                className="rounded-xl border border-border bg-card p-6 shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-raised"
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
      <section id="school-boards" className="section-y scroll-mt-24">
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
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card"
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
      <section id="verification" className="section-y scroll-mt-24 bg-surface-tint text-foreground">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-soft">
              Verification
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold lg:text-[2rem]">
              Board &amp; credential verification
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Before relying on a board or certificate, confirm its status with the relevant board,
              state authority or competent education body. Recognition and affiliation decisions must
              be checked directly with the appropriate authority.
            </p>
            <Button asChild className="mt-6" variant="secondary">
              <Link to="/COBSE-Approval">Learn how to verify a board</Link>
            </Button>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2">
            {verificationSteps.map((s) => (
              <li
                key={s.step}
                className="rounded-xl border border-border bg-card p-5 shadow-card"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-soft">
                  {s.step}
                </span>
                <h3 className="mt-2 font-display text-[15px] font-bold text-primary">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Programmes + membership */}
      <section id="programmes" className="section-y scroll-mt-24">
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
                  className="rounded-xl border border-border bg-card p-5"
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

          <aside id="membership" className="scroll-mt-24 rounded-xl border border-border bg-surface-tint p-7">
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
      <section className="section-y bg-muted">
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
                  className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-card"
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
            <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
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

      {/* Public notice */}
      <section className="border-y border-border bg-surface-tint py-10 lg:py-12">
        <div className="container-page">
          <article className="rounded-xl border border-border border-l-4 border-l-primary-soft bg-white p-6 shadow-card sm:p-8">
            <p className="eyebrow">Public Notice</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-primary lg:text-3xl">
              Public Notice on Unrecognized Boards
            </h2>
            <div className="mt-5 max-w-5xl space-y-4 text-[15px] leading-7 text-foreground/85">
              <p>
                Board recognition, affiliation and certificate status should always be checked with the
                relevant board or the competent education authority. Claims of recognition that cannot be
                verified through official sources should be treated with caution.
              </p>
              <p>
                COBSE provides information for reference and general public awareness. It is not a
                substitute for the formal recognition or certification decisions of the relevant board,
                state authority or statutory body.
              </p>
              <p>
                Parents, students and institutions are advised to confirm the exact status of the
                board, certificate or institution through the official website and relevant authority.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-y scroll-mt-24">
        <div className="container-page">
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-surface-tint p-8 md:flex-row md:items-center">
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
