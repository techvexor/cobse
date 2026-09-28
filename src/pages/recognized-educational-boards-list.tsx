import { PageHeader } from "@/components/site/PageHeader";

const boards = [
  {
    name: "Board of Secondary Education (Andhra Pradesh)",
    newName:
      "Kumar Bhaskar Varma Sanskrit and Ancient Studies University",
    address:
      "No. 20-124, Beside SPNRCH High School, Opp. Andhra Hospitals, Gollapudi, Vijayawada - 521225",
    fax: "0866-2970056",
    website: { label: "www.bseap.org", href: "http://www.bie.ap.gov.in/" },
    email: {
      label: "dir_govexams@yahoo.com",
      href: "mailto:bie.andhra@ap.gov.in",
    },
    phone: "07525921698",
  },
  {
    name: "A.P. Open School Society, Government of Andhra Pradesh",
    address:
      "Opp. L.B. Stadium E Gate, S.C.E.R.T Campus, III Floor, Basheerbagh, Hyderabad",
    website: {
      label: "www.apopenschool.org",
      href: "http://www.bie.ap.gov.in/",
    },
    email: {
      label: "dir.govexams@yahoo.com",
      href: "mailto:bie.andhra@ap.gov.in",
    },
  },
  {
    name: "Assam Higher Secondary Education Council",
    address: "Bamunimaidam, Guwahati - 781 021",
    fax: "0361-2653498",
    phone: "PBX: 0361-2652627",
    website: {
      label: "www.ahsec.nic.in",
      href: "http://www.bie.ap.gov.in/",
    },
  },
  {
    name: "Board of Secondary Education, Assam",
    address: "Bamunimaidam, Guwahati - 781021",
    fax: "0361-2550939",
    website: {
      label: "www.sebaonline.org",
      href: "http://www.bie.ap.gov.in/",
    },
    email: {
      label: "ahsec1@yahoo.com",
      href: "mailto:bie.andhra@ap.gov.in",
    },
  },
  {
    name: "Assam Sanskrit Board, Kahilipara",
    newName:
      "Kumar Bhaskar Varma Sanskrit and Ancient Studies University",
    address: "Guwahati - 19",
    fax: "0361-2382286",
    website: {
      label: "www.kbvsasun.ac.in",
      href: "http://www.bie.ap.gov.in/",
    },
  },
];

