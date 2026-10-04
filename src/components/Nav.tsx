"use client";

import { useState } from "react";

const links = [
  ["SKILLS", "#skills"],
  ["NOW", "#now"],
  ["WORK", "#work"],
  ["RESEARCH", "#research"],
  ["TIMELINE", "#experience"],
  ["CONTACT", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-mono text-xs tracking-[0.3em] text-white">
          SRK/RED
        </a>
        <button className="md:hidden font-mono text-xs text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "CLOSE" : "MENU"}
        </button>
        <ul className={`${open ? "flex" : "hidden"} absolute top-full right-6 flex-col gap-4 bg-black/80 p-4 md:static md:flex md:flex-row md:bg-transparent md:p-0 md:gap-6`}>
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="font-mono text-[11px] tracking-widest text-white/70 hover:text-accent transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
