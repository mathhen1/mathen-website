"use client"

import { useEffect, useState } from "react"

const Skills = () => {
    const [animate, setAnimate] = useState<string>("animate-slide-in-right")
    const [animate2, setAnimate2] = useState<string>("animate-slide-in-left")

    // useEffect(() => {
    //     const h = window.screen.height

    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > h - (h * 0.4) && window.scrollY < h * 2) {
    //             setAnimate("animate-slide-in-right")
    //             setTimeout(() => setAnimate2("animate-slide-in-left"), 500)
    //         }

    //         if (window.scrollY > (h * 2) - h * 0.4 || window.scrollY < (h * 0.1)) {
    //             setAnimate(" ")
    //             setAnimate2(" ")
    //         }
    //     })
    // }, [animate, animate2])

    if (animate.includes(" ")) {
        return <div className="h-[85vh] md:w-2/3 w-11/12"></div>
    }

    if (animate2.includes(" ")) {
        return (
            <div className={"md:w-2/3 flex flex-col items-center h-[85vh] w-11/12 border-2 border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 rounded-2xl overflow-hidden font-mono p-2 gap-3 " + animate}>
            </div>
        )
    }

    const skillsMain = [{
        id: 0,
        title: "Typescript",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/typescript-programming-language-icon.png"
    },
    {
        id: 1,
        title: "NextJs",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
    },
    {
        id: 2,
        title: "React",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
    },
    {
        id: 3,
        title: "NodeJs",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png"
    },
    {
        id: 4,
        title: "ExpressJs",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png"
    },
    {
        id: 5,
        title: "Tailwind",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png"
    }

    ]

    const skillsGeneral = [
        {
            id: 0,
            title: "Java",
            src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/java-programming-language-icon.png"
        }, {
            id: 1,
            title: "Python",
            src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png"
        },
        {
            id: 2,
            title: "JavaScript",
            src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png"
        },
        {
            id: 3,
            title: "HTML",
            src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png"
        },
        {
            id: 4,
            title: "CSS",
            src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png"
        },
        {
            id: 5,
            title: "Java",
            src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/java-programming-language-icon.png"
        }
    ]

    const skillsBD = [
        {
            id: 0,
            title: "MongoDB",
            src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png"
        },
        {
            id: 1,
            title: "PrismaORM",
            src: "prismORM.png"
        },
        {
            id: 2,
            title: "MySQL",
            src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mysql-icon.png"
        },
        {
            id: 3,
            title: "Supabase",
            src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/supabase-icon.png"
        },
        {
            id: 4,
            title: "PostgreSQL",
            src: "postgre.png"
        },

    ]

    return (
        <div className={"flex flex-col items-center h-full sm:h-[85vh] w-full border-2 border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 rounded-2xl overflow-hidden font-mono md:p-2 p-1 gap-3 " + animate}>

            <div className="flex flex-col justify-center border">

                {/* Principais */}
                <h1 className="p-2">Principais</h1>

                <div className={"flex md:flex-row text-xl p-2 md:w-4/5 gap-3 " + animate2}>
                    {skillsMain.map((item) => (
                        <div key={item.id}>

                            <div className="text-center hover:scale-110">
                                <h1>{item.title}</h1>
                                <img src={item.src} className="rounded-2xl md:w-40 md:h-40 w-20 h-20"
                                />
                            </div>

                        </div>
                    )
                    )}
                </div>

                {/* Conhecimentos Gerais */}

                <h1 className={"p-3 text-xl text-slate-100 " + animate2}>
                    Conhecimentos Gerais
                </h1>

                <div className={"flex md:flex-row text-xl p-2 md:w-4/5 gap-3 " + animate2}>
                    {skillsGeneral.map((item) => (
                        <div key={item.id}>

                            <div className="text-center hover:scale-110">
                                <h1>{item.title}</h1>
                                <img src={item.src} className="rounded-2xl md:w-40 md:h-40 w-20 h-20"
                                />
                            </div>

                        </div>
                    )
                    )}
                </div>

                {/* Banco de Dados */}

                <h1 className={"p-3 text-xl text-slate-100 " + animate2}>
                    Banco de Dados
                </h1>

                <div className={"flex md:flex-row text-xl p-2 md:w-4/5 gap-3 " + animate2}>
                    {skillsBD.map((item) => (
                        <div key={item.id}>

                            <div className="text-center hover:scale-110">
                                <h1>{item.title}</h1>
                                <img src={item.src} className="rounded-2xl md:w-40 md:h-40 w-20 h-20"
                                />
                            </div>

                        </div>
                    )
                    )}
                </div>

            </div>
        </div>
    )
}

export default Skills