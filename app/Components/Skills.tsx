"use client"

import { useCallback, useEffect, useState } from "react"

const Skills = () => {
    const [animate, setAnimate] = useState<string>(" ")
    const [animate2, setAnimate2] = useState<string>(" ")

    useEffect(() => {
        const h = window.screen.height

        window.addEventListener("scroll", () => {
            if (window.scrollY > h - (h * 0.4) && window.scrollY < h * 2) {
                setAnimate("animate-slide-in-right")
                setTimeout(() => setAnimate2("animate-slide-in-left"), 500)
            }

            // if (window.scrollY > (h * 2) || window.scrollY < (h * 0.1)) {
            //     setAnimate(" ")
            //     setAnimate2(" ")
            // }
        })
    }, [animate, animate2])

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

    const [skills, setSkills] = useState(skillsList)

    class functionsCategory {

        all() {
            setSkills([])
            setTimeout(() => {
                setSkills(skillsList)
            }, 200);

        }

        principal() {
            setSkills([])
            setTimeout(() => {
                const list = skillsList.filter(skill => skill.category.includes("principal"))
                setSkills(list)
            }, 200);
        }

        geral() {
            setSkills([])
            setTimeout(() => {
                const list = skillsList.filter(skill => skill.category.includes("geral"))
                setSkills(list)
            }, 200);
        }

        database() {
            setSkills([])
            setTimeout(() => {
                const list = skillsList.filter(skill => skill.category.includes("database"))
                setSkills(list)
            }, 200);
        }
    }

    if (animate.includes(" ")) {
        return <div className="h-[85vh] w-[95vw]"></div>
    }

    if (animate2.includes(" ")) {
        return (
            <div className={"flex flex-col items-center h-[85vh] w-[95vw] border-2 border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 rounded-2xl overflow-hidden font-mono p-2 gap-3 " + animate}>
            </div>
        )
    }

    return (
        <div className={"flex flex-col h-full overflow-hidden w-[95vw] border-2 border-violet-500 shadow-xl/30 shadow-sky-500 bg-gray-950 rounded-2xl font-mono md:p-2 p-1 gap-3 " + animate}>


            <div className="flex w-full justify-center">
                <h1 className="text-[clamp(0.5rem,5vw,2rem)] sm:text-2xl p-3">Skills e Tecnologias</h1>
            </div>

            <div id="button-area" className="p-2 grid grid-cols-2 sm:grid-cols-4 md:flex md:justify-center md:items-center md:gap-4 gap-4 justify-items-center w-full">

                <button className="btn hover:scale-110 rounded-2xl outline-2 p-3 hover:cursor-pointer text-[clamp(0.2rem,5vw,2rem)] sm:text-lg bg-black focus:bg-purple-500" onClick={functionsCategory.prototype.all}>
                    Todos
                </button>

                <button className="btn hover:scale-110 rounded-2xl bg-black outline-2 p-3 hover:cursor-pointer text-[clamp(0.2rem,5vw,2rem)] sm:text-lg focus:bg-purple-500 bg-black focus:bg-purple-500" onClick={functionsCategory.prototype.principal}>
                    Principal
                </button>

                <button className="btn hover:scale-110 rounded-2xl outline-2 p-3 hover:cursor-pointer text-[clamp(0.2rem,4vw,2rem)] sm:text-lg bg-black focus:bg-purple-500" onClick={functionsCategory.prototype.geral}>
                    Noção geral
                </button>

                <button className="btn hover:scale-110 rounded-2xl outline-2 p-3 hover:cursor-pointer text-[clamp(0.2rem,4vw,2rem)] sm:text-lg bg-black focus:bg-purple-500" onClick={functionsCategory.prototype.database}>
                    Banco de Dados
                </button>

            </div>

            <div className={"grid grid-cols-5 sm:grid-cols-7 text-xl p-2 w-full h-[80vh] items-start gap-3 " + animate2}>

                {skills.map((item) => (
                    <div key={item.id} className="animate-opacity">

                        <div className="text-center hover:scale-110">
                            <h1 className="text-[clamp(1rem,1vw,10rem)] max-sm:hidden">{item.title}</h1>
                            <div className="flex justify-center">
                                <img src={item.src} className="rounded-2xl w-[clamp(10px,100vw,80px)]"
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