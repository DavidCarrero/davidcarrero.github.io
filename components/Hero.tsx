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
          "[data-hero-photo]",
          { y: 40, autoAlpha: 0, scale: 0.95 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 1 },
          "-=0.7",
        )
        .fromTo(
          "[data-hero-cta]",
          { y: 16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 },
          "-=0.5",
        );

      gsap.to("[data-hero-photo]", {
        y: -12,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.6,
      });
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

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 w-full grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <p
            data-hero-sub
            className="text-muted mb-5 font-mono text-sm"
            style={{ visibility: "hidden" }}
          >
            Hi, I&apos;m {site.fullName}
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="block overflow-hidden">
              <span data-hero-line className="block" style={{ visibility: "hidden" }}>
                Software Architect
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                data-hero-line
                className="block text-gradient"
                style={{ visibility: "hidden" }}
              >
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
            {site.certs.map((c) =>
              c.link ? (
                <a
                  key={c.name}
                  data-hero-cta
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="chip hover:border-accent hover:text-foreground transition-colors"
                  style={{ visibility: "hidden" }}
                >
                  {c.name} ↗
                </a>
              ) : (
                <span
                  key={c.name}
                  data-hero-cta
                  className="chip"
                  style={{ visibility: "hidden" }}
                >
                  {c.name}
                </span>
              ),
            )}
          </div>
        </div>

        <div
          data-hero-photo
          className="relative hidden md:flex justify-center"
          style={{ visibility: "hidden" }}
        >
          <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-gradient-to-tr from-teal-400/40 to-blue-500/40 blur-2xl" />
          <div className="relative w-72 lg:w-80">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-teal-400 to-blue-500 opacity-60 blur-sm" />
            <div className="relative rounded-[2rem] overflow-hidden border border-line bg-gradient-to-b from-teal-400/15 via-blue-500/10 to-transparent">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.png"
                alt={site.fullName}
                className="w-full h-auto object-contain pt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
