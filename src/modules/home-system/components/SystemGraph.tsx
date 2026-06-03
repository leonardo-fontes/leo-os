import { motion } from "framer-motion";
import {
  CORE_CARD_ENTRY_TRANSITION,
  CORE_CARD_PULSE_TRANSITION,
  ORBIT_CLOCKWISE_TRANSITION,
  ORBIT_COUNTER_CLOCKWISE_TRANSITION,
} from "../animations/systemGraph.animations";
import { INTRO_TEXT, SYSTEM_GRAPH_CENTER } from "../data/systemGraph.constants";
import {
  homeSystemLayoutStyles,
  orbitStyles,
  systemCoreStyles,
} from "../data/systemStyles";
import { SystemModuleNetwork } from "./SystemModuleNetwork";

export function SystemGraph() {
  const coreGlowSequence = [
    "0 0 36px var(--home-core-glow-primary-soft),0 0 70px var(--home-core-glow-secondary-soft)",
    "0 0 48px var(--home-core-glow-primary-strong),0 0 85px var(--home-core-glow-secondary-strong)",
    "0 0 36px var(--home-core-glow-primary-soft),0 0 70px var(--home-core-glow-secondary-soft)",
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      <div className="pointer-events-none absolute inset-0 rounded-2xl" />
      <div className={orbitStyles.overlay} />

      <div className="relative z-10 flex h-full flex-col lg:flex-row">
        <div className={homeSystemLayoutStyles.heroColumn}>
          <div className="w-full max-w-[560px]">
            <p className="home-hero-command font-mono text-xs tracking-[0.16em] text-[var(--home-command-text)]">
              {INTRO_TEXT.command}
            </p>

            <h2 className={homeSystemLayoutStyles.heroTitle}>
              {INTRO_TEXT.greetingPrefix}{" "}
              <span className="home-hero-name-gradient bg-gradient-to-r from-system-primary via-system-secondary to-system-accent bg-clip-text text-transparent">
                {INTRO_TEXT.name}
              </span>
            </h2>

            <p className={homeSystemLayoutStyles.heroSubtitle}>
              {INTRO_TEXT.title}
            </p>

            <p className={homeSystemLayoutStyles.heroDescription}>
              {INTRO_TEXT.description}
            </p>

            <div className="mt-7 inline-flex rounded-xl bg-[image:var(--home-hero-cta-border-gradient)] p-px">
              <span className="rounded-[11px] bg-[var(--home-hero-cta-bg)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--home-hero-cta-text)]">
                {INTRO_TEXT.cta}
              </span>
            </div>
          </div>
        </div>

        <div className={homeSystemLayoutStyles.graphColumn}>
          <div className="relative h-full w-full">
            <div className="pointer-events-none absolute inset-0">
              <div className={orbitStyles.ringOuter} />
              <div className={orbitStyles.ringMid} />
              <div className={orbitStyles.ringInner} />
              <div className={orbitStyles.ringAccent} />

              <motion.div
                className={orbitStyles.orbitClockwise}
                animate={{ rotate: [0, 360] }}
                transition={ORBIT_CLOCKWISE_TRANSITION}
              />

              <motion.div
                className={orbitStyles.orbitCounterClockwise}
                animate={{ rotate: [360, 0] }}
                transition={ORBIT_COUNTER_CLOCKWISE_TRANSITION}
              />
            </div>

            <SystemModuleNetwork center={SYSTEM_GRAPH_CENTER} />

            <div className="absolute left-1/2 top-[43%] z-20 w-56 -translate-x-1/2 -translate-y-1/2 lg:left-[47%] lg:top-1/2 lg:w-64">
              <motion.div
                initial={{ opacity: 0, scale: 0.86 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  boxShadow: coreGlowSequence,
                }}
                transition={CORE_CARD_ENTRY_TRANSITION}
                className={systemCoreStyles.shell}
              >
                <div className={systemCoreStyles.panel}>
                  <div className={systemCoreStyles.pulseOuter} />

                  <motion.div
                    className={systemCoreStyles.pulseInner}
                    animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.85, 0.5] }}
                    transition={CORE_CARD_PULSE_TRANSITION}
                  />

                  <div className={systemCoreStyles.icon}>&gt;_</div>
                  <div className={systemCoreStyles.title}>Leonardo F.</div>
                  <p className={systemCoreStyles.subtitle}>Frontend Engineer</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
