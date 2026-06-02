import { SystemButton } from "@/shared/ui/SystemButton";
import { ThemeToggle } from "@/shared/ui/ThemeToggle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HOME_SIDEBAR_MENU_ITEMS, INTRO_TEXT } from "../data/systemGraph.constants";
import { HomeSystemMobileScreen } from "./HomeSystemMobileScreen";
import { SystemGraph } from "./SystemGraph";
import { SystemSidebar } from "./SystemSidebar";
import { SystemStatusBar } from "./SystemStatusBar";

type MobileHeaderProps = {
  onToggleMenu: () => void;
};

function MobileHeader({ onToggleMenu }: MobileHeaderProps) {
  return (
    <div className="home-mobile-header sticky top-0 z-40 flex items-center justify-between border-b border-[var(--home-mobile-header-border)] bg-[var(--home-mobile-header-bg)] px-4 py-3 backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-2.5">
        <span className="home-mobile-header-logo font-display text-lg tracking-[0.16em] text-[var(--home-sidebar-title)]">
          LEO_OS
        </span>
        <span className="h-2.5 w-2.5 rounded-full bg-system-success shadow-[0_0_10px_rgb(var(--system-success)/0.7)]" />
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle className="min-h-11 px-3" />
        <SystemButton
          variant="control"
          aria-label="Toggle navigation menu"
          onClick={onToggleMenu}
          className="home-mobile-menu-button border-[var(--home-terminal-button-border)] border min-h-11 min-w-11 rounded-lg px-3 text-sm text-[var(--home-terminal-button-text)]"
        >
          MENU
        </SystemButton>
      </div>
    </div>
  );
}

type DesktopActionBarProps = {
  className?: string;
};

function DesktopActionBar({ className }: DesktopActionBarProps) {
  return (
    <div className={className}>
      <ThemeToggle className="flex items-center justify-center p-2" />
      <SystemButton variant="action" className="home-download-cv-button px-4 py-2">
        DOWNLOAD CV
      </SystemButton>
    </div>
  );
}

export function HomeSystemScreen() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <main className="home-surface relative h-screen w-screen overflow-x-hidden overflow-y-auto text-system-text lg:overflow-hidden">
      <div className="relative z-10 flex min-h-full w-full lg:h-full">
        <div className="hidden lg:block">
          <SystemSidebar />
        </div>

        <section className="relative flex-1 pb-6 lg:pb-0">
          <MobileHeader onToggleMenu={() => setIsMobileMenuOpen((prev) => !prev)} />

          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute inset-0 bg-[color:var(--home-mobile-overlay-bg)]/92"
              />

              <aside className="absolute right-0 top-0 h-full w-[84%] max-w-[320px] border-l border-system-borderSoft bg-[var(--home-mobile-drawer-bg)] p-4">
                <div className="mb-4 flex items-center justify-between border-b border-system-borderSoft pb-3">
                  <span className="font-display text-base tracking-[0.14em] text-[var(--home-mobile-drawer-title)]">
                    LEO_OS NAV
                  </span>

                  <div className="flex items-center gap-2">
                    <SystemButton
                      variant="control"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="min-h-11 min-w-11 px-3"
                    >
                      CLOSE
                    </SystemButton>
                  </div>
                </div>

                <nav className="space-y-2">
                  {HOME_SIDEBAR_MENU_ITEMS.map((menuItem, index) => (
                    <SystemButton
                      key={menuItem}
                      variant="nav"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block min-h-11 w-full ${
                        index === 0
                          ? "bg-[var(--home-sidebar-nav-active-bg)] text-[var(--home-sidebar-nav-active-text)]"
                          : "text-[var(--home-sidebar-nav-idle-text)] hover:bg-[var(--home-sidebar-nav-hover-bg)] hover:text-[var(--home-sidebar-nav-hover-text)]"
                      }`}
                    >
                      {menuItem}
                    </SystemButton>
                  ))}
                </nav>
              </aside>
            </div>
          )}

          <div className="mx-3 mt-10 lg:hidden">
            <HomeSystemMobileScreen
              command={INTRO_TEXT.command}
              greetingPrefix={INTRO_TEXT.greetingPrefix}
              name={INTRO_TEXT.name}
              title={INTRO_TEXT.title}
              description={INTRO_TEXT.description}
              cta={INTRO_TEXT.cta}
            />
          </div>

          <DesktopActionBar className="absolute right-8 top-7 z-30 hidden items-center gap-2 lg:flex" />

          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }}
            className="absolute inset-0 hidden bg-[color:var(--home-graph-overlay-bg)]/30 lg:block"
          >
            <SystemGraph />
          </motion.div>

          <SystemStatusBar />
        </section>
      </div>
    </main>
  );
}