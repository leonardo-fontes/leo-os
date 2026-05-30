import type { Transition } from "framer-motion";

export const BOOT_SCREEN_EXIT_TRANSITION: Transition = {
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1],
};

export const BOOT_CARD_ENTRY_TRANSITION: Transition = {
  duration: 0.8,
  delay: 0.2,
};

export const BOOT_CURSOR_TRANSITION: Transition = {
  duration: 1,
  repeat: Number.POSITIVE_INFINITY,
};

export const BOOT_PROGRESS_TRANSITION: Transition = {
  duration: 0.2,
  ease: "easeOut",
};

export const BOOT_READY_TRANSITION: Transition = {
  duration: 0.3,
};

export const BOOT_OVERLAY_TRANSITION: Transition = {
  duration: 1.1,
  ease: "easeInOut",
};

export const BOOT_CHECKLIST_ITEM_TRANSITION: Transition = {
  duration: 0.35,
  ease: "easeOut",
};
