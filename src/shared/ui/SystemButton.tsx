import { cn } from "@/shared/utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type SystemButtonVariant = "action" | "control" | "nav" | "cta";

const buttonVariants: Record<SystemButtonVariant, string> = {
  action:
    "rounded-lg border border-[var(--home-action-border)] bg-[var(--home-action-bg)] font-mono text-xs tracking-[0.13em] text-[var(--home-action-text)] transition hover:border-[var(--home-action-hover-border)] hover:text-[var(--home-action-hover-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-secondary/50",
  control:
    "font-mono text-xs tracking-[0.08em] text-[#9fb7e5] transition hover:border-[#7c3aed77] hover:text-[#c7b7ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-secondary/50",
  nav: "rounded-lg px-3 py-2 font-mono text-left text-sm tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-secondary/50",
  cta: "rounded-lg border border-[var(--home-action-border)] bg-[var(--color-purple-600)] p-px shadow-cta animate-system-gradient-shift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-secondary/50",
};

type SystemButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: SystemButtonVariant;
  children: ReactNode;
};

export function SystemButton({
  className,
  variant = "action",
  type = "button",
  children,
  ...props
}: SystemButtonProps) {
  if (variant === "cta") {
    return (
      <button
        type={type}
        className={cn(buttonVariants.cta, className)}
        {...props}
      >
        <span className="block rounded-[7px] bg-[#0d1529]/86 p-4 font-mono text-xs tracking-[0.13em] text-[#c2d1ef] transition-colors">
          {children}
        </span>
      </button>
    );
  }

  return (
    <button
      type={type}
      className={cn(buttonVariants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { SystemButton as Button };
