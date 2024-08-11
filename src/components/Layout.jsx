import { useState } from "react";

const Layout = () => {
    const [opcity, setOpacity] = useState('opacity-0 m-0')

    window.addEventListener('load', () => {
        setOpacity('opacity-100 mb-32 md:mb-64')
    })

    return ( 
        <section className="flex items-center h-dvh uppercase font-bold px-8 sm:px-44 md:px-56" id="home">
            <div className={`z-10 ${opcity} duration-[2s]`}>
                <p className="text-5xl md:text-7xl mb-4 text-slate-200">I<span className="text-yellow-300">'</span>m Mohamed</p>
                <p className="w-fit rounded-lg text-xl tracking-widest text-yellow-300">front-end developer</p>
            </div>
        </section>
     );
}
 
export default Layout;