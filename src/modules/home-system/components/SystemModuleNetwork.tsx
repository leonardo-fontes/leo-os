import { SystemModuleCard } from "./SystemModuleCard";
import { SystemModuleConnectors } from "./SystemModuleConnectors";
import { SYSTEM_MODULES } from "../data/systemModuleNetwork.data";
import type { Point } from "../types";

type SystemModuleNetworkProps = {
  center: Point;
};

export function SystemModuleNetwork({ center }: SystemModuleNetworkProps) {
  return (
    <>
      <SystemModuleConnectors center={center} />
      {SYSTEM_MODULES.map((module, index) => (
        <SystemModuleCard key={module.id} module={module} index={index} />
      ))}
    </>
  );
}
