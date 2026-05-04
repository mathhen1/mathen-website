"use client"

import { useEffect, useState } from "react"

const Skills = () => {
    const [animate, setAnimate] = useState<string>(" ")
    const [animate2, setAnimate2] = useState<string>(" ")

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 700 && window.scrollY < 1800) {
                setAnimate("animate-slide-in-right")
                setTimeout(() => setAnimate2("animate-slide-in-left"), 500)
            }
            
            if (window.scrollY > 1800 || window.scrollY < 100) {
                setAnimate(" ")
                setAnimate2(" ")
            }
        })
    }, [animate, animate2])

    if (animate.includes(" ")) {
        return <div className="h-screen w-2/3"></div>
    }

    if (animate2.includes(" ")) {
        return (
            <div className={"flex flex-col items-center h-screen w-2/3 border-2 border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 rounded-2xl overflow-hidden font-mono p-2 gap-3 " + animate}>
            </div>
        )
    }

    return (
        <div className={"flex flex-col items-center h-screen w-2/3 border-2 border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 rounded-2xl overflow-hidden font-mono p-2 gap-3 " + animate}>
            {/* <div className="flex h-1/2 w-1/2 justify-center items-center border"> */}

            {/* Principais */}

            <h1 className={"p-3 text-2xl text-slate-100 " + animate2}>
                Principais
            </h1>

            <div className={"flex flex-row text-xl p-2 " + animate2}>

                <div className="text-center hover:scale-110">
                    <h1>Typescript</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/typescript-programming-language-icon.png"
                        className="rounded-3xl w-50" />
                </div>
                <div className="text-center hover:scale-110">
                    <h1>NextJs</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png" className="rounded-2xl w-50" />
                </div>
                <div className="text-center hover:scale-110">
                    <h1>React</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png" className="rounded-2xl w-50" />
                </div>
                <div className="text-center hover:scale-110">
                    <h1>NodeJs</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png" className="rounded-2xl w-50" />
                </div>
                <div className="text-center hover:scale-110">
                    <h1>ExpressJs</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png" className="rounded-2xl w-50" />
                </div>

                <div className="text-center hover:scale-110">
                    <h1>Tailwind</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png" className="rounded-2xl w-50" />
                </div>

            </div>

            {/* Conhecimentos Gerais */}

            <h1 className={"p-3 text-2xl text-slate-100  " + animate2}>
                Conhecimentos Gerais
            </h1>

            <div className={"flex flex-row gap-2 " + animate2}>

                <div className="text-center hover:scale-110">
                    <h1>Java</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/java-programming-language-icon.png" className="rounded-2xl w-40"
                    />
                </div>

                <div className="text-center hover:scale-110">
                    <h1>Python</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png" className="rounded-2xl w-40"
                    />
                </div>

                <div className="text-center hover:scale-110">
                    <h1>JavaScript</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png" className="rounded-3xl w-40" />
                </div>

                <div className="text-center hover:scale-110">
                    <h1>HTML</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png" className="rounded-2xl w-40" />
                </div>

                <div className="text-center hover:scale-110">
                    <h1>CSS</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png" className="rounded-2xl w-40" />
                </div>


            </div>

            {/* Banco de Dados */}

            <h1 className={"p-3 text-2xl text-slate-100 " + animate2}>
                Banco de Dados
            </h1>

            <div className={"flex flex-row p-2 gap-2 overflow-y-hidden " + animate2}>
                <div className="text-center hover:scale-110">
                    <h1>MongoDB</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png" className="rounded-2xl w-40" />
                </div>

                <div className="text-center hover:scale-110">
                    <h1>PrismaORM</h1>
                    <img src="prismORM.png" className="rounded-2xl w-40" />
                </div>

                <div className="text-center hover:scale-110">
                    <h1>MySql</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mysql-icon.png" className="rounded-2xl w-40" />
                </div>

                <div className="text-center hover:scale-110">
                    <h1>Supabase</h1>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/supabase-icon.png" className="rounded-2xl w-40" />
                </div>

                <div className="text-center hover:scale-110">
                    <h1>PostgreSQL</h1>
                    <img src="postgre.png" className="rounded-2xl w-40" />
                </div>


            </div>
            {/* </div> */}
        </div>
    )
}

export default Skills