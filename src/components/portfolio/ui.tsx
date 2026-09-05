import { useEffect, useRef, useState, type ReactNode } from "react";
import { Bloom, Dots, Star } from "./decorations";

/** Fade + rise on scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header" | "footer" | "nav";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as unknown as React.ElementType;

  return (
    <Comp
      ref={ref as never}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`label-xs text-rose ${className}`}>{children}</p>;
}

/** Generic upload / embed placeholder — intentional empty state. */
export function MediaPlaceholder({
  label = "Upload work sample",
  hint = "Add your file, image, video, PDF, or embed here.",
  tall = false,
}: {
  label?: string;
  hint?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`paper relative flex flex-col items-center justify-center gap-4 border-dashed px-6 text-center ${
        tall ? "min-h-[26rem] py-20" : "min-h-[18rem] py-14"
      }`}
    >
      <Dots aria-hidden="true" className="absolute right-5 top-5 h-8 w-16 text-rose opacity-20" />
      <Star aria-hidden="true" className="absolute left-6 bottom-6 h-3.5 w-3.5 text-rose opacity-30" />
      <span
        aria-hidden="true"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-2xl text-rose"
      >
        +
      </span>
      <p className="label-xs text-ink">[{label.toUpperCase()}]</p>
      <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{hint}</p>
    </div>
  );
}

/** Document-style paper preview (cover letter, resume, letters). */
export function DocumentCard({
  title,
  placeholder,
}: {
  title: string;
  placeholder: string;
}) {
  return (
    <article className="paper overflow-hidden">
      <header className="flex items-center justify-between gap-4 border-b border-border/70 px-7 py-5">
        <p className="label-xs text-muted-foreground">{title}</p>
        <DocIcon />
      </header>
      <div className="px-6 py-8 sm:px-10 sm:py-12">
        <div className="flex min-h-[20rem] flex-col items-center justify-center gap-4 rounded-[18px] border border-dashed border-border bg-background/40 px-6 py-14 text-center">
          <DocIcon large />
          <p className="label-xs text-ink">[{placeholder.toUpperCase()}]</p>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            PDF or document link. Replace this placeholder with your file.
          </p>
        </div>
        <div className="mt-6 flex justify-end">
          <span className="label-xs text-rose">Open document →</span>
        </div>
      </div>
    </article>
  );
}

function DocIcon({ large = false }: { large?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 30"
      fill="none"
      className={large ? "h-12 w-10 text-rose opacity-70" : "h-6 w-5 text-rose opacity-70"}
    >
      <path
        d="M2 2h13l7 7v19H2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M15 2v7h7M6 15h12M6 19h12M6 23h8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/** Large editorial work sample block. */
export function WorkSample({
  index,
  category,
  extra,
  reflectionLabel = "About this work",
  reflectionPlaceholder = "Add description / context",
}: {
  index: string;
  category: string;
  extra?: { label: string; placeholder: string };
  reflectionLabel?: string;
  reflectionPlaceholder?: string;
}) {
  return (
    <Reveal as="article" className="relative">
      <div className="paper relative px-6 py-10 sm:px-10 sm:py-14">
        <Bloom
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-8 h-20 w-20 text-rose opacity-[0.14]"
        />
        <header className="max-w-2xl">
          <Eyebrow>Work sample {index}</Eyebrow>
          <p className="mt-3 label-xs text-muted-foreground">{category}</p>
          <h3 className="mt-3 text-3xl sm:text-4xl">[Work Sample Title]</h3>
        </header>

        <div className="mt-9">
          <MediaPlaceholder label="Upload work sample" tall />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h4 className="text-xl">{reflectionLabel}</h4>
            <div className="mt-4 rounded-[18px] border border-dashed border-border bg-background/40 px-6 py-10">
              <p className="text-base leading-8 text-muted-foreground">
                [{reflectionPlaceholder.toUpperCase()}]
              </p>
            </div>
          </div>
          {extra ? (
            <div>
              <h4 className="text-xl">{extra.label}</h4>
              <div className="mt-4 rounded-[18px] border border-dashed border-border bg-background/40 px-6 py-10">
                <p className="text-base leading-8 text-muted-foreground">
                  [{extra.placeholder.toUpperCase()}]
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
