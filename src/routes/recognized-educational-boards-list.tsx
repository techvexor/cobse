import { createFileRoute } from "@tanstack/react-router";
import RecognizedEducationalBoardsList from "@/pages/recognized-educational-boards-list";

export const Route = createFileRoute("/recognized-educational-boards-list")({
  head: () => ({
    meta: [
      {
        title: "COBSE Recognized Educational Boards List in India",
      },
      {
        name: "description",
        content:
          "Explore the COBSE recognized educational boards and councils listed for India.",
      },
    ],
  }),
  component: RecognizedEducationalBoardsList,
});