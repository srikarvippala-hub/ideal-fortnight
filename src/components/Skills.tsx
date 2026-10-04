"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, programmingSkills, tools } from "@/data/content";

export default function Skills() {
  const [active, setActive] = useState(0);
  const category = skillCategories[active];

  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-muted">{"// 01 — SKILL ECOSYSTEM"}</p>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold">WHAT I WORK WITH</h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
          <div className="flex flex-col items-center">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-accent/40">
              <div className="absolute inset-3 rounded-full border border-white/10" />
              <span className="font-mono text-sm tracking-[0.3em]">SRIKAR</span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {skillCategories.map((c, i) => (
                <button
                  key={c.key}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`border px-3 py-1.5 font-mono text-[11px] tracking-widest transition-colors ${
                    i === active ? "border-accent bg-accent text-black" : "border-white/20 text-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.ul
                key={category.key}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((s) => (
                  <li key={s} className="border border-white/15 px-4 py-2 text-sm md:text-base hover:border-accent hover:text-accent transition-colors">
                    {s}
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>

            <div className="mt-14">
              <p className="font-mono text-xs tracking-[0.3em] text-muted">PROGRAMMING</p>
              <p className="mt-3 text-lg">{programmingSkills.join("  ·  ")}</p>
              <p className="mt-8 font-mono text-xs tracking-[0.3em] text-muted">TOOLS</p>
              <p className="mt-3 text-lg">{tools.join("  ·  ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
