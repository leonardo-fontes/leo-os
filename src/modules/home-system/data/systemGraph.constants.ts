import type { Point } from "../types";

export const SYSTEM_GRAPH_CENTER: Point = { x: 47, y: 50 };

export const INTRO_TEXT = {
  command: "> system.welcome",
  greetingPrefix: "Hi, I'm",
  name: "Leonardo",
  title: "Frontend Engineer",
  description:
    "I build scalable, maintainable and high performance web applications with modern technologies.",
  cta: "> explore.system",
};

export const HOME_SIDEBAR_MENU_ITEMS = [
  { label: "01 HOME", href: "#home" },
  { label: "02 EXPERIENCE", href: "#experience" },
  { label: "03 PROJECTS", href: "#projects" },
  { label: "04 SKILLS", href: "#skills" },
  { label: "05 CONTACT", href: "#contact" },
] as const;
