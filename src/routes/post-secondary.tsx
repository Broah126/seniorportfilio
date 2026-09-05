import { createFileRoute } from "@tanstack/react-router";
import { getSection } from "@/components/portfolio/sections";
import { Block, SectionPage } from "@/components/portfolio/page-shell";
import { MediaPlaceholder } from "@/components/portfolio/ui";
import { Bloom, Star } from "@/components/portfolio/decorations";

const section = getSection("/post-secondary");

export const Route = createFileRoute("/post-secondary")({
  head: () => ({
    meta: [
      { title: "Post-Secondary Pursuits — Senior Portfolio" },
      {
        name: "description",
        content:
          "College, military and career exploration evidence plus a statement of intent and future plans.",
      },
      { property: "og:title", content: "Post-Secondary Pursuits — Senior Portfolio" },
      {
        property: "og:description",
        content: "Exploration evidence and a statement of intent for life after high school.",
      },
    ],
  }),
  component: PostSecondaryPage,
});

function Exploration({ n }: { n: "01" | "02" }) {
  return (
    <div className="paper px-6 py-10 sm:px-10 sm:py-12">
      <h3 className="text-2xl sm:text-3xl">College / Military / Career Exploration {n}</h3>
      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
        Space for a photograph, brochure, business card and interview evidence.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="md:col-span-2">
          <MediaPlaceholder label="Upload evidence" hint="Photograph, brochure, or interview evidence." tall />
        </div>
        <div className="grid gap-5">
          <MediaPlaceholder label="Upload evidence" hint="Business card or supporting document." />
          <MediaPlaceholder label="Upload evidence" hint="Additional media." />
        </div>
      </div>
      <div className="mt-8 rounded-[18px] border border-dashed border-border bg-background/40 px-6 py-10">
        <h4 className="text-xl">Reflection</h4>
        <p className="mt-3 text-base leading-8 text-muted-foreground">[ADD REFLECTION / SUMMARY]</p>
      </div>
    </div>
  );
}

function PostSecondaryPage() {
  return (
    <SectionPage section={section}>
      <Block eyebrow="Exploration 01" title="Exploration 01">
        <Exploration n="01" />
      </Block>

      <Block eyebrow="Exploration 02" title="Exploration 02">
        <Exploration n="02" />
      </Block>

      <Block eyebrow="Future" title="Statement of Intent / Future Plans">
        <div className="paper relative px-6 py-12 sm:px-14 sm:py-16">
          <Bloom aria-hidden="true" className="absolute right-8 top-8 h-20 w-20 text-rose opacity-[0.14]" />
          <Star aria-hidden="true" className="absolute left-8 bottom-8 h-3.5 w-3.5 text-rose opacity-40" />
          <div className="mx-auto max-w-3xl">
            <p className="label-xs text-rose">Essay</p>
            <div className="mt-6 min-h-[26rem] rounded-[18px] border border-dashed border-border bg-background/40 px-6 py-12 sm:px-10">
              <p className="text-lg leading-9 text-muted-foreground">
                [ADD STATEMENT OF INTENT / FUTURE PLANS]
              </p>
            </div>
          </div>
        </div>
      </Block>
    </SectionPage>
  );
}
