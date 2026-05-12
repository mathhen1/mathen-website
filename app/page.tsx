"use client"
import { useEffect, useState } from "react";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function Home() {

  const [init, setInit] = useState<boolean>(false)

  useEffect(() => {

    const root = document.getElementById("void")

    if (root) {

      const obs = new IntersectionObserver((entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setInit(true)
        })
      }))
      obs.observe(root)
    }

  }, [])

  return (
    <div id="full-page" className="w-full h-full">

      <video autoPlay loop muted src="circuits.mp4" className="fixed -z-100 w-full h-full object-cover"></video>

      <div id="navbar" className="sticky z-50 top-0">
        <NavBar />
      </div>

      {/* page content */}

      <div id="page-content" className="overflow-hidden flex flex-col gap-5 pb-3 pt-3 top-0 z-10">

        <div id="about-me" className="flex flex-col justify-center w-screen h-full items-center">
          <AboutMe />
        </div>

        <div id="skills" className="flex justify-center w-screen h-full">
          <Skills />
        </div>

        {/* void part in page */}

        <div id="void" className="w-full h-10 md:h-20">
        </div>

        {/* introduce new background and continue page content */}

        {init
          ?
          <>
            <div id="half-page" className="h-full w-full bg-slate-900 animate-opacity">

              {init ? <> <div id="void2" className="w-full h-2 bg-purple-700 bottom-0 left-0 animate-border origin-left">
              </div> </> : <> </>}

              <div id="voidd" className="w-full h-10 md:h-20 bg-slate-900"> </div>

              <div id="projects" className="flex justify-center w-screen h-full">
                <Projects />
              </div>

              <div id="contact" className="flex items-center justify-center w-screen h-full">
                <Contact />
              </div>

            </div>
          </>
          :
          <div className="h-[200vh]">
          </div>}

      </div>

      {/* <video autoPlay loop muted src="flames.mp4" className="absolute -z-80 h-full object-cover w-full"></video>
      <div className="h-screen"></div> */}

      <div id="footer" className="flex justify-center w-full h-1/2 bg-slate-800 font-mono overflow-hidden">
        <Footer />
      </div>

    </div>
  );
}
