import Icon from "../components/Icon";
import Paragraph from "../components/Paragraph";
import Layout from "./Layout";

const profile = {
  name: "Nohim Hasitha",
  title: "Computer Science Student | Software Engineering Placement Candidate",
  focus: "Embedded software validation, automation tools, AI, and engineering dashboards",
  education: "BSc Computer Science Level 5, University of Hertfordshire",
  tools: "MicroPython, Raspberry Pi Pico, ESP32/Arduino, GitHub, Vite, SQLite/PostgreSQL",
  projects: "Embedded Validation Dashboard; PCB-Based AI Agent; Obstacle-Avoidance Robot",
  location: "Colombo, Sri Lanka | Willing to relocate to the UK for a 9–12 month placement",
};

function formatLabel(key) {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

export default function About() {
  return (
    <Layout
      className="grid items-start gap-6 md:grid-cols-[1.05fr_0.95fr] md:gap-10"
      sectionName="About"
      id="about"
    >
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm sm:p-7">
        <Paragraph>
          I'm a passionate and curious problem-solver with a strong interest in technology, design, and innovation.
        </Paragraph>
        <Paragraph>
          I enjoy building solutions that are functional, intuitive, and engaging, with experience in web development, electronics, and system design.
        </Paragraph>
        <Paragraph>
          I focus on writing clean, efficient, and maintainable code while paying close attention to user experience and visual clarity.
        </Paragraph>
        <Paragraph>
          I enjoy tackling complex problems, debugging systems, and breaking challenges down into clear, logical steps.
        </Paragraph>
        <Paragraph>
          I'm motivated by continuous learning and regularly explore new tools, frameworks, and technologies to expand my skill set.
        </Paragraph>
      </div>

      <aside className="card-comp rounded-3xl p-5 sm:p-7">
        <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm font-bold text-[var(--accent)]">
          <Icon name="info" />
          Current status: {new Date().getFullYear()}
        </div>

        <dl className="divide-y divide-[var(--border)]">
          {Object.entries(profile).map(([key, value]) => (
            <div key={key} className="flex flex-col gap-1 py-3 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-3 sm:py-4">
              <dt className="text-xs font-extrabold uppercase tracking-wide text-[var(--muted)]">
                {formatLabel(key)}
              </dt>
              <dd className="text-sm font-medium leading-6 text-[var(--text)] break-words">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </aside>
    </Layout>
  );
}
