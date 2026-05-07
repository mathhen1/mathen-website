"use client"

import { useState } from "react"

const NavBar = () => {

    const [nav, setNav] = useState<string>("hidden")
    const [animate, setAnimate] = useState<string>(" ")

    const toggleNavBar = () => {
        if (nav.includes("hidden")) { setNav("") }

        else if (nav.includes("")) { setNav("hidden") }
    }

    setTimeout(() => {
        setAnimate("animate-opacity")
    }, 2000);

    if (animate.includes(" ")) {
        return (
            <></>
        )
    }

    const handleTitle = () => {
        window.location.reload()
    }

    return (
        <div className="flex flex-col font-sans w-full text-violet-500 bg-gray-800 overflow-hidden">

            <span className="absolute bottom-0 left-0 w-full h-1.5 bg-violet-500 animate-border origin-left"></span>

            <div id="navBar" className="flex flex-row font-mono md:h-full h-[10vh] p-5 animate-opacity">

                <div className="flex p-1 md:text-2xl text-xl
                md:text-left md:flex-none">

                    <h1 className="flex font-extrabold bg-gradient-to-r from-slate-300 to-purple-500 text-transparent bg-clip-text">
                        <button onClick={handleTitle} className="hover:cursor-pointer">
                            Matheus Henrique
                        </button>
                    </h1>
                </div>

                {/* Menu (Mobile) */}

                <button className={"flex-1 justify-center w-full md:hidden p-2 text-2xl"}
                    onClick={toggleNavBar}>
                    <p className="font-extrabold bg-gradient-to-r from-slate-300 to-purple-500 text-transparent bg-clip-text">Menu</p>
                </button>

                {/* navbar on desktop */}

                <div className="hidden md:flex md:flex-1 md:flex-row md:gap-5 md:justify-center md:items-center md:text-lg md:w-full lg:text-2xl">


                    <div className="flex flex-row w-full justify-center gap-5">
                        <a href="#about-me" className="hover:underline hover:decoration-sky-500 hover:underline-offset-8">
                            About Me
                        </a>

                        <a href="#skills" className="hover:underline hover:decoration-sky-500 hover:underline-offset-8">
                            Skills
                        </a>

                        <a href="#projects" className="hover:underline hover:decoration-sky-500 hover:underline-offset-8">
                            Projects
                        </a>

                        <a href="#contact" className="hover:underline hover:decoration-sky-500 hover:underline-offset-8">
                            Contact
                        </a>
                    </div>

                    <div className="flex flex-row gap-4">
                        <a href="https://www.linkedin.com/in/matheus-henrique-609083271/" className="hover:underline hover:decoration-sky-500 hover:underline-offset-8">
                            <p className="font-extrabold bg-gradient-to-r from-slate-300 to-purple-500 text-transparent bg-clip-text">
                                Linkedin
                            </p>
                        </a>

                        <a href="https://github.com/mathhen1" className="hover:underline hover:decoration-sky-500 hover:underline-offset-8">
                            <p className="font-extrabold bg-gradient-to-r from-slate-300 to-purple-500 text-transparent bg-clip-text">
                                GitHub
                            </p>
                        </a>
                    </div>

                </div>

            </div>

            {/* navbar on mobile */}

            <div className={"md:hidden flex-col justify-center gap-1 p-5 text-2xl " + nav}>

                <div className="md:text-center flex flex-col text-center border-b-2 rounded-lg">
                    <a href="#about-me" className="hover:underline hover:decoration-cyan-200 hover:underline-offset-8">
                        about me
                    </a>

                    <a href="#skills" className="hover:underline hover:decoration-cyan-200 hover:underline-offset-8
                    transition delay-150 duration-300 hover:scale-110">
                        skills
                    </a>

                    <a href="#projects" className="hover:underline hover:decoration-cyan-200 hover:underline-offset-8">
                        projects
                    </a>

                    <a href="#contact" className="hover:underline hover:decoration-cyan-200 hover:underline-offset-8">
                        contact
                    </a>

                    <div className={"md:text-right text-center " + nav}>
                        <a className="hover:underline hover:decoration-cyan-200 hover:underline-offset-8"
                            href="https://www.linkedin.com/in/matheus-henrique-609083271/">
                            <p className="font-extrabold bg-gradient-to-r from-slate-300 to-purple-500 text-transparent bg-clip-text">Linkedin</p></a>
                        <a className="hover:underline hover:decoration-cyan-200 hover:underline-offset-8"
                            href="https://github.com/mathhen1">
                            <p className="font-extrabold bg-gradient-to-r from-slate-300 to-purple-500 text-transparent bg-clip-text">
                                GitHub
                            </p>
                        </a>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default NavBar