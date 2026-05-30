import { motion } from "framer-motion";
import { MODULE_CARD_ENTRY_TRANSITION } from "../animations/systemModuleNetwork.animations";
import {
  MODULE_CARD_PLACEMENT_BY_ID,
  MODULE_ICON_BY_ID,
} from "../data/systemModuleNetwork.data";
import { moduleCardStyles } from "../data/systemStyles";
import type { ModuleNode } from "../types";
import { cn } from "@/shared/utils/cn";

type SystemModuleCardProps = {
  module: ModuleNode;
  index: number;
};

export function SystemModuleCard({ module, index }: SystemModuleCardProps) {
  return (
    <div
      className={cn("absolute z-10 hidden md:block", MODULE_CARD_PLACEMENT_BY_ID[module.id])}
      style={{ left: `${module.x}%`, top: `${module.y}%` }}
    >
      <motion.button
        type="button"
        aria-label={`${module.label} module`}
        className="relative block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={MODULE_CARD_ENTRY_TRANSITION(index)}
      >
        <div className={moduleCardStyles.outer}>
          <div className={moduleCardStyles.inner}>
            <div className="flex items-center justify-between">
              <span className={moduleCardStyles.icon}>
                {MODULE_ICON_BY_ID[module.id]}
              </span>
              <span className={moduleCardStyles.status}>
                {module.status}
              </span>
            </div>
            <p className={moduleCardStyles.title}>
              {module.label}
            </p>
            <p className={moduleCardStyles.role}>
              {module.role}
            </p>
            <p className={moduleCardStyles.metric}>
              {module.metric}
            </p>
          </div>
        </div>
      </motion.button>
    </div>
  );
}
