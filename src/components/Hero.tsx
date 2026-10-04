"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { socials } from "@/data/content";

export default function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const textX = useTransform(sx, (v) => v * 14);
  const textY = useTransform(sy, (v) => v * 10);
  const photoX = useTransform(sx, (v) => v * -22);
  const photoY = useTransform(sy, (v) => v * -16);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, mx, my]);

  return (
    <section ref={ref} id="top" className="relative bg-background bg-grid overflow-hidden md:flex md:min-h-screen md:items-center">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pt-24 pb-16 md:block md:py-24">
        {/* Metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="order-3 mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.3em] text-muted md:order-none md:mt-0 md:mb-8"
        >
          <span>BENGALURU / INDIA</span>
          <span>ECE</span>
          <span>2026</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          style={reduce ? undefined : { x: textX, y: textY }}
          className="relative z-10 order-1 leading-[0.85] md:order-none"
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="block font-mono text-xs md:text-sm tracking-[0.6em] text-muted"
          >
            VIPPALA
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="block text-[19vw] md:text-[10rem] font-bold tracking-tighter text-accent"
          >
            SRIKAR
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="block text-[13vw] md:text-[6.5rem] font-bold tracking-tight text-foreground"
          >
            REDDY
          </motion.span>
        </motion.h1>

        {/* Photo — overlaps typography */}
        <div className="order-2 relative z-20 -mt-6 w-36 self-end md:absolute md:right-0 md:top-1/2 md:mt-0 md:w-[52%] md:max-w-md md:-translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.figure style={reduce ? undefined : { x: photoX, y: photoY }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Vippala Srikar Reddy"
                width={1200}
                height={1200}
                className="aspect-square w-full object-cover grayscale contrast-110"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/30" />
            </motion.figure>
          </motion.div>
        </div>

        {/* Socials — last to appear */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="order-4 relative mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] tracking-[0.25em] text-muted md:absolute md:bottom-8 md:left-6 md:mt-0"
        >
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                {s.label.toUpperCase()}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
