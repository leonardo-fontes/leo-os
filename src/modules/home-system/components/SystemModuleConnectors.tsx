import { motion } from "framer-motion";
import {
  CONNECTOR_BASE_LINE_TRANSITION,
  CONNECTOR_DASHED_LINE_TRANSITION,
  CONNECTOR_DOT_TRANSITION,
  CONNECTOR_LINE_GLOW,
} from "../animations/systemModuleNetwork.animations";
import {
  CONNECTOR_DOT_COLOR,
  CONNECTOR_GRADIENT_STOPS,
  MODULE_CONNECTOR_OFFSET_BY_ID,
  SYSTEM_MODULES,
} from "../data/systemModuleNetwork.data";
import type { Point } from "../types";

type SystemModuleConnectorsProps = {
  center: Point;
};

export function SystemModuleConnectors({ center }: SystemModuleConnectorsProps) {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-65 md:opacity-100"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="connectorGradient" x1="50%" y1="50%" x2="100%" y2="0%">
          {CONNECTOR_GRADIENT_STOPS.map((gradientStop) => (
            <stop
              key={gradientStop.offset}
              offset={gradientStop.offset}
              stopColor={gradientStop.color}
            />
          ))}
        </linearGradient>
      </defs>

      {SYSTEM_MODULES.map((module, index) => {
        const connectorTarget = {
          x: module.x + MODULE_CONNECTOR_OFFSET_BY_ID[module.id].x,
          y: module.y + MODULE_CONNECTOR_OFFSET_BY_ID[module.id].y,
        };

        return (
          <g key={module.id}>
            <motion.line
              x1={center.x}
              y1={center.y}
              x2={connectorTarget.x}
              y2={connectorTarget.y}
              stroke="url(#connectorGradient)"
              strokeWidth={0.18}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.34, 0.78, 0.46] }}
              transition={CONNECTOR_BASE_LINE_TRANSITION(index)}
              style={{ filter: CONNECTOR_LINE_GLOW }}
            />

            <motion.line
              x1={center.x}
              y1={center.y}
              x2={connectorTarget.x}
              y2={connectorTarget.y}
              stroke="url(#connectorGradient)"
              strokeWidth={0.1}
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.12, 0.45, 0.16] }}
              transition={CONNECTOR_DASHED_LINE_TRANSITION(index)}
              style={{ strokeDasharray: 1.8, strokeDashoffset: 0 }}
            />

            <motion.circle
              r="0.24"
              fill={CONNECTOR_DOT_COLOR}
              initial={{ opacity: 0, cx: center.x, cy: center.y }}
              animate={{
                opacity: [0, 0.85, 0.85, 0],
                cx: [
                  center.x,
                  center.x + (connectorTarget.x - center.x) * 0.33,
                  center.x + (connectorTarget.x - center.x) * 0.66,
                  connectorTarget.x,
                ],
                cy: [
                  center.y,
                  center.y + (connectorTarget.y - center.y) * 0.33,
                  center.y + (connectorTarget.y - center.y) * 0.66,
                  connectorTarget.y,
                ],
              }}
              transition={CONNECTOR_DOT_TRANSITION(index)}
            />
          </g>
        );
      })}
    </svg>
  );
}
