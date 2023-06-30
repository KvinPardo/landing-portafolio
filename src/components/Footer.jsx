import React from "react";

// import logo
import Logo from "../assets/logo-alga.webp";

// import icons
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-[70px] lg:p-12 bg-[#212529]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center lg:flex-row gap-y-5">
          {/* Logo */}
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          {/* copy right text */}
          <p className="text-white text-lg">&copy; 2023. All rights reserved.</p>
          {/* Social icons */}
          <div className="flex gap-x-4 text-black text-lg">
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:text-gray-400 transition">
              <FaYoutube />
            </div>
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:text-gray-400 transition">
              <FaInstagram />
            </div>
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:text-gray-400 transition">
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
