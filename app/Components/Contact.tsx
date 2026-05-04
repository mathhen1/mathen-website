"use client"

import { useEffect, useState } from "react"

const Contact = () => {

    const [animate, setAnimate] = useState<string>(" ")
    const [animate2, setAnimate2] = useState<string>(" ")
    const [animate3, setAnimate3] = useState<string>(" ")

    useEffect(() => {

        const h = window.screen.height

        window.addEventListener("scroll", () => {
            if (window.scrollY > (h * 2)) {
                setAnimate("animate-slide-in-right")
                setAnimate2("animate-slide-in-left")
            }

            if (window.scrollY < h * 2) {
                setAnimate(" ")
                setAnimate2(" ")
            }
        })

    }, [animate, animate2])

    if (animate.includes(" ")) {
        return <div className={"flex flex-col items-center justify-center h-screen md:w-2/3 w-11/12 border-2 border-violet-500 rounded-2xl shadow-xl/30 shadow-sky-300 bg-gray-950 font-mono gap-4 overflow-hidden p-2 " + animate}></div>
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen md:w-2/3 w-11/12 border-2 border-violet-500 rounded-2xl shadow-xl/30 shadow-sky-300 bg-gray-950 font-mono gap-4 overflow-hidden p-2 ">

            <div className="text-2xl flex-none"><h1 className="p-2">Contato</h1></div>

            <div className="flex-none md:h-1/4 w-full flex justify-center items-center rounded-2xl overflow-x-hidden">

                <div className="flex flex-row w-full justify-end gap-4 animate-marquee">

                    <a><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-color-icon.png" className="w-20" /></a>

                    <a><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/gmail-icon.png" className="w-20" /></a>

                    <a><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png" className="w-20" /></a>

                    <a><img src="github2.png" className="w-20" /></a>

                </div>
            </div>


            <div className={"flex-1 border-2 border-violet-500 flex h-1/2 w-4/5 p-5 rounded-2xl justify-center items-center flex-col bg-slate-950 hover:scale-120 hover:transition hover:duration-500 hover:ease-in-out overflow-hidden md:h-3/4 md:w-1/3 " + animate}>

                <div className="flex flex-row gap-2">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/gmail-icon.png" className="w-5" />
                    <h1 className="">
                        mathen.dev.z@gmail.com
                    </h1>
                </div>

                <div className="flex flex-row gap-2">
                    <img src="github2.png" className="w-5" />
                    <h1 className="flex flex-row gap-2">
                        mathhen1
                    </h1>
                </div>

                <div className="flex flex-row gap-2">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/smartphone-mobile-icon.png" className="w-5" />
                    <h1 className="flex flex-row gap-2">
                        +55 081 9 9734-7970
                    </h1>
                </div>

                <div className="flex flex-row gap-2">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" className="w-5 rounded-lg" />
                    <h1 className="flex flex-row gap-2">
                        @theteuzz
                    </h1>
                </div>


            </div>

            <div className={"flex-1 border-2 border-violet-500 flex h-1/2 w-4/5 p-5 rounded-2xl justify-center items-center flex-col bg-slate-950 hover:scale-120 hover:transition hover:duration-500 hover:ease-in-out overflow-hidden md:h-3/4 md:w-1/3 " + animate2}>
                <h1>oi</h1>
            </div>


        </div>
    )
}

export default Contact