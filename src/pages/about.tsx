import { PageHeader } from "@/components/site/PageHeader";

const factPoints = [
  "COBSE stands for the Council of Boards of School Education in India.",
  "It is a voluntary association of school education boards and related education bodies working in the school education ecosystem.",
  "COBSE works to support coordination, information sharing, academic dialogue and collaboration among member boards.",
  "The organization provides reference information relating to school boards, recognition checks and educational cooperation.",
];

const responsibilities = [
  "Facilitating communication and coordination among boards of school education.",
  "Sharing information on boards, school education systems and academic processes.",
  "Supporting discussions on curriculum, examination processes and educational quality.",
  "Helping schools, parents and institutions identify the most reliable verification channels for educational board information.",
];

function AboutPage() {
  return (
    <>
      <PageHeader
        title="About COBSE"
        intro="COBSE (Council of Boards of School Education in India) is an association of school education boards working to strengthen coordination, information sharing and cooperation in the field of school education."
      />

      <main className="container-page section-y">
        <article className="mx-auto max-w-4xl space-y-12">
          <section aria-labelledby="who-we-are">
            <h2 id="who-we-are" className="font-display text-2xl font-extrabold text-primary">
              Who is COBSE?
            </h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-foreground/85">
              <p>
                COBSE stands for the Council of Boards of School Education in India. It is an
                organization working in the field of school education, bringing together boards and
                related education bodies to support coordination, information sharing and academic
                cooperation.
              </p>
              <p>
                COBSE’s work is institutional and collaborative. It does not replace the legal or
                regulatory roles of the competent government authorities, state education
                departments, boards of school education or other statutory bodies. Where
                recognition, affiliation, accreditation or certification status is in question, the
                relevant authority should be consulted directly.
              </p>
            </div>
          </section>

          <section aria-labelledby="key-facts" className="border-t border-border pt-9">
            <h2 id="key-facts" className="font-display text-2xl font-extrabold text-primary">
              Key facts
            </h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 text-foreground/85 marker:text-primary-soft">
              {factPoints.map((point) => (
                <li key={point} className="pl-2">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="functions" className="border-t border-border pt-9">
            <h2 id="functions" className="font-display text-2xl font-extrabold text-primary">
              COBSE functions and role
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-foreground/85">
              COBSE works as a coordination and information platform in school education. It
              supports communication among member boards, promotes discussion on academic and
              educational matters and helps make school education information more accessible and
              better organized.
            </p>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 text-foreground/85 marker:text-primary-soft">
              {responsibilities.map((point) => (
                <li key={point} className="pl-2">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="verification" className="border-t border-border pt-9">
            <h2 id="verification" className="font-display text-2xl font-extrabold text-primary">
              Verification and source transparency
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-foreground/85">
              This website provides reference material on school education boards, member boards and
              relevant educational information. In matters of recognition, affiliation,
              accreditation, certification status or direct verification, users should check the
              official websites and competent authorities of the board or relevant state or central
              body.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}

export default AboutPage;
