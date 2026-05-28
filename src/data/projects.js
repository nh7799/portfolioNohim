import robot from "../../src/assets/robot.jpeg";
import max7219 from "../../src/assets/max7219.jpeg";
import pomodoro from "../../src/assets/pomodoro.jpeg";
import validationDashboard from "../../src/assets/validationEmbedded.png";

export const projectCards = [
  {
    id: 1,
    title: "Embedded Validation Dashboard",
    description:
      "A React-based engineering dashboard that displays simulated firmware validation runs, device status, pass/fail results, logs, and failure summaries. Built to demonstrate software tooling, data visualisation, and test-result analysis.",
    techStack: ["React", "Vite", "JavaScript", "Tailwind CSS", "Simulated Test Data"],
    imageUrl: validationDashboard,
    projectLink: "https://github.com/nh7799",
  },
  {
    id: 2,
    title: "PCB-Based AI Agent",
    description:
      "An embedded AI project that translates grid-world agent logic into a physical microcontroller-based prototype using a custom PCB, OLED output, and MicroPython firmware.",
    techStack: ["MicroPython", "Python", "PCB Design", "OLED", "Embedded AI", "Grid worlds"],
    imageUrl: pomodoro,
    projectLink:
      "https://www.linkedin.com/in/nohim-hasitha-weedagama-arachchi/details/projects/",
  },
  {
    id: 3,
    title: "Smart Robot Controller",
    description:
      "An autonomous robot controller using sensor input and microcontroller logic to detect obstacles, make movement decisions, and control hardware outputs in real time.",
    techStack: ["MicroPython", "Raspberry Pi Pico", "Sensors", "Robotics"],
    imageUrl: robot,
    projectLink:
      "https://www.linkedin.com/in/nohim-hasitha-weedagama-arachchi/details/projects/",
  },
  {
    id: 4,
    title: "MAX7219 Display Driver",
    description:
      "A microcontroller display-control project using software SPI to drive MAX7219 seven-segment displays, focusing on timing, data transfer, debugging, and hardware-software integration.",
    techStack: ["MicroPython", "Raspberry Pi Pico", "MAX7219", "Software SPI"],
    imageUrl: max7219,
    projectLink: "https://github.com/nh7799",
  },
];
