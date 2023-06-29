import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import { hero } from "../data";

import VideoHero from "../assets/video-hero.mp4";

const Hero = () => {
  //  Destructure hero data
  const { title, subtitle, buttonText } = hero;

  return (
    <section className="w-full h-full text-white relative z-10">
      <div className="w-full relative">
        <div className="w-full">
          <video
            autoPlay
            loop
            muted
            className=""
            src={VideoHero}
          ></video>
        </div>

        <div className="w-full z-10 lg:absolute flex flex-col justify-center items-center absolute lg:top-[50%] top-[50%] md:left-0 lg:-translate-x-0 lg:translate-y-[-50%]">
          <div className="container mx-auto text-center ">
            {/* title */}
            <h1 className="text-4xl mx-auto font-semibold lg:py-4 leading-tight">
              {title}
            </h1>
            <h2 className="text-2xl text-center">{subtitle}</h2>
            <button className="text-2xl border py-[9px] px-[35px] mb-[160px] lg:mb-0 lg:mt-12 backdrop-blur-md rounded-md ">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
