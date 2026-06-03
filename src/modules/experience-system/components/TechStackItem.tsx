import { motion } from "framer-motion";
import type { TechStackItem as TechStackItemType } from "../data/experienceSystem.data";
import { experienceSystemStyles } from "../data/experienceSystem.styles";

type TechStackItemProps = {
  item: TechStackItemType;
  index: number;
};

export function TechStackItem({ item, index }: TechStackItemProps) {
  return (
    <motion.li
      className={experienceSystemStyles.techCard}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.25, delay: index * 0.035, ease: "easeOut" }}
    >
      <span className={experienceSystemStyles.techToken}>{item.token}</span>
      <span className={experienceSystemStyles.techLabel}>{item.label}</span>
    </motion.li>
  );
}
