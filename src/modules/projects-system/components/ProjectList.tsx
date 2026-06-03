import type { Project } from "../data/projectsSystem.data";
import { projectsSystemStyles } from "../data/projectsSystem.styles";
import { ProjectListItem } from "./ProjectListItem";

type ProjectListProps = {
  projects: Project[];
  selectedProject: Project;
  onSelectProject: (project: Project) => void;
};

export function ProjectList({
  projects,
  selectedProject,
  onSelectProject,
}: ProjectListProps) {
  return (
    <ul className={projectsSystemStyles.list}>
      {projects.map((project, index) => (
        <ProjectListItem
          key={project.id}
          project={project}
          index={index}
          isSelected={project.id === selectedProject.id}
          onSelect={onSelectProject}
        />
      ))}
    </ul>
  );
}
