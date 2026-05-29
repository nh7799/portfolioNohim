import Navigation from "../components/Navigation";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}
