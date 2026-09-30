import { PageHeader } from "@/components/site/PageHeader";

const referenceBoards = [
  { name: "Central Board of Secondary Education (CBSE)", state: "Delhi", type: "National board" },
  { name: "Council for the Indian School Certificate Examinations (CISCE)", state: "Delhi", type: "Non-government board" },
  { name: "National Institute of Open Schooling (NIOS)", state: "Uttar Pradesh", type: "Open schooling" },
  { name: "Board of Secondary Education, Andhra Pradesh", state: "Andhra Pradesh", type: "State board" },
  { name: "Assam State School Education Board", state: "Assam", type: "State board" },
];

function RecognizedEducationalBoardsList() {
  return (
    <>
      <PageHeader
        title="Educational board information and verification"
        intro="COBSE provides reference information about school education boards and educational board verification. Recognition, affiliation and certification status must be verified with the competent board, state authority or official government body concerned."
      />

      <main className="container-page py-10 lg:py-14">
        <section className="mx-auto max-w-5xl" aria-labelledby="board-directory-heading">
          <h2 id="board-directory-heading" className="font-display text-2xl font-extrabold text-primary">
            Reference board directory
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-foreground/85">
            The directory below is presented as general reference information and should not be treated
            as a substitute for a board’s official recognition or certificate status. Users should
            confirm details with the relevant board or the competent education authority of the state or
            central government.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <table className="min-w-full divide-y divide-border text-left text-sm">
              <thead className="bg-surface-tint text-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Board</th>
                  <th scope="col" className="px-4 py-3 font-semibold">State</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {referenceBoards.map((board) => (
                  <tr key={board.name}>
                    <td className="px-4 py-3 font-medium text-primary">{board.name}</td>
                    <td className="px-4 py-3 text-foreground/80">{board.state}</td>
                    <td className="px-4 py-3 text-foreground/80">{board.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-5xl border-t border-border pt-9" aria-labelledby="verification-guidance">
          <h2 id="verification-guidance" className="font-display text-2xl font-extrabold text-primary">
            How to verify an educational board
          </h2>
          <ol className="mt-6 list-decimal space-y-4 pl-6 text-[15px] leading-7 text-foreground/85 marker:font-semibold marker:text-primary-soft">
            <li className="pl-2">Identify the exact board name, state and school or certificate in question.</li>
            <li className="pl-2">Check the board’s own official website for current information.</li>
            <li className="pl-2">Verify recognition or affiliation status with the competent state or central education authority.</li>
            <li className="pl-2">If a board offers a formal verification service, follow that process and avoid relying on unofficial claims.</li>
          </ol>
        </section>
      </main>
    </>
  );
}

export default RecognizedEducationalBoardsList;
              For any query regarding board validity, kindly mail on {" "}
              <a
                href="mailto:cobseboards@gmail.com"
                className="break-all text-primary-soft underline underline-offset-2 hover:text-primary"
              >
                cobseboards@gmail.com
              </a>
              .
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default RecognizedEducationalBoardsList;