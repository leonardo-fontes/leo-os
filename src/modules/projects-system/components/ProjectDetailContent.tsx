import { SystemButton } from "@/shared/ui/SystemButton";
import type { Project } from "../data/projectsSystem.data";
import { projectsSystemStyles } from "../data/projectsSystem.styles";
import { ProjectImpactList } from "./ProjectImpactList";

type ProjectDetailContentProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectDetailContent({
  project,
  compact = false,
}: ProjectDetailContentProps) {
  return (
    <>
      <div className={projectsSystemStyles.tagList}>
        {project.stack.map((stackItem) => (
          <span key={stackItem} className={projectsSystemStyles.tag}>
            {stackItem}
          </span>
        ))}
      </div>

      <div
        className={
          compact
            ? projectsSystemStyles.detailSectionCompact
            : projectsSystemStyles.detailSection
        }
      >
        <h4 className={projectsSystemStyles.detailLabel}>Problem</h4>
        <p className={projectsSystemStyles.detailText}>{project.problem}</p>
      </div>

      <div
        className={
          compact
            ? projectsSystemStyles.detailSectionCompact
            : projectsSystemStyles.detailSection
        }
      >
        <h4 className={projectsSystemStyles.detailLabel}>Solution</h4>
        <p className={projectsSystemStyles.detailText}>{project.solution}</p>
      </div>

      <div
        className={
          compact
            ? projectsSystemStyles.detailSectionCompact
            : projectsSystemStyles.detailSection
        }
      >
        <h4 className={projectsSystemStyles.detailLabel}>Impact</h4>
        <ProjectImpactList impact={project.impact} />
      </div>

      <SystemButton variant="action" className={projectsSystemStyles.ctaButton}>
        SEND CASE STUDY -&gt;
      </SystemButton>
    </>
  );
}
