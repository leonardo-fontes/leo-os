export type ExperienceLogEntry = {
  period: string;
  role: string;
  company: string;
  highlights: Array<{
    label: string;
    text: string;
  }>;
};

export type TechStackItem = {
  label: string;
  token: string;
};

export const EXPERIENCE_LOG_ENTRIES: ExperienceLogEntry[] = [
  {
    period: "2021 - Present",
    role: "Frontend Engineer",
    company: "TOTVS",
    highlights: [
      {
        label: "feat",
        text: "built enterprise web applications using React, Angular and TypeScript",
      },
      {
        label: "perf",
        text: "improved performance on large data interfaces and complex tables",
      },
      {
        label: "test",
        text: "increased test coverage from 0% to 90% using Jest and Cypress",
      },
    ],
  },
  {
    period: "2019 - 2021",
    role: "Frontend Developer",
    company: "TOTVS",
    highlights: [
      {
        label: "feat",
        text: "developed and maintained web applications",
      },
      {
        label: "system",
        text: "improved code quality and scalability",
      },
      {
        label: "style",
        text: "implemented reusable UI patterns",
      },
    ],
  },
  {
    period: "2018 - 2019",
    role: "Developer Intern",
    company: "Company",
    highlights: [
      {
        label: "feat",
        text: "assisted in development of internal systems",
      },
      {
        label: "fix",
        text: "identified and resolved bugs",
      },
    ],
  },
];

export const TECH_STACK_ITEMS: TechStackItem[] = [
  { label: "React", token: "Rx" },
  { label: "Angular", token: "Ng" },
  { label: "TypeScript", token: "TS" },
  { label: "Next.js", token: "Nx" },
  { label: "Tailwind CSS", token: "Tw" },
  { label: "Node.js", token: "Nd" },
  { label: "Jest", token: "Js" },
  { label: "Cypress", token: "Cy" },
  { label: "Git", token: "Gt" },
  { label: "Figma", token: "Fg" },
];
