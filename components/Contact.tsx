import Reveal from "./Reveal";
import { site } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <div className="card p-10 md:p-16 text-center relative overflow-hidden">
          <div className="glow-orb w-[320px] h-[320px] bg-teal-500/50 -top-32 left-1/2 -translate-x-1/2" />
          <h2 className="section-title mb-4">
            Let&apos;s build something <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-9">
            Interested in my work or want to discuss architecture, backend, or
            cloud? Reach out — I&apos;d love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-accent text-background font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3 hover:border-accent transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3 hover:border-accent transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </Reveal>
      <footer className="text-center text-muted text-sm mt-16">
        © {new Date().getFullYear()} {site.fullName}. Built with Next.js, GSAP
        &amp; Lenis.
      </footer>
    </section>
  );
}
