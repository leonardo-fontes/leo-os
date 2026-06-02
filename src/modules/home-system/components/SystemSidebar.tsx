import { cn } from "@/shared/utils/cn";
import { HOME_SIDEBAR_MENU_ITEMS } from "../data/systemGraph.constants";
import { sidebarStyles } from "../data/systemStyles";

export function SystemSidebar() {
  return (
    <aside className={sidebarStyles.container}>
      <div className="flex items-center gap-3">
        <div className={sidebarStyles.title}>LEO_OS</div>
        <span className={sidebarStyles.statusDot} />
      </div>
      <div className={sidebarStyles.terminalIcon}>
        &gt;_
      </div>
      <nav className="mt-14 space-y-4">
        {HOME_SIDEBAR_MENU_ITEMS.map((menuItem, index) => (
          <button
            key={menuItem}
            className={cn(
              sidebarStyles.navButton,
              index === 0
                ? sidebarStyles.navButtonActive
                : sidebarStyles.navButtonIdle,
            )}
            type="button"
          >
            {menuItem}
          </button>
        ))}
      </nav>
    </aside>
  );
}
