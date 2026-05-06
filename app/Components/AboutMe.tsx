"use client"

import { useEffect, useState } from "react"

const AboutMe = () => {

    const [animate, setAnimate] = useState<string>(" ")
    const [animate2, setAnimate2] = useState<string>(" ")

    useEffect(() => {
        const h = window.screen.height

        setTimeout(() => {
            setAnimate("animate-slide-in-right")
            setTimeout(() => setAnimate2("animate-slide-in-top"), 500)
        }, 1500);

        window.addEventListener("scroll", () => {

            if (window.scrollY > h) {
                setAnimate2(" ")
                setAnimate(" ")
            }

            if (window.scrollY < (h / 2)) {
                setAnimate("animate-slide-in-right")
                setTimeout(() => setAnimate2("animate-slide-in-top"), 600)
            }
        })
    }, [animate2, animate])

    if (animate.includes(" ")) {
        return <div className="h-screen w-full md:w-2/3"></div>
    }

    if (animate2.includes(" ")) {
        return <div className={"flex items-center justify-center h-screen md:w-2/3 w-full border-2 border-violet-500 rounded-2xl divide-x-3 shadow-xl/30 shadow-sky-500 bg-gray-950 font-mono gap-5 " + animate}></div>
    }

    return (
        <div className={"flex items-center justify-center h-screen md:w-2/3 w-full border-2 border-violet-500 rounded-2xl divide-x-3 shadow-xl/30 shadow-sky-500 bg-gray-950 font-mono gap-5 " + animate}>

            <div className={"flex flex-1 justify-center " + animate2}>
                <img src={"eu-foto.jpg"}
                    className="border rounded-3xl md:w-60 md:h-80 w-50 h-70"></img>
            </div>

            <div className={"flex flex-1 justify-center " + animate2}>
                <div className="flex flex-col text-lg">
                    <h1 className="font-extrabold bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Graduado em Analise e Desenvolvimento de Sistemas <br /> (Faculdade Aeso Barros Melo)</h1>
                    <br />
                    <h1 className="font-extrabold bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Especializando em Engenharia de Software <br /> (Centro Universitário Frassinetti do Recife)</h1>
                    <br />
                    <h1 className="font-extrabold bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Inglês - Nível Intermediário <br /> (Leitura, escrita e entendimento) <br /> (Wise Up Online) </h1>
                </div>
            </div>
        </div>

    )
}

export default AboutMe