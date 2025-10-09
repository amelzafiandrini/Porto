import Hero from "./components/Hero";
import AboutMe from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skill />
      <Experience />
      <Projects />
      <Certificate/>
      <Footer />
    </main>
  );
}
