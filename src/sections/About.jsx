import Card from "../components/Card";
import Icon from "../components/Icon";
import Paragraph from "../components/Paragraph";
import Layout from "./Layout";

const profile = {
  name: "Nohim Hasitha",
  title: "Computer Science Student | Software Engineering Placement Candidate",
  focus: "Embedded software validation, automation tools, AI, and engineering dashboards",
  education: "BSc Computer Science Level 5, University of Hertfordshire",
  tools: "MicroPython, Raspberry Pi Pico, ESP32/Arduino, GitHub, Vite, SQLite/PostgreSQL",
  projects: "Embedded Validation Dashboard; PCB-Based AI Agent; Obstacle-Avoidance Robot",
  location: "Colombo, Sri Lanka | Willing to relocate to the UK for a 9–12 month placement",
};
export default function About() {
  return (
    <>
      <Layout
        className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10 lg:gap-15"
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
        <div className="card-comp order-1 w-full max-w-full rounded-xl p-5 md:order-2 md:max-w-md md:flex-2 lg:max-w-lg">
          <p className="mb-2 w-fit rounded-lg premium-pill p-2 text-sm">
            <Icon name={"info"} className="mr-2 text-gold"></Icon>
            Current status : {new Date().getFullYear()}
          </p>
          {Object.entries(profile).map(([key, value]) => {
            return (
              <p key={key} className="flex flex-col gap-1 py-2 sm:flex-row sm:gap-3">
                <span className="shrink-0 font-semibold text-gold sm:min-w-[7rem] sm:flex-1">
                  {[...key]
                    .map((c, i) => (i === 0 ? c.toUpperCase() : c))
                    .join("")}
                </span>
                <span className="font-light sm:flex-[3]">{value}</span>
              </p>
            );
          })}
        </div>
        

      </Layout>
    </>
  );
}
