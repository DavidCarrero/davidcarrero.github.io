import Reveal from "./Reveal";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <h2 className="section-title mb-10">
          About <span className="text-gradient">me</span>
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <p className="card p-6 text-muted leading-relaxed h-full">{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
