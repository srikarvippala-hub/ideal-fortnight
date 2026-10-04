export default function Now() {
  return (
    <section id="now" className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-muted">{"// 07 — CURRENT STATUS"}</p>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold">NOW</h2>
        <pre className="mt-14 whitespace-pre-wrap font-mono text-sm md:text-base leading-8 text-muted">
{`ECE — RV College of Engineering
Semester III

Focused on:
AI Hardware · Embedded Systems · Digital Electronics
Computer Vision · Software · Design

Currently building:
Technical depth + portfolio + real-world projects`}
        </pre>
      </div>
    </section>
  );
}
