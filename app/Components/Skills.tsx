"use client"

import { useCallback, useEffect, useState } from "react"

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

    const skillsList = [{
        id: 0,
        category: "principal",
        title: "Typescript",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/typescript-programming-language-icon.png"
    },
    {
        id: 1,
        category: "principal",
        title: "NextJs",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
    },
    {
        id: 2,
        category: "principal",
        title: "React",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
    },
    {
        id: 3,
        category: "principal",
        title: "NodeJs",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png"
    },
    {
        id: 4,
        category: "principal",
        title: "ExpressJs",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png"
    },
    {
        id: 5,
        category: "principal",
        title: "Tailwind",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png"
    },
    {
        id: 6,
        category: "geral",
        title: "Java",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/java-programming-language-icon.png"
    }, {
        id: 7,
        category: "geral",
        title: "Python",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png"
    },
    {
        id: 8,
        category: "geral",
        title: "JavaScript",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png"
    },
    {
        id: 9,
        category: "geral",
        title: "HTML",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png"
    },
    {
        id: 10,
        category: "geral",
        title: "CSS",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png"
    },

    {
        id: 11,
        category: "database",
        title: "MongoDB",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png"
    },
    {
        id: 12,
        category: "database",
        title: "PrismaORM",
        src: "prismORM.png"
    },
    {
        id: 13,
        category: "database",
        title: "MySQL",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mysql-icon.png"
    },
    {
        id: 14,
        category: "database",
        title: "Supabase",
        src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/supabase-icon.png"
    },
    {
        id: 15,
        category: "database",
        title: "PostgreSQL",
        src: "postgre.png"
    },
    ]


    return (
        <div className={"flex flex-col h-full sm:h-[85vh] w-full border-2 border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 rounded-2xl font-mono md:p-2 p-1 gap-3 " + animate}>

            {/* text-[clamp(1rem,5vw,2rem)] */}

            <div className="flex w-full justify-center">
                <h1 className="text-2xl p-3">Skills e Tecnologias</h1>
            </div>

            <div id="button-area" className="p-2 gap-4 flex w-full justify-center">
                <button className="btn hover:scale-110 hover:underline hover:cursor-pointer">Todos</button>
                <button className="btn hover:scale-110 hover:underline hover:cursor-pointer">principal</button>
                <button className="btn hover:scale-110 hover:underline hover:cursor-pointer">Noção Geral</button>
                <button className="btn hover:scale-110 hover:underline hover:cursor-pointer">Banco de Dados</button>
            </div>


            <div className={"grid grid-cols-5 text-xl p-2 w-full gap-3 border border-green-500 " + animate2}>

                {skillsList.map((item) => (
                    <div key={item.id} className="border border-violet-500 ">

                        <div className="text-center hover:scale-110">
                            <h1 className="text-[clamp(0.5rem,10vw,1rem)]">{item.title}</h1>
                            <div className="flex justify-center">
                                <img src={item.src} className="rounded-2xl w-[clamp(10px,80px,80px)]"
                                />
                            </div>
                        </div>

                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Skills