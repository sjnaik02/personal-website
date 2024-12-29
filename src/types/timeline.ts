export type TimelineItemType =
  | "blog"
  | "books"
  | "personal project"
  | "work"
  | "college org";

export interface TimelineItem {
  date: string;
  name: string;
  description: string;
  link: string;
  type: TimelineItemType;
  role?: string;
  company?: string;
}

export const typeColors: Record<TimelineItemType, string> = {
  blog: "bg-purple-50 text-purple-700 group-hover:bg-purple-100",
  books: "bg-amber-50 text-amber-700 group-hover:bg-amber-100",
  "personal project":
    "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100",
  work: "bg-sky-50 text-sky-700 group-hover:bg-sky-100",
  "college org": "bg-rose-50 text-rose-700 group-hover:bg-rose-100",
};
