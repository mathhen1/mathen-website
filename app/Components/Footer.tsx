"use client"

import { useEffect, useState } from "react"

const Footer = () => {
    const year = new Date().getFullYear()

    const [animate, setAnimate] = useState<string>(" ")

    useEffect(() => {
        const h = window.screen.height
        window.addEventListener("scroll", () => {
            if (window.scrollY > (h * 2 + (h / 2))) {
                setAnimate("animate-slide-in-left")
            }
        })
    }, [])

    if (animate.includes(" ")) {
        return <div className="flex items-center justify-center w-1/2 h-50 gap-2"></div>
    }

    return (
        <div className={"flex items-center justify-center w-1/2 h-50 gap-2 " + animate}>
            <h1 className="flex justify-center">Copyright © {year} Matheus Henrique. Todos os Direitos reservados.</h1>
            <div className={"flex flex-row"}>
                <a href="https://www.linkedin.com/in/matheus-henrique-609083271/">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png" className="w-10" />
                </a>

                <a href="https://github.com/mathhen1">
                    <img src="github2.png" className="w-10" />
                </a>
            </div>
        </div>
    )
}

export default Footer