import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { projectCards } from "../data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      label="Work"
      title="Selected projects"
      intro="Each entry states the problem, what I shipped, how to verify it, and why it is relevant to engineering teams."
    >
      <div>
        {projectCards.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
}
