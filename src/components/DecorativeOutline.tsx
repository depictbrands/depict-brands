"use client";
import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

type Props = {
  size?: number;
  strokeColor?: string;
  strokeWidth?: number;
  rotateDeg?: number;
  duration?: number;
  delay?: number;
  className?: string;
  direction?: "ccw" | "cw"; // draw direction
};

export default function DecorativeOutline({
  size = 260,
  strokeColor = "var(--brand-gold)",
  strokeWidth = 4,
  rotateDeg = 15,
  duration = 2,
  delay = 0.2,
  className = "",
  direction = "ccw",
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const vb = size;
  const perimeter = 4 * size;

  // Path starts at top edge and goes CCW around the square; we rotate the whole SVG.
  const pathD = [
    `M ${vb/2} 0`,
    `L 0 0`,
    `L 0 ${vb}`,
    `L ${vb} ${vb}`,
    `L ${vb} 0`,
    "Z",
  ].join(" ");

  const common = {
    fill: "none" as const,
    stroke: strokeColor,
    strokeWidth,
    vectorEffect: "non-scaling-stroke" as const,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
  };

  const hiddenOffset = direction === "cw" ? -perimeter : perimeter;

  if (prefersReducedMotion) {
    return (
      <svg width={size} height={size} viewBox={`0 0 ${vb} ${vb}`} className={className}
           style={{ transform: `rotate(${rotateDeg}deg)` }} aria-hidden>
        <path d={pathD} {...common} />
      </svg>
    );
  }

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${vb} ${vb}`}
      className={className}
      style={{ transform: `rotate(${rotateDeg}deg)` }}
      aria-hidden
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.path
        d={pathD}
        {...common}
        strokeDasharray={perimeter}
        initial={{ strokeDashoffset: hiddenOffset }}
        whileInView={{ strokeDashoffset: [hiddenOffset, 0] }}
        transition={{
          duration,
          delay,
          ease: [0.65, 0, 0.35, 1],
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1.5
        }}
      />
    </motion.svg>
  );
}
