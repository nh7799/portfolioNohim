import { heroLinks } from "../data/snapshot";

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="prose-width min-w-0 flex-1">
          <p className="section-label">Software engineering placement · UK · 2026</p>

          <h1 className="hero-headline mt-3">
            Nohim Hasitha
          </h1>

          <p className="text-lead mt-4">
            Level 5 Computer Science student at the University of Hertfordshire.
            I build web tooling in React, applications in Java and Python, and
            firmware on Raspberry Pi Pico — with full UK work rights for a
            placement year.
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

        <div
          className="profile-photo shrink-0 md:mt-2"
          role="img"
          aria-label="Portrait of Nohim Hasitha"
        />
      </div>
    </section>
  );
}
