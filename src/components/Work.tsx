"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/content";

export default function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="work" className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-muted">{"// 03 — SELECTED WORK"}</p>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold">PROJECTS</h2>

        <div className="mt-14 divide-y divide-white/10">
          {projects.map((p, i) => (
            <div key={p.title}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-baseline justify-between py-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className={`text-xl md:text-3xl transition-colors ${openIndex === i ? "text-accent" : ""} ${p.flagship ? "text-2xl md:text-4xl font-bold" : ""}`}>
                  {p.title}
                  {p.flagship && <span className="ml-3 align-middle border border-accent px-2 py-0.5 font-mono text-[10px] tracking-widest text-accent">FLAGSHIP</span>}
                </span>
                <span className="font-mono text-xs text-muted">{openIndex === i ? "—" : "+"}</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8">
                      <p className="text-muted">{p.subtitle}</p>
                      {p.tech.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <span key={t} className="border border-accent/40 px-3 py-1 font-mono text-[10px] tracking-widest text-accent">{t}</span>
                          ))}
                        </div>
                      )}
                      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 font-mono text-xs leading-relaxed text-muted">
                        <p><span className="text-accent">PROBLEM — </span>{p.problem}</p>
                        <p><span className="text-accent">APPROACH — </span>{p.approach}</p>
                        <p><span className="text-accent">ARCHITECTURE — </span>{p.architecture}</p>
                        <p><span className="text-accent">RESULT — </span>{p.result}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
