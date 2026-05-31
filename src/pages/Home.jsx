import { useEffect } from "react";
import About from "../sections/About";
import AcademicEvidence from "../sections/AcademicEvidence";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import RecruiterSnapshot from "../sections/RecruiterSnapshot";
import Skills from "../sections/Skills";
import { scrollToSection } from "../lib/scrollToSection";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash || hash === "main") return;

    requestAnimationFrame(() => {
      scrollToSection(hash, { behavior: "auto" });
    });
  }, []);

  return (
    <main>
      <Analytics/>
      <Hero />
      <RecruiterSnapshot />
      <Projects />
      <Skills />
      <AcademicEvidence />
      <About />
      <Contact />
    </main>
  );
}
