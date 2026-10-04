import { researchInterests } from "@/data/content";

export default function Research() {
  return (
    <section id="research" className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-muted">{"// 05 — RESEARCH / THINKING"}</p>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold">AREAS OF INQUIRY</h2>
        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {researchInterests.map((r) => (
            <li key={r} className="border border-white/10 p-6 text-lg transition-colors hover:border-accent hover:text-accent">
              {r}
            </li>
          ))}
        </ul>
        <p className="mt-8 font-mono text-xs text-muted tracking-widest">
          RESEARCH PAPERS · TECHNICAL EXPERIMENTS · RESEARCH NOTES — TO BE ADDED
        </p>
      </div>
    </section>
  );
}
