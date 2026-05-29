import Section from "../components/Section";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Technical"
      title="Skills"
      intro="Grouped by area. Depth comes from projects and coursework — see GitHub and CV for detail."
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
