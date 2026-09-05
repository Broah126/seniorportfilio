import { createFileRoute } from "@tanstack/react-router";
import { getSection } from "@/components/portfolio/sections";
import { SectionPage } from "@/components/portfolio/page-shell";
import { WorkSample } from "@/components/portfolio/ui";

const section = getSection("/apply");

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — Senior Portfolio" },
      {
        name: "description",
        content: "Apply Technology Skills Necessary for the 21st Century — two work samples.",
      },
      { property: "og:title", content: "Apply — Senior Portfolio" },
      {
        property: "og:description",
        content: "Apply Technology Skills Necessary for the 21st Century — two work samples.",
      },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  return (
    <SectionPage section={section}>
      <WorkSample
        index="01"
        category="Technology Skills"
        reflectionLabel="About this work"
        reflectionPlaceholder="Add introductory paragraph"
        extra={{ label: "Behind the scenes", placeholder: "Optional behind-the-scenes notes" }}
      />
      <WorkSample
        index="02"
        category="Technology Skills"
        reflectionLabel="About this work"
        reflectionPlaceholder="Add introductory paragraph"
        extra={{ label: "Behind the scenes", placeholder: "Optional behind-the-scenes notes" }}
      />
    </SectionPage>
  );
}
