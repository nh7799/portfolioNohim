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
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map(({ title, items }) => (
          <div key={title} className="panel p-5">
            <h3 className="text-sm font-semibold text-text">{title}</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
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
