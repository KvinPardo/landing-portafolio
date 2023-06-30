import React, { useEffect, useState } from "react";
import Logo from "../assets/logo-alga.webp";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../data";
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scroll > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <div
      className={`${
        bg ? "bg-white" : "bg-red-600"
      } fixed left-0 w-full py-3 z-20 transition-all duration-200 bg-white`}
    >
      <div className="container mx-auto">
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
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}
          <nav className="hidden md:flex">
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
    </div>
  );
};

export default Header;
