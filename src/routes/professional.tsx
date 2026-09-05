import { createFileRoute } from "@tanstack/react-router";
import { getSection } from "@/components/portfolio/sections";
import { Block, SectionPage } from "@/components/portfolio/page-shell";
import { DocumentCard, Eyebrow, Reveal } from "@/components/portfolio/ui";

const section = getSection("/professional");

export const Route = createFileRoute("/professional")({
  head: () => ({
    meta: [
      { title: "Professional Pursuits — Senior Portfolio" },
      {
        name: "description",
        content: "Cover letter, resume, references and letters of recommendation for the professional world.",
      },
      { property: "og:title", content: "Professional Pursuits — Senior Portfolio" },
      {
        property: "og:description",
        content: "Cover letter, resume, references and letters of recommendation.",
      },
    ],
  }),
  component: ProfessionalPage,
});

const REFERENCE_FIELDS = [
  "Name",
  "Job Title",
  "Work Address",
  "Work Phone",
  "Email",
  "Relationship to You",
];

function ProfessionalPage() {
  return (
    <SectionPage section={section}>
      <Block eyebrow="Document 01" title="Cover Letter">
        <DocumentCard title="Cover Letter" placeholder="Upload cover letter" />
      </Block>

      <Block eyebrow="Document 02" title="Resume">
        <DocumentCard title="Resume" placeholder="Upload resume" />
      </Block>

      <Block eyebrow="Document 03" title="References">
        <div className="grid gap-6 lg:grid-cols-2">
          {["01", "02"].map((n) => (
            <Reveal as="article" key={n} className="paper px-7 py-9">
              <Eyebrow>Reference {n}</Eyebrow>
              <dl className="mt-6 space-y-4">
                {REFERENCE_FIELDS.map((f) => (
                  <div key={f} className="border-b border-dashed border-border pb-3">
                    <dt className="label-xs text-muted-foreground">{f}</dt>
                    <dd className="mt-1.5 text-base text-ink/70">[{f.toUpperCase()}]</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </Block>

      <Block eyebrow="Document 04" title="Letter of Recommendation 01">
        <DocumentCard
          title="Letter of Recommendation #1"
          placeholder="Upload letter of recommendation #1"
        />
      </Block>

      <Block eyebrow="Document 05" title="Letter of Recommendation 02">
        <DocumentCard
          title="Letter of Recommendation #2"
          placeholder="Upload letter of recommendation #2"
        />
      </Block>
    </SectionPage>
  );
}
