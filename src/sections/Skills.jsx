import Layout from "./Layout";
import { skills } from "../data/skills";
import BackgroundBox from "../components/BackgroundBox";
import Game from "../components/Game";
import Paragraph from "../components/Paragraph";
import { useEffect, useState } from "react";

const num = 100;
let direction = true;
export default function Skills() {
  const [pos, setPos] = useState(0);
  
  useEffect(() => {
    const intervl = setInterval(() => {
      setPos(prev => prev === window.innerWidth ? -window.innerWidth: prev + 1);
    }, 140);

  }, []);

  return (
    <>
      <Layout
        id={"Skills"}
        sectionName={"Skills"}
        className={`flex flex-col gap-8 p-5`}
      >
        <div
          className={`flex gap-5 flex-wrap transition-transform`}
          style={{ transform: `translateX(${pos}px)` }}
        >
          {skills.map((item) => (
            <BackgroundBox
              backgroundColor={"inherit"}
              text={item}
              className="text-nowrap skills-box"
            ></BackgroundBox>
          ))}
        </div>
        <div>
          <Paragraph>
            I am a versatile web developer with strong expertise in JavaScript
            (ES6+), HTML5, CSS3, and responsive design, complemented by modern
            frameworks like Tailwind CSS and React. I specialize in
            component-based architecture, state management, and building
            user-centric interfaces, while integrating REST APIs and handling
            JSON data efficiently. Proficient with Git & GitHub version control,
            I ensure collaborative workflows are smooth, maintainable, and
            well-documented.
          </Paragraph>
          <Paragraph>
            I bring a keen eye for performance optimization, accessibility
            (a11y), and cross-browser compatibility, coupled with basic backend
            knowledge to create full-stack-friendly solutions. Beyond technical
            skills, I am highly effective in problem-solving, algorithmic
            thinking, and data structures fundamentals, and thrive in
            collaborative environments through clear communication, teamwork,
            and adaptability. My approach combines critical thinking, attention
            to detail, creativity, and a strong work ethic, allowing me to
            consistently deliver solutions that are both functional and
            innovative.
          </Paragraph>
        </div>
      </Layout>
    </>
  );
}
