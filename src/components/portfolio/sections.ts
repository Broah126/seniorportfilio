export type RoutePath =
  | "/"
  | "/master"
  | "/apply"
  | "/reach"
  | "/know"
  | "/professional"
  | "/post-secondary";

export type SectionLink = {
  number: string;
  label: string;
  to: RoutePath;
  title: string;
  subtitle: string;
  kicker: string;
};

export const SECTIONS: SectionLink[] = [
  {
    number: "01",
    label: "Master",
    to: "/master",
    title: "Master",
    subtitle: "Master a University Prep, STEAM, and/or VPA Pathway",
    kicker: "01 / Mark",
  },
  {
    number: "02",
    label: "Apply",
    to: "/apply",
    title: "Apply",
    subtitle: "Apply Technology Skills Necessary for the 21st Century",
    kicker: "02 / Mark",
  },
  {
    number: "03",
    label: "Reach",
    to: "/reach",
    title: "Reach",
    subtitle:
      "Reach a Solid Foundation of Lifelong Learning Through Personal Accountability",
    kicker: "03 / Mark",
  },
  {
    number: "04",
    label: "Know",
    to: "/know",
    title: "Know",
    subtitle: "Know How to Achieve Success in Post-Secondary Education",
    kicker: "04 / Mark",
  },
  {
    number: "05",
    label: "Professional Pursuits",
    to: "/professional",
    title: "Professional Pursuits",
    subtitle: "Preparing for the Professional World",
    kicker: "05 / Future",
  },
  {
    number: "06",
    label: "Post-Secondary Pursuits",
    to: "/post-secondary",
    title: "Post-Secondary Pursuits",
    subtitle: "Planning for Life After High School",
    kicker: "06 / Future",
  },
];

export const SCHOOL = "Buckingham Collegiate Charter Academy";

export function getSection(to: RoutePath): SectionLink {
  const found = SECTIONS.find((s) => s.to === to);
  if (!found) throw new Error(`Unknown section ${to}`);
  return found;
}
