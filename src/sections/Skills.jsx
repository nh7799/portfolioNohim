import Section from "../components/Section";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Technical"
      title="Skills"
      intro="during the course of my studies, I have gained a wide range of skills in the field of computer science. apart from university work i have also worked on a number of personal projects to strengthen my skills and knowledge. these are the summary of my skills. categorised by criteria"
    >
      <div className="skills-grid">
        {skillGroups.map(({ title, items }) => (
          <div key={title} className="skill-card panel p-5">
            <h3>{title}</h3>
            <ul className="project-tags">
              {items.map((skill) => (
                <li key={skill}>
                  <span className="tag">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
