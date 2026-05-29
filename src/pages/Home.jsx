import About from "../sections/About";
import AcademicEvidence from "../sections/AcademicEvidence";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import RecruiterSnapshot from "../sections/RecruiterSnapshot";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <main>
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
