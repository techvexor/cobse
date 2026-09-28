import { PageHeader } from "@/components/site/PageHeader";

const educationResources = [
  { name: "Ministry of Education, Government of India", url: "https://www.education.gov.in/" },
  { name: "Department of School Education & Literacy", url: "https://dsel.education.gov.in/" },
  { name: "Department of Higher Education", url: "https://www.education.gov.in/higher_education" },
  { name: "Association of Indian Universities", url: "https://www.aiu.ac.in/" },
  { name: "CBSE", url: "https://www.cbse.gov.in/" },
  { name: "NIOS", url: "https://www.nios.ac.in/" },
  { name: "Ministry of External Affairs, Government of India", url: "https://indianconsularservices.mea.gov.in/consularServices/" },
  { name: "UGC", url: "https://www.ugc.gov.in/" },
  { name: "NAAC", url: "https://naac.gov.in/index.php/en/" },
  { name: "NCERT", url: "https://ncert.nic.in/" },
  { name: "Commonwealth of Learning", url: "http://www.col.org/Pages/default.aspx" },
  { name: "Delhi Minority Commission", url: "http://www.minorities.in/" },
  { name: "Distance Education Council", url: "http://www.ugc.ac.in/deb/" },
  { name: "Indian Council of Social Science Research", url: "http://www.icssr.org/" },
  { name: "Indian Council of Philosophical Research", url: "http://www.icpr.in/" },
  { name: "Indira Gandhi National Open University", url: "http://www.ignou.ac.in/" },
  { name: "Indian Council of Historical Research", url: "http://www.ichrindia.org/" },
  { name: "Kendriya Hindi Sansthan", url: "http://www.khsindia.org/index.php?lang=en" },
  { name: "Maharshi Sandipani Rashtriya Ved Vidya Pratishthan", url: "http://www.msrvvp.nic.in/" },
  { name: "National Assessment & Accreditation Council", url: "http://www.naac.gov.in/" },
  { name: "National Board of Accreditation", url: "http://www.nbaind.org/views/Home.aspx" },
  { name: "National Book Trust", url: "http://www.nbtindia.org.in/" },
  { name: "National Council of Rural Institutes", url: "http://www.ncri.in/" },
  { name: "National Council for Promotion of Urdu Language", url: "http://www.urducouncil.nic.in/" },
  { name: "National Council for Promotion of Sindhi Language", url: "http://ncpsl.gov.in/" },
  { name: "Rashtriya Sanskrit Sansthan", url: "http://www.sanskrit.nic.in/" },
  { name: "Shastri Indo-Canadian Institute", url: "http://www.sici.org/" },
  { name: "Sakshat", url: "http://www.sakshat.ac.in/" },
  { name: "University Grants Commission", url: "http://www.ugc.ac.in/" },
  { name: "National Handicapped Finance and Development Corporation", url: "http://nhfdc.nic.in/" },
];

const cobseRoles = [
  "COBSE is a consortium of all school education boards in India, including state and national boards.",
  "It acts as a central hub for information and facilitates communication among member boards.",
  "COBSE establishes connections between member boards and national bodies like the Ministry of Education and NCERT.",
  "COBSE works towards curriculum reforms and improvements to the overall educational system.",
  "COBSE helps boards in preparing quality syllabus and course materials.",
];

const cobseFunctions = [
  "COBSE ‘Council of Boards of School Education’ is a consortium of all the boards of School Education in India.",
  "Advisory services and facilitation of implementation of National Education Policy (NPE -2021).",
  "To act as a central bureau of information and facilitating communication as a service agency.",
  "To promote school education and extend necessary help and support to the member boards.",
  "To work for curriculum reforms and improvement of education system. Setting up School Education Board and conduct public evaluation for promotion of quality education in accordance with National Education Policy 2021 (NEP – 2021).",
];

function ProgrammePage() {
  return (
    <>
      <PageHeader
        title="Programme"
        intro="The Council of Boards of School Education aims to bring forward several educational programs and functions which would contribute towards the development of school education and general awareness amongst common people."
      />

      <main className="container-page py-10 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <section aria-labelledby="programme-aim-heading">
            <h2
              id="programme-aim-heading"
              className="font-display text-xl font-extrabold text-primary sm:text-2xl"
            >
              Aim: Increase the Literacy Rate of India
            </h2>
          </section>

          <section className="mt-10 border-t border-border pt-8" aria-labelledby="mhrd-heading">
            <h2 id="mhrd-heading" className="font-display text-xl font-extrabold text-primary">
              COBSE &amp; MHRD
            </h2>
            <p className="mt-2 text-sm font-semibold text-foreground/80">
              COBSE, MHRD and Other Councils
            </p>
            <p className="mt-4 text-[15px] leading-7 text-foreground/85">
              <a
                href="https://mhrd.gov.in/related-links"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary-soft underline underline-offset-2 hover:text-primary"
              >
                Click here
              </a>{" "}
              for more details about MHRD website: {" "}
              <a
                href="https://mhrd.gov.in/related-links"
                target="_blank"
                rel="noreferrer"
                className="break-all text-primary-soft underline underline-offset-2 hover:text-primary"
              >
                https://mhrd.gov.in/related-links
              </a>
            </p>

            <ul className="mt-6 divide-y divide-border border-y border-border sm:grid sm:grid-cols-2 sm:divide-y-0 sm:gap-x-10">
              {educationResources.map((resource) => (
                <li key={resource.name} className="min-w-0 py-4 sm:border-b sm:border-border">
                  <h3 className="font-semibold leading-snug text-foreground">
                    {resource.name}
                  </h3>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block break-all text-sm leading-relaxed text-primary-soft underline decoration-primary-soft/40 underline-offset-2 hover:text-primary"
                  >
                    {resource.url}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t border-border pt-8" aria-labelledby="role-heading">
            <h2 id="role-heading" className="font-display text-xl font-extrabold text-primary">
              Role of COBSE
            </h2>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-[15px] leading-7 text-foreground/85 marker:font-semibold marker:text-primary-soft">
              {cobseRoles.map((role) => (
                <li key={role} className="pl-2">{role}</li>
              ))}
            </ol>
          </section>

          <section className="mt-12 border-t border-border pt-8" aria-labelledby="functions-heading">
            <h2 id="functions-heading" className="font-display text-xl font-extrabold text-primary">
              Functions
            </h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-[15px] leading-7 text-foreground/85 marker:text-primary-soft">
              {cobseFunctions.map((item) => (
                <li key={item} className="pl-2">{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default ProgrammePage;