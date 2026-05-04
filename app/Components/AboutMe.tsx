"use client"

import { useEffect, useState } from "react"

const AboutMe = () => {

    const [animate, setAnimate] = useState<string>("")
    const [animate2, setAnimate2] = useState<string>("")

    useEffect(() => {
        setAnimate2("animate-slide-in-right")
        setTimeout(() => {
            setAnimate("animate-slide-in-top")
        }, 500)
    }, [animate, animate2])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 900) {
                setAnimate("")
                setAnimate2("")
            }
        })
    }, [])

    if (animate === "" && animate === "") {
        return <div className="h-screen w-2/3"></div>
    }

    if (animate === "") {
        return (
            <div className={"jane flex items-center justify-center h-screen w-2/3 border-2 border-violet-500 rounded-2xl divide-x-3 shadow-xl/30 shadow-sky-500 bg-gray-950 font-mono " + animate2}></div>
        )
    }

    return (
        <div className={"flex items-center justify-center h-screen w-2/3 border-2 border-violet-500 rounded-2xl divide-x-3 shadow-xl/30 shadow-sky-500 bg-gray-950 font-mono " + animate2}>

            <div className={"flex flex-1 justify-center " + animate}>
                <img src={"eu-foto.jpg"}
                    width={300}
                    height={300}
                    className="border rounded-3xl"></img>
            </div>

            <div className={"flex flex-1 justify-center " + animate}>
                <div className="flex flex-col">
                    <h1>Graduado em Analise e Desenvolvimento de Sistemas <br /> (Faculdade Aeso Barros Melo)</h1>
                    <br></br>
                    <h1>Especializando em Engenharia de Software <br /> (Centro Universitário Frassinetti do Recife)</h1>
                    <br></br>
                    <h1>Inglês - Nível Intermediário (Leitura, escrita e entendimento) <br /> (Wise Up Online) </h1>
                </div>
            </div>
        </div>

    )
}

export default AboutMe