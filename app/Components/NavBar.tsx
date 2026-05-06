"use client"

import { useState } from "react"

const NavBar = () => {

    const [nav, setNav] = useState<string>("hidden")

    const toggleNavBar = () => {
        if (nav.includes("hidden")) { setNav("") }

        else if (nav.includes("")) { setNav("hidden") }
    }

    return (
        <div className="flex flex-col font-sans w-full text-violet-500 bg-gray-800 border-b-2">

            <div id="navBar" className="flex flex-row font-mono p-5">

                <div className="flex-1 text-center p-1 text-4xl
                md:text-left md:flex-none">
                    <h1 className="font-extrabold bg-gradient-to-r from-slate-300 to-purple-500 text-transparent bg-clip-text">
                        Matheus Henrique
                    </h1>
                </div>

                {/* Menu (Mobile) */}

                <button className={"flex-1 justify-center w-full md:hidden p-2 text-2xl"}
                    onClick={toggleNavBar}>
                    <p className="font-extrabold bg-gradient-to-r from-slate-300 to-purple-500 text-transparent bg-clip-text">Menu</p>
                </button>

                {/* navbar on desktop */}

                <div className="hidden md:flex md:gap-5 md:flex-1 md:justify-center md:items-center md:text-2xl">

                    <div className="md:text-center md:flex md:flex-row md:gap-8 md:flex-1 md:justify-center">

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

                    <div className="md:flex md:flex-none md:justify-end md:text-center md:gap-2 pr-2">
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

                <div className="md:text-center flex flex-col text-center border rounded-lg">
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
        </div>
    )
}

export default NavBar