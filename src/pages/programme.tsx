import { PageHeader } from "@/components/site/PageHeader";

const cobseFunctions = [
  "Support coordination and communication among school education boards and related bodies.",
  "Provide a common platform for information sharing on school education and board-related matters.",
  "Facilitate dialogue on academic processes, curriculum-related matters and educational quality.",
  "Encourage cooperation between member boards and relevant educational institutions.",
  "Provide a reference point for school education information, member board updates and verification guidance.",
];

const officialReferenceLinks = [
  { name: "Ministry of Education, Government of India", url: "https://www.education.gov.in/" },
  { name: "National Council of Educational Research and Training", url: "https://ncert.nic.in/" },
  { name: "University Grants Commission", url: "https://www.ugc.gov.in/" },
  { name: "Central Board of Secondary Education", url: "https://www.cbse.gov.in/" },
];

function ProgrammePage() {
  return (
    <>
      <PageHeader
        title="Functions, objectives and programmes"
        intro="COBSE works in the field of school education by supporting coordination among boards, sharing information, encouraging academic collaboration and helping stakeholders understand board-related information more clearly."
      />

      <main className="container-page py-10 lg:py-14">
        <div className="mx-auto max-w-5xl space-y-12">
          <section aria-labelledby="what-is-cobse-role">
            <h2 id="what-is-cobse-role" className="font-display text-2xl font-extrabold text-primary">
              What is COBSE’s role?
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-foreground/85">
              COBSE is an association of school education boards and related educational bodies in the
              Indian school education ecosystem. Its role is to support coordination, information sharing,
              cooperation and better understanding among boards and stakeholders in school education.
            </p>
          </section>

          <section aria-labelledby="objectives" className="border-t border-border pt-9">
            <h2 id="objectives" className="font-display text-2xl font-extrabold text-primary">
              Objectives
            </h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 text-foreground/85 marker:text-primary-soft">
              <li className="pl-2">To strengthen coordination among boards of school education.</li>
              <li className="pl-2">To create a common platform for information sharing and mutual understanding.</li>
              <li className="pl-2">To support cooperation in academic and school education related matters.</li>
              <li className="pl-2">To help schools, parents and institutions access clearer educational information.</li>
            </ul>
          </section>

          <section aria-labelledby="functions" className="border-t border-border pt-9">
            <h2 id="functions" className="font-display text-2xl font-extrabold text-primary">
              Functions
            </h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 text-foreground/85 marker:text-primary-soft">
              {cobseFunctions.map((item) => (
                <li key={item} className="pl-2">{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="references" className="border-t border-border pt-9">
            <h2 id="references" className="font-display text-2xl font-extrabold text-primary">
              Official references
            </h2>
            <ul className="mt-5 divide-y divide-border border-y border-border">
              {officialReferenceLinks.map((resource) => (
                <li key={resource.name} className="py-3">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-primary-soft underline decoration-primary-soft/40 underline-offset-2 hover:text-primary"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default ProgrammePage;