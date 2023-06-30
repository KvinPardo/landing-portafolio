import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";

import Logo from "/img/logo-alga.webp";
import Socials from "./Socials";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  // Scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive
          ? "bg-black/90 h-[90px] lg:h-[90px]"
          : "bg-none h-[90px] lg:h-[90px]"
      } fixed left-0 right-0 ${
        navMobile ? "bg-white" : ""
      } z-10 w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-evenly items-center h-full pl-[50px] pr-[60px]">
        {/* logo */}
        <a href="">
          <img src={Logo} alt="" className="" />
        </a>
        {/* nav - inicial escondido - en desktop svisible */}
        <div className="hidden xl:flex">
          <Nav />
        </div>

        {/* nav menu btn - showin por default*/}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer "
        >
          {navMobile ? <RiCloseFill className={`${navMobile ? "text-black" : "text-white"} text-2xl`}/> : <FiMenu className="text-2xl"/>}
          {/* <FiMenu
            className={`${navMobile ? "text-black" : "text-white"} text-2xl `}
          /> */}
        </div>

        {/*  Desktop */}
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0"} 
          ${
            isActive ? "top-[90px] lg:top-[90px]" : "top-[90px] lg:top-[90px]"
          } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile />
        </div>
        {/* Social Icons */}
        <div className="hidden">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
