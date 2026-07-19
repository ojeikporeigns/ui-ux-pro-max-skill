"use client";

import { useEffect, useRef } from "react";

/**
 * Cinematic hero backdrop: a glowing price path that draws itself across the
 * viewport (the "cable"), over a faint grid with drifting particles.
 * Hand-written 2D canvas — no WebGL payload. Pauses off-tab, honours
 * prefers-reduced-motion by rendering a single static frame.
 */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = true;
    let w = 0;
    let h = 0;
    let dpr = 1;

    /* Deterministic-ish price path: smoothed random walk with momentum. */
    const POINTS = 180;
    const path: number[] = [];
    let momentum = 0;
    let level = 0.52;
    const seedPoint = () => {
      momentum = momentum * 0.92 + (Math.random() - 0.485) * 0.016;
      level = Math.min(0.8, Math.max(0.2, level + momentum));
      return level;
    };
    for (let i = 0; i < POINTS; i++) path.push(seedPoint());

    type Particle = { x: number; y: number; r: number; vx: number; vy: number; a: number };
    let particles: Particle[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: Math.min(46, Math.floor(w / 30)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -(Math.random() * 0.16 + 0.03),
        a: Math.random() * 0.35 + 0.08,
      }));
    };

    const yAt = (v: number) => h * 0.18 + (1 - v) * h * 0.62;

    let progress = 0; // 0→1 draw-on
    let tick = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      /* Grid */
      ctx.strokeStyle = "rgba(255,255,255,0.035)";
      ctx.lineWidth = 1;
      const gap = Math.max(64, w / 16);
      for (let x = gap; x < w; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = gap; y < h; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      /* Particles */
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) {
          p.y = h + 4;
          p.x = Math.random() * w;
        }
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;
        ctx.beginPath();
        ctx.fillStyle = `rgba(127,167,255,${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      /* Price path */
      const visible = Math.max(2, Math.floor(POINTS * progress));
      const step = w / (POINTS - 1);

      /* Area fill under the line */
      const grad = ctx.createLinearGradient(0, h * 0.2, 0, h);
      grad.addColorStop(0, "rgba(78,128,238,0.14)");
      grad.addColorStop(1, "rgba(78,128,238,0)");
      ctx.beginPath();
      ctx.moveTo(0, yAt(path[0]));
      for (let i = 1; i < visible; i++) ctx.lineTo(i * step, yAt(path[i]));
      ctx.lineTo((visible - 1) * step, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      /* Glow pass then core line */
      for (const pass of [
        { width: 6, color: "rgba(78,128,238,0.16)" },
        { width: 2, color: "rgba(127,167,255,0.9)" },
      ]) {
        ctx.beginPath();
        ctx.moveTo(0, yAt(path[0]));
        for (let i = 1; i < visible; i++) ctx.lineTo(i * step, yAt(path[i]));
        ctx.strokeStyle = pass.color;
        ctx.lineWidth = pass.width;
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      /* Pulse at the live end */
      if (visible > 2) {
        const lx = (visible - 1) * step;
        const ly = yAt(path[visible - 1]);
        const pulse = 3 + Math.sin(tick / 14) * 1.4;
        ctx.beginPath();
        ctx.fillStyle = "rgba(127,167,255,0.22)";
        ctx.arc(lx, ly, pulse * 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#a9c4ff";
        ctx.arc(lx, ly, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const frame = () => {
      if (!running) return;
      tick++;
      if (progress < 1) progress = Math.min(1, progress + 0.008);
      else if (tick % 9 === 0) {
        path.shift();
        path.push(seedPoint());
      }
      draw();
      raf = requestAnimationFrame(frame);
    };

    resize();
    if (reduced) {
      progress = 1;
      draw();
    } else {
      raf = requestAnimationFrame(frame);
    }

    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running && !reduced) raf = requestAnimationFrame(frame);
    };
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    ro.observe(canvas);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      running = false;
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
