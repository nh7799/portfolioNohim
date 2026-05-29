import Section from "../components/Section";

export default function About() {
  return (
    <Section
      id="about"
      label="Background"
      title="About"
      intro="Short context on how I work — details are in projects and CV."
    >
      <div className="prose-width space-y-4 text-[0.9375rem] leading-relaxed text-text-secondary">
        <p>
          I am in the second year of a BSc in Computer Science at the
          University of Hertfordshire, aiming for a software engineering
          placement starting September 2026. My work spans React front ends,
          Java and Python coursework, and embedded projects on Raspberry Pi
          Pico.
        </p>
        <p>
          I tend to break problems into testable steps: reproduce the issue,
          isolate the cause, fix it, and document what changed. That applies
          whether I am debugging SPI timing on a display driver or structuring
          components in a React app.
        </p>
        <p>
          I am based in Sri Lanka and open to relocating to the UK for a
          9–12 month placement. I hold full right to work in the UK for a
          placement year.
        </p>
      </div>
    </Section>
  );
}
