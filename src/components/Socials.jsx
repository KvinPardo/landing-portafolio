import React from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Socials = () => {
  return (
    <ul className="flex justify-center items-center gap-x-[30px] text-white">
      <li>
        <AiOutlineInstagram className="w-4 h-4"/>
      </li>
      <li>
        <AiOutlineWhatsApp className="w-4 h-4"/>
      </li>
      <li>
        <BiLogoGmail className="w-4 h-4"/>
      </li>
    </ul>
  );
};

export default Socials;
