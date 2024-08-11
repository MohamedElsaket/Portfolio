import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import styled from "styled-components";

const StyledNav = styled.div`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

const Navbar = () => {
    const [show, setShow] = useState('top-[-100%]')

    function showList() {
        show === 'top-[-100%]' ? setShow('top-[56px]') : setShow('top-[-100%]')
    }
    //top-[56px]

    return ( 
        <>
        <StyledNav className="navbar bg-slate-100 py-6 px-16 flex justify-between items-center fixed w-full z-50 shadow-slate-950">
            <h2>Logo</h2>
            <div>
                <FaListUl className="md:hidden" onClick={showList} />
                <ul className="md:flex items-center gap-8 hidden">
                    <li className="hover:text-yellow-400 duration-300"><a href="#home">Home</a></li>
                    <li className="hover:text-yellow-400 duration-300"><a href="#about">About</a></li>
                    <li className="hover:text-yellow-400 duration-300"><a href="#skills">Skills</a></li>
                    <li className="hover:text-yellow-400 duration-300"><a href="#projects">Projects</a></li>
                    <li className="hover:text-yellow-400 duration-300"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </StyledNav>
        <div className="links">
            <ul className={`fixed bg-slate-50 w-full z-40 md:hidden flex flex-col items-center gap-8
                     left-[50%] ${show} translate-x-[-50%] duration-700`}>
                <li className="hover:text-yellow-400 duration-100 py-4"><a href="#home">Home</a></li>
                <li className="hover:text-yellow-400 duration-100 py-4"><a href="#about">About</a></li>
                <li className="hover:text-yellow-400 duration-100 py-4"><a href="#skills">Skills</a></li>
                <li className="hover:text-yellow-400 duration-100 py-4"><a href="#projects">Projects</a></li>
                <li className="hover:text-yellow-400 duration-100 py-4"><a href="#contact">Contact</a></li>
            </ul>
        </div>
        </>
     );
}
 
export default Navbar;