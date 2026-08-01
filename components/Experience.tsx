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
      // Tarjetas: entran con perspectiva, rotación y zoom, siguiendo el scroll
      gsap.utils.toArray<HTMLElement>("[data-exp-card]").forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 140,
            x: fromLeft ? -90 : 90,
            scale: 0.8,
            rotateY: fromLeft ? 16 : -16,
            rotateX: 8,
            transformOrigin: fromLeft ? "left center" : "right center",
          },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 45%",
              scrub: 0.8,
            },
          },
        );
      });

      // Líneas diagonales con parallax a distintas velocidades
      gsap.utils.toArray<HTMLElement>("[data-exp-line]").forEach((line, i) => {
        gsap.fromTo(
          line,
          { yPercent: 40 + i * 20, opacity: 0 },
          {
            yPercent: -60 - i * 25,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1 + i * 0.4,
            },
          },
        );
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={scope}
      className="relative mx-auto max-w-6xl px-6 py-28 overflow-visible"
    >
      {/* líneas diagonales decorativas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          data-exp-line
          className="absolute left-[-10%] top-[15%] w-[130%] h-px rotate-[-14deg] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
        />
        <div
          data-exp-line
          className="absolute left-[-10%] top-[45%] w-[130%] h-px rotate-[10deg] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        />
        <div
          data-exp-line
          className="absolute left-[-10%] top-[75%] w-[130%] h-px rotate-[-8deg] bg-gradient-to-r from-transparent via-teal-400/35 to-transparent"
        />
      </div>

      <Reveal>
        <h2 className="section-title mb-14">
          Work <span className="text-gradient">experience</span>
        </h2>
      </Reveal>

      <div className="space-y-16" style={{ perspective: "1200px" }}>
        {experience.map((job, i) => (
          <div
            key={job.role + job.company}
            data-exp-card
            className={`md:w-[72%] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
            style={{ visibility: "hidden" }}
          >
            <article className="card p-7">
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="font-mono text-xs text-accent pt-1">{job.period}</p>
                {job.logo && (
                  <span
                    className={`logo-box ${
                      job.logoBg === "light"
                        ? "bg-light-chip"
                        : job.logoBg === "dark"
                          ? "bg-dark-chip"
                          : ""
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={job.logo} alt={job.company} loading="lazy" />
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold">{job.role}</h3>
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
          </div>
        ))}
      </div>
    </section>
  );
}
