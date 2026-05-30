import type { ReactNode } from "react";
import { cn } from "@/shared/utils/cn";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export function Panel({ children, className }: PanelProps) {
  return <div className={cn("rounded-2xl", className)}>{children}</div>;
}
