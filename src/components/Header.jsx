import React, { useEffect, useState } from "react";
import Logo from "../assets/logo-alga.webp";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { fadeIn, staggerContainer } from "../variants";
import { navigation } from "../data";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";


const headerVariants = {
  hidden: {
    padding: "10px 0 10px 0",
    background: "none",
  },
  show: {
    padding: "10px 0 10px 0",
    background: "rgba(0,0,0,92)",
    transition: {
      type: "fade",
    },
  },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsActive(true) : setIsActive(false);
    });
  });

  // const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     return window.scroll > 50 ? setBg(true) : setBg(false);
  //   });
  // });

  return (

    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isActive ? "show" : ""}
      className="fixed w-full z-50 py-4 transition-all duration-300"
    >
      <div className="container mx-auto relative">
        <div className="flex lg:justify-between justify-between items-center">
          {/* logo */}
          <a href="#" className="mx-auto lg:m-0">
            <img className="" src={Logo} alt="" />
          </a>
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className=" text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {NavMobile ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}
          <nav className="hidden lg:flex">
            <ul className="md:flex md:gap-x-12 ">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize text-white hover:border-b transition-all"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
