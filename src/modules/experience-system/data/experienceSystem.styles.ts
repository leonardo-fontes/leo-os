export const experienceSystemStyles = {
  section:
    "experience-surface w-full max-w-full overflow-hidden scroll-mt-16 px-4 sm:px-6 lg:min-h-screen lg:px-10 lg:py-20 xl:px-14",
  container:
    "mx-auto grid min-w-0 max-w-6xl items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-stretch xl:gap-8",
  command:
    "font-mono text-xs tracking-[0.16em] text-[var(--experience-command-text)]",
  title:
    "mt-5 font-title text-[34px] leading-none text-[var(--experience-heading-text)] sm:text-[42px] lg:text-[52px]",
  panel:
    "experience-panel relative overflow-hidden border-0 bg-transparent shadow-none lg:rounded-[28px] lg:border lg:border-[var(--experience-panel-border)] lg:bg-[var(--experience-panel-bg)] lg:shadow-panel lg:backdrop-blur-md",
  timelinePanel:
    "experience-timeline-panel relative overflow-hidden border-0 bg-transparent p-0 shadow-none lg:rounded-[28px] lg:border lg:border-[var(--experience-panel-border)] lg:bg-[var(--experience-panel-bg)] lg:p-8 lg:shadow-panel lg:backdrop-blur-md",
  techPanel: "p-0 lg:p-6",
  panelTitle:
    "font-display text-sm uppercase tracking-[0.18em] text-[var(--experience-heading-text)]",
  timeline: "relative mt-9 space-y-10 pl-10 sm:pl-12",
  timelineLine:
    "experience-timeline-line absolute bottom-5 left-[11px] top-3 w-px sm:left-[13px]",
  timelineItem: "relative",
  timelineDot:
    "experience-timeline-dot absolute -left-10 top-1.5 h-6 w-6 rounded-full p-1 sm:-left-12 sm:h-7 sm:w-7",
  timelineDotCore: "block h-full w-full rounded-full bg-[var(--experience-dot-bg)]",
  period:
    "font-mono text-xs font-semibold tracking-[0.12em] text-[var(--experience-accent-text)]",
  role:
    "mt-1 font-title text-xl font-semibold text-[var(--experience-heading-text)] sm:text-2xl",
  meta: "text-[var(--experience-body-text)]",
  highlights: "mt-3 space-y-2 font-mono text-xs leading-6 sm:text-sm sm:leading-7",
  highlightLabel:
    "text-[var(--experience-highlight-label-text)] font-semibold tracking-[0.1em]",
  highlightText: "text-[var(--experience-body-text)]",
  techGrid: "mt-7 grid grid-cols-2 gap-3 min-[420px]:grid-cols-3 lg:grid-cols-2",
  techCard:
    "experience-tech-card rounded-2xl border border-[var(--experience-tech-card-border)] bg-[var(--experience-tech-card-bg)] p-3 text-center transition hover:border-[var(--experience-tech-card-hover-border)]",
  techToken:
    "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--experience-tech-token-border)] bg-[var(--experience-tech-token-bg)] font-display text-lg text-[var(--experience-accent-text)]",
  techLabel:
    "mt-3 block font-mono text-xs text-[var(--experience-body-text)]",
} as const;
