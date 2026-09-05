import { Link } from "@tanstack/react-router";
import { SCHOOL, SECTIONS } from "./sections";
import { Star } from "./decorations";

export function SiteFooter() {
  return (
    <footer className="px-5 pb-10">
      <div className="mx-auto max-w-[1280px] rounded-[28px] border border-border/70 bg-cream px-7 py-12 shadow-soft sm:px-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <Star aria-hidden="true" className="h-4 w-4 text-rose opacity-60" />
            <p className="mt-4 font-display text-4xl">[Your Name]</p>
            <p className="mt-2 text-sm text-muted-foreground">Class of [____]</p>
            <p className="text-sm text-muted-foreground">{SCHOOL}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid gap-2 text-sm sm:grid-cols-2 md:text-right">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-ink">
                  Home
                </Link>
              </li>
              {SECTIONS.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="text-muted-foreground transition-colors hover:text-ink">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" hash="permission" className="label-xs text-rose">
            Permission to Use Form →
          </Link>
          <p className="text-xs text-muted-foreground">Senior Portfolio · {SCHOOL}</p>
        </div>
      </div>
    </footer>
  );
}
