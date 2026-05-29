import Carousal from "../components/Carousal";
import Paragraph from "../components/Paragraph";
import { projectCards } from "../data/projects";
import Layout from "./Layout";

export default function Projects() {
  return (
    <Layout id="projects" sectionName="Projects">
      <div className="mx-auto w-full max-w-6xl">
        <Carousal data={projectCards} />
      </div>
      <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:mt-8 sm:p-7">
        <Paragraph>
          I have built a variety of projects that showcase my skills in frontend and full-stack development, from interactive web applications to responsive, user-friendly interfaces. Each project demonstrates my ability to implement modern technologies such as React, Tailwind CSS, JavaScript (ES6+), REST APIs, and JSON, while focusing on performance, accessibility, and cross-browser compatibility. I enjoy solving real-world problems through code, applying algorithmic thinking, data structures, and clean architecture, and continuously improving my projects based on user feedback and best practices. These projects reflect my creativity, attention to detail, and dedication to building high-quality, functional, and visually appealing web solutions.
        </Paragraph>
      </div>
    </Layout>
  );
}
