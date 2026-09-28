import type { ReactNode } from "react";
import membersDirectory from "@/data/members-directory.md?raw";
import { PageHeader } from "@/components/site/PageHeader";

const inlinePattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*)/g;

function renderInline(text: string): ReactNode[] {
  const content: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(inlinePattern)) {
    const index = match.index ?? 0;
    if (index > cursor) content.push(text.slice(cursor, index));

    if (match[2] && match[3]) {
      const href = match[3];
      const external = href.startsWith("http://") || href.startsWith("https://");
      content.push(
        <a
          key={`${index}-${href}`}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="break-all text-primary-soft underline decoration-primary-soft/40 underline-offset-2 hover:text-primary"
        >
          {match[2]}
        </a>,
      );
    } else if (match[4]) {
      content.push(
        <strong key={`${index}-bold`} className="font-semibold text-foreground">
          {match[4]}
        </strong>,
      );
    }

    cursor = index + match[0].length;
  }

  if (cursor < text.length) content.push(text.slice(cursor));
  return content;
}

function MembersPage() {
  return (
    <>
      <PageHeader title="Members" />
      <main className="container-page py-10 lg:py-14">
        <article className="mx-auto max-w-5xl">
          <div className="border-b border-border pb-5">
            <h2 className="font-display text-xl font-extrabold text-primary sm:text-2xl">
              Recognized Educational Boards / Councils - In Indian Education
              System
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Under given all educational boards are established under the Act
              of Government of India / State.
            </p>
          </div>

          <div className="pt-6">
            {membersDirectory.split(/\r?\n/).map((line, index) => {
              const content = line.trim();
              if (!content || content === "# Members") return null;

              const isEntry = /^\d+(?:\s*\([A-Z]\))?\s*\.?\s/.test(content);
              const isBoldHeading =
                content.startsWith("**") || content.startsWith("#### ");

              return (
                <p
                  key={index}
                  className={`my-1 text-sm leading-7 sm:text-[15px] ${
                    isEntry || isBoldHeading
                      ? "font-semibold text-foreground"
                      : "text-foreground/80"
                  }`}
                >
                  {renderInline(content)}
                </p>
              );
            })}
          </div>
        </article>
      </main>
    </>
  );
}

export default MembersPage;