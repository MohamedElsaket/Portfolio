import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Navbar = () => {
  const [show, setShow] = useState("top-[-100%]");

  function showList() {
    if (show === "top-[-100%]") {
      setShow("top-[56px]");
      disablePageScroll();
    } else {
      setShow("top-[-100%]");
      enablePageScroll();
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 md:px-12 lg:px-20 py-4 text-slate-200">
        <div className="absolute inset-0 bg-c-1/50 backdrop-blur-md flex items-center justify-center -z-50"></div>
        <a href="#home" className="text-yellow-500 text-xl">
          DEV.Mohamed
        </a>
        <div>
          <FaListUl className="md:hidden" onClick={showList} />

          <ul className="md:flex items-center gap-8 hidden">
            <li className="hover:text-yellow-400 duration-300">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-yellow-400 duration-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-yellow-400 duration-300">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-yellow-400 duration-300">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-yellow-400 duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="links">
        <ul
          className={`fixed text-slate-50 h-full backdrop-blur-md w-full z-40 md:hidden flex flex-col items-center gap-8
                     left-[50%] ${show} translate-x-[-50%] duration-700`}
        >
          <li className="hover:text-yellow-400 duration-100 py-4">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-yellow-400 duration-100 py-4">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-yellow-400 duration-100 py-4">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-yellow-400 duration-100 py-4">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-yellow-400 duration-100 py-4">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
