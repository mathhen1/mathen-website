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

    const root = document.getElementById("start-intersect")

    if (root) {

      const obs = new IntersectionObserver((entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setInit(true)
        })
      }), {
        rootMargin: "0px 0px -120px 0px",
        threshold: 1
      })
      obs.observe(root)
    }

  }, [])

  return (
    <div id="full-page" className="w-full h-full overflow-clip relative bg-gradient-to-b from-black via-slate-900 to-slate-900">

      {/* <video autoPlay loop muted src="circuits.mp4" className="fixed -z-100 w-full h-full object-cover"></video> */}

      <div id="navbar" className="sticky z-50 top-0 w-screen">
        <NavBar />
      </div>

      {/* page content */}

      <div id="page-content" className="overflow-hidden flex flex-col gap-5 pb-3 pt-3 top-0 z-10">

        <div id="about-me" className="w-screen h-full">
          <AboutMe />
        </div>

        <div id="skills" className="w-screen h-full">
          <Skills />
        </div>

        {/* void part in page */}

        <div id="void" className="relative w-screen h-30 md:h-40">
        </div>

      </div>

      <span id="start-intersect" className="relative -z-20 h-1 w-0"></span>

      {/* introduce new background and continue page content */}

      {init ? <> <div id="void2" className="overflow-hidden w-screen h-2 bg-purple-700 bottom-0 left-0 animate-border origin-left">
      </div> </> : <> </>}

      {init
        ?
        <>
          <div id="half-page" className="overflow-hidden h-full w-screen bg-gradient-to-t from-black via-slate-900 to-gray-800 animate-opacity-bg flex flex-col gap-4 ">

            <div id="voidd" className="w-screen h-1 bg-gray-800"> </div>

            <div id="projects" className="flex items-center justify-center w-screen h-full">
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

      {/* <video autoPlay loop muted src="flames.mp4" className="absolute -z-80 h-full object-cover w-full"></video>
      <div className="h-screen"></div> */}

      <div id="footer" className="flex justify-center w-screen h-1/2 bg-slate-800 font-mono overflow-hidden">
        <Footer />
      </div>

    </div>
  );
}
