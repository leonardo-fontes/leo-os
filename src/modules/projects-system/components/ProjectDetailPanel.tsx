import { motion } from "framer-motion";
import type { Project } from "../data/projectsSystem.data";
import { projectsSystemStyles } from "../data/projectsSystem.styles";
import { ProjectDetailContent } from "./ProjectDetailContent";

type ProjectDetailPanelProps = {
  project: Project;
};

export function ProjectDetailPanel({ project }: ProjectDetailPanelProps) {
  return (
    <motion.aside
      key={project.id}
      className={projectsSystemStyles.detailPanel}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      aria-labelledby="selected-project-heading"
    >
      <h3 id="selected-project-heading" className={projectsSystemStyles.detailTitle}>
        {project.title}
      </h3>

      <ProjectDetailContent project={project} />
    </motion.aside>
  );
}
