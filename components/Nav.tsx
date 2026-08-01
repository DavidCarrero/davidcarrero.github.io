"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { site } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { y: -60, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
    );
  }, []);

  return (
    <header
      ref={ref}
      className="nav-blur fixed top-0 inset-x-0 z-50"
      style={{ visibility: "hidden" }}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">
          <span className="text-gradient">DC</span>
          <span className="text-muted ml-2 hidden sm:inline text-sm">
            {site.name}
          </span>
        </a>
        <ul className="flex items-center gap-5 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href} className="hidden md:block">
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="chip hover:border-accent hover:text-foreground transition-colors"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
