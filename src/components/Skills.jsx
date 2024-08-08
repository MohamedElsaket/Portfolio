import styled from "styled-components";
import Title from "../ui/Title";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiReactquery, SiRedux, SiVite } from "react-icons/si";

const StyledBox = styled.div`
    &:hover {
        background-color: white;
        color: #1E293B;
    }
`

const Skills = () => {
    return ( 
        <div className="skills bg-[#979795] sm:px-20 md:px-40 py-16">
            <Title>Skills & Technologies</Title>
            <div className="boxs my-16 flex flex-wrap gap-10 justify-center">
                <StyledBox className="box w-32 h-32 bg-slate-800 text-slate-50 text-center 
                flex flex-col justify-center items-center gap-5 rounded-2xl border-2 border-yellow-300 transition">
                    <FaHtml5 className="text-5xl" />
                    <span className="font-bold">HTML5</span>
                </StyledBox>
                <StyledBox className="box w-32 h-32 bg-slate-800 text-slate-50 text-center 
                flex flex-col justify-center items-center gap-5 rounded-2xl border-2 border-yellow-300 transition">
                    <FaCss3Alt className="text-5xl" />
                    <span className="font-bold">CSS3</span>
                </StyledBox>
                <StyledBox className="box w-32 h-32 bg-slate-800 text-slate-50 text-center 
                flex flex-col justify-center items-center gap-5 rounded-2xl border-2 border-yellow-300 transition">
                    <IoLogoJavascript className="text-5xl" />
                    <span className="font-bold">Javascript</span>
                </StyledBox>
                <StyledBox className="box w-32 h-32 bg-slate-800 text-slate-50 text-center 
                flex flex-col justify-center items-center gap-5 rounded-2xl border-2 border-yellow-300 transition">
                    <FaReact className="text-5xl" />
                    <span className="font-bold">Raect.js</span>
                </StyledBox>
                <StyledBox className="box w-32 h-32 bg-slate-800 text-slate-50 text-center 
                flex flex-col justify-center items-center gap-5 rounded-2xl border-2 border-yellow-300 transition">
                    <RiTailwindCssFill className="text-5xl" />
                    <span className="font-bold">Tailwind</span>
                </StyledBox>
                <StyledBox className="box w-32 h-32 bg-slate-800 text-slate-50 text-center 
                flex flex-col justify-center items-center gap-5 rounded-2xl border-2 border-yellow-300 transition">
                    <FaBootstrap className="text-5xl" />
                    <span className="font-bold">BootStrap</span>
                </StyledBox>
                <StyledBox className="box w-32 h-32 bg-slate-800 text-slate-50 text-center 
                flex flex-col justify-center items-center gap-5 rounded-2xl border-2 border-yellow-300 transition">
                    <RiNextjsFill className="text-5xl" />
                    <span className="font-bold">Nextjs</span>
                </StyledBox>
                <StyledBox className="box w-32 h-32 bg-slate-800 text-slate-50 text-center 
                flex flex-col justify-center items-center gap-5 rounded-2xl border-2 border-yellow-300 transition">
                    <SiRedux className="text-5xl" />
                    <span className="font-bold">Redux</span>
                </StyledBox>
                <StyledBox className="box w-32 h-32 bg-slate-800 text-slate-50 text-center 
                flex flex-col justify-center items-center gap-5 rounded-2xl border-2 border-yellow-300 transition">
                    <FaHtml5 className="text-5xl" />
                    <span className="font-bold">React Query</span>
                </StyledBox>
                <StyledBox className="box w-32 h-32 bg-slate-800 text-slate-50 text-center 
                flex flex-col justify-center items-center gap-5 rounded-2xl border-2 border-yellow-300 transition">
                    <SiReactquery className="text-5xl" />
                    <span className="font-bold">Github</span>
                </StyledBox>
                <StyledBox className="box w-32 h-32 bg-slate-800 text-slate-50 text-center 
                flex flex-col justify-center items-center gap-5 rounded-2xl border-2 border-yellow-300 transition">
                    <SiVite className="text-5xl" />
                    <span className="font-bold">Vite.js</span>
                </StyledBox>
                
            </div>
        </div>
     );
}
 
export default Skills;