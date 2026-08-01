import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <h2 className="section-title mb-4">
          Featured <span className="text-gradient">projects</span>
        </h2>
        <p className="text-muted mb-12 max-w-2xl">
          A selection of the systems I have designed and built — from
          event-driven integration platforms to production APIs.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => {
          const inner = (
            <article className="card p-6 h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-3">
                {p.title}
                {p.link && <span className="text-accent ml-2 text-sm">↗</span>}
              </h3>
              <p className="text-muted text-sm leading-relaxed grow">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          );
          return (
            <Reveal key={p.title} delay={(i % 3) * 0.1} className="h-full">
              {p.link ? (
                <a href={p.link} target="_blank" rel="noreferrer" className="block h-full">
                  {inner}
                </a>
              ) : (
                inner
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
