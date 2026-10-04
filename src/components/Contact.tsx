import { socials } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-muted">{"// 08 — CONTACT"}</p>
        <h2 className="mt-6 text-5xl md:text-8xl font-bold tracking-tight">
          LET&apos;S <span className="text-accent">CONNECT.</span>
        </h2>
        <ul className="mt-14 flex flex-col gap-4">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} className="text-2xl md:text-4xl transition-colors hover:text-accent">
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-16 font-mono text-xs tracking-[0.3em] text-muted">BENGALURU, INDIA</p>
      </div>
    </section>
  );
}
