import Reveal from "./Reveal";
import { about } from "@/lib/data";

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "~50K", label: "ERP events processed monthly" },
  { value: "15+", label: "Legacy integration flows refactored" },
  { value: "0", label: "Security incidents since go-live" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <h2 className="section-title mb-10">
          About <span className="text-gradient">me</span>
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-[1.25fr_1fr] gap-10 items-start">
        <Reveal>
          <div className="space-y-5 text-muted leading-relaxed text-[1.02rem]">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="text-foreground">
              Currently working as an Applications &amp; Integrations Architect,
              designing and governing enterprise architectures on Oracle Cloud
              and Azure.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="card p-5 text-center h-full">
                <p className="text-3xl font-bold text-gradient">{s.value}</p>
                <p className="text-muted text-xs mt-2 leading-snug">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
