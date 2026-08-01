import Reveal from "./Reveal";
import TechChip from "./TechChip";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <h2 className="section-title mb-12">
          Tech <span className="text-gradient">stack</span>
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 3) * 0.1}>
            <div className="card p-6 h-full">
              <h3 className="font-mono text-sm text-accent mb-4">{g.group}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <TechChip key={s} name={s} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
