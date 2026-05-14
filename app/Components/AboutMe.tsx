"use client"

import { useEffect, useState } from "react"
import { ArrowBigRight, ArrowBigLeft } from "lucide-react"

const AboutMe = () => {

    const txtG: string = "font-extrabold bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
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
                <div id="page-0" className={"flex flex-col sm:flex-row justify-center items-center gap-8 h-full w-full"}>

                    <div className="flex flex-col pl-2 animate-slide-in-right gap-10 p-5 sm:w-2/3 justify-center items-center">

                        <div className="flex flex-row items-center md:gap-3">
                            <span className="w-[3vw] h-px border sm:block hidden"></span>
                            <h1 className="tracking-wider text-[clamp(1rem,4vw,2rem)] sm:text-3xl text-shadow-lg text-shadow-violet-700">
                                <span className="sm:hidden">&mdash;</span>
                                sou um desenvolvedor fullstack!
                            </h1>
                        </div>


                        {/* <div className="flex flex-row sm:flex-col justify-center items-center"> */}
                        <p className="tracking-wide text-[clamp(0.2rem,4vw,2rem)] sm:text-lg sm:w-3/4">
                            hoje atuo na area de <span className="text-emerald-500">dev web</span>, onde me centralizo na <span className="text-rose-500">construção</span> de <span className="text-emerald-500">sites modernos e funcionais</span>
                        </p>
                        <p className="tracking-wide text-[clamp(0.2rem,4vw,2rem)] sm:text-lg sm:w-3/4">
                            o meu <span className="text-emerald-500">grande objetivo</span>  é explorar e me aprofundar cada vez mais na area <span className="text-emerald-500">tech</span> como um todo, e poder usar meus <span className="text-rose-500">conhecimentos</span> para construir <span className="text-emerald-500">sistemas completos</span>
                        </p>
                        {/* </div> */}
                    </div>

                    <img src={"eu-foto.jpg"}
                        className="flex rounded-3xl min-w-10 min-w-20 max-w-50 max-h-70 md:max-h-110 md:max-w-80 animate-slide-in-top pl-3 sm:w-1/3">
                    </img>
                </div>
                ,

                <div id="page-1" className={"flex flex-col gap-3 text-center justify-center items-center h-full w-full"}>

                    <div className="flex flex-col md:flex-row p-2 gap-4">

                        <div className="flex w-full flex-col justify-center items-center gap-10 animate-slide-in-right">

                            <p className="tracking-wide text-[clamp(0.2rem,4vw,2rem)] sm:text-lg">
                                Sou formado em <span className="bg-emerald-400 text-transparent bg-clip-text">Analise e Desenvolvimento de Sistemas</span>, pela faculdade AESO barros melo, em Olinda, PE.
                            </p>

                            <p className="tracking-wide text-[clamp(0.2rem,4vw,2rem)] sm:text-lg">
                                Atualmente estou me especializando em <span className="bg-emerald-400 text-transparent bg-clip-text">Engenharia de Software</span>, pela faculdade Frassinetti do Recife, PE.
                            </p>

                            <p className="tracking-wide text-[clamp(0.2rem,4vw,2rem)] sm:text-lg">
                                <span className="bg-emerald-400 text-transparent bg-clip-text">Inglês</span> de nivel <span className="bg-emerald-400 text-transparent bg-clip-text">Intermediário</span>, onde consigo compreender falas e textos, e também realizar escritas no idioma.
                            </p>

                        </div>

                        <div className="flex h-full w-full flex-col md:flex-row justify-center items-center animate-slide-in-left p-4 max-sm:bg-slate-900 max-sm:rounded-2xl md:gap-3">

                            <img src="aeso-facul.jfif" className="w-[clamp(10px,100vw,200px)] h-[clamp(10px,100vh,200px)] rounded-2xl m-2 sm:w-60 sm:h-60" />

                            <img src="fafire-facul.webp" className="w-[clamp(10px,100vw,200px)] h-[clamp(10px,100vh,200px)] rounded-2xl m-2 sm:w-60 sm:h-60" />

                        </div>
                    </div>
                </div>
                ,

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
                    <div className="flex border w-1/3 gap-5 p-3">

                        <p className="">
                            meu verdadeiro objetivo é tornar um prossional completo e capacitado, adquirir <span className="bg-green-400 text-transparent bg-clip-text">experiência e sabedoria</span> na prática, e poder usar tudo isso para produzir e construir novos <span className={txtG}>sistemas/tecnologias.</span>
                        </p>
                    </div>
                </div>
            ]
        )
    }

    return (
        <div className={"flex flex-col text-center h-full min-h-[80vh] w-[95vw] border-2 border-violet-500 rounded-2xl shadow-xl/30 shadow-sky-500 bg-gray-950 font-mono gap-8 overflow-hidden p-5 " + animate}>

            <div className="flex z-100 w-full">
                <button className="flex w-full justify-start" onClick={handleLeft}><ArrowBigLeft /></button>
                <button className="flex w-full justify-end" onClick={handleRight}><ArrowBigRight /></button>
            </div>

            {/* title */}

            <div className="flex sm:flex-col gap-3 p-4 m-4">

                {/* title on desktop */}

                <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-violet-600 text-transparent bg-clip-text animate-slide-in-top hidden sm:block">
                    <p className="font-bold tracking-wide sm:text-3xl md:text-4xl text-[clamp(1rem,4vw,2rem)]">
                        E aí! Eu sou <span className="text-emerald-600">Matheus Henrique</span>. Ou também, <span className="text-rose-500">Mathen!</span>
                    </p>
                </h1>

                {/* title on mobile */}

                <div className="flex flex-col items-center justify-center">

                    <p className="font-bold tracking-wide text-[clamp(1rem,4vw,2rem)] block sm:hidden animate-slide-in-top
                    font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-violet-600 text-transparent bg-clip-text">
                        E aí! Eu sou <span className="text-emerald-600">Matheus Henrique.</span>
                    </p>
                    <p className="font-bold text-[clamp(1rem,4vw,2rem)] block sm:hidden animate-slide-in-left
                    font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-violet-600 text-transparent bg-clip-text">
                        Ou também, <span className="text-rose-500">Mathen!</span>
                    </p>
                </div>

                {/* // vai pro footer */}

                {/* <p className="animate-slide-in-top sm:text-2xl md:text-3xl tracking-wide text-shadow-lg text-shadow-violet-700 text-[clamp(0.5rem,5vw,2rem)]">
                        dev web full stack
                    </p> */}
            </div>

            <div id="pages" className="flex flex-col h-full md:min-h-[50vh] w-full justify-center text-[clamp(0.2rem,1rem,2rem)]">

                {aboutMePages()[count]}

            </div>

            <div>

                <h1>tem interesse em um projeto?</h1>

                <h1>me mande uma mensagem!</h1>
            </div>



        </div>

    )
}

export default AboutMe