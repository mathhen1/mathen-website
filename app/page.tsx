import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <div className="">

      <video autoPlay loop muted src="flames.mp4" className="fixed min-h-full min-w-full -z-100 object-cover"></video>

      <div id="navbar" className="hidden md:sticky md:top-0 md:z-50">
        <NavBar />
      </div>

      <div id="page-content" className="overflow-hidden flex flex-col gap-5 pb-3 pt-3">

        <div id="about-me" className="flex justify-center w-full">
          <AboutMe />
        </div>

        <div id="skills" className="w-full flex justify-center h-screen">
          <Skills />
        </div>

        <div id="projects" className="flex justify-center w-full h-screen">

          <Projects />
        </div>

        <div id="contact" className="flex justify-center w-full h-screen">
          <Contact />
        </div>

      </div>

      <div id="footer" className="flex justify-center w-full h-1/2 bg-slate-800 font-mono overflow-hidden">
        <Footer />
      </div>
    </div>
  );
}
