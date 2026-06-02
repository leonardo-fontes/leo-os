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

type HeroContentProps = {
  command: string;
  greetingPrefix: string;
  name: string;
  title: string;
  description: string;
  cta: string;
};

function HeroContent({
  command,
  greetingPrefix,
  name,
  title,
  description,
  cta,
}: HeroContentProps) {
  return (
    <div className="w-full max-w-[560px]">
      <p className="home-hero-command font-mono text-xs tracking-[0.16em] text-[#7788ad]">{command}</p>
      <h2 className={homeSystemLayoutStyles.heroTitle}>
        {greetingPrefix}{" "}
        <span className="home-hero-name-gradient bg-gradient-to-r from-system-primary via-system-secondary to-system-accent bg-clip-text text-transparent">
          {name}
        </span>
      </h2>
      <p className={homeSystemLayoutStyles.heroSubtitle}>{title}</p>
      <p className={homeSystemLayoutStyles.heroDescription}>{description}</p>
      <div className="mt-7 inline-flex rounded-xl bg-[linear-gradient(125deg,rgba(59,130,246,0.7),rgba(124,58,237,0.66),rgba(192,132,252,0.6))] p-px">
        <span className="home-explore-button rounded-[11px] bg-[#111b33] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#a8bcdf]">
          {cta}
        </span>
      </div>
    </div>
  );
}

function OrbitLayer() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className={orbitStyles.ringOuter} />
      <div className={orbitStyles.ringMid} />
      <div className={orbitStyles.ringInner} />
      <div className={orbitStyles.ringAccent} />
      <motion.div
        className={`home-orbit-animated-primary ${orbitStyles.orbitClockwise}`}
        animate={{ rotate: [0, 360] }}
        transition={ORBIT_CLOCKWISE_TRANSITION}
      />
      <motion.div
        className={`home-orbit-animated-secondary ${orbitStyles.orbitCounterClockwise}`}
        animate={{ rotate: [360, 0] }}
        transition={ORBIT_COUNTER_CLOCKWISE_TRANSITION}
      />
    </div>
  );
}

export function SystemGraph() {
  const coreGlowSequence = [
    "0 0 36px rgba(37,99,235,0.35),0 0 70px rgba(168,85,247,0.22)",
    "0 0 48px rgba(37,99,235,0.42),0 0 85px rgba(168,85,247,0.3)",
    "0 0 36px rgba(37,99,235,0.35),0 0 70px rgba(168,85,247,0.22)",
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      <div className={orbitStyles.overlay} />

      <div className="relative z-10 flex h-full flex-col md:flex-row">
        <div className={homeSystemLayoutStyles.heroColumn}>
          <HeroContent
            command={INTRO_TEXT.command}
            greetingPrefix={INTRO_TEXT.greetingPrefix}
            name={INTRO_TEXT.name}
            title={INTRO_TEXT.title}
            description={INTRO_TEXT.description}
            cta={INTRO_TEXT.cta}
          />
        </div>

        <div className={homeSystemLayoutStyles.graphColumn}>
          <div className="relative h-full w-full">
            <OrbitLayer />

            <SystemModuleNetwork center={SYSTEM_GRAPH_CENTER} />

            <div className="absolute left-1/2 top-[43%] z-20 w-56 -translate-x-1/2 -translate-y-1/2 md:left-[47%] md:top-1/2 md:w-64">
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
