import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ClipboardCheck } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Notice } from "@/components/site/PageHeader";
import { verificationSteps } from "@/data/content";

export const Route = createFileRoute("/COBSE-Approval")({
  head: () => ({
    meta: [
      { title: "COBSE Approval and Board Verification" },
      {
        name: "description",
        content:
          "Guidance for checking school board recognition, membership information and educational certificates with the appropriate authority.",
      },
    ],
  }),
  component: COBSEApprovalPage,
});

function COBSEApprovalPage() {
  return (
    <>
      <PageHeader
        title="COBSE Approval"
        intro="Use this guidance to check a school board's status and verify educational certificates before admission or further study."
      />

      <main className="container-page section-y">
        <div className="mx-auto max-w-5xl">
          <section aria-labelledby="verification-heading">
            <div className="flex items-start gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                <ClipboardCheck className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow">Board &amp; credential checks</p>
                <h2
                  id="verification-heading"
                  className="mt-2 font-display text-2xl font-extrabold text-primary"
                >
                  How to verify a board
                </h2>
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
                  Board names, affiliations and certificate procedures can change. Confirm the
                  details for the specific board, school, examination and year directly with the
                  responsible authority.
                </p>
              </div>
            </div>

            <ol className="mt-9 divide-y divide-border border-y border-border">
              {verificationSteps.map((item, index) => (
                <li
                  key={item.step}
                  className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-7"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-bold tabular-nums text-primary-soft"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-primary sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground/80">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section
            className="mt-12 border-t border-border pt-9"
            aria-labelledby="important-heading"
          >
            <div className="flex items-start gap-4">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary-soft" aria-hidden="true" />
              <div>
                <h2 id="important-heading" className="font-display text-xl font-bold text-primary">
                  Important distinction
                </h2>
                <p className="mt-3 max-w-4xl text-[15px] leading-7 text-foreground/80">
                  COBSE directory or membership information is provided as a reference. It is not a
                  substitute for a formal recognition, affiliation or certificate-authenticity
                  decision from the competent government or education authority. Confirm the
                  relevant status directly before relying on it.
                </p>
                <Notice>
                  If a formal verification process is available, follow the instructions published
                  by the concerned board or authority. Do not share original certificates or
                  sensitive personal information except through its official channel.
                </Notice>
              </div>
            </div>
          </section>

          <Link
            to="/COBSE-Recognized-Educational-Boards-List"
            className="mt-10 inline-flex items-center gap-2 border-b border-primary-soft/50 pb-1 text-sm font-semibold text-primary hover:border-primary hover:text-primary-soft"
          >
            View the recognized boards directory
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </main>
    </>
  );
}
