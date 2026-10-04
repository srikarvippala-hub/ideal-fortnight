"use client";

import { useEffect, useRef } from "react";

export default function CursorSignal() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    dot.style.opacity = "1";
    ringEl.style.opacity = "1";

    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };

    const move = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      dot.style.transform = `translate(${pos.x - 4}px, ${pos.y - 4}px)`;
    };

    let raf: number;
    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.12;
      ring.y += (pos.y - ring.y) * 0.12;
      ringEl.style.transform = `translate(${ring.x - 20}px, ${ring.y - 20}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      dot.style.opacity = "0";
      ringEl.style.opacity = "0";
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 rounded-full bg-accent mix-blend-difference opacity-0 transition-opacity duration-300"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[99] h-10 w-10 rounded-full border border-accent/50 opacity-0 transition-opacity duration-300"
      />
    </>
  );
}
