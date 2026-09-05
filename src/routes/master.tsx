import { createFileRoute } from "@tanstack/react-router";
import { getSection } from "@/components/portfolio/sections";
import { SectionPage } from "@/components/portfolio/page-shell";
import { WorkSample } from "@/components/portfolio/ui";

const section = getSection("/master");

export const Route = createFileRoute("/master")({
  head: () => ({
    meta: [
      { title: "Master — Senior Portfolio" },
      { name: "description", content: "Master a University Prep, STEAM, and/or VPA Pathway — two work samples." },
      { property: "og:title", content: "Master — Senior Portfolio" },
      {
        property: "og:description",
        content: "Master a University Prep, STEAM, and/or VPA Pathway — two work samples.",
      },
    ],
  }),
  component: MasterPage,
});

function MasterPage() {
  return (
    <SectionPage section={section}>
      <WorkSample index="01" category="STEAM Product" />
      <WorkSample index="02" category="Digital Media / University Prep Product" />
    </SectionPage>
  );
}
