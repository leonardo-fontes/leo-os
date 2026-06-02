import { useTheme } from "@/shared/theme/ThemeProvider";
import { SystemButton } from "@/shared/ui/SystemButton";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const ariaLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <SystemButton
      variant="control"
      type="button"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`home-theme-toggle rounded-lg border border-[var(--home-action-border)] bg-[var(--home-action-bg)] ${className ?? ""}`.trim()}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2.5v2.2M12 19.3v2.2M4.8 4.8l1.6 1.6M17.6 17.6l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.8 19.2l1.6-1.6M17.6 6.4l1.6-1.6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg className="home-theme-toggle-moon" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
          <path
            d="M20.7 14.2A8.5 8.5 0 1 1 9.8 3.3a7 7 0 1 0 10.9 10.9Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </SystemButton>
  );
}
