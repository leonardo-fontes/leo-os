export type ModuleNodeId = "experience" | "projects" | "skills" | "contact";

export type ModuleNode = {
  id: ModuleNodeId;
  label: string;
  role: string;
  status: string;
  metric: string;
  x: number;
  y: number;
  tooltip: string[];
};

export type Point = {
  x: number;
  y: number;
};
