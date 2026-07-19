"use client";

import { createContext, useContext, useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

const ParallaxContext = createContext<{
  px: MotionValue<number>;
  py: MotionValue<number>;
} | null>(null);

/**
 * Pointer-driven parallax group. Children get wrapped in <ParallaxLayer>
 * with a depth; deeper layers travel further. Springs keep it liquid.
 */
export function ParallaxGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <ParallaxContext.Provider value={{ px, py }}>
      <div
        ref={ref}
        className={className}
        onPointerMove={onMove}
        onPointerLeave={() => {
          px.set(0);
          py.set(0);
        }}
      >
        {children}
      </div>
    </ParallaxContext.Provider>
  );
}

export function ParallaxLayer({
  depth = 12,
  children,
  className,
}: {
  depth?: number;
  children: ReactNode;
  className?: string;
}) {
  const ctx = useContext(ParallaxContext);
  const zero = useMotionValue(0);
  const sx = useSpring(ctx?.px ?? zero, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(ctx?.py ?? zero, { stiffness: 60, damping: 18, mass: 0.6 });
  const x = useTransform(sx, (v) => v * -depth);
  const y = useTransform(sy, (v) => v * -depth);

  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}
