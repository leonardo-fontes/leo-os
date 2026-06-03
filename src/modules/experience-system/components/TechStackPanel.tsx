import { TECH_STACK_ITEMS } from "../data/experienceSystem.data";
import { experienceSystemStyles } from "../data/experienceSystem.styles";
import { TechStackItem } from "./TechStackItem";

export function TechStackPanel() {
  return (
    <aside
      className={`${experienceSystemStyles.panel} ${experienceSystemStyles.techPanel}`}
      aria-labelledby="tech-stack-heading"
    >
      <h3 id="tech-stack-heading" className={experienceSystemStyles.panelTitle}>
        Tech Stack
      </h3>
      <ul className={experienceSystemStyles.techGrid}>
        {TECH_STACK_ITEMS.map((item, index) => (
          <TechStackItem key={item.label} item={item} index={index} />
        ))}
      </ul>
    </aside>
  );
}
