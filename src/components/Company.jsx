import React from "react";
import { company } from "../data";
import Imagen from "../assets/slider1.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Company = () => {
  // Destructure company
  const { title, subtitle, text, image, items } = company;

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px] ">
          {/* image */}
          <div className="flex-1 order-1 lg:-order-1 w-full ">
            <img src={Imagen} alt="" className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg" />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col justify-end lg:justify-center">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            {/* items */}
            <div>
              {items.map((item, index) => {
                // destructure
                const { title, subtitle } = item;
                return (
                  <div className="flex mb-6 lg:last:mb-0">
                    <div className="text-2xl mr-4 lg:text-3xl">
                      <IoIosCheckmarkCircle />
                    </div>
                    <div>
                      <h4 className="text-base lg:text-xl font-semibold mb-3">{title}</h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
