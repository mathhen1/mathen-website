"use client"

import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <div className="">

      <video autoPlay loop muted src="circuits.mp4" className="fixed -z-100 w-full h-full object-cover"></video>

      <div id="navbar" className="sticky z-50 top-0">
        <NavBar />
      </div>

      <div className="relative">

        <div id="page-content" className="overflow-hidden flex flex-col gap-5 pb-3 pt-3 top-0 z-10">

          <div id="about-me" className="flex flex-col justify-center w-full items-center">
            <AboutMe />
          </div>

          <div id="skills" className="w-full flex justify-center h-screen">
            <Skills />
          </div>

          <div id="projects" className="flex justify-center w-full h-screen">

            <Projects />
          </div>

          <div id="contact" className="flex items-center justify-center w-full h-screen">
            <Contact />
          </div>

        </div>

        <div id="void" className="w-full h-50 md:h-150">
        </div>

      </div>

      <div id="void" className="w-full h-1 md:h-3 bg-purple-700">
      </div>

      <div className="relative">

        <video autoPlay loop muted src="flames.mp4" className="absolute -z-80 h-full object-cover"></video>

        <div className="h-screen"></div>

        <div id="footer" className="flex justify-center w-full h-1/2 bg-slate-800 font-mono overflow-hidden">
          <Footer />
        </div>
      </div>

    </div>
  );
}
