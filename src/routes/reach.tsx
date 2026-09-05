import { createFileRoute } from "@tanstack/react-router";
import { getSection } from "@/components/portfolio/sections";
import { SectionPage } from "@/components/portfolio/page-shell";
import { WorkSample } from "@/components/portfolio/ui";

const section = getSection("/reach");

export const Route = createFileRoute("/reach")({
  head: () => ({
    meta: [
      { title: "Reach — Senior Portfolio" },
      {
        name: "description",
        content:
          "Reach a Solid Foundation of Lifelong Learning Through Personal Accountability — two work samples.",
      },
      { property: "og:title", content: "Reach — Senior Portfolio" },
      {
        property: "og:description",
        content: "Lifelong learner and community contributor work samples.",
      },
    ],
  }),
  component: ReachPage,
});

function ReachPage() {
  return (
    <SectionPage section={section}>
      <WorkSample
        index="01"
        category="Lifelong Learner"
        extra={{ label: "Reflection", placeholder: "Add reflection / context" }}
      />
      <WorkSample
        index="02"
        category="Community Contributor"
        extra={{ label: "Reflection", placeholder: "Add reflection / context" }}
      />
    </SectionPage>
  );
}
