"use client"

import { useEffect, useState } from "react"
import { ArrowBigRight, ArrowBigLeft } from "lucide-react"

const AboutMe = () => {

    const [animate, setAnimate] = useState<string>(" ")
    const [animate2, setAnimate2] = useState<string>(" ")
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        const h = window.screen.height

        setTimeout(() => {
            setAnimate("animate-slide-in-right")
            setTimeout(() => setAnimate2("animate-slide-in-top"), 500)
        }, 2000);

        window.addEventListener("scroll", () => {

            // if (window.scrollY > h) {
            //     setAnimate2(" ")
            //     setAnimate(" ")
            // }

            if (window.scrollY < (h / 2)) {
                setAnimate("animate-slide-in-right")
                setTimeout(() => setAnimate2("animate-slide-in-top"), 600)
            }
        })
    }, [animate2, animate])

    const handleRight = () => {
        if ((count + 1) > aboutMePages().length - 1) {
            setCount(0)
        }
        else setCount(count + 1)
    }

    const handleLeft = () => {

        if ((count - 1) < 0) {
            setCount(aboutMePages().length - 1)
        }

        else setCount(count - 1)
    }

    if (animate.includes(" ")) {
        return <div className="h-[85vh] w-full"></div>
    }

    if (animate2.includes(" ")) {
        return <div className={"flex items-center justify-center h-[85vh] w-full border-2 border-violet-500 rounded-2xl shadow-xl/30 shadow-sky-500 bg-gray-950 font-mono gap-5 " + animate}></div>
    }

    const aboutMePages = () => {
        return (
            [
                <div id="page-0" className={"flex flex-col gap-3 text-center justify-center items-center h-full w-full"}>

                    <div className="flex flex-col md:flex-row p-2 gap-4">

                        <div className="flex w-full sm:w-1/2 flex-col justify-center items-center gap-10 animate-slide-in-right">

                            <p className="tracking-wide text-[clamp(0.2rem,4vw,2rem)] sm:text-lg">
                                Sou formado em <span className="bg-emerald-400 text-transparent bg-clip-text">Analise e Desenvolvimento de Sistemas</span>, pela faculdade AESO barros melo, em Olinda, PE.
                            </p>

                            <p className="tracking-wide text-[clamp(0.2rem,4vw,2rem)] sm:text-lg">
                                Atualmente me especializando em <span className="bg-emerald-400 text-transparent bg-clip-text">Engenharia de Software</span>, pela faculdade Frassinetti do Recife, PE.
                            </p>

                            <p className="tracking-wide text-[clamp(0.2rem,4vw,2rem)] sm:text-lg">
                                <span className="bg-emerald-400 text-transparent bg-clip-text">Inglês</span> de nivel <span className="bg-emerald-400 text-transparent bg-clip-text">Intermediário</span>, onde consigo compreender falas e textos, e também realizar escritas no idioma.
                            </p>

                            <p className="hidden tracking-wide text-[clamp(0.1rem,4vw,2rem)] sm:text-lg">
                                Nesse momento, estou buscando oportunidades no mercado de trabalho para ampliar ainda mais meus conhecimentos, ganhar experiencia real e poder evoluir de forma completa.
                            </p>
                            <p className="hidden tracking-wide text-[clamp(0.1rem,4vw,2rem)] sm:text-lg">
                                Meu objetivo é conhecer cada vez mais a respeito da area tech, adquirir conhecimento e experiencia na pratica, e poder usar meu conhecimento para produzir e construir novos sistemas/tecnologias.
                            </p>

                        </div>

                        <div className="flex h-full w-full flex-col justify-center items-center animate-slide-in-left p-4 max-sm:bg-slate-900 max-sm:rounded-2xl">

                            <img src="aeso-facul.jfif" className="w-[clamp(10px,100vw,200px)] h-[clamp(10px,100vh,200px)] rounded-2xl m-2 sm:w-60 sm:h-60" />

                            <img src="fafire-facul.webp" className="w-[clamp(10px,100vw,200px)] h-[clamp(10px,100vh,200px)] rounded-2xl m-2 sm:w-60 sm:h-60" />

                        </div>
                    </div>
                </div>
                ,
                <div id="page-1" className={"flex flex-col sm:flex-row gap-3 justify-center items-center h-full w-full"}>

                    <img src={"eu-foto.jpg"}
                        className="flex md:flex-1 rounded-3xl min-w-10 min-w-20 max-w-50 max-h-70 md:max-h-110 md:max-w-80 animate-slide-in-top">
                    </img>

                    <div className="flex justify-center items-center pl-2 animate-slide-in-right">
                        <div className="flex flex-col text-xs sm:text-lg md:text-xl lg:text-2xl">
                            <h1 className="font-extrabold bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Graduado em Analise e Desenvolvimento de Sistemas <br /> (Faculdade Aeso Barros Melo)</h1>
                            <br />
                            <h1 className="font-extrabold bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Especializando em Engenharia de Software <br /> (Centro Universitário Frassinetti do Recife)</h1>
                            <br />
                            <h1 className="font-extrabold bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Inglês - Nível Intermediário <br /> (Leitura, escrita e entendimento) <br /> (Wise Up Online) </h1>
                        </div>
                    </div>

                </div>,

                <div id="page-2" className={"flex flex-col h-full animate-slide-in-top"}>
                    <div className="flex w-full justify-center p-2">
                        <h1 className="text-3xl">Formação Acadêmica</h1>
                    </div>

                    <div className="flex">
                        <h1>Faculdade Aeso Barros Melo (AESO)</h1>

                        <p>

                        </p>
                    </div>

                    <div className="flex">
                        <h1>Centro Universitario Frassinetti do Recife (Fafire)</h1>
                    </div>
                </div>



                ,
                <div id="page-3" className={"flex flex-row divide-x-2"}>
                    OLA
                </div>
            ]
        )
    }

    return (
        <div className={"flex text-center h-full w-[95vw] border-r-2 border-l-2 border-t-2 border-violet-500 rounded-2xl shadow-xl/30 shadow-sky-500 bg-gray-950 font-mono gap-5 overflow-hidden p-3 " + animate}>

            <div id="pages" className="flex flex-col h-full w-full justify-center text-[clamp(0.2rem,1rem,2rem)]">

                <div className="flex z-100 w-full">
                    <button className="flex w-full justify-start" onClick={handleLeft}><ArrowBigLeft /></button>
                    <button className="flex w-full justify-end" onClick={handleRight}><ArrowBigRight /></button>
                </div>

                <div className="flex flex-col gap-3 p-4 m-4">
                    <h1 className="bg-gradient-to-r from-blue-200 via-purple-400 to-violet-600 text-transparent bg-clip-text animate-slide-in-top">
                        <p className="tracking-wide sm:text-3xl md:text-4xl text-[clamp(0.8rem,5vw,2rem)]">
                            Olá, eu sou Matheus Henrique. Ou também, Mathen!
                        </p>
                    </h1>

                    <p className="animate-slide-in-top sm:text-2xl md:text-3xl tracking-wide text-shadow-lg text-shadow-violet-700 text-[clamp(0.5rem,5vw,2rem)]">
                        dev web full stack
                    </p>
                </div>

                {aboutMePages()[count]}

            </div>



        </div>

    )
}

export default AboutMe