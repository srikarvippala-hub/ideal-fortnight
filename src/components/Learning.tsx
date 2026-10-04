import { learningGroups } from "@/data/content";

export default function Learning() {
  return (
    <section id="now-learning" className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-muted">{"// 02 — STATUS PANEL"}</p>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold">CURRENTLY BUILDING MY STACK</h2>
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {learningGroups.map((group) => (
            <div key={group.status}>
              <p className="border-b border-accent/40 pb-3 font-mono text-xs tracking-[0.3em] text-accent">
                {group.status}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {group.items.map((item) => (
                  <li key={item} className="font-mono text-sm text-foreground/80">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
