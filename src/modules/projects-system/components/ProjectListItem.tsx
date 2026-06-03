import { cn } from "@/shared/utils/cn";
import { motion } from "framer-motion";
import type { Project } from "../data/projectsSystem.data";
import { projectsSystemStyles } from "../data/projectsSystem.styles";
import { ProjectDetailContent } from "./ProjectDetailContent";

type ProjectListItemProps = {
  project: Project;
  isSelected: boolean;
  index: number;
  onSelect: (project: Project) => void;
};

export function ProjectListItem({
  project,
  isSelected,
  index,
  onSelect,
}: ProjectListItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.25, delay: index * 0.05, ease: "easeOut" }}
    >
      <article
        className={cn(
          projectsSystemStyles.listItem,
          isSelected && projectsSystemStyles.listItemActive,
        )}
      >
        <button
          type="button"
          className={projectsSystemStyles.listItemHeader}
          aria-expanded={isSelected}
          onClick={() => onSelect(project)}
        >
          <span className={projectsSystemStyles.projectToken}>
            {project.token}
          </span>
          <div className={projectsSystemStyles.listText}>
            <h3 className={projectsSystemStyles.listTitle}>{project.title}</h3>
            <p className={projectsSystemStyles.listStack}>
              {project.stack.join(", ")}
            </p>
          </div>
          <span className={projectsSystemStyles.listArrow} aria-hidden="true">
            {isSelected ? "OPEN" : ">"}
          </span>
        </button>

        {isSelected && (
          <motion.div
            className={projectsSystemStyles.inlineDetail}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <ProjectDetailContent project={project} compact />
          </motion.div>
        )}
      </article>
    </motion.li>
  );
}