function RecognizedEducationalBoardsList() {
  return (
    <>
      <PageHeader
        title="COBSE Recognized Educational Boards List in India"
        intro="The List of Recognized Educational Boards in India: COBSE Recognized Educational Boards in India will give a list of all boards of education approved nationally and by states by the council of boards of school education in India. This list of recommended schools assists parents, students, and educators to recognize legitimate and certified school board like to guarantee quality education, uniform curriculum and legitimate certification. Recognition by COBSE is a guarantee to academic credibility, countrywide acceptance and easy inter board mobility of students. Get the information about the CBSE, CISCE and other State Boards in detail under COBSE in order to make the correct decision in the selection of the school and planning of the academic structure in India."
      />

      <main className="container-page py-10 lg:py-14">
        <section className="mx-auto max-w-5xl" aria-labelledby="board-list-heading">
          <h2
            id="board-list-heading"
            className="font-display text-lg font-extrabold text-primary sm:text-xl"
          >
            Recognized Educational Boards / Councils - In Indian Education
            System
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            (Under given all educational boards are established under the Act of
            Government of India / State)
          </p>

          <ol className="mt-8 border-y border-border">
            {boards.map((board, index) => (
              <li key={board.name} className="border-b border-border last:border-b-0">
                <article className="grid gap-4 py-7 sm:grid-cols-[2.5rem_1fr] sm:gap-5 sm:py-8">
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-bold tabular-nums text-primary-soft"
                  >
                    {index + 1}.
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold leading-snug text-primary sm:text-lg">
                      {board.name}
                    </h3>
                    {board.newName && (
                      <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                        <strong className="font-semibold text-foreground">
                          New name:
                        </strong>{" "}
                        {board.newName}
                      </p>
                    )}
                    <dl className="mt-4 grid gap-x-8 gap-y-3 text-sm leading-relaxed sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <dt className="font-semibold text-foreground">Address</dt>
                        <dd className="mt-0.5 text-foreground/80">{board.address}</dd>
                      </div>
                      {board.fax && (
                        <div>
                          <dt className="font-semibold text-foreground">Fax</dt>
                          <dd className="mt-0.5 text-foreground/80">{board.fax}</dd>
                        </div>
                      )}
                      {board.phone && (
                        <div>
                          <dt className="font-semibold text-foreground">
                            {board.phone.startsWith("PBX:") ? "Telephone" : "Phone"}
                          </dt>
                          <dd className="mt-0.5 text-foreground/80">
                            {board.phone.replace("PBX: ", "")}
                          </dd>
                        </div>
                      )}
                      {board.website && (
                        <div>
                          <dt className="font-semibold text-foreground">Website</dt>
                          <dd className="mt-0.5">
                            <a
                              href={board.website.href}
                              target="_blank"
                              rel="noreferrer"
                              className="break-all text-primary-soft underline decoration-primary-soft/40 underline-offset-2 hover:text-primary"
                            >
                              {board.website.label}
                            </a>
                          </dd>
                        </div>
                      )}
                      {board.email && (
                        <div>
                          <dt className="font-semibold text-foreground">Email</dt>
                          <dd className="mt-0.5">
                            <a
                              href={board.email.href}
                              className="break-all text-primary-soft underline decoration-primary-soft/40 underline-offset-2 hover:text-primary"
                            >
                              {board.email.label}
                            </a>
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="mx-auto mt-14 max-w-5xl border-t border-border pt-10"
          aria-labelledby="fake-boards-heading"
        >
          <h2
            id="fake-boards-heading"
            className="font-display text-2xl font-extrabold text-primary"
          >
            Fake Boards
          </h2>
          <div className="mt-6 border-l-4 border-accent bg-surface-tint px-5 py-5 sm:px-7">
            <h3 className="font-display text-base font-bold leading-relaxed text-primary sm:text-lg">
              For more details about fake / unrecognized educational boards /
              councils / institutes
            </h3>
            <p className="mt-3 text-sm font-semibold text-foreground/85">
              Mail to us: {" "}
              <a
                href="mailto:cobseboards@gmail.com"
                className="break-all text-primary-soft underline underline-offset-2 hover:text-primary"
              >
                cobseboards@gmail.com
              </a>
            </p>
          </div>

          <article className="mt-9 space-y-5 text-[15px] leading-8 text-foreground/85">
            <h3 className="font-display text-xl font-bold text-primary">
              Public Notice on Unrecognized Boards
            </h3>
            <h4 className="font-display text-lg font-bold leading-snug text-primary">
              Fake Board in India, Unrecognised Board in India, COBSE Fake Board
              List
            </h4>
            <p>
              Fake Board in India and Unrecognised Board in India are common
              concerns for parents and students seeking valid school education.
              Many institutions falsely claim affiliation, leading to invalid
              certificates and future academic risks. Searches for a COBSE fake
              board list highlight the importance of verifying board recognition
              before admission. The Council of Boards of School Education in
              India (COBSE) does not approve fake boards; it only recognizes
              legitimate national and state boards. Always cross-check a board’s
              status through official COBSE sources to avoid unrecognised boards.
              This awareness helps protect students from fraud, ensures
              certificate validity, and supports informed educational decisions.
            </p>
            <p>
              It has come to the notice of the Council of Boards of School
              Education in India (COBSE) that some of the private boards/
              councils have affiliated schools and are issuing certificates in
              violation of the set norms and practices. Some of these private
              boards are running Study Centers on franchise basis also, which is
              not fare.
            </p>
            <p>
              It is also informed that private boards without approval /
              registration cannot affiliate an institution/ school. They cannot
              issue certificates of qualification, especially of class X and
              class XII. Class X and XII certificates can only be issued by and
              under the seal of a board duly established by an Act of
              Parliament/ State Legislature or by an Executive Order of the
              Central/ State government.
            </p>
            <p>
              Students/Public at large are advised to go through the website of
              COBSE carefully at the time of seeking admission and should
              clarify the status of the Board/ Council from COBSE (RECOGNISED
              EDUCATION BOARD – CONSOLIDATED LIST) before taking admission in a
              private board other than those listed in the website of COBSE.
              This is done in order to maintain minimum standard of school
              education.
            </p>
            <p>
              Daily new unrecognized / fake education boards are coming in India
              and old fake boards also closing and change their name and website
              domain and again come in public.
            </p>
            <p>
              So it is much difficult to make a list regarding these
              unrecognized / fake boards. Because of daily changing.
            </p>
            <p>
              So for know the details of unrecognized / fake education board
              with particular board name, kindly mail to: {" "}
              <a
                href="mailto:cobseboards@gmail.com"
                className="break-all text-primary-soft underline underline-offset-2 hover:text-primary"
              >
                cobseboards@gmail.com
              </a>
            </p>
            <p>
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