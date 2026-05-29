import BackgroundBox from "../components/BackgroundBox";
import Paragraph from "../components/Paragraph";
import { skills } from "../data/skills";
import Layout from "./Layout";

export default function Skills() {
  return (
    <Layout id="skills" sectionName="Skills" className="space-y-8">
      <div className="card-comp rounded-3xl p-5 sm:p-7">
        <div className="flex flex-wrap gap-3">
          {skills.map((item) => (
            <BackgroundBox key={item} backgroundColor="bg-[var(--surface-strong)]" text={item} className="skills-box" />
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7">
          <Paragraph>
            I am a versatile web developer with strong expertise in JavaScript (ES6+), HTML5, CSS3, and responsive design, complemented by modern frameworks like Tailwind CSS and React. I specialize in component-based architecture, state management, and building user-centric interfaces, while integrating REST APIs and handling JSON data efficiently. Proficient with Git & GitHub version control, I ensure collaborative workflows are smooth, maintainable, and well-documented.
          </Paragraph>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7">
          <Paragraph>
            I bring a keen eye for performance optimization, accessibility (a11y), and cross-browser compatibility, coupled with basic backend knowledge to create full-stack-friendly solutions. Beyond technical skills, I am highly effective in problem-solving, algorithmic thinking, and data structures fundamentals, and thrive in collaborative environments through clear communication, teamwork, and adaptability. My approach combines critical thinking, attention to detail, creativity, and a strong work ethic, allowing me to consistently deliver solutions that are both functional and innovative.
          </Paragraph>
        </div>
      </div>
    </Layout>
  );
}
