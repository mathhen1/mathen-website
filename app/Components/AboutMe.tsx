"use client"

import { useEffect, useState } from "react"

const AboutMe = () => {

    return (
        <div className="flex items-center justify-center h-screen w-2/3 border-2 border-violet-500 rounded-2xl divide-x-3 shadow-xl/30 shadow-sky-500 bg-gray-950 
        font-mono animate-slide-in-right">

            <div className="flex flex-1 justify-center">
                <img src={"eu-foto.jpg"}
                    width={300}
                    height={300}
                    className="border rounded-3xl"></img>
            </div>

            <div className="flex flex-1 justify-center">
                <div className="flex flex-col">
                    <h1>Graduado em Analise e Desenvolvimento de Sistemas <br></br> (Aeso Barros Melo)</h1>
                    <br></br>
                    <h1>Especializando em Engenharia de Software <br></br> (Centro Universitário Frassinetti do Recife)</h1>
                    <br></br>
                    <h1>Inglês (Intermediário) - Leitura, escrita e entendimento</h1>
                </div>
            </div>
        </div>

    )
}

export default AboutMe