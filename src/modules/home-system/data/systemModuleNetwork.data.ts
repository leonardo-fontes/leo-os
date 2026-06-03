import type { ModuleNode } from "../types";

export const SYSTEM_MODULES: ModuleNode[] = [
  {
    id: "experience",
    label: "EXPERIENCE",
    role: "enterprise applications",
    status: "ACTIVE",
    metric: "3+ years",
    x: 23,
    y: 34,
    tooltip: ["Enterprise Applications", "Angular", "React", "TypeScript"],
  },
  {
    id: "projects",
    label: "PROJECTS",
    role: "delivery engine",
    status: "RUNNING",
    metric: "20+ case studies",
    x: 71,
    y: 28,
    tooltip: ["Case Studies", "Architecture", "Performance", "Testing"],
  },
  {
    id: "skills",
    label: "SKILLS",
    role: "capability engine",
    status: "SYNCED",
    metric: "4 domains",
    x: 26,
    y: 74,
    tooltip: ["Frontend", "Backend", "Testing", "Architecture"],
  },
  {
    id: "contact",
    label: "CONTACT",
    role: "comms channel",
    status: "ONLINE",
    metric: "< 24h reply",
    x: 70,
    y: 66,
    tooltip: ["Email", "LinkedIn", "GitHub", "Availability"],
  },
];

export const MODULE_ICON_BY_ID: Record<ModuleNode["id"], string> = {
  experience: "<>",
  projects: "[]",
  skills: "{}",
  contact: "@",
};

export const MODULE_CARD_PLACEMENT_BY_ID: Record<ModuleNode["id"], string> = {
  experience: "-translate-x-[92%] -translate-y-[92%]",
  projects: "-translate-y-[92%]",
  skills: "-translate-x-[92%]",
  contact: "",
};

export const MODULE_CONNECTOR_OFFSET_BY_ID: Record<
  ModuleNode["id"],
  { x: number; y: number }
> = {
  experience: { x: 0, y: 0 },
  projects: { x: 0, y: 0 },
  skills: { x: 0, y: 0 },
  contact: { x: 2.2, y: 2.2 },
};

export const CONNECTOR_GRADIENT_STOPS = [
  { offset: "0%", color: "rgba(59,130,246,0.92)" },
  { offset: "60%", color: "rgba(124,58,237,0.82)" },
  { offset: "100%", color: "rgba(192,132,252,0.95)" },
] as const;

export const CONNECTOR_DOT_COLOR = "#c084fc";
