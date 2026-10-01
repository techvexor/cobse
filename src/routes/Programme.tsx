import { createFileRoute } from "@tanstack/react-router";
import ProgrammePage from "@/pages/programme";

export const Route = createFileRoute("/Programme")({
  head: () => ({
    meta: [
      { title: "Programme — COBSE" },
      {
        name: "description",
        content: "Explore COBSE programmes, educational resources, role and functions.",
      },
    ],
  }),
  component: ProgrammePage,
});
