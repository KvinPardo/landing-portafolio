import React from "react";

import ImagenSlider from "./ImagenSlider";
// import data
import { slider } from "../data";

const Slider = () => {
  // Destructure imagenes
  const { title, subtitle } = sliderImagenes;

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className="title max-w-[245px] lg:mt-[30px] lg:mb-[90px]">
              {title}
            </h2>
            <p className="max-w-[245px] lg:mb-12">{subtitle}</p>
          </div>

          {/* slider */}
          <div className="lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24">
            <ImagenSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
