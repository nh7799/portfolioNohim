import robot from "../assets/robot.jpeg";
import max7219 from "../assets/max7219.jpeg";
import pomodoro from "../assets/pomodoro.jpeg";
import validationDashboard from "../assets/validationEmbedded.png";

export const projectCards = [
  {
    id: 1,
    title: "Embedded Validation Dashboard",
    problem:
      "Firmware teams need a readable view of test runs, pass/fail status, and failure logs — not raw console output.",
    built:
      "A React dashboard that displays simulated validation runs: device status, results, logs, and failure summaries. Structured for engineers reviewing test output.",
    techStack: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    proof: { label: "GitHub", href: "https://github.com/nh7799" },
    recruiterValue:
      "Shows I can build internal tooling and present technical data clearly — relevant to QA, validation, and platform teams.",
    imageUrl: validationDashboard,
  },
  {
    id: 2,
    title: "PCB-Based AI Agent",
    problem:
      "Grid-world agent logic from coursework needed to run on real hardware with visible state output.",
    built:
      "Custom PCB with microcontroller, OLED display, and MicroPython firmware implementing agent behaviour on physical hardware.",
    techStack: [
      "MicroPython",
      "Python",
      "PCB design",
      "OLED",
      "Embedded AI",
    ],
    proof: {
      label: "LinkedIn project write-up",
      href: "https://www.linkedin.com/in/nohim-hasitha-weedagama-arachchi/details/projects/",
    },
    recruiterValue:
      "Demonstrates end-to-end delivery: hardware design, firmware, and applied AI — not just simulation.",
    imageUrl: pomodoro,
  },
  {
    id: 3,
    title: "Obstacle-Avoidance Robot Controller",
    problem:
      "A small robot had to read sensors and decide movement in real time without manual control.",
    built:
      "MicroPython firmware on Raspberry Pi Pico: sensor polling, obstacle detection logic, and motor/output control in a continuous loop.",
    techStack: ["MicroPython", "Raspberry Pi Pico", "Sensors", "Robotics"],
    proof: {
      label: "LinkedIn project write-up",
      href: "https://www.linkedin.com/in/nohim-hasitha-weedagama-arachchi/details/projects/",
    },
    recruiterValue:
      "Evidence of embedded C-style thinking, debugging hardware–software issues, and working under timing constraints.",
    imageUrl: robot,
  },
  {
    id: 4,
    title: "MAX7219 Display Driver",
    problem:
      "Seven-segment displays via MAX7219 required precise SPI timing and register configuration on a microcontroller.",
    built:
      "Software SPI driver on Raspberry Pi Pico: init sequences, data transfer, display updates, and hardware debugging.",
    techStack: ["MicroPython", "Raspberry Pi Pico", "MAX7219", "Software SPI"],
    proof: { label: "GitHub", href: "https://github.com/nh7799" },
    recruiterValue:
      "Low-level driver work — useful for teams hiring placement students who can read datasheets and integrate peripherals.",
    imageUrl: max7219,
  },
];
