import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <div id="navbar" className="sticky top-0 z-50">
        <NavBar />
      </div>

      <div id="page-content" className="overflow-hidden flex flex-col gap-5">

        <div id="about-me" className="flex justify-center w-full">
            <AboutMe />
        </div>

        <div id="skills" className="w-full flex justify-center h-screen">
          <Skills />
        </div>

        <div id="projects" className="flex justify-center w-full h-screen">
          
            <Projects />
        </div>

        <div id="contact" className="flex justify-center w-full h-screen border">
          <div className="flex items-center justify-center h-screen w-1/2 border">
            <h1>contact</h1>
          </div>
        </div>

      </div>

      <div id="footer" className="flex justify-center w-full h-1/2 border">
        <Footer />
      </div>
    </div>
  );
}
