export const bootSequenceStyles = {
  panel:
    "rounded-2xl border border-system-borderSoft bg-system-panel/70 p-7 shadow-glow backdrop-blur-md sm:p-10",
  title:
    "text-5xl font-bold leading-none tracking-[0.2em] text-system-text sm:text-7xl",
  titleGradient:
    "bg-gradient-to-r from-[var(--boot-title-gradient-from)] via-[var(--boot-title-gradient-via)] to-[var(--boot-title-gradient-to)] bg-clip-text text-transparent",
  subtitle:
    "mt-4 min-h-6 font-mono text-sm uppercase tracking-[0.14em] text-[var(--boot-subtitle-text)] sm:text-base",
  progressTrack:
    "h-1.5 w-full overflow-hidden rounded-full bg-[var(--boot-progress-track-bg)]",
  progressMeta:
    "mt-3 flex items-center justify-between text-xs font-mono text-[var(--boot-progress-meta-text)]",
  ready: "text-violet-200",
  overlay:
    "pointer-events-none absolute inset-0 z-20 bg-[var(--boot-overlay-bg)]",
} as const;

export const bootChecklistStyles = {
  list: "mt-8 space-y-2.5 text-sm text-[var(--boot-checklist-text)] sm:text-base",
  row: "flex items-center justify-between gap-4 font-mono tracking-[0.08em]",
  promptOn: "text-[var(--boot-prompt-on-text)]",
  promptOff: "text-[var(--boot-prompt-off-text)]",
  statusOff: "text-[var(--boot-status-off-text)]",
} as const;
