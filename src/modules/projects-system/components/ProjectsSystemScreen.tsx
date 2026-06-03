import { useEffect, useMemo, useState } from "react";
import type { Project, ProjectCategory } from "../data/projectsSystem.data";
import { PROJECTS } from "../data/projectsSystem.data";
import { projectsSystemStyles } from "../data/projectsSystem.styles";
import { ProjectDetailPanel } from "./ProjectDetailPanel";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectList } from "./ProjectList";

export function ProjectsSystemScreen() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (!filteredProjects.some((project) => project.id === selectedProject.id)) {
      setSelectedProject(filteredProjects[0]);
    }
  }, [filteredProjects, selectedProject.id]);

  return (
    <section id="projects" className={projectsSystemStyles.section}>
      <div className={projectsSystemStyles.container}>
        <div className={projectsSystemStyles.leftColumn}>
          <p className={projectsSystemStyles.command}>&gt; system.projects</p>
          <h2 className={projectsSystemStyles.title}>Projects_</h2>

          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <ProjectList
            projects={filteredProjects}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />
        </div>

        <div className="hidden lg:block">
          <ProjectDetailPanel project={selectedProject} />
        </div>
      </div>
    </section>
  );
}
