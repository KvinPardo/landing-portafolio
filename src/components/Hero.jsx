import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import { hero } from "../data";
import Video from '/img/video-hero.mp4'

// import VideoHero from "../assets/video-hero.mp4";

const Hero = () => {
  //  Destructure hero data
  const { title, subtitle, buttonText, video } = hero;

  return (
    <section className="w-full h-full text-white relative z-10">
      <div className="h-[950px] flex">
        <video 
          autoPlay
          loop
          muted
          className="w-full h-full"
          src={`${video}`}></video>
      </div>
    </section>
  );
};

export default Hero;
