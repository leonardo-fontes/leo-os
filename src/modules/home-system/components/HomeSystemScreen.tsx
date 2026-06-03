import { SystemButton } from "@/shared/ui/SystemButton";
import { ThemeToggle } from "@/shared/ui/ThemeToggle";
import { ExperienceSystemScreen } from "@/modules/experience-system";
import { ProjectsSystemScreen } from "@/modules/projects-system";
import { motion } from "framer-motion";
import { INTRO_TEXT } from "../data/systemGraph.constants";
import { HomeSystemMobileScreen } from "./HomeSystemMobileScreen";
import { SystemGraph } from "./SystemGraph";
import { SystemSidebar } from "./SystemSidebar";
import { SystemStatusBar } from "./SystemStatusBar";

function MobileHeader() {
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
      <a href="/cv-leonardo-fontes.pdf" download="Leonardo-Fontes-CV.pdf">
        <SystemButton
          variant="action"
          className="home-download-cv-button px-4 py-2"
        >
          DOWNLOAD CV
        </SystemButton>
      </a>
    </div>
  );
}

function SectionAnchor({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="w-full max-w-full overflow-hidden scroll-mt-16"
      aria-label={id}
    />
  );
}

export function HomeSystemScreen() {
  return (
    <main className="home-surface relative min-h-screen w-full overflow-x-hidden text-system-text lg:pl-64">
      <SystemSidebar />

      <div className="relative z-10 min-w-0 max-w-full overflow-x-hidden">
        <MobileHeader />

        <section
          id="home"
          className="relative min-h-screen w-full max-w-full overflow-hidden scroll-mt-16 pb-6 lg:pb-0"
        >
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
        </section>

        <ExperienceSystemScreen />
        <ProjectsSystemScreen />
        <SectionAnchor id="skills" />
        <SectionAnchor id="contact" />

        <SystemStatusBar />
      </div>
    </main>
  );
}
