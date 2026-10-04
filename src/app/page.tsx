import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Skills from "@/components/Skills";
import Learning from "@/components/Learning";
import Work from "@/components/Work";
import Research from "@/components/Research";
import Timeline from "@/components/Timeline";
import Now from "@/components/Now";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Positioning />
      <Skills />
      <Learning />
      <Work />
      <Research />
      <Timeline />
      <Now />
      <Contact />
      <footer className="border-t border-white/10 px-6 py-6 text-center font-mono text-[10px] tracking-widest text-muted">
        WITH LOVE, MADE IN BENGALURU.
      </footer>
    </main>
  );
}
