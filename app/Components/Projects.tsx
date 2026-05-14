"use client"

import { useEffect, useState } from "react"

const Projects = () => {

    const [animate, setAnimate] = useState<string>(" ")
    const [animate2, setAnimate2] = useState<string>(" ")
    const [initAnimateBorder, setInitAnimateBorder] = useState<boolean>(false)
    const anime: string = initAnimateBorder ? "animate-border-full bg-conic/[from_var(--border-angle)] from-sky-200 to-purple-700" : ""

    useEffect(() => {

        const h = window.screen.height

        window.addEventListener("scroll", () => {

            if (window.scrollY > (h + h / 2)) {
                setAnimate("animate-slide-in-right")
                setTimeout(() => {
                    setAnimate2("animate-slide-in-left")
                    setInitAnimateBorder(true)
                }, 600)
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

        <div id="cards-project" className={"flex items-center justify-center gap-8 h-full w-[95vw] rounded-2xl border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 font-mono overflow-y-hidden relative overflow-hidden " + animate}>

            <div className={"w-full h-full p-1 rounded-2xl " + anime}>

                <div className="bg-gray-950 p-4 rounded-lg flex flex-col min-h-[85vh] w-full h-full gap-5">

                    <div className={"flex w-full justify-center sm:text-2xl border-b-2 border-slate-700 " + animate2}>
                        <h1 className="p-2 m-2 lg:text-3xl font-bold">
                            Projetos
                        </h1>
                    </div>

                    <div className={"grid md:grid-cols-3 w-full gap-3 justify-items-center " + animate2}>
                        {projectsList.map((project) => (
                            <div key={project.id} className="flex flex-col justify-center items-center rounded-2xl bg-gray-900 md:min-h-100 md:w-3/4">
                                <img src="github.png" className="m-4 p-2 rounded-2xl w-[clamp(120px,10vw,160px)] md:w-30 md:h-30" />

                                <h1 className="flex p-1 md:p-2 text-[clamp(1rem,5vw,2rem)] md:text-base">{project.title}</h1>

                                <p className="text-center text-[clamp(0.8rem,4vw,2rem)] md:text-base">{project.desc}</p>
                            </div>
                        ))}

                    </div>

                    <div className="w-full md:flex md:justify-center">
                        <div className="border bg-sky-800 rounded-2xl flex justify-center m-1 p-2">
                            <button className="animate-pulse">
                                <p className="text-white tracking-wide font-bold">
                                    Veja mais aqui!
                                </p>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Projects