export const projectsSystemStyles = {
  section:
    "projects-surface w-full max-w-full overflow-hidden scroll-mt-16 px-4 py-16 sm:px-6 lg:min-h-screen lg:px-10 lg:py-20 xl:px-14",
  container:
    "mx-auto grid min-w-0 max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-stretch xl:gap-10",
  command:
    "font-mono text-xs tracking-[0.16em] text-[var(--projects-command-text)]",
  title:
    "mt-5 font-title text-[38px] leading-none text-[var(--projects-heading-text)] sm:text-[46px] lg:text-[54px]",
  leftColumn: "min-w-0",
  filters:
    "projects-filter-scroll mt-7 flex w-full max-w-full gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:overflow-visible lg:pb-0",
  filterButton:
    "projects-filter-button shrink-0 rounded-lg border border-[var(--projects-filter-border)] bg-[var(--projects-filter-bg)] px-4 py-2.5 font-mono text-xs text-[var(--projects-filter-text)] transition-[background-color,color,border-color,box-shadow,opacity] duration-[var(--motion-theme-base)] ease-[var(--motion-ease-system)] hover:border-[var(--projects-card-active-border)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-secondary/50",
  filterButtonActive:
    "projects-filter-button-active border-[var(--projects-filter-active-border)] bg-[var(--projects-filter-active-bg)] text-[var(--projects-filter-active-text)] shadow-cta",
  list: "mt-4 space-y-3",
  listItem:
    "projects-list-item w-full max-w-full min-w-0 overflow-hidden rounded-2xl border border-[var(--projects-card-border)] bg-[var(--projects-card-bg)] p-4 text-left transition-[background-color,box-shadow,opacity,border-color] duration-[var(--motion-theme-slowest)] ease-[var(--motion-ease-system)] hover:border-[var(--projects-card-active-border)] motion-reduce:transition-none lg:flex lg:items-center lg:gap-4",
  listItemHeader:
    "flex w-full min-w-0 items-center gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-secondary/50 lg:contents",
  listItemActive:
    "projects-list-item-active border-[var(--projects-card-active-border)] bg-[var(--projects-card-active-bg)] shadow-[var(--projects-card-active-shadow)]",
  projectToken:
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--projects-token-border)] bg-[var(--projects-token-bg)] font-display text-base text-[var(--projects-accent-text)]",
  listText: "min-w-0 flex-1",
  listTitle:
    "block truncate font-title text-lg font-semibold leading-tight text-[var(--projects-heading-text)]",
  listStack:
    "mt-1 block truncate font-mono text-xs leading-5 text-[var(--projects-body-text)]",
  listArrow:
    "shrink-0 font-mono text-xs text-[var(--projects-body-text)] transition",
  detailPanel:
    "projects-detail-panel relative w-full max-w-full min-w-0 overflow-hidden rounded-[28px] border border-[var(--projects-panel-border)] bg-[var(--projects-panel-bg)] p-5 shadow-panel backdrop-blur-md sm:p-6 lg:p-7",
  detailTitle:
    "font-title text-2xl font-semibold text-[var(--projects-heading-text)] sm:text-3xl",
  tagList: "mt-4 flex flex-wrap gap-2",
  tag:
    "rounded-lg border border-[var(--projects-tag-border)] bg-[var(--projects-tag-bg)] px-3 py-1.5 font-mono text-xs text-[var(--projects-tag-text)]",
  detailSection: "mt-6",
  detailSectionCompact: "mt-4",
  detailLabel:
    "font-title text-lg font-semibold text-[var(--projects-heading-text)]",
  detailText:
    "mt-1 font-mono text-xs leading-6 text-[var(--projects-body-text)] sm:text-sm sm:leading-7",
  impactList: "mt-2 space-y-2 font-mono text-sm text-[var(--projects-body-text)]",
  impactItem: "flex gap-3",
  impactCheck: "text-[var(--projects-success-text)]",
  ctaButton: "mt-7 w-full justify-center px-4 py-3",
  inlineDetail:
    "mt-4 border-t border-[var(--projects-card-border)] pt-4 lg:hidden",
} as const;
