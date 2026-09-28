import { PageHeader } from "@/components/site/PageHeader";

const visionPoints = [
  "The Council of Boards of School Education (COBSE) is a consortium of all the Boards of school education in India.",
  "Acting as a service agency and Bureau of information which facilitates communication amongst all the Member Boards.",
  "COBSE works for curriculum reforms and instigates education systems to meet the required improvisations.",
  "It is a Council which inculcates the concept of quality in the education system, thereby providing academic support to all the member boards. It acts as an Inter Board organization and our basic perspective is to implement regulatory measures in education forums.",
  "COBSE believes in conducting discussions regarding issues of mutual interest resulting in the betterment of education and learning.",
];

const missionPoints = [
  "The primary motive of the Council of Boards of School Education (COBSE) is to establish and maintain implicative enhancements in the field of school education.",
  "It also aims to utilize all the procreative mediums for the successful attainment of the purpose.",
  "COBSE looks forward to provide all the members with forums to discuss issues of mutual interest and to facilitate learning from each other in enhancing quality and quantity education to all.",
  "The Council is also concerned in resolving any adverse situation faced by school Boards.",
  "COBSE works to strengthen leadership in educational policymaking, promote excellence in education and advocate equality of access to educational opportunity.",
  "The membership of COBSE is kept abreast of all the latest developments in educational policies via several key tools, including weekly reviews, monthly Legislative briefs, monthly policy briefs updates and legal briefs.",
];

function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" intro="About The COBSE Board in India" />

      <main className="container-page section-y">
        <article className="mx-auto max-w-4xl">
          <section aria-labelledby="about-cobse-heading">
            <h2
              id="about-cobse-heading"
              className="font-display text-2xl font-extrabold text-primary"
            >
              About COBSE
            </h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-foreground/85">
              <p>
                <strong>COBSE Full Form in India</strong> - COBSE Valid Board in
                India - The national apex body which recognizes and coordinates
                school education boards in the country is known as COBSE Full
                Form in India. A COBSE legitimate board in India provides
                uniform curriculum as well as academic credibility and
                acceptance of certificates all over the country. The use of
                COBSE recognition by parents and students to check the
                authenticity of education boards in admission and higher studies
                to schools. The content provides the explanation of the full
                form of COBSE, its purpose, advantages and the contribution of
                COBSE approved boards to the quality, transparency and uniformity
                of the Indian education system.
              </p>
              <p>
                The Council of Boards of School Education in India (COBSE) is a
                voluntary association of all the central and state Boards of
                School in India.
              </p>
              <p>
                COBSE works in close collaboration with Ministry of HRD,
                Government of India, NCERT, NIEPA and NCTE for promoting
                education in India.
              </p>
              <p>
                COBSE was established to coordinate with State Boards and
                Central Boards, Department of HRD, Government of India and
                Education departments of all State Govt. to promote and
                propagate primary, middle, secondary and senior Secondary
                school education upholding the true spirit of ‘Right to
                Education’ of Govt. of India.
              </p>
            </div>
          </section>

          <section
            className="mt-12 border-t border-border pt-9"
            aria-labelledby="vision-heading"
          >
            <h2
              id="vision-heading"
              className="font-display text-2xl font-extrabold text-primary"
            >
              Vision
            </h2>
            <ol className="mt-5 list-decimal space-y-4 pl-6 text-[15px] leading-8 text-foreground/85 marker:font-semibold marker:text-primary-soft">
              {visionPoints.map((point) => (
                <li key={point} className="pl-2">
                  {point}
                </li>
              ))}
            </ol>
          </section>

          <section
            className="mt-12 border-t border-border pt-9"
            aria-labelledby="mission-heading"
          >
            <h2
              id="mission-heading"
              className="font-display text-2xl font-extrabold text-primary"
            >
              Mission
            </h2>
            <h3 className="mt-5 text-base font-bold text-foreground">
              Help to Educational Boards, Councils and Universities
            </h3>
            <ol className="mt-4 list-decimal space-y-4 pl-6 text-[15px] leading-8 text-foreground/85 marker:font-semibold marker:text-primary-soft">
              {missionPoints.map((point) => (
                <li key={point} className="pl-2">
                  {point}
                </li>
              ))}
            </ol>
          </section>
        </article>
      </main>
    </>
  );
}

export default AboutPage;