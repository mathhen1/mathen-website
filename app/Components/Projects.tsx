"use client"

import { useEffect, useState } from "react"

const Projects = () => {

    const [animate, setAnimate] = useState<string>(" ")
    const [animate2, setAnimate2] = useState<string>(" ")

    useEffect(() => {

        const h = window.screen.height

        window.addEventListener("scroll", () => {

            if (window.scrollY > (h + h / 2)) {
                setAnimate("animate-slide-in-right")
                setTimeout(() => setAnimate2("animate-slide-in-left"), 500)
            }

        })
    }, [])

    const projectsList = [{
        id: 0,
        category: "web",
        title: "Meu Portfolio",
        desc: "Site de Apresentação sobre mim. Meus conhecimentos, projetos e experiências ficarão expostos nesse web app."
    },
    {
        id: 1,
        category: "web",
        title: "Sistema de Forum/Blog",
        desc: "Projeto Full Stack, com diversas funcionalidades, que funciona como um blog/forum. Conceitos de Auth, Session, Manipulação de Cookies foram aplicados."

    }, {
        id: 2,
        category: "web",
        title: "WebApp de Bate-Papo",
        desc: "Nesse projeto, foi feito um sistema de conversa em tempo real, um chat app, utilizando-se de WebSockets para manter a comunicação entre os usuários."

    }]

    if (animate.includes(" ")) {
        return <div className="h-[85vh] w-95vw]"></div>
    }

    if (animate2.includes(" ")) {
        return (
            <div className={"flex flex-row items-center justify-center p-5 gap-8 h-[85vh] w-[95vw] border-2 rounded-2xl border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 font-mono " + animate}>
            </div>
        )
    }

    return (

        <div id="cards-project" className={"flex flex-row items-center justify-center p-1 gap-8 h-full w-[95vw] border rounded-2xl border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 font-mono overflow-hidden animate-border-full bg-conic/[from_var(--border-angle)] from-white to-purple-700 "}>

            <div className="bg-gray-950 p-4 rounded-lg flex flex-col w-full h-full">

                <div className={"flex w-full justify-center " + animate2}><h1>Projects</h1></div>

                <div className={"grid grid-cols-4 w-full" + animate2}>
                    {projectsList.map((project) => (
                        <div key={project.id} className="">
                            <div className="flex justify-top items-center border h-2/4 w-3/4 rounded-3xl">
                                <img src="github.png" className="h-full w-full" />
                            </div>

                            <h1 className="flex p-2">{project.title}</h1>

                            <p className="text-center">{project.desc}</p>
                        </div>
                    ))}

                </div>
            </div>

        </div>

    )
}

export default Projects