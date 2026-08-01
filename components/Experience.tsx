"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-timeline]",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        },
      );
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <h2 className="section-title mb-14">
          Work <span className="text-gradient">experience</span>
        </h2>
      </Reveal>

      <div ref={scope} className="relative">
        <div
          data-timeline
          className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400 to-blue-500"
        />
        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal
              key={job.role + job.company}
              className={`relative md:w-[calc(50%-2.5rem)] ${
                i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              } pl-8 md:pl-0`}
            >
              <span
                className={`absolute top-2 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-teal-400/20 left-0 md:left-auto ${
                  i % 2 === 0 ? "md:-right-[calc(2.5rem+7px)]" : "md:-left-[calc(2.5rem+7px)]"
                }`}
              />
              <article className="card p-6">
                <p className="font-mono text-xs text-accent mb-2">{job.period}</p>
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <p className="text-muted text-sm mb-4">{job.company}</p>
                <ul className="space-y-2 text-sm text-muted leading-relaxed">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-accent mt-1 shrink-0">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
