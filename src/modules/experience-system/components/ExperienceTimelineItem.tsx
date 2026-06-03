import { motion } from "framer-motion";
import type { ExperienceLogEntry } from "../data/experienceSystem.data";
import { experienceSystemStyles } from "../data/experienceSystem.styles";

type ExperienceTimelineItemProps = {
  entry: ExperienceLogEntry;
  index: number;
};

export function ExperienceTimelineItem({
  entry,
  index,
}: ExperienceTimelineItemProps) {
  return (
    <motion.article
      className={experienceSystemStyles.timelineItem}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
    >
      <span className={experienceSystemStyles.timelineDot} aria-hidden="true">
        <span className={experienceSystemStyles.timelineDotCore} />
      </span>

      <p className={experienceSystemStyles.period}>{entry.period}</p>
      <h3 className={experienceSystemStyles.role}>
        {entry.role} <span className={experienceSystemStyles.meta}>·</span>{" "}
        {entry.company}
      </h3>

      <ul className={experienceSystemStyles.highlights}>
        {entry.highlights.map((highlight) => (
          <li key={`${entry.period}-${highlight.label}-${highlight.text}`}>
            <span className={experienceSystemStyles.highlightLabel}>
              {highlight.label}:
            </span>{" "}
            <span className={experienceSystemStyles.highlightText}>
              {highlight.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
