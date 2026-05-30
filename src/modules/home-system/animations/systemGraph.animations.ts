import type { Transition } from "framer-motion";

export const ORBIT_CLOCKWISE_TRANSITION: Transition = {
  duration: 60,
  ease: "linear",
  repeat: Number.POSITIVE_INFINITY,
};

export const ORBIT_COUNTER_CLOCKWISE_TRANSITION: Transition = {
  duration: 44,
  ease: "linear",
  repeat: Number.POSITIVE_INFINITY,
};

export const CORE_CARD_ENTRY_TRANSITION: Transition = {
  duration: 0.65,
  ease: "easeOut",
};

export const CORE_CARD_PULSE_TRANSITION: Transition = {
  duration: 4.2,
  repeat: Number.POSITIVE_INFINITY,
  ease: "easeInOut",
};
