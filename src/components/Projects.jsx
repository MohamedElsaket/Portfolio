import styled from "styled-components";
import Title from "../ui/Title";
import { FaLink } from "react-icons/fa";

const StyledProject = styled.div`
    &:hover .link {
        bottom: 0;
    }
    `
const StyledLink = styled.div`
    transition: .5s;
`

const Projects = () => {
    return ( 
        <div className="projects bg-slate-950 py-16 border-b-2 border-yellow-300" id="projects">
            <Title>Featured Projects</Title>
            <div className="projects-container grid grid-cols-12 gap-8 px-8 lg:px-16 py-16">
                <StyledProject className="col-start-1 col-end-13 sm:col-span-6 lg:col-span-4 h-[250px]
                             bg-slate-950 border-2 rounded-xl border-yellow-300 overflow-hidden relative">
                    <img src="pizza.png" alt="" className="min-h-full hover:scale-110 duration-1000"/>
                    <StyledLink className="link absolute w-full h-[80px] bg-slate-700 left-0 bottom-[-100%]
                              flex items-center justify-between px-8 text-yellow-300">
                        <span>Pizza</span>
                        <a href="https://mohamedelsaket.github.io/Pizza/" target="_blank"><FaLink/></a>
                    </StyledLink>
                </StyledProject>
                <StyledProject className="col-start-1 col-end-13 sm:col-span-6 lg:col-span-4 h-[250px]
                             bg-slate-950 border-2 rounded-xl border-yellow-300 overflow-hidden relative">
                    <img src="meditro.png" alt="" className="min-h-full hover:scale-110 duration-1000"/>
                    <StyledLink className="link absolute w-full h-[80px] bg-slate-700 left-0 bottom-[-100%]
                              flex items-center justify-between px-8 text-yellow-300">
                        <span>MediTro</span>
                        <a href="https://mohamedelsaket.github.io/MediTro/" target="_blank"><FaLink/></a>
                    </StyledLink>
                </StyledProject>
                <StyledProject className="col-start-1 col-end-13 sm:col-span-6 lg:col-span-4 h-[250px]
                             bg-slate-950 border-2 rounded-xl border-yellow-300 overflow-hidden relative">
                    <img src="popcorn.png" alt="" className="min-h-full hover:scale-110 duration-1000"/>
                    <StyledLink className="link absolute w-full h-[80px] bg-slate-700 left-0 bottom-[-100%]
                              flex items-center justify-between px-8 text-yellow-300">
                        <span>Popcorn</span>
                        <a href="https://mohamedelsaket.github.io/Popcorn/" target="_blank"><FaLink/></a>
                    </StyledLink>
                </StyledProject>
                <StyledProject className="col-start-1 col-end-13 sm:col-span-6 lg:col-span-4 h-[250px]
                             bg-slate-950 border-2 rounded-xl border-yellow-300 overflow-hidden relative">
                    <img src="pixova.png" alt="" className="min-h-full hover:scale-110 duration-1000"/>
                    <StyledLink className="link absolute w-full h-[80px] bg-slate-700 left-0 bottom-[-100%]
                              flex items-center justify-between px-8 text-yellow-300">
                        <span>Pixova-Lite</span>
                        <a href="https://mohamedelsaket.github.io/Pixova-Lite/" target="_blank"><FaLink/></a>
                    </StyledLink>
                </StyledProject>
                <StyledProject className="col-start-1 col-end-13 sm:col-span-6 lg:col-span-4 h-[250px]
                             bg-slate-950 border-2 rounded-xl border-yellow-300 overflow-hidden relative">
                    <img src="stellar.png" alt="" className="min-h-full hover:scale-110 duration-1000"/>
                    <StyledLink className="link absolute w-full h-[80px] bg-slate-700 left-0 bottom-[-100%]
                              flex items-center justify-between px-8 text-yellow-300">
                        <span>Stellar</span>
                        <a href="https://mohamedelsaket.github.io/Stellar/" target="_blank"><FaLink/></a>
                    </StyledLink>
                </StyledProject>
                <StyledProject className="col-start-1 col-end-13 sm:col-span-6 lg:col-span-4 h-[250px]
                             bg-slate-950 border-2 rounded-xl border-yellow-300 overflow-hidden relative">
                    <img src="Leon.png" alt="" className="min-h-full hover:scale-110 duration-1000"/>
                    <StyledLink className="link absolute w-full h-[80px] bg-slate-700 left-0 bottom-[-100%]
                              flex items-center justify-between px-8 text-yellow-300">
                        <span>Leon</span>
                        <a href="https://mohamedelsaket.github.io/Leon/" target="_blank"><FaLink/></a>
                    </StyledLink>
                </StyledProject>
                
            </div>
        </div>
     );
}
 
export default Projects;