export type ProjectCategory = "All" | "Web Apps" | "Enterprise" | "Tools";

export type Project = {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  stack: string[];
  problem: string;
  solution: string;
  impact: string[];
  token: string;
};

export const PROJECT_FILTERS: ProjectCategory[] = [
  "All",
  "Web Apps",
  "Enterprise",
  "Tools",
];

export const PROJECTS: Project[] = [
  {
    id: "enterprise-dashboard",
    title: "Enterprise Dashboard",
    category: "Web Apps",
    stack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    problem:
      "Large companies need real-time insights from multiple sources in a single, intuitive dashboard.",
    solution:
      "A modular and scalable dashboard with dynamic charts, permissions and real-time data.",
    impact: [
      "+40% productivity for analysts",
      "-60% time to generate reports",
      "Used by 500+ users daily",
    ],
    token: "Rx",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    category: "Enterprise",
    stack: ["Angular", "TypeScript", "NgRx"],
    problem:
      "Teams needed a structured way to manage operational tasks and approval flows.",
    solution:
      "Built a scalable interface with state management, reusable modules and role-based views.",
    impact: [
      "Improved task visibility",
      "Reduced manual follow-up",
      "Standardized internal workflows",
    ],
    token: "Ng",
  },
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    category: "Web Apps",
    stack: ["Next.js", "Stripe", "Tailwind CSS"],
    problem:
      "The business needed a performant and responsive storefront with a clean checkout flow.",
    solution:
      "Built a modern storefront with product pages, checkout integration and responsive UI.",
    impact: [
      "Improved mobile experience",
      "Faster checkout flow",
      "Better maintainability",
    ],
    token: "Nx",
  },
  {
    id: "internal-design-system",
    title: "Internal Design System",
    category: "Tools",
    stack: ["React", "Storybook", "TypeScript"],
    problem:
      "Product teams were shipping inconsistent UI patterns across different apps.",
    solution:
      "Created reusable UI components, documentation and usage guidelines.",
    impact: [
      "Improved UI consistency",
      "Reduced duplicated code",
      "Faster feature delivery",
    ],
    token: "UI",
  },
];
