import { EXPERIENCE_LOG_ENTRIES } from "../data/experienceSystem.data";
import { experienceSystemStyles } from "../data/experienceSystem.styles";
import { ExperienceTimelineItem } from "./ExperienceTimelineItem";

export function ExperienceTimeline() {
  return (
    <div className={experienceSystemStyles.timeline}>
      <div className={experienceSystemStyles.timelineLine} aria-hidden="true" />
      {EXPERIENCE_LOG_ENTRIES.map((entry, index) => (
        <ExperienceTimelineItem
          key={`${entry.period}-${entry.role}`}
          entry={entry}
          index={index}
        />
      ))}
    </div>
  );
}
