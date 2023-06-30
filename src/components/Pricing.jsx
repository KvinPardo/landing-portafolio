import React, { useState } from "react";
import { pricing } from "../data";
import { BsCheck } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

const Pricing = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="section-lg bg-gray-200">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center mb-7 lg:mb-[70px]">
          <h2 className="mb-3 lg:mb-[18px] font-bold text-4xl uppercase">
            Elige el mejor Plan
          </h2>
          <p className="max-w-[398px] mx-auto lg:text-2xl">Para tu problema!</p>
        </div>

        {/* cards */}
        <div className="flex flex-col mx-auto items-center gap-y-12 lg:flex-row lg:gap-x-[35px] px-4 lg:px-0">
          {pricing.map((card, currentIndex) => {
            // Destructure cards
            const { title, price, list, delay, buttonText } = card;
            return (
              <div
                onClick={() => setIndex(currentIndex)}
                className="bg-white w-full max-w-[368px] min-h-[660px] h-full cursor-pointer relative hover:border hover:border-[#262626] hover:scale-105 transition-all duration-300 group"
                key={currentIndex}
              >
                {/* card top */}
                <div
                  className={`${
                    index === currentIndex
                      ? "bg-[#262626] text-white "
                      : "bg-white text-black "
                  } text-center pt-[50px] pb-[34px] border-b transition relative group-hover:bg-[#262626] group-hover:text-white`}
                >
                  <div className="text-[24px] font-medium mb-[10px]">
                    {title}
                  </div>
                  <div className="text-[34px] font-semibold">{price}</div>
                </div>
                <div className="px-[30px] pt-[18px] pb-[30px]">
                  <p className="text-center mb-6 text-sm">
                    Encuentra el plan que mejor te acomode
                  </p>
                  {/* card list */}
                  <ul className="flex flex-col gap-5 mb-10 ">
                    {list.map((item, index) => {
                      // destructure item
                      const { name } = item;
                      return (
                        <li
                          className="flex items-center  rounded-md"
                          key={index}
                        >
                          <div className="flex items-center gap-4 justify-center p-4">
                            <BsCheck className="w-7 h-7 text-2xl bg-green-100 text-green-300 rounded-full" />
                            {name}
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  {/* button */}
                  <div className="absolute bottom-[30px] w-full left-0 right-0 px-[30px]">
                    <button
                      className={`${
                        index === currentIndex
                          ? "bg-[#727272] text-white"
                          : "bg-white "
                      } w-full h-[50px] rounded border  flex items-center justify-center transition relative text-orange`}
                    >
                      {buttonText}
                      {/* button icon */}
                      <div
                        className={`${
                          index === currentIndex
                            ? "bg-[#000000]"
                            : "bg-[#989898]"
                        } w-[50px] h-[50px] flex justify-center items-center absolute right-0 rounded text-white`}
                      >
                        <FiChevronRight />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
