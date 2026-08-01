"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";
import TechChip from "./TechChip";
import { projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

type Project = (typeof projects)[number] & { logo?: string };

export default function Projects() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 110,
            scale: 0.82,
            rotateX: 16,
            rotateY: i % 2 === 0 ? -8 : 8,
            transformOrigin: "center bottom",
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "top 55%",
              scrub: 0.8,
            },
          },
        );
      });
    }, scope);
    return () => ctx.revert();
  }, []);

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

      <div
        ref={scope}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ perspective: "1100px" }}
      >
        {(projects as Project[]).map((p) => {
          const inner = (
            <article className="card p-6 h-full flex flex-col">
              {p.logo && (
                <span className="logo-box bg-light-chip mb-4 !w-full !h-14">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt={p.title} loading="lazy" />
                </span>
              )}
              <h3 className="text-lg font-semibold mb-3">
                {p.title}
                {p.link && <span className="text-accent ml-2 text-sm">↗</span>}
              </h3>
              <p className="text-muted text-sm leading-relaxed grow">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <TechChip key={s} name={s} />
                ))}
              </div>
            </article>
          );
          return (
            <div
              key={p.title}
              data-project-card
              className="h-full"
              style={{ visibility: "hidden" }}
            >
              {p.link ? (
                <a href={p.link} target="_blank" rel="noreferrer" className="block h-full">
                  {inner}
                </a>
              ) : (
                inner
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
