import { projectsSystemStyles } from "../data/projectsSystem.styles";

type ProjectImpactListProps = {
  impact: string[];
};

export function ProjectImpactList({ impact }: ProjectImpactListProps) {
  return (
    <ul className={projectsSystemStyles.impactList}>
      {impact.map((item) => (
        <li key={item} className={projectsSystemStyles.impactItem}>
          <span className={projectsSystemStyles.impactCheck} aria-hidden="true">
            OK
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
