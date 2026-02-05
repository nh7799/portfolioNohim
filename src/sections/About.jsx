import Card from "../components/Card";
import Icon from "../components/Icon";
import Paragraph from "../components/Paragraph";
import Layout from "./Layout";

const profile = {
  name: "Nohim",
  title: "Computer Science Student",
  focus: "Embedded systems and low-level software",
  education: "BSc Computer Science (Level 5), University of Hertfordshire",
  skills: "Java, Python, JavaScript, React, React Native",
  tools: "Arduino, MicroPython, CircuitPython, Git",
  projects: "Microcontroller-based Pomodoro Timer; RP2040 Smart Robot",
  location: "United Kingdom",
};

export default function About() {
  return (
    <>
      <Layout
        className="flex gap-5 md:flex-row md:gap-15 items-center justify-center flex-col"
        sectionName={"About"}
        id={"about"}
      >
        <div className="md:flex-2 order-2 md:order-1">
          {" "}
          <Paragraph>
            I’m a passionate and curious problem-solver with a strong interest
            in technology, design, and innovation.
          </Paragraph>
          <Paragraph>
            I enjoy building solutions that are functional, intuitive, and
            engaging, with experience in web development, electronics, and
            system design.
          </Paragraph>
          <Paragraph>
            I focus on writing clean, efficient, and maintainable code while
            paying close attention to user experience and visual clarity.
          </Paragraph>
          <Paragraph>
            I enjoy tackling complex problems, debugging systems, and breaking
            challenges down into clear, logical steps.
          </Paragraph>
          <Paragraph>
            I’m motivated by continuous learning and regularly explore new
            tools, frameworks, and technologies to expand my skill set.
          </Paragraph>
         
        </div>
        <div className="max-w-300 card-comp md:flex-2 order-1 md:order-2 p-4 border border-gray-600 rounded-lg">
          <p className="w-fit mb-2 p-2 rounded">
            <Icon name={"info"} className="mr-2"></Icon>
            Current status : {new Date().getFullYear()}
          </p>
          {Object.entries(profile).map(([key, value]) => {
            return (
              <p className="flex py-1">
                <span className="mr-3 font-bold flex-1">
                  {[...key]
                    .map((c, i) => (i === 0 ? c.toUpperCase() : c))
                    .join("")}
                </span>
                <span className="font-light flex-3">{value}</span>
              </p>
            );
          })}
        </div>
        

      </Layout>
    </>
  );
}
