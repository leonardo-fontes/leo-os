import { cn } from "@/shared/utils/cn";
import { useEffect, useState } from "react";
import { HOME_SIDEBAR_MENU_ITEMS } from "../data/systemGraph.constants";
import { sidebarStyles } from "../data/systemStyles";

const DEFAULT_ACTIVE_HREF = HOME_SIDEBAR_MENU_ITEMS[0].href;

function getActiveHref() {
  return window.location.hash || DEFAULT_ACTIVE_HREF;
}

export function SystemSidebar() {
  const [activeHref, setActiveHref] = useState(getActiveHref);

  useEffect(() => {
    const updateActiveHref = () => setActiveHref(getActiveHref());

    window.addEventListener("hashchange", updateActiveHref);

    return () => window.removeEventListener("hashchange", updateActiveHref);
  }, []);

  useEffect(() => {
    const sectionElements = HOME_SIDEBAR_MENU_ITEMS
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (!visibleSection) return;

        setActiveHref(`#${visibleSection.target.id}`);
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className={sidebarStyles.container}>
      <div className="flex items-center gap-3">
        <div className={sidebarStyles.title}>LEO_OS</div>
        <span className={sidebarStyles.statusDot} />
      </div>

      <div className={sidebarStyles.terminalIcon}>&gt;_</div>

      <nav className="mt-14 space-y-4">
        {HOME_SIDEBAR_MENU_ITEMS.map((menuItem) => {
          const isActive = activeHref === menuItem.href;

          return (
            <a
              key={menuItem.href}
              href={menuItem.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                sidebarStyles.navButton,
                isActive
                  ? sidebarStyles.navButtonActive
                  : sidebarStyles.navButtonIdle,
              )}
            >
              {menuItem.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}