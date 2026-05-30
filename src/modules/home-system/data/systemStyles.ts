export const homeSystemLayoutStyles = {
  heroColumn:
    "relative z-20 flex w-full items-center px-5 pb-6 pt-7 md:h-full md:w-[40%] md:shrink-0 md:px-8 md:py-8 lg:px-12 lg:py-10",
  heroTitle:
    "home-hero-title mt-4 font-title text-[36px] leading-[1.05] text-system-text sm:text-[42px] md:mt-5 md:text-[50px] lg:text-[58px]",
  heroSubtitle:
    "home-hero-subtitle mt-1.5 font-title text-[32px] leading-[1.04] text-system-text sm:text-[36px] md:mt-2 md:text-[44px] lg:text-[52px]",
  heroDescription:
    "home-hero-description mt-4 max-w-[430px] font-mono text-sm leading-7 text-[#8ea2c8] md:mt-6 md:text-[15px] md:leading-8",
  graphColumn:
    "relative w-full min-h-[520px] px-3 pb-4 md:h-full md:min-h-0 md:w-[60%] md:px-3 md:pb-4 lg:px-4 lg:pb-0",
} as const;

export const moduleCardStyles = {
  outer:
    "w-44 rounded-2xl bg-[linear-gradient(140deg,rgba(94,122,185,0.55),rgba(99,102,241,0.38),rgba(148,163,184,0.4))] p-px text-left backdrop-blur-sm",
  inner:
    "home-module-panel cursor-default rounded-system bg-[#101a31] px-4 py-3 shadow-panel",
  icon:
    "flex h-7 w-7 items-center justify-center rounded-lg border border-[#5e7ab955] bg-[#0f1a31] font-mono text-xs text-[#8cabff]",
  status: "font-mono text-micro tracking-[0.12em] text-system-success",
  title: "mt-3 font-title text-sm tracking-[0.12em] text-[#d6e0f5]",
  role: "mt-1 font-mono text-micro uppercase tracking-[0.11em] text-[#7086ad]",
  metric: "mt-2 font-mono text-tiny text-[#9db3dc]",
} as const;

export const orbitStyles = {
  overlay:
    "pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_18%,rgba(59,130,246,0.17),transparent_40%),radial-gradient(circle_at_77%_68%,rgba(168,85,247,0.14),transparent_44%)]",
  ringOuter:
    "absolute left-1/2 top-[43%] h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2b3f6a2a] md:left-[47%] md:top-1/2 md:h-[74%] md:w-[74%]",
  ringMid:
    "absolute left-1/2 top-[43%] h-[41%] w-[41%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2b3f6a23] md:left-[47%] md:top-1/2 md:h-[58%] md:w-[58%]",
  ringInner:
    "absolute left-1/2 top-[43%] h-[31%] w-[31%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2b3f6a1f] md:left-[47%] md:top-1/2 md:h-[44%] md:w-[44%]",
  ringAccent:
    "absolute left-1/2 top-[43%] h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7c3aed30] md:left-[47%] md:top-1/2 md:h-[31%] md:w-[31%]",
  orbitClockwise:
    "absolute left-1/2 top-[43%] h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563eb1f] md:left-[47%] md:top-1/2 md:h-[68%] md:w-[68%]",
  orbitCounterClockwise:
    "absolute left-1/2 top-[43%] h-[35%] w-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a855f723] md:left-[47%] md:top-1/2 md:h-[49%] md:w-[49%]",
} as const;

export const systemCoreStyles = {
  shell:
    "relative overflow-hidden rounded-[28px] bg-[linear-gradient(150deg,rgba(56,189,248,0.8),rgba(96,165,250,0.48)_36%,rgba(168,85,247,0.86)_72%,rgba(192,132,252,0.74))] p-px text-center",
  panel: "home-core-panel relative rounded-[27px] bg-[#0b1428] p-4 md:p-6",
  pulseOuter:
    "pointer-events-none absolute -inset-4 rounded-[28px] border border-[#7c3aed2e]",
  pulseInner:
    "pointer-events-none absolute -inset-7 rounded-[34px] border border-[#2563eb24]",
  icon:
    "mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#5b78bc88] bg-[#111c34] font-mono text-lg text-[#8eb2ff] md:mb-3 md:h-12 md:w-12 md:text-xl",
  title:
    "font-title text-[28px] font-semibold tracking-[0.08em] text-[#dce6ff] md:text-[30px]",
  subtitle:
    "mt-1 font-mono text-xs uppercase tracking-[0.13em] text-[#8ea2c8]",
} as const;

