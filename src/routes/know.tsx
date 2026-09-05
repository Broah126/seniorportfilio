import { createFileRoute } from "@tanstack/react-router";
import { getSection } from "@/components/portfolio/sections";
import { SectionPage } from "@/components/portfolio/page-shell";
import { WorkSample } from "@/components/portfolio/ui";

const section = getSection("/know");

export const Route = createFileRoute("/know")({
  head: () => ({
    meta: [
      { title: "Know — Senior Portfolio" },
      {
        name: "description",
        content: "Know How to Achieve Success in Post-Secondary Education — two work samples.",
      },
      { property: "og:title", content: "Know — Senior Portfolio" },
      {
        property: "og:description",
        content: "Individual and collaborative achievement work samples.",
      },
    ],
  }),
  component: KnowPage,
});

function KnowPage() {
  return (
    <SectionPage section={section}>
      <WorkSample
        index="01"
        category="Individual Achievement"
        extra={{ label: "Reflection", placeholder: "Add reflection / context" }}
      />
      <WorkSample index="02" category="Collaborative Achievement" />
    </SectionPage>
  );
}
