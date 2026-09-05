import { createFileRoute, Link } from "@tanstack/react-router";
import { SCHOOL, SECTIONS } from "@/components/portfolio/sections";
import { Blob, Bloom, Dots, Loop, Scribble, Star } from "@/components/portfolio/decorations";
import { Eyebrow, Reveal } from "@/components/portfolio/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Senior Portfolio — Buckingham Collegiate Charter Academy" },
      {
        name: "description",
        content:
          "A senior portfolio template for Buckingham Collegiate Charter Academy: master, apply, reach, know, professional and post-secondary pursuits.",
      },
      { property: "og:title", content: "Senior Portfolio — Buckingham Collegiate Charter Academy" },
      {
        property: "og:description",
        content: "An editorial senior portfolio template ready for your work samples and future plans.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="px-5 pb-24 pt-32 sm:pt-40">
      {/* HERO */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <Star aria-hidden="true" className="absolute -left-6 -top-8 h-4 w-4 text-rose opacity-50" />
          <Eyebrow>Senior Portfolio</Eyebrow>
          <h1 className="mt-5 text-[clamp(2.75rem,9vw,6rem)] leading-[0.98]">[Your Name]</h1>
          <p className="mt-6 text-lg text-ink">Class of [____]</p>
          <p className="mt-1 text-base text-muted-foreground">{SCHOOL}</p>
          <Scribble aria-hidden="true" className="mt-6 h-10 w-48 text-rose opacity-30" />
          <p className="mt-6 max-w-md rounded-[18px] border border-dashed border-border bg-cream/60 px-6 py-6 text-base leading-8 text-muted-foreground">
            [ADD A SHORT INTRODUCTION ABOUT YOURSELF]
          </p>
          <p className="handwritten mt-7 text-2xl text-rose">a collection of my work</p>
        </Reveal>

        <Reveal delay={120} className="relative order-1 mx-auto w-full max-w-md lg:order-2">
          <Blob className="absolute -right-10 -top-10 h-64 w-64 opacity-70" />
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-5 rotate-3 rounded-[28px] bg-blush/70"
          />
          <div className="relative flex aspect-[4/5] flex-col items-center justify-center gap-4 rounded-[28px] border-[10px] border-cream bg-cream/80 text-center shadow-lift [transform:rotate(-2deg)]">
            <span
              aria-hidden="true"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-2xl text-rose"
            >
              +
            </span>
            <p className="label-xs text-ink">[Add Your Photo]</p>
            <p className="max-w-[14rem] text-sm text-muted-foreground">
              Portrait placeholder — add your senior photo here.
            </p>
          </div>
          <p className="label-xs absolute -bottom-4 left-6 rounded-full border border-border/70 bg-cream px-4 py-2 text-rose shadow-soft">
            Class of [____]
          </p>
          <Dots aria-hidden="true" className="absolute -left-10 bottom-16 h-14 w-28 text-rose opacity-25" />
          <Loop aria-hidden="true" className="absolute -right-6 -bottom-16 h-24 w-32 text-rose opacity-25" />
        </Reveal>
      </section>

      {/* SECTION CARDS */}
      <section className="mx-auto mt-32 max-w-[1280px] sm:mt-40">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(2.25rem,5vw,4rem)] leading-tight">A collection of my work</h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">[OPTIONAL SHORT INTRODUCTION]</p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s, i) => (
            <Reveal as="li" key={s.to} delay={i * 70}>
              <Link
                to={s.to}
                className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-border/70 bg-cream px-7 py-9 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <Bloom
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 text-rose opacity-[0.14] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                <span className="label-xs text-rose">{s.number}</span>
                <h3 className="mt-4 text-3xl">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                  [ADD SHORT SECTION DESCRIPTION]
                </p>
                <span className="label-xs mt-8 inline-flex items-center gap-2 text-ink">
                  View section
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* PERMISSION */}
      <section id="permission" className="mx-auto mt-28 max-w-[1280px] scroll-mt-32">
        <Reveal className="paper flex flex-col gap-5 px-7 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-12">
          <div>
            <Eyebrow>Portfolio documents</Eyebrow>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
              [UPLOAD PERMISSION TO USE FORM]
            </p>
          </div>
          <Link to="/" hash="permission" className="label-xs whitespace-nowrap text-rose">
            Permission to Use Form →
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
