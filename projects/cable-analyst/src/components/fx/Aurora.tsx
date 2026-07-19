"use client";

import { motion } from "motion/react";

/**
 * Ambient light field: two or three soft blobs drifting on transform-only
 * animation. Sits behind content inside any `relative overflow-hidden` parent.
 */
export default function Aurora({ dim = false }: { dim?: boolean }) {
  const blobs = [
    {
      className:
        "absolute -top-40 left-[8%] h-[34rem] w-[34rem] rounded-full bg-blue/14 blur-[110px]",
      animate: { x: [0, 70, -30, 0], y: [0, 40, 10, 0] },
      duration: 26,
    },
    {
      className:
        "absolute top-[30%] right-[4%] h-[28rem] w-[28rem] rounded-full bg-[#233a72]/38 blur-[110px]",
      animate: { x: [0, -60, 20, 0], y: [0, -30, 30, 0] },
      duration: 32,
    },
    {
      className:
        "absolute -bottom-48 left-[36%] h-[30rem] w-[30rem] rounded-full bg-gold/8 blur-[120px]",
      animate: { x: [0, 50, -40, 0], y: [0, -20, 20, 0] },
      duration: 38,
    },
  ];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${dim ? "opacity-60" : ""}`}
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={b.className}
          animate={b.animate}
          transition={{ duration: b.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
