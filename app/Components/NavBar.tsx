"use client"

import { Menu } from "lucide-react"
import { useState } from "react"

const NavBar = () => {

    const [nav, setNav] = useState<string>("hidden")
    const [animate, setAnimate] = useState<string>(" ")
    const [animateClose, setAnimateClose] = useState<string>(" ")
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    const animateNav: string = menuIsOpen ? "animate-slide-nav" : "animate-slide-nav-r"
    const menuOpen: string = menuIsOpen ? "hidden" : "block"

    setTimeout(() => {
        setAnimate("animate-opacity")
    }, 2000);

    if (animate.includes(" ")) {
        return (
            <></>
        )
    }

    const handleTitle = () => {
        window.scrollTo({ top: 0 })
        window.location.reload()
    }

    const toggleNavBar = () => {

        setTimeout(() => {
            if (nav.includes(" ")) { setNav("hidden") }
        }, 500);

        if (nav.includes("hidden")) { setNav(" ") }

        if (menuIsOpen === false) {
            setMenuIsOpen(true)
        }

        if (menuIsOpen === true) {
            setMenuIsOpen(false)
        }
    }


    return (
        <div>
            <div className={"relative flex flex-col font-sans w-screen text-violet-500 bg-slate-900 overflow-hidden "}>

                <span className="absolute bottom-0 left-0 w-full h-px bg-white animate-border origin-left">
                </span>

                <div id="navBar" className="flex flex-row font-mono h-[8vh] animate-opacity">

                    {/* main title in mobile/desktop */}

                    <button onClick={handleTitle} className={"flex items-center p-5 text-2xl hover:cursor-pointer " + menuOpen}>
                        <p className="flex text-justify text-nowrap font-black bg-gradient-to-r from-slate-300 to-purple-500 text-transparent bg-clip-text">
                            Matheus Henrique
                        </p>
                    </button>

                    {/* Menu (Mobile) */}

                    <button className={"flex w-full md:hidden text-xl items-center justify-center "}
                        onClick={toggleNavBar}>
                        {/* <p className="font-extrabold bg-gradient-to-r from-slate-300 to-purple-500 text-transparent bg-clip-text">Menu</p> */}
                        <Menu />
                    </button>

                    {/* navbar on desktop */}

                    <div className="hidden md:flex md:flex-1 md:flex-row md:gap-5 md:justify-center md:items-center md:text-lg md:w-full lg:text-2xl">

                        <div className="flex flex-row w-full justify-center gap-5">
                            <a href="#about-me" className="hover:underline hover:decoration-sky-500 hover:underline-offset-8">
                                Sobre mim
                            </a>

                            <a href="#skills" className="hover:underline hover:decoration-sky-500 hover:underline-offset-8">
                                Skills
                            </a>

                            <a href="#projects" className="hover:underline hover:decoration-sky-500 hover:underline-offset-8">
                                Projetos
                            </a>

                            <a href="#contact" className="hover:underline hover:decoration-sky-500 hover:underline-offset-8">
                                Contato
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

            </div >

            <div className="relative w-full h-full">

                {/* navbar on mobile */}

                <div className={"w-screen absolute z-10 rounded-b-4xl bg-slate-900 md:hidden gap-1 p-5 text-2xl " + nav + " " + animateNav}>

                    <div className={"flex flex-col border rounded-2xl text-center p-2 font-mono tracking-wide font-bold "}>

                        {/* <button onClick={toggleNavBar} className="flex justify-center"><Menu /></button> */}

                        <a href="#about-me" className="">
                            <p className="text-white">about me</p>
                        </a>

                        <a href="#skills" className="">
                            <p className="text-white">skills</p>
                        </a>

                        <a href="#projects" className="">
                            <p className="text-white">projects</p>
                        </a>

                        <a href="#contact" className="">
                            <p className="text-white">contact</p>
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

        </div>
    )
}

export default NavBar