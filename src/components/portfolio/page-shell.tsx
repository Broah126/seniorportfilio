import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SECTIONS, type SectionLink } from "./sections";
import { Blob, Loop, Star } from "./decorations";
import { Eyebrow, Reveal } from "./ui";

export function SectionPage({
  section,
  children,
}: {
  section: SectionLink;
  children: ReactNode;
}) {
  const idx = SECTIONS.findIndex((s) => s.to === section.to);
  const prev = SECTIONS[idx - 1];
  const next = SECTIONS[idx + 1];

  return (
    <div className="px-5 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-[1280px]">
        <Reveal as="header" className="relative max-w-3xl">
          <Blob className="absolute -left-24 -top-24 h-64 w-64 opacity-50" />
          <div className="relative">
            <Eyebrow>{section.kicker}</Eyebrow>
            <h1 className="mt-4 text-6xl leading-[1.02] sm:text-7xl">{section.title}</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              {section.subtitle}
            </p>
            <Loop aria-hidden="true" className="mt-6 h-16 w-24 text-rose opacity-30" />
          </div>
          <Star aria-hidden="true" className="absolute right-0 top-2 h-4 w-4 text-rose opacity-40" />
        </Reveal>

        <div className="mt-16 flex flex-col gap-14 sm:mt-20 sm:gap-20">{children}</div>

        <Reveal as="nav" className="mt-20 flex flex-col gap-4 border-t border-border/70 pt-8 sm:flex-row sm:justify-between">
          <span className="label-xs text-muted-foreground">
            {prev ? (
              <Link to={prev.to} className="text-rose">
                ← {prev.label}
              </Link>
            ) : (
              <Link to="/" className="text-rose">
                ← Home
              </Link>
            )}
          </span>
          <span className="label-xs text-muted-foreground sm:text-right">
            {next ? (
              <Link to={next.to} className="text-rose">
                {next.label} →
              </Link>
            ) : (
              <Link to="/" className="text-rose">
                Home →
              </Link>
            )}
          </span>
        </Reveal>
      </div>
    </div>
  );
}

export function Block({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </Reveal>
  );
}
