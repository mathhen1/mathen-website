"use client"

import { useEffect, useState } from "react"

const Projects = () => {

    const [animate, setAnimate] = useState<string>("")

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1400) {
                setAnimate("animate-slide-in-right")
            }
        })
    }, [])

    return (
        (animate !== "") ?

            <div id="cards-project" className={"flex flex-row items-center justify-center p-5 gap-2 h-screen w-2/3 border-2 rounded-2xl border-violet-500 shadow-xl/30 shadow-sky-500 " + animate}>

                <div className="flex border h-1/2 w-1/4 justify-center p-2">

                    <div className="flex justify-center items-center border h-2/4 w-3/4">
                        <h1> oi</h1>
                    </div>

                </div>

                <div className="flex border h-1/2 w-1/4 justify-center p-2">

                    <div className="flex justify-center items-center border h-2/4 w-3/4">
                        <h1> oi</h1>
                    </div>

                </div>

                <div className="flex border h-1/2 w-1/4 justify-center p-2">

                    <div className="flex justify-center items-center border h-2/4 w-3/4">
                        <h1> oi</h1>
                    </div>

                </div>

            </div>

            : <></>




    )
}

export default Projects