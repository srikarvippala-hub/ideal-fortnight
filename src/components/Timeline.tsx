import { timeline } from "@/data/content";

export default function Timeline() {
  return (
    <section id="experience" className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-muted">{"// 06 — EXPERIENCE / ACTIVITIES"}</p>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold">TRAJECTORY</h2>
        <ol className="mt-14 max-w-3xl border-l border-white/15 pl-8">
          {timeline.map((t) => (
            <li key={t.title} className="relative pb-10">
              <span className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-accent" />
              <h3 className="text-xl">{t.title}</h3>
              <p className="mt-1 font-mono text-xs tracking-widest text-muted">{t.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
