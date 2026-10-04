"use client";

import { motion } from "framer-motion";

export default function Positioning() {
  return (
    <section className="border-y border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-accent"
        >
          ECE STUDENT · ENGINEER · DESIGNER · BUILDER
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-2xl md:text-4xl leading-snug"
        >
          Electronics & Communication Engineering student exploring AI hardware,
          embedded systems, intelligent systems, software and visual design.
        </motion.p>
      </div>
    </section>
  );
}
