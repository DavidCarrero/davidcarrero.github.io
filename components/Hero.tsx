"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { site } from "@/lib/data";

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-line]",
        { yPercent: 110, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 1, stagger: 0.12, delay: 0.35 },
      )
        .fromTo(
          "[data-hero-sub]",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
          "-=0.4",
        )
        .fromTo(
          "[data-hero-cta]",
          { y: 16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 },
          "-=0.4",
        );

      gsap.to("[data-orb='1']", {
        x: 60,
        y: -40,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-orb='2']", {
        x: -50,
        y: 50,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={scope}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        data-orb="1"
        className="glow-orb w-[420px] h-[420px] bg-teal-500/60 -top-20 -left-24"
      />
      <div
        data-orb="2"
        className="glow-orb w-[380px] h-[380px] bg-blue-500/50 bottom-0 right-0"
      />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 w-full">
        <p data-hero-sub className="text-muted mb-5 font-mono text-sm" style={{ visibility: "hidden" }}>
          Hi, I&apos;m {site.fullName}
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
          <span className="block overflow-hidden">
            <span data-hero-line className="block" style={{ visibility: "hidden" }}>
              Software Architect
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero-line className="block text-gradient" style={{ visibility: "hidden" }}>
              &amp; Full Stack Developer
            </span>
          </span>
        </h1>

        <p
          data-hero-sub
          className="mt-7 max-w-2xl text-lg text-muted leading-relaxed"
          style={{ visibility: "hidden" }}
        >
          {site.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            data-hero-cta
            href="#projects"
            className="rounded-full bg-accent text-background font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
            style={{ visibility: "hidden" }}
          >
            View projects
          </a>
          <a
            data-hero-cta
            href="#contact"
            className="rounded-full border border-line px-6 py-3 text-foreground hover:border-accent transition-colors"
            style={{ visibility: "hidden" }}
          >
            Get in touch
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {site.certs.map((c) => (
            <span key={c} data-hero-cta className="chip" style={{ visibility: "hidden" }}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
