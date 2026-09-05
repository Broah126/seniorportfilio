import type { CSSProperties } from "react";

type Pos = { className?: string; style?: CSSProperties };

export function Star({ className = "", style }: Pos) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style}>
      <path
        d="M12 0c.6 6.2 5.2 10.9 12 12-6.8 1.1-11.4 5.8-12 12-.6-6.2-5.2-10.9-12-12C6.8 10.9 11.4 6.2 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Scribble({ className = "", style }: Pos) {
  return (
    <svg viewBox="0 0 220 60" fill="none" aria-hidden="true" className={className} style={style}>
      <path
        d="M2 42C34 6 62 6 92 34c26 24 52 22 74-6 12-15 30-20 52-14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Loop({ className = "", style }: Pos) {
  return (
    <svg viewBox="0 0 160 120" fill="none" aria-hidden="true" className={className} style={style}>
      <path
        d="M12 108C0 60 40 6 86 14c34 6 44 52 12 66-26 12-44-12-28-32 14-18 52-22 78 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Bloom({ className = "", style }: Pos) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className} style={style}>
      {[0, 60, 120, 180, 240, 300].map((r) => (
        <ellipse
          key={r}
          cx="50"
          cy="30"
          rx="13"
          ry="21"
          stroke="currentColor"
          strokeWidth="1.3"
          transform={`rotate(${r} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function Dots({ className = "", style }: Pos) {
  return (
    <svg viewBox="0 0 80 40" aria-hidden="true" className={className} style={style}>
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 8 }).map((__, c) => (
          <circle key={`${r}-${c}`} cx={4 + c * 10} cy={4 + r * 10} r="1.6" fill="currentColor" />
        )),
      )}
    </svg>
  );
}

export function Blob({ className = "", style }: Pos) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-[50%] blur-3xl ${className}`}
      style={{ background: "var(--blush)", ...style }}
    />
  );
}

/** Page-wide printed-on background texture. Kept away from body copy. */
export function PageDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Blob className="absolute -left-40 -top-32 h-[34rem] w-[34rem] opacity-60" />
      <Blob className="absolute -right-52 top-[38%] h-[40rem] w-[40rem] opacity-45" />
      <Blob className="absolute bottom-[-14rem] left-[18%] h-[30rem] w-[30rem] opacity-40" />
      <Bloom className="absolute left-[6%] top-[52%] h-24 w-24 text-rose opacity-[0.16]" />
      <Star className="absolute right-[10%] top-[16%] h-5 w-5 text-rose opacity-25" />
      <Star className="absolute left-[22%] top-[26%] h-3 w-3 text-rose opacity-20" />
      <Dots className="absolute right-[16%] bottom-[16%] h-16 w-32 text-rose opacity-[0.18]" />
      <Loop className="absolute left-[-2%] top-[8%] h-40 w-52 text-rose opacity-[0.14]" />
      <Scribble className="absolute right-[4%] bottom-[42%] h-16 w-56 text-rose opacity-[0.14]" />
    </div>
  );
}
