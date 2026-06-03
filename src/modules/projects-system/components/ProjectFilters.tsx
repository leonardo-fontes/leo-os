import { cn } from "@/shared/utils/cn";
import type { ProjectCategory } from "../data/projectsSystem.data";
import { PROJECT_FILTERS } from "../data/projectsSystem.data";
import { projectsSystemStyles } from "../data/projectsSystem.styles";

type ProjectFiltersProps = {
  activeFilter: ProjectCategory;
  onFilterChange: (filter: ProjectCategory) => void;
};

export function ProjectFilters({
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div className={projectsSystemStyles.filters} role="tablist">
      {PROJECT_FILTERS.map((filter) => (
        <button
          key={filter}
          type="button"
          role="tab"
          aria-selected={activeFilter === filter}
          className={cn(
            projectsSystemStyles.filterButton,
            activeFilter === filter && projectsSystemStyles.filterButtonActive,
          )}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
