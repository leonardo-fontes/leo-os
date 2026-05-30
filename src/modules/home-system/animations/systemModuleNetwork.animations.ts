import type { Transition } from "framer-motion";

export const CONNECTOR_LINE_GLOW = "drop-shadow(0 0 5px rgba(124,58,237,0.4))";

export const CONNECTOR_BASE_LINE_TRANSITION = (
  index: number,
): {
  pathLength: Transition;
  opacity: Transition;
} => ({
  pathLength: {
    duration: 0.9,
    delay: 0.3 + index * 0.12,
    ease: "easeOut",
  },
  opacity: {
    duration: 2.8,
    delay: index * 0.22,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
});

export const CONNECTOR_DASHED_LINE_TRANSITION = (
  index: number,
): Transition => ({
  duration: 2.4,
  delay: index * 0.18,
  repeat: Number.POSITIVE_INFINITY,
  ease: "easeInOut",
});

export const CONNECTOR_DOT_TRANSITION = (index: number): Transition => ({
  duration: 2.2,
  delay: 0.5 + index * 0.24,
  repeat: Number.POSITIVE_INFINITY,
  ease: "linear",
  times: [0, 0.15, 0.85, 1],
});

export const MODULE_CARD_ENTRY_TRANSITION = (
  index: number,
): { opacity: Transition; scale: Transition } => ({
  opacity: { duration: 0.4, delay: 0.65 + index * 0.12 },
  scale: { duration: 0.22, ease: "easeOut" },
});
