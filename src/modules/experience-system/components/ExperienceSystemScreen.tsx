import { experienceSystemStyles } from "../data/experienceSystem.styles";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { TechStackPanel } from "./TechStackPanel";

export function ExperienceSystemScreen() {
  return (
    <section id="experience" className={experienceSystemStyles.section}>
      <div className={experienceSystemStyles.container}>
        <div className={experienceSystemStyles.timelinePanel}>
          <p className={experienceSystemStyles.command}>&gt; system.experience</p>
          <h2 className={experienceSystemStyles.title}>Experience Log_</h2>
          <ExperienceTimeline />
        </div>

        <TechStackPanel />
      </div>
    </section>
  );
}
