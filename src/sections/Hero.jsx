import { heroLinks } from "../data/snapshot";

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="hero-shell">
        <div className="hero-copy prose-width">
          <p className="section-label">Software engineering placement · UK · 2026</p>

          <h1 className="hero-headline mt-3">Nohim Hasitha</h1>

          <p className="text-lead mt-4">
            Level 5 Computer Science student at the University of Hertfordshire.
            I build web tooling in React, applications in Java and Python, AI
            work in grid worlds (84% on the final exam), and embedded firmware
            on Raspberry Pi Pico — with full UK work rights for a placement
            year.
          </p>

          <div className="btn-row mt-8">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a href={heroLinks.cv} className="btn btn-outline">
              Download CV
            </a>
            <a
              href={heroLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="hero-aside">
          <div
            className="profile-photo studio-photo"
            role="img"
            aria-label="Portrait of Nohim Hasitha"
          />
        </aside>
      </div>
    </section>
  );
}
