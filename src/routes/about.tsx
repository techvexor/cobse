import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/pages/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About COBSE — Council of Boards of School Education in India" },
      {
        name: "description",
        content:
          "Learn about COBSE, its role in coordinating school education boards in India, and its vision and mission.",
      },
    ],
  }),
  component: AboutPage,
});