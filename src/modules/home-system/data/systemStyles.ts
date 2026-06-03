export const homeSystemLayoutStyles = {
  heroColumn:
    "relative z-20 flex w-full items-center px-5 pb-6 pt-7 lg:h-full lg:w-[40%] lg:shrink-0 lg:px-8 lg:py-8 xl:px-12 xl:py-10",
  heroTitle:
    "home-hero-title mt-4 font-title text-[36px] leading-[1.05] text-[var(--home-heading-text)] sm:text-[42px] lg:mt-5 lg:text-[50px] xl:text-[58px]",
  heroSubtitle:
    "home-hero-subtitle mt-1.5 font-title text-[32px] leading-[1.04] text-[var(--home-heading-text)] sm:text-[36px] lg:mt-2 lg:text-[44px] xl:text-[52px]",
  heroDescription:
    "home-hero-description mt-4 max-w-[430px] font-mono text-sm leading-7 text-[var(--home-body-text)] lg:mt-6 lg:text-[15px] lg:leading-8",
  graphColumn:
    "relative w-full min-h-[520px] px-3 pb-4 lg:h-full lg:min-h-0 lg:w-[60%] lg:px-3 lg:pb-4 xl:px-4 xl:pb-0",
} as const;

export const moduleCardStyles = {
  outer:
    "w-44 rounded-2xl bg-[image:var(--home-module-card-border-gradient)] p-px text-left backdrop-blur-sm",
  inner:
    "home-module-panel cursor-default rounded-system bg-[var(--home-module-panel-bg)] px-4 py-3 shadow-panel",
  icon:
    "flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--home-module-icon-border)] bg-[var(--home-module-icon-bg)] font-mono text-xs text-[var(--home-module-icon-text)]",
  status: "font-mono text-micro tracking-[0.12em] text-system-success",
  title:
    "mt-3 font-title text-sm tracking-[0.12em] text-[var(--home-module-title-text)]",
  role:
    "mt-1 font-mono text-micro uppercase tracking-[0.11em] text-[var(--home-module-role-text)]",
  metric:
    "mt-2 font-mono text-tiny text-[var(--home-module-metric-text)]",
} as const;

export const orbitStyles = {
  overlay:
    "pointer-events-none absolute inset-0 rounded-2xl bg-[image:var(--home-orbit-overlay-bg)]",
  ringOuter:
    "absolute left-1/2 top-[43%] h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--home-orbit-ring-border)] lg:left-[47%] lg:top-1/2 lg:h-[74%] lg:w-[74%]",
  ringMid:
    "absolute left-1/2 top-[43%] h-[41%] w-[41%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--home-orbit-ring-border-soft)] lg:left-[47%] lg:top-1/2 lg:h-[58%] lg:w-[58%]",
  ringInner:
    "absolute left-1/2 top-[43%] h-[31%] w-[31%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--home-orbit-ring-border-muted)] lg:left-[47%] lg:top-1/2 lg:h-[44%] lg:w-[44%]",
  ringAccent:
    "absolute left-1/2 top-[43%] h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--home-orbit-accent-border)] lg:left-[47%] lg:top-1/2 lg:h-[31%] lg:w-[31%]",
  orbitClockwise:
    "absolute left-1/2 top-[43%] h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--home-orbit-primary-border)] lg:left-[47%] lg:top-1/2 lg:h-[68%] lg:w-[68%]",
  orbitCounterClockwise:
    "absolute left-1/2 top-[43%] h-[35%] w-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--home-orbit-secondary-border)] lg:left-[47%] lg:top-1/2 lg:h-[49%] lg:w-[49%]",
} as const;

export const systemCoreStyles = {
  shell:
    "relative overflow-hidden rounded-[28px] bg-[image:var(--home-core-border-gradient)] p-px text-center",
  panel:
    "home-core-panel relative rounded-[27px] bg-[var(--home-core-panel-bg)] p-4 lg:p-6",
  pulseOuter:
    "pointer-events-none absolute -inset-4 rounded-[28px] border border-[var(--home-core-pulse-border)]",
  pulseInner:
    "pointer-events-none absolute -inset-7 rounded-[34px] border border-[var(--home-core-pulse-border-soft)]",
  icon:
    "mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--home-core-icon-border)] bg-[var(--home-core-icon-bg)] font-mono text-lg text-[var(--home-core-icon-text)] lg:mb-3 lg:h-12 lg:w-12 lg:text-xl",
  title:
    "font-title text-[28px] font-semibold tracking-[0.08em] text-[var(--color-text-bright)] lg:text-[30px]",
  subtitle:
    "mt-1 font-mono text-xs uppercase tracking-[0.13em] text-[var(--home-core-subtitle-text)]",
} as const;

export const sidebarStyles = {
  container:
    "fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-[var(--home-sidebar-border)] bg-[var(--home-sidebar-bg)] px-6 py-8 backdrop-blur-md lg:flex",
  title:
    "font-display text-2xl tracking-[0.2em] text-[var(--home-sidebar-title)]",
  statusDot:
    "h-2.5 w-2.5 rounded-full bg-system-success animate-pulse",
  terminalIcon:
    "mt-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--home-terminal-button-border)] bg-[var(--home-terminal-button-bg)] font-mono text-2xl text-[var(--home-terminal-button-text)]",
  navButton:
    "home-sidebar-nav block w-full rounded-lg px-3 py-2 font-mono text-left text-sm tracking-[0.14em] text-[var(--home-sidebar-nav-text)] transition-colors",
  navButtonActive:
    "home-sidebar-nav-active bg-[var(--home-sidebar-nav-active-bg)] text-white",
  navButtonIdle:
    "home-sidebar-nav-idle hover:bg-[var(--home-sidebar-nav-hover-bg)] hover:text-[var(--home-sidebar-nav-hover-text)]",
} as const;

export const statusBarStyles = {
  container:
    "home-status-bar w-full border-t border-system-borderSoft bg-[color:var(--home-status-bar-bg)]/55 px-4 py-4 backdrop-blur-sm lg:px-8",
  content:
    "home-status-bar-content flex flex-wrap items-center gap-x-7 gap-y-2 text-xs font-mono tracking-[0.08em] text-[var(--home-status-bar-text)] transition-[color,opacity] duration-[var(--motion-theme-fast)] ease-[var(--motion-ease-system)] motion-reduce:transition-none sm:text-sm",
  title:
    "home-status-bar-title text-[var(--home-status-bar-title)] transition-[color,opacity] duration-[var(--motion-theme-fast)] ease-[var(--motion-ease-system)] motion-reduce:transition-none",
  online: "text-system-success",
} as const;

export const mobileHomeStyles = {
  sectionLabel:
    "home-section-label font-mono text-micro uppercase tracking-wideSystem text-[var(--home-command-text)]",
  introCard: "p-4 text-center",
  introCommand:
    "home-intro-command mb-4 text-left font-mono text-xs tracking-wideSystem text-[var(--home-command-text)]",
  introTitle:
    "home-intro-title mt-2.5 font-title text-[34px] leading-[1.05] text-[var(--home-heading-text)]",
  introSubtitle:
    "home-intro-subtitle mt-1 font-title text-[28px] leading-[1.05] text-[var(--home-heading-text)]",
  introDescription:
    "home-intro-description mt-2.5 font-mono text-sm leading-7 text-[var(--home-body-text)]",
  introCtaWrapper:
    "mt-4 inline-flex rounded-xl bg-[image:var(--home-hero-cta-border-gradient)] p-px",
  introCtaButton:
    "lg:min-h-11 rounded-[11px] bg-[var(--home-hero-cta-bg)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--home-hero-cta-text)]",
  coreCard:
    "rounded-2xl bg-[image:var(--home-core-border-gradient)] p-px",
  corePanel:
    "rounded-system bg-[var(--home-core-panel-bg)] px-3 py-3 text-center shadow-glow",
  coreIcon:
    "mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--home-core-icon-border)] bg-[var(--home-core-icon-bg)] font-mono text-base text-[var(--home-core-icon-text)]",
  coreTitle:
    "font-title text-[20px] font-semibold tracking-[0.08em] text-[var(--color-text-bright)]",
  coreSubtitle:
    "mt-1 font-mono text-micro uppercase tracking-[0.13em] text-[var(--home-core-subtitle-text)]",
  modulesGrid: "grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 pb-8",
  moduleCard:
    "min-h-11 w-full rounded-xl bg-[image:var(--home-module-card-border-gradient)] p-px text-left",
  modulePanel:
    "home-module-panel rounded-[11px] bg-[var(--home-module-panel-bg)] px-3 py-2.5 shadow-panel",
  moduleIcon:
    "flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--home-module-icon-border)] bg-[var(--home-module-icon-bg)] font-mono text-xs text-[var(--home-module-icon-text)]",
  moduleStatus:
    "font-mono text-micro tracking-[0.12em] text-system-success",
  moduleTitle:
    "mt-1.5 font-title text-sm tracking-[0.12em] text-[var(--home-module-title-text)]",
  moduleRole:
    "mt-1 font-mono text-micro uppercase tracking-[0.11em] text-[var(--home-module-role-text)]",
  moduleMetric:
    "mt-1 font-mono text-tiny text-[var(--home-module-metric-text)]",
  networkCard:
    "overflow-hidden rounded-2xl border border-system-borderSoft bg-[color:var(--home-mobile-network-card-bg)]/45 p-3",
} as const;
