export type TimelineItemType = "blog" | "books" | "personal project" | "work";

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
  blog: "bg-purple-100 text-purple-800",
  books: "bg-amber-100 text-amber-800",
  "personal project": "bg-emerald-100 text-emerald-800",
  work: "bg-sky-100 text-sky-800",
};
