import React from "react";
import { companyFirst, companySecond } from "../data";

import { IoIosCheckmarkCircle } from "react-icons/io";

const Company = () => {
  // Destructure company
  const { title, subtitle, text, image, items } = companyFirst;
  const { titleSecond, subtitleSecond, imageSecond, itemsSecond } = companySecond;

  return (
    <>
      <div className="section">
        <div className="container mx-auto flex flex-col justify-center items-center ">
          <h1 className="lg:text-4xl font-bold uppercase">{title}</h1>
          <p className="lg:text-6xl uppercase">{subtitle}</p>
          <p className="text-center lg:px-18 text-[16px] lg:pt-8">{text}</p>
        </div>
      </div>

      <section className="section">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-x-[100px] relative">
            {/* image */}
            <div className="flex-1 order-1 lg:-order-1 w-full overflow-hidden">
              <img
                src={`/img/${image}.jpg`}
                alt=""
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg hover:scale-105 transition-all duration-500 "
              />
            </div>
            {/* text */}
            <div className="flex-1 flex flex-col justify-end lg:justify-center">
              {/* items */}
              <div>
                {items.map((item, index) => {
                  // destructure
                  const { title, subtitle } = item;
                  return (
                    <div key={index} className="flex mb-6 lg:last:mb-0">
                      <div className="text-2xl mr-4 lg:text-3xl">
                        <IoIosCheckmarkCircle />
                      </div>
                      <div>
                        <h4 className="text-base lg:text-xl font-semibold mb-3">
                          {title}
                        </h4>
                        <p className="text-[14px]">{subtitle}</p>
                        
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-x-[100px] ">
            {/* text */}
            <div className="flex-1 flex flex-col justify-end lg:justify-center">
              {/* items */}
              <div>
                {itemsSecond.map((item, index) => {
                  // destructure
                  const { titleSecond, subtitleSecond } = item;
                  return (
                    <div key={index} className="flex mb-6 lg:last:mb-0">
                      <div className="text-2xl mr-4 lg:text-3xl">
                        <IoIosCheckmarkCircle />
                      </div>
                      <div>
                        <h4 className="text-base lg:text-xl font-semibold mb-3">
                          {titleSecond}
                        </h4>
                        <p className="text-[14px]">{subtitleSecond}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* image */}
            <div className="flex-1 order-1 w-full overflow-hidden ">
              <img
                src={`/img/${imageSecond}.jpg`}
                alt=""
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
