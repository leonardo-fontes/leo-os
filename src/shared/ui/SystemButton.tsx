import { cn } from "@/shared/utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type SystemButtonVariant = "action" | "control" | "nav" | "cta";

const buttonVariants: Record<SystemButtonVariant, string> = {
  action:
    "rounded-lg border border-[#4f66a855] bg-[#0d1529]/70 font-mono text-xs tracking-[0.13em] text-[#a8bbdf] transition hover:border-[#7c3aed77] hover:text-[#c7b7ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-secondary/50",
  control:
    "rounded-lg border border-[#5d7ec133] bg-[#101a31] font-mono text-xs tracking-[0.08em] text-[#9fb7e5] transition hover:border-[#7c3aed77] hover:text-[#c7b7ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-secondary/50",
  nav: "rounded-lg px-3 py-2 font-mono text-left text-sm tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-secondary/50",
  cta: "rounded-lg bg-gradient-to-r from-system-primary via-system-secondary to-system-accent p-px shadow-cta animate-system-gradient-shift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-system-secondary/50",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: SystemButtonVariant;
  children: ReactNode;
};

export function Button({
  className,
  variant = "action",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  if (variant === "cta") {
    return (
      <button type={type} className={buttonVariants.cta} {...props}>
        <span
          className={cn(
            "block rounded-[7px] bg-[#0d1529]/86 font-mono text-xs tracking-[0.13em] text-[#c2d1ef] transition-colors",
            className,
          )}
        >
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
