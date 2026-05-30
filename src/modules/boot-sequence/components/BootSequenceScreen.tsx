import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  BOOT_CARD_ENTRY_TRANSITION,
  BOOT_CURSOR_TRANSITION,
  BOOT_OVERLAY_TRANSITION,
  BOOT_PROGRESS_TRANSITION,
  BOOT_READY_TRANSITION,
  BOOT_SCREEN_EXIT_TRANSITION,
} from "../animations/bootSequence.animations";
import {
  BOOT_SEQUENCE_STEPS,
  BOOT_SEQUENCE_SUBTITLE,
} from "../data/bootSequence.data";
import { bootSequenceStyles } from "../data/bootSequence.styles";
import type { BootSequenceScreenProps } from "../types";
import { BootChecklist } from "./BootChecklist";

export function BootSequenceScreen({ onComplete }: BootSequenceScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setProgress((previousProgress) => {
        if (previousProgress >= 100) {
          window.clearInterval(tick);
          return 100;
        }

        const nextProgress =
          previousProgress + Math.ceil((100 - previousProgress) / 12);
        return Math.min(nextProgress, 100);
      });
    }, 220);

    return () => window.clearInterval(tick);
  }, []);

  useEffect(() => {
    if (progress < 100) return;

    const timeout = window.setTimeout(() => setIsExiting(true), 900);
    return () => window.clearTimeout(timeout);
  }, [progress]);

  useEffect(() => {
    if (!isExiting || !onComplete) return;

    const timeout = window.setTimeout(() => onComplete(), 700);
    return () => window.clearTimeout(timeout);
  }, [isExiting, onComplete]);

  const typedSubtitle = useMemo(() => {
    const characters = Math.floor(
      (progress / 100) * BOOT_SEQUENCE_SUBTITLE.length * 1.15,
    );
    return BOOT_SEQUENCE_SUBTITLE.slice(
      0,
      Math.min(BOOT_SEQUENCE_SUBTITLE.length, characters),
    );
  }, [progress]);

  const visibleItems = Math.min(
    BOOT_SEQUENCE_STEPS.length,
    Math.floor(progress / 20),
  );
  const isReady = progress === 100;

  return (
    <main className="boot-surface relative flex h-screen w-screen items-center justify-center overflow-hidden">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: isExiting ? 0 : 1,
          scale: isExiting ? 0.985 : 1,
          filter: isExiting ? "blur(6px)" : "blur(0px)",
        }}
        transition={BOOT_SCREEN_EXIT_TRANSITION}
        className="relative z-10 w-full max-w-4xl px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={BOOT_CARD_ENTRY_TRANSITION}
          className={bootSequenceStyles.panel}
        >
          <h1
            className={bootSequenceStyles.title}
            style={{ fontFamily: "Oxanium, Chakra Petch, sans-serif" }}
          >
            <span className={bootSequenceStyles.titleGradient}>
              LEO OS
            </span>
          </h1>

          <p className={bootSequenceStyles.subtitle}>
            {typedSubtitle}
            <motion.span
              animate={{ opacity: [0.15, 1, 0.15] }}
              transition={BOOT_CURSOR_TRANSITION}
              className="ml-1 inline-block"
            >
              |
            </motion.span>
          </p>

          <BootChecklist items={BOOT_SEQUENCE_STEPS} visibleItems={visibleItems} />

          <div className="mt-10">
            <div className={bootSequenceStyles.progressTrack}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #2563eb 0%, #7c3aed 55%, #a855f7 100%)",
                  boxShadow:
                    "0 0 18px rgba(37,99,235,0.45), 0 0 26px rgba(168,85,247,0.35)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={BOOT_PROGRESS_TRANSITION}
              />
            </div>
            <div className={bootSequenceStyles.progressMeta}>
              <span>{progress}%</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isReady ? 1 : 0 }}
                transition={BOOT_READY_TRANSITION}
                className={bootSequenceStyles.ready}
              >
                System ready.
              </motion.span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isExiting ? 1 : 0 }}
        transition={BOOT_OVERLAY_TRANSITION}
        className={bootSequenceStyles.overlay}
      />
    </main>
  );
}
