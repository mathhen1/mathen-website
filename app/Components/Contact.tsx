const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-2/3 border-2 border-violet-500 rounded-2xl shadow-xl/30 shadow-sky-300 bg-gray-950 font-mono gap-2 overflow-hidden">

            <div className="text-2xl"><h1>Contato</h1></div>
            {/* <h1>email: mathen.dev.z@gmail.com</h1>
            <h1>github: mathhen1 </h1> */}

            <div className="h-1/4 w-3/4 flex justify-center items-center border rounded-2xl overflow-x-hidden">

                <div className="flex flex-row w-full justify-end gap-4 animate-marquee">
                    <a><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-color-icon.png" className="w-20" /></a>

                    <a><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/gmail-icon.png" className="w-20" /></a>

                    <a><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png" className="w-20" /></a>

                    <a><img src="github2.png" className="w-20" /></a>

                </div>
            </div>

            <div className="border h-1/2 w-2/3">
                <div className="border flex h-1/3 w-1/4">

                </div>

            </div>


        </div>
    )
}

export default Contact