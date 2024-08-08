import styled from "styled-components";
import Title from "../ui/Title";
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiReactquery, SiRedux, SiVite } from "react-icons/si";

const StyledBox = styled.div`
    display: inline-block;
    padding: 20px;
    margin: 15px;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: #1E293B;
    }
`
const StyledSlider = styled.div`
    animation: slide 20s infinite linear;
    
    @keyframes slide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
`

const Skills = () => {
    return ( 
        <div className="skills bg-[#979795] px-10 sm:px-20 md:px-40 py-16">
            <Title>Skills & Technologies</Title>
            <div className="overflow-hidden">
                <div className="flex">
                <StyledSlider className="slider ml-20 my-8 whitespace-nowrap">
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                    rounded-2xl border-2 border-yellow-300 transition">
                        <FaHtml5 className="text-5xl mx-auto mb-6" />
                        <span className="font-bold">HTML5</span>
                    </StyledBox>
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                    rounded-2xl border-2 border-yellow-300 transition">
                        <FaCss3Alt className="text-5xl mx-auto mb-6" />
                        <span className="font-bold">CSS3</span>
                    </StyledBox>
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                    rounded-2xl border-2 border-yellow-300 transition">
                        <IoLogoJavascript className="text-5xl mx-auto mb-6" />
                        <span className="font-bold">Javascript</span>
                    </StyledBox>
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                    rounded-2xl border-2 border-yellow-300 transition">
                        <FaReact className="text-5xl mx-auto mb-6" />
                        <span className="font-bold">Raect.js</span>
                    </StyledBox>
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                    rounded-2xl border-2 border-yellow-300 transition">
                        <RiTailwindCssFill className="text-5xl mx-auto mb-6" />
                        <span className="font-bold">Tailwind</span>
                    </StyledBox>
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                    rounded-2xl border-2 border-yellow-300 transition">
                        <FaBootstrap className="text-5xl mx-auto mb-6" />
                        <span className="font-bold">BootStrap</span>
                    </StyledBox>
                </StyledSlider>
                
                <StyledSlider className="slider my-8 whitespace-nowrap">
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                    rounded-2xl border-2 border-yellow-300 transition">
                        <FaHtml5 className="text-5xl mx-auto mb-6" />
                        <span className="font-bold">HTML5</span>
                    </StyledBox>
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                    rounded-2xl border-2 border-yellow-300 transition">
                        <FaCss3Alt className="text-5xl mx-auto mb-6" />
                        <span className="font-bold">CSS3</span>
                    </StyledBox>
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                    rounded-2xl border-2 border-yellow-300 transition">
                        <IoLogoJavascript className="text-5xl mx-auto mb-6" />
                        <span className="font-bold">Javascript</span>
                    </StyledBox>
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                    rounded-2xl border-2 border-yellow-300 transition">
                        <FaReact className="text-5xl mx-auto mb-6" />
                        <span className="font-bold">Raect.js</span>
                    </StyledBox>
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                    rounded-2xl border-2 border-yellow-300 transition">
                        <RiTailwindCssFill className="text-5xl mx-auto mb-6" />
                        <span className="font-bold">Tailwind</span>
                    </StyledBox>
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                    rounded-2xl border-2 border-yellow-300 transition">
                        <FaBootstrap className="text-5xl mx-auto mb-6" />
                        <span className="font-bold">BootStrap</span>
                    </StyledBox>
                </StyledSlider>
                </div>

                <div className="flex">
                    <StyledSlider className="slider my-8 whitespace-nowrap">
                        <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                        rounded-2xl border-2 border-yellow-300 transition">
                            <RiNextjsFill className="text-5xl mx-auto mb-6" />
                            <span className="font-bold">Nextjs</span>
                        </StyledBox>
                        <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                        rounded-2xl border-2 border-yellow-300 transition">
                            <SiRedux className="text-5xl mx-auto mb-6" />
                            <span className="font-bold">Redux</span>
                        </StyledBox>
                        <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                        rounded-2xl border-2 border-yellow-300 transition">
                            <SiReactquery className="text-5xl mx-auto mb-6" />
                            <span className="font-bold">React Query</span>
                        </StyledBox>
                        <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                        rounded-2xl border-2 border-yellow-300 transition">
                            <FaGithub className="text-5xl mx-auto mb-6" />
                            <span className="font-bold">Github</span>
                        </StyledBox>
                        <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                        rounded-2xl border-2 border-yellow-300 transition">
                            <SiVite className="text-5xl mx-auto mb-6" />
                            <span className="font-bold">Vite.js</span>
                        </StyledBox>
                    </StyledSlider>

                    <StyledSlider className="slider my-8 whitespace-nowrap">
                    <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                        rounded-2xl border-2 border-yellow-300 transition">
                            <RiNextjsFill className="text-5xl mx-auto mb-6" />
                            <span className="font-bold">Nextjs</span>
                        </StyledBox>
                        <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                        rounded-2xl border-2 border-yellow-300 transition">
                            <SiRedux className="text-5xl mx-auto mb-6" />
                            <span className="font-bold">Redux</span>
                        </StyledBox>
                        <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                        rounded-2xl border-2 border-yellow-300 transition">
                            <SiReactquery className="text-5xl mx-auto mb-6" />
                            <span className="font-bold">React Query</span>
                        </StyledBox>
                        <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                        rounded-2xl border-2 border-yellow-300 transition">
                            <FaGithub className="text-5xl mx-auto mb-6" />
                            <span className="font-bold">Github</span>
                        </StyledBox>
                        <StyledBox className="box w-[200px] h-[150px] bg-slate-800 text-slate-50 text-center 
                        rounded-2xl border-2 border-yellow-300 transition">
                            <SiVite className="text-5xl mx-auto mb-6" />
                            <span className="font-bold">Vite.js</span>
                        </StyledBox>
                    </StyledSlider>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;