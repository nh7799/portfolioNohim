import Navigation from "../components/Navigation";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <>
      <div className="w-full h-full ">
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    </>
  );
}
