"use client"

import { useEffect, useState } from "react"

const Skills = () => {
    const [animate, setAnimate] = useState<string>(" ")
    const [animate2, setAnimate2] = useState<string>(" ")

    useEffect(() => {
        const h = window.screen.height

        window.addEventListener("scroll", () => {
            if (window.scrollY > h - (h * 0.2) && window.scrollY < h * 2) {
                setAnimate("animate-slide-in-right")
                setTimeout(() => setAnimate2("animate-slide-in-left"), 500)
            }

            if (window.scrollY > h * 2 || window.scrollY < (h * 0.1)) {
                setAnimate(" ")
                setAnimate2(" ")
            }
        })
    }, [animate, animate2])

    if (animate.includes(" ")) {
        return <div className="h-screen md:w-2/3 w-11/12"></div>
    }

    if (animate2.includes(" ")) {
        return (
            <div className={"md:w-2/3 flex flex-col items-center h-screen w-11/12 border-2 border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 rounded-2xl overflow-hidden font-mono p-2 gap-3 " + animate}>
            </div>
        )
    }

    return (
        <div className={"flex flex-col items-center h-screen md:w-2/3 w-11/12 border-2 border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 rounded-2xl overflow-hidden font-mono md:p-2 p-1 gap-3 " + animate}>

            {/* Principais */}

            <h1 className={"p-3 text-2xl text-slate-100 " + animate2}>
                Principais
            </h1>

            <div className={"flex md:flex-row text-xl p-2 md:w-4/5 gap-3 " + animate2}>

                <div className="text-center hover:scale-110 flex flex-col items-center">
                    <h1>Typescript</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/typescript-programming-language-icon.png"
                        className="rounded-3xl md:w-50 md:h-50 w-30 h-30" />
                </div>
                <div className="text-center hover:scale-110 flex flex-col items-center">
                    <h1>NextJs</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png" className="rounded-2xl md:w-50 md:h-50 w-30 h-30" />
                </div>
                <div className="text-center hover:scale-110 flex flex-col items-center">
                    <h1>React</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png" className="rounded-2xl md:w-50 md:h-50 w-30 h-30" />
                </div>
                <div className="text-center hover:scale-110 flex flex-col items-center hidden md:block">
                    <h1>NodeJs</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png" className="rounded-2xl md:w-50 md:h-50" />
                </div>
                <div className="text-center hover:scale-110 flex flex-col items-center hidden md:block">
                    <h1>ExpressJs</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png" className="rounded-2xl md:w-50 md:h-50" />
                </div>

                <div className="text-center hover:scale-110 flex flex-col items-center hidden md:block">
                    <h1>Tailwind</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png" className="rounded-2xl md:w-40 md:h-40" />
                </div>

            </div>

            <div className={"flex md:flex-row text-xl p-2 " + animate2}>

                <div className="text-center hover:scale-110 flex flex-col items-center md:hidden">
                    <h1>NodeJs</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png" className="rounded-2xl w-30 h-30" />
                </div>
                <div className="text-center hover:scale-110 flex flex-col items-center md:hidden">
                    <h1>ExpressJs</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png" className="rounded-2xl w-30 h-30" />
                </div>

                <div className="text-center hover:scale-110 flex flex-col items-center md:hidden">
                    <h1>Tailwind</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png" className="rounded-2xl w-30 h-30" />
                </div>
            </div>

            {/* Conhecimentos Gerais */}

            <h1 className={"p-3 text-xl text-slate-100 " + animate2}>
                Conhecimentos Gerais
            </h1>

            <div className={"flex flex-row p-2 gap-5 h-1/4 items-center md:w-full overflow-hidden " + animate2}>

                <div className="flex flex-row animate-marquee p-2 gap-3">

                    <div className="text-center hover:scale-110">
                        <h1>Java</h1>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/java-programming-language-icon.png" className="rounded-2xl md:w-40 md:h-40 w-20 h-20"
                        />
                    </div>

                    <div className="text-center hover:scale-110">
                        <h1>Python</h1>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png" className="rounded-2xl md:w-40 md:h-40 w-20 h-20"
                        />
                    </div>

                    <div className="text-center hover:scale-110">
                        <h1>JavaScript</h1>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png" className="rounded-3xl md:w-40 md:h-40 w-20 h-20" />
                    </div>

                    <div className="text-center hover:scale-110">
                        <h1>HTML</h1>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png" className="rounded-2xl w-20 h-20 md:w-40 md:h-40" />
                    </div>

                    <div className="text-center hover:scale-110">
                        <h1>CSS</h1>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png" className="rounded-2xl w-20 h-20 md:w-40 md:h-40" />
                    </div>

                </div>


            </div>

            {/* Banco de Dados */}

            <h1 className={"p-3 text-xl text-slate-100 " + animate2}>
                Banco de Dados
            </h1>

            <div className={"flex flex-row overflow-hidden h-1/4 md:w-full items-center " + animate2}>

                <div className="flex flex-row animate-marquee p-2 gap-3">

                    <div className="text-center hover:scale-110">
                        <h1>MongoDB</h1>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png" className="rounded-2xl w-20 h-20 md:w-40 md:h-40" />
                    </div>

                    <div className="text-center hover:scale-110">
                        <h1>PrismaORM</h1>
                        <img src="prismORM.png" className="rounded-2xl w-20 h-20 md:w-40 md:h-40" />
                    </div>

                    <div className="text-center hover:scale-110">
                        <h1>MySql</h1>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mysql-icon.png" className="rounded-2xl w-20 h-20 md:w-40 md:h-40" />
                    </div>

                    <div className="text-center hover:scale-110">
                        <h1>Supabase</h1>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/supabase-icon.png" className="rounded-2xl w-20 h-20 md:w-40 md:h-40" />
                    </div>

                    <div className="text-center hover:scale-110">
                        <h1>PostgreSQL</h1>
                        <img src="postgre.png" className="rounded-2xl w-20 h-20 md:w-40 md:h-40" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Skills