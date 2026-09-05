import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SECTIONS } from "./sections";

const LINKS = [{ label: "Home", to: "/" as const }, ...SECTIONS.map((s) => ({ label: s.label, to: s.to }))];

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:pt-6">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 rounded-full border border-border/70 bg-cream/75 px-4 py-2.5 shadow-soft backdrop-blur-md lg:justify-center"
      >
        <Link to="/" className="label-xs px-2 text-ink lg:hidden">
          [Your Name]
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-full px-4 py-2 text-[0.78rem] font-medium tracking-wide transition-colors ${
                    active ? "bg-blush text-ink" : "text-muted-foreground hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-ink lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="mx-auto mt-3 max-w-[1280px] rounded-[24px] border border-border/70 bg-cream/95 p-3 shadow-lift backdrop-blur-md lg:hidden"
        >
          <ul className="flex flex-col">
            {LINKS.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-2xl px-4 py-3 text-sm transition-colors ${
                      active ? "bg-blush text-ink" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
