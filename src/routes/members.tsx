import { createFileRoute } from "@tanstack/react-router";
import MembersPage from "@/pages/members";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: [
      { title: "Members — Recognized Educational Boards | COBSE" },
      {
        name: "description",
        content:
          "Directory of recognized educational boards, councils, and associate members listed by COBSE.",
      },
    ],
  }),
  component: MembersPage,
});