export const sidebarStyles = {
  container:
    "home-sidebar-shell relative z-20 flex h-full w-64 shrink-0 flex-col border-r border-system-borderSoft bg-[#0b1222]/76 px-6 py-8 backdrop-blur-md",
  title: "home-sidebar-title font-display text-2xl tracking-[0.2em] text-[#d8e5ff]",
  statusDot: "h-2.5 w-2.5 rounded-full bg-system-success shadow-[0_0_10px_rgba(34,197,94,0.7)]",
  terminalIcon:
    "home-terminal-button mt-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[#5d7ec133] bg-[#101a31] font-mono text-2xl text-[#9fb7e5]",
  navButton:
    "home-sidebar-nav block w-full rounded-lg px-3 py-2 font-mono text-left text-sm tracking-[0.14em] transition-colors",
  navButtonActive: "home-sidebar-nav-active bg-[#102142] text-[#9bb8ff]",
  navButtonIdle: "home-sidebar-nav-idle text-[#64769c] hover:bg-[#121e37] hover:text-[#a5b7db]",
} as const;

export const statusBarStyles = {
  container:
    "home-status-bar absolute bottom-0 left-0 right-0 z-20 border-t border-system-borderSoft bg-[#0b1222]/55 px-8 py-4 backdrop-blur-sm",
  content:
    "home-status-bar-content flex flex-wrap items-center gap-x-7 gap-y-2 text-xs font-mono tracking-[0.08em] text-[#7f93b8] sm:text-sm",
  title: "home-status-bar-title text-[#9ab2de]",
  online: "text-system-success",
} as const;

export const mobileHomeStyles = {
  sectionLabel: "home-section-label font-mono text-micro uppercase tracking-wideSystem text-[#5f739d]",
  introCard: "p-4 text-center",
  introCommand: "home-intro-command font-mono text-xs tracking-wideSystem text-left mb-4 text-[#7788ad]",
  introTitle: "home-intro-title mt-2.5 font-title text-[34px] leading-[1.05] text-[#e2e8f8]",
  introSubtitle: "home-intro-subtitle mt-1 font-title text-[28px] leading-[1.05] text-[#d6e0f5]",
  introDescription: "home-intro-description mt-2.5 font-mono text-sm leading-7 text-[#8ea2c8]",
  introCtaWrapper:
    "mt-4 inline-flex rounded-xl bg-[linear-gradient(125deg,rgba(59,130,246,0.7),rgba(124,58,237,0.66),rgba(192,132,252,0.6))] p-px",
  introCtaButton:
    "md:min-h-11 rounded-[11px] bg-[#111b33] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#a8bcdf]",
  coreCard:
    "rounded-2xl bg-[linear-gradient(150deg,rgba(56,189,248,0.7),rgba(96,165,250,0.4)_36%,rgba(168,85,247,0.72)_72%,rgba(192,132,252,0.64))] p-px",
  corePanel:
    "rounded-system bg-[#0b1428] px-3 py-3 text-center shadow-glow",
  coreIcon:
    "mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg border border-[#5b78bc88] bg-[#111c34] font-mono text-base text-[#8eb2ff]",
  coreTitle:
    "font-title text-[20px] font-semibold tracking-[0.08em] text-[#dce6ff]",
  coreSubtitle:
    "mt-1 font-mono text-micro uppercase tracking-[0.13em] text-[#8ea2c8]",
  modulesGrid: "grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 pb-8",
  moduleCard:
    "min-h-11 w-full rounded-xl bg-[linear-gradient(140deg,rgba(94,122,185,0.5),rgba(99,102,241,0.34),rgba(148,163,184,0.36))] p-px text-left",
  modulePanel: "home-module-panel rounded-[11px] bg-[#101a31] px-3 py-2.5 shadow-panel",
  moduleIcon:
    "flex h-7 w-7 items-center justify-center rounded-lg border border-[#5e7ab955] bg-[#0f1a31] font-mono text-xs text-[#8cabff]",
  moduleStatus: "font-mono text-micro tracking-[0.12em] text-system-success",
  moduleTitle:
    "mt-1.5 font-title text-sm tracking-[0.12em] text-[#d6e0f5]",
  moduleRole:
    "mt-1 font-mono text-micro uppercase tracking-[0.11em] text-[#7086ad]",
  moduleMetric: "mt-1 font-mono text-tiny text-[#9db3dc]",
  networkCard:
    "overflow-hidden rounded-2xl border border-system-borderSoft bg-[#0b1224]/45 p-3",
} as const;
