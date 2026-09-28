import { createFileRoute } from "@tanstack/react-router";
import RecognizedEducationalBoardsList from "@/pages/recognized-educational-boards-list";

export const Route = createFileRoute(
  "/COBSE-Recognized-Educational-Boards-List",
)({
  head: () => ({
    meta: [
      { title: "COBSE Recognized Educational Boards List in India" },
      {
        name: "description",
        content:
          "View recognized educational boards in India and COBSE's public notice on unrecognized boards.",
      },
    ],
  }),
  component: RecognizedEducationalBoardsList,
});