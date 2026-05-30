import { SystemButton } from "@/shared/ui/SystemButton";
import { motion } from "framer-motion";
import {
  MODULE_ICON_BY_ID,
  SYSTEM_MODULES,
} from "../data/systemModuleNetwork.data";
import { mobileHomeStyles } from "../data/systemStyles";

type HomeSystemMobileScreenProps = {
  command: string;
  greetingPrefix: string;
  name: string;
  title: string;
  description: string;
  cta: string;
};

export function HomeSystemMobileScreen({
  greetingPrefix,
  name,
  title,
  description,
  cta,
}: HomeSystemMobileScreenProps) {
  return (
    <div className="space-y-4 md:hidden">
      <section className={mobileHomeStyles.introCard}>
        <h1 className={mobileHomeStyles.introTitle}>
          {greetingPrefix}{" "}
          <span className="home-hero-name-gradient bg-gradient-to-r from-system-primary via-system-secondary to-system-accent bg-clip-text text-transparent">
            {name}
          </span>
        </h1>
        <p className={mobileHomeStyles.introSubtitle}>{title}</p>
        <p className={mobileHomeStyles.introDescription}>{description}</p>

        <div className={mobileHomeStyles.introCtaWrapper}>
          <span className={mobileHomeStyles.introCtaButton}>{cta}</span>
        </div>
      </section>

      <section className="space-y-3 flex flex-col w-full py-12">
        <p className={mobileHomeStyles.sectionLabel}>Module Access</p>
        <div className={mobileHomeStyles.modulesGrid}>
          {SYSTEM_MODULES.map((module, index) => (
            <motion.button
              key={module.id}
              type="button"
              aria-label={`${module.label} module`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                delay: 0.08 * index,
                ease: "easeOut",
              }}
              className={mobileHomeStyles.moduleCard}
            >
              <div className={mobileHomeStyles.modulePanel}>
                <div className="flex items-center justify-between">
                  <span className={mobileHomeStyles.moduleIcon}>
                    {MODULE_ICON_BY_ID[module.id]}
                  </span>
                  <span className={mobileHomeStyles.moduleStatus}>
                    {module.status}
                  </span>
                </div>
                <p className={mobileHomeStyles.moduleTitle}>{module.label}</p>
                <p className={mobileHomeStyles.moduleRole}>{module.role}</p>
                <p className={mobileHomeStyles.moduleMetric}>{module.metric}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <SystemButton variant="cta" className="w-full p-4">
          DOWNLOAD CV
        </SystemButton>
      </section>
    </div>
  );
}
