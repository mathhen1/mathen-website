"use client"

import { useEffect, useState } from "react"

const Projects = () => {

    const [animate, setAnimate] = useState<string>(" ")
    const [animate2, setAnimate2] = useState<string>(" ")

    useEffect(() => {

        const h = window.screen.height

        window.addEventListener("scroll", () => {

            if (window.scrollY > (h + (h / 2)) && window.scrollY < ((h * 2 + h / 3))) {
                setAnimate("animate-slide-in-right")
                setTimeout(() => setAnimate2("animate-slide-in-left"), 500)
            }

            if (window.scrollY > ((h * 3) - (h * 0.4)) || window.scrollY < h) {
                if (h > 920) {
                    setAnimate(" ")
                    setAnimate2(" ")
                }
                if (window.scrollY > h * 3 || window.scrollY < h) {
                    setAnimate(" ")
                    setAnimate2(" ")
                }
            }
        })
    }, [])

    if (animate.includes(" ")) {
        return <div className="h-screen md:w-2/3 w-11/12"></div>
    }

    if (animate2.includes(" ")) {
        return (
            <div className={"flex flex-row items-center justify-center p-5 gap-8 h-screen md:w-2/3 w-11/12 border-2 rounded-2xl border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 font-mono " + animate}>
            </div>
        )
    }

    return (

        <div id="cards-project" className={"flex flex-row items-center justify-center p-5 gap-8 h-screen md:w-2/3 w-11/12 border-2 rounded-2xl border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 font-mono overflow-hidden " + animate}>

            <div className={"absolute top-0 pt-20 text-2xl " + animate2}><h1>Projects</h1></div>

            <div className="flex flex-row w-11/12">
                <div className={"flex flex-col border-2 rounded-2xl md:h-1/2 md:w-1/4 items-center p-2 " + animate2}>

                    <div className="flex justify-top items-center border h-2/4 w-3/4 rounded-3xl">
                        <img src="github.png" className="h-full w-full" />
                    </div>

                    <h1 className="flex p-2">Web App de Bate-Papo</h1>

                    <p className="text-center">Nesse projeto, foi feito um sistema de conversa em tempo real, um chat app, utilizando-se de WebSockets para manter a comunicação entre os usuários.</p>

                </div>

                <div className={"flex flex-col border-2 rounded-2xl md:h-1/2 md:w-1/4 items-center p-2 " + animate2}>

                    <div className="flex justify-top items-center border h-2/4 w-3/4 rounded-3xl">
                        <img src="github.png" className="h-full w-full" />
                    </div>

                    <h1 className="flex p-2">Sistema de Forum/Blog</h1>

                    <p className="text-center">Projeto Full Stack, com diversas funcionalidades, que funciona como um blog/forum. Conceitos de Auth, Session, Manipulação de Cookies foram aplicados.</p>

                </div>

                <div className={"flex flex-col border-2 rounded-2xl md:h-1/2 md:w-1/4 items-center p-2 " + animate2}>

                    <div className="flex justify-top items-center border h-2/4 w-3/4 rounded-3xl">
                        <img src="github.png" className="h-full w-full" />
                    </div>

                    <h1 className="flex p-2">Meu Portfolio</h1>

                    <p className="text-center">Site de Apresentação sobre mim. Meus conhecimentos, projetos e experiências ficarão expostos nesse web app.</p>

                </div>
            </div>

        </div>


    )
}

export default Projects