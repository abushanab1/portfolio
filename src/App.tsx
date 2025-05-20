import { useRef } from "react";
import Stars from "./components/Stars";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import CursorTrail from "./components/CursorTrail";
import FloatingAvatar from "./components/FloatingAvatar";
import Loader from "./components/Loader";
import Leadership from "./sections/Leadership";

function App() {
  const leadershipRef = useRef<HTMLElement>(null!);
  const aboutRef = useRef<HTMLElement>(null!);
  const skillsRef = useRef<HTMLElement>(null!);
  const experienceRef = useRef<HTMLElement>(null!);
  const projectsRef = useRef<HTMLElement>(null!);
  // const experienceRef = useRef<HTMLElement>(null!);
  const contactRef = useRef<HTMLElement>(null!);

  const sectionRefs: React.RefObject<HTMLElement>[] = [
    aboutRef,
    skillsRef,
    experienceRef,
    projectsRef,
    leadershipRef,
    contactRef,
  ];

  return (
    <>
      <Loader />
      <div className="relative bg-black text-white font-sans">
        <CursorTrail />
        <Stars />
        <FloatingAvatar />
        <Navbar sectionRefs={sectionRefs} />

        <main className="relative z-10 pb-24">
          <section id="about" ref={aboutRef}><Hero /></section>
          <section id="skills" ref={skillsRef}><Skills /></section>
          <section id="experience" ref={experienceRef}><Experience /></section>
          <section id="projects" ref={projectsRef}><Projects /></section>
          {/* <section id="experience" ref={experienceRef}><Experience /></section> */}
          <section id="leadership" ref={leadershipRef}><Leadership /></section>
          <section id="contact" ref={contactRef} className="scroll-mb-24 pb-20">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
