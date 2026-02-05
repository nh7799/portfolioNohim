import Carousal from "../components/Carousal";
import Layout from "./Layout";
import { projectCards } from "../data/projects";
import Paragraph from "../components/Paragraph";

export default function Projects() {
  return (
    <Layout id={"Projects"} sectionName={"Projects"}>
      <div className="flex justify-center lg:justify-center">
        <Carousal data={projectCards}></Carousal>
      </div>
      <div>
        <Paragraph>
          I have built a variety of projects that showcase my skills in frontend
          and full-stack development, from interactive web applications to
          responsive, user-friendly interfaces. Each project demonstrates my
          ability to implement modern technologies such as React, Tailwind CSS,
          JavaScript (ES6+), REST APIs, and JSON, while focusing on performance,
          accessibility, and cross-browser compatibility. I enjoy solving
          real-world problems through code, applying algorithmic thinking, data
          structures, and clean architecture, and continuously improving my
          projects based on user feedback and best practices. These projects
          reflect my creativity, attention to detail, and dedication to building
          high-quality, functional, and visually appealing web solutions.
        </Paragraph>
      </div>
    </Layout>
  );
}
