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
        className="flex md:flex-row md:gap-10 items-center justify-center flex-col"
        sectionName={"About"}
        id={"about"}
      >
        <div className="md:flex-3 order-2 md:order-1">
          {" "}
          <Paragraph>
            i'm a passionate and curious problem-solver with a keen interest in
            technology, design, and innovation.
          </Paragraph>
          <Paragraph className="">
            I thrive on creating solutions that are not only functional but also
            intuitive and engaging. With a strong foundation in [web
            development, electronics, or design],
          </Paragraph>
          <Paragraph>
            I enjoy tackling challenges that push me to learn and grow
            continuously. I believe in the power of creativity and precision
            working together—whether it’s building a sleek interface, developing
            a microcontroller project, or crafting a seamless user experience.
          </Paragraph>
          <Paragraph>
            Outside of work, I’m constantly exploring new ideas, honing my
            skills, and looking for opportunities to turn concepts into
            impactful, real-world solutions.
          </Paragraph>
        </div>
        <div className="card-comp md:flex-2 order-1 md:order-2 bg-accent p-4 border rounded-lg">
          <p className="bg-primaryGreen-lime w-fit mb-2 text-accent p-2 px-3 rounded">
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
