"use client"

import { useEffect, useState } from "react"

const Contact = () => {

    const [animate, setAnimate] = useState<string>(" ")
    const [animate2, setAnimate2] = useState<string>(" ")

    useEffect(() => {

        const h = window.screen.height

        window.addEventListener("scroll", () => {
            if (window.scrollY > (h * 2)) {
                setAnimate("animate-slide-in-right")
                setAnimate2("animate-slide-in-left")
            }

            // if (window.scrollY < h * 2) {
            //     setAnimate(" ")
            //     setAnimate2(" ")
            // }
        })

    }, [animate, animate2])

    if (animate.includes(" ")) {
        return <div className={"flex flex-col items-center justify-center h-[85vh] w-[95vw] border-2 border-violet-500 rounded-2xl shadow-xl/30 shadow-sky-300 bg-gray-950 font-mono gap-4 overflow-hidden p-2 " + animate}></div>
    }

    return (
        <div className={"flex flex-col h-full w-[95vw] border-2 border-violet-500 rounded-2xl bg-gray-950 font-mono gap-4 overflow-hidden p-2 " + animate}>

            <div className="text-2xl flex w-full justify-center">
                <h1 className="p-2 border-b">
                    Contato
                </h1>
            </div>

            <div className="grid grid-cols-4 gap-4">

                <a><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-color-icon.png" className="w-20" /></a>

                <a><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/gmail-icon.png" className="w-20" /></a>

                <a><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png" className="w-20" /></a>

                <a><img src="github2.png" className="w-20" /></a>

            </div>

            <div className="flex flex-col">
                <form className="flex flex-col m-6 p-4 gap-4 border-2 rounded-2xl bg-slate-900 sm:w-[40vw]">

                    <h1 className="bg-purple-800 text-transparent bg-clip-text text-2xl text-shadow-xs text-shadow-gray-100">Deixe aqui seu recado!</h1>

                    <label htmlFor="nome">Nome Completo:</label>
                    <input type="text" placeholder="digite seu nome..."
                        className="bg-slate-800 rounded-2xl p-2" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="digite seu email..."
                        className="bg-slate-800 rounded-2xl p-2" />

                    <label htmlFor="reado">Recado:</label>
                    <textarea placeholder="Digite seu recado aqui!"
                        className="bg-slate-800 rounded-2xl p-2" />

                    <button type="submit" className="border rounded-2xl m-3 p-3">Enviar</button>
                </form>

                {/* card contatos rapidos */}

                <div className="flex flex-col overflow-hidden m-2 p-4 gap-3
                border-2 border-violet-500 
                rounded-2xl bg-slate-950 md:h-3/4 md:w-1/3 
                hover:scale-120 hover:transition hover:duration-500 hover:ease-in-out">

                    <div className="flex justify-center">
                        <h1 className="text-lg sm:text-xl border-b p-2">
                            contatos rapidos
                        </h1>
                    </div>

                    <div className="flex flex-row gap-2">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/gmail-icon.png" className="w-5" />
                        <h1 className="text-[clamp(0.2rem,4vw,6rem)]">
                            mathen.dev.z@gmail.com
                        </h1>
                    </div>

                    <div className="flex flex-row gap-2">
                        <img src="github2.png" className="w-5" />
                        <h1 className="text-[clamp(0.2rem,4vw,6rem)]">
                            mathhen1
                        </h1>
                    </div>

                    <div className="flex flex-row gap-2">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/smartphone-mobile-icon.png" className="w-5" />
                        <h1 className="text-[clamp(0.2rem,4vw,6rem)]">
                            +55 081 9 9734-7970
                        </h1>
                    </div>

                    <div className="flex flex-row gap-2">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" className="w-5 rounded-lg" />
                        <h1 className="text-[clamp(0.2rem,4vw,6rem)]">
                            @theteuzz
                        </h1>
                    </div>


                </div>

                <div className="flex flex-col gap-2 border-2 rounded-2xl">

                    <div className="flex justify-center">
                        <h1 className="border-b m-2 p-1">recados</h1>
                    </div>

                    <div className="flex m-2 p-2 border-2 
                border-violet-500 rounded-3xl justify-center items-center flex-col 
                bg-sky-500 
                hover:scale-120 hover:transition hover:duration-500 
                hover:ease-in-out overflow-hidden md:h-3/4 md:w-1/3">
                        <h1 className="font-bold text-purple-100 tracking-wide text-center animate-bounce">
                            entre em contato comigo!
                        </h1>
                    </div>

                    <div className="flex m-2 p-2 border-2 
                border-violet-500 rounded-2xl justify-center items-center flex-col 
                bg-green-600 
                hover:scale-120 hover:transition hover:duration-500 
                hover:ease-in-out overflow-hidden md:h-3/4 md:w-1/3">
                        <h1 className="font-bold text-purple-100 tracking-wide text-center">
                            estou disponivel para trabalhos! me envie uma mensagem!
                        </h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact