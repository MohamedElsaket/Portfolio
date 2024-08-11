const Layout = () => {
    return ( 
        <section data-aos='fade-up' data-aos-offset='0' className="flex items-center h-dvh uppercase font-bold px-8 sm:px-44 md:px-56" id="home">
            <div className={`z-10 opacity-100 mb-32 md:mb-64 duration-[2s]`}>
                <p className="text-5xl md:text-7xl mb-4 text-slate-200">I<span className="text-yellow-300">'</span>m Mohamed</p>
                <p className="w-fit rounded-lg text-xl tracking-widest text-yellow-300">front-end developer</p>
            </div>
        </section>
     );
}
 
export default Layout;