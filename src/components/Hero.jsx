import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import { hero } from "../data";
import Video from "/img/video-hero.mp4";

// import VideoHero from "../assets/video-hero.mp4";

const Hero = () => {
  //  Destructure hero data
  const { title, subtitle, buttonText, pretitle } = hero;

  return (
    <div className="">
      <div className="w-full h-full">
        <video
          className="w-full lg:h-[900px] object-cover h-screen"
          autoPlay
          loop
          muted
          src={Video}
        ></video>
        <div className="container mx-auto relative">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial='hidden'
            whileInView={'show'}
            className="absolute lg:top-[-450px] top-[-200px] left-0 flex flex-col justify-center items-center w-full h-full px-4"
          >
            <motion.h1
              variants={fadeIn("down", "tween", 0.4, 1.1)}
              className="text-white lg:text-4xl text-2xl tracking-widest font-bold uppercase w-full text-center "
            >
              {pretitle}
            </motion.h1>
            <motion.h3
              variants={fadeIn("right", "tween", 0.4, 1.4)}
              className="text-white uppercase lg:text-4xl tracking-wider w-full text-center font-bold text-2xl"
            >
              {title}
            </motion.h3>
            <motion.p
              variants={fadeIn("up", "tween", 0.6, 1.1)}
              className="text-white lg:text-2xl text-2xl w-full text-center text-[14px]"
            >
              {subtitle}
            </motion.p>
            <motion.button
              variants={fadeIn("down", "tween", 0.6, 1.1)}
              className="text-white text-xl px-[120px] py-2 border drop-shadow-lg lg:mt-12 mt-4"
            >
              {buttonText}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
