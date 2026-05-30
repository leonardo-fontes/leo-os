import { motion } from "framer-motion";
import { BOOT_CHECKLIST_ITEM_TRANSITION } from "../animations/bootSequence.animations";
import { bootChecklistStyles } from "../data/bootSequence.styles";

type BootChecklistProps = {
  visibleItems: number;
  items: string[];
};

export function BootChecklist({ visibleItems, items }: BootChecklistProps) {
  return (
    <ul className={bootChecklistStyles.list}>
      {items.map((bootItem, index) => {
        const isVisible = index < visibleItems;
        const line = bootItem.endsWith("...") ? bootItem : `${bootItem}...`;

        return (
          <motion.li
            key={bootItem}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isVisible ? 1 : 0.2, x: isVisible ? 0 : -10 }}
            transition={BOOT_CHECKLIST_ITEM_TRANSITION}
            className={bootChecklistStyles.row}
          >
            <span>
              <span className={isVisible ? bootChecklistStyles.promptOn : bootChecklistStyles.promptOff}>
                {">"}
              </span>{" "}
              {line}
            </span>
            <span className={isVisible ? "text-system-success" : bootChecklistStyles.statusOff}>
              OK
            </span>
          </motion.li>
        );
      })}
    </ul>
  );
}
