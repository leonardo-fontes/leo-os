export const bootSequenceStyles = {
  panel:
    "rounded-2xl border border-system-borderSoft bg-[#0b1224]/70 p-7 shadow-glow backdrop-blur-md sm:p-10",
  title:
    "text-5xl font-bold leading-none tracking-[0.2em] text-system-text sm:text-7xl",
  titleGradient:
    "bg-gradient-to-r from-[#dbe6ff] via-[#9ab4ff] to-[#b88dff] bg-clip-text text-transparent",
  subtitle:
    "mt-4 min-h-6 font-mono text-sm uppercase tracking-[0.14em] text-[#9db5e7] sm:text-base",
  progressTrack: "h-1.5 w-full overflow-hidden rounded-full bg-[#1a2238]",
  progressMeta:
    "mt-3 flex items-center justify-between text-xs font-mono text-[#8b9cbc]",
  ready: "text-violet-200",
  overlay: "pointer-events-none absolute inset-0 z-20 bg-[#06080f]",
} as const;

export const bootChecklistStyles = {
  list: "mt-8 space-y-2.5 text-sm text-[#c4cde3] sm:text-base",
  row: "flex items-center justify-between gap-4 font-mono tracking-[0.08em]",
  promptOn: "text-[#8ab4ff]",
  promptOff: "text-[#59647d]",
  statusOff: "text-[#3a4b40]",
} as const;
