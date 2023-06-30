import React from "react";
import { companyFirst, companySecond } from "../data";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Company = () => {
  // Destructure company
  const { title, subtitle, text, image, items } = companyFirst;
  const { imageSecond, itemsSecond } = companySecond;

  return (
    <>
      <div className="section lg:mt-24">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="container mx-auto flex flex-col justify-center items-center "
        >
          <motion.h1
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="lg:text-4xl uppercase text-3xl text-[#FFC000]"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn("left", "tween", 0.8, 1.1)}
            className="lg:text-6xl font-bold uppercase text-3xl text-[#FFC000]"
          >
            {subtitle}
          </motion.p>
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="text-center lg:px-18 text-[16px] lg:pt-8"
          >
            {text}
          </motion.p>
        </motion.div>
      </div>

      <section className="section p-0 lg:py-12">
        <div className="container mx-auto">
          <div>
            <h3 className="text-[#5DE1E6] text-2xl lg:text-4xl font-bold uppercase">
              Primer Paso
            </h3>
            <p className="text-[#02175D] lg:text-2xl pb-6">
              PARA CARBONO AZUL EN PRODUCTOS
            </p>
          </div>
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col lg:flex-row lg:gap-x-[100px] relative"
          >
            {/* image */}
            <motion.div
              variants={fadeIn("right", "tween", 0.4, 1.1)}
              className="flex-1 lg:-order-1 w-full overflow-hidden"
            >
              <img
                src={`/img/${image}.jpg`}
                alt=""
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg hover:scale-105 transition-all duration-500 "
              />
            </motion.div>
            {/* text */}
            <div className="flex-1 flex flex-col justify-end lg:justify-center">
              <div className="flex lg:last:mb-0 py-4 pl-7">
                <h3 className="text-[#FFC000] text-4xl font-bold uppercase">
                  Farm
                </h3>
              </div>
              {/* items */}
              <div>
                {items.map((item, index) => {
                  // destructure
                  const { title, subtitle } = item;
                  return (
                    <motion.div
                      key={index}
                      className="flex mb-6 lg:last:mb-0 py-4"
                    >
                      <motion.div
                        variants={fadeIn("down", "tween", 0.4, 1.1)}
                        className="text-2xl mr-2 lg:text-3xl"
                      >
                        <IoIosCheckmarkCircle />
                      </motion.div>
                      <motion.div
                        variants={staggerContainer(0.3, 1)}
                        initial="hidden"
                        whileInView={"show"}
                      >
                        <motion.h4
                          variants={fadeIn("down", "tween", 0.4, 1.1)}
                          className="text-base lg:text-xl font-semibold mb-3"
                        >
                          {title}
                        </motion.h4>
                        <motion.p
                          variants={fadeIn("right", "tween", 0.4, 1.1)}
                          className="text-[14px]"
                        >
                          {subtitle}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section p-0 lg:py-[50px]">
        <div className="container mx-auto">
          <div className="flex w-full">
            <h3 className="text-[#5DE1E6] text-2xl lg:text-4xl font-bold uppercase py-6 lg:pb-12">
              Segundo Paso
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-x-[100px] ">
            {/* text */}

            <div className="flex-1 lg:-order-1 flex flex-col justify-end lg:justify-center">
              <div className="flex lg:last:mb-0 py-4 pl-7">
                <h3 className="text-[#FFC000] text-4xl font-bold uppercase">
                  Bio Products
                </h3>
              </div>
              {/* items */}
              <div>
                {itemsSecond.map((item, index) => {
                  // destructure
                  const { titleSecond, subtitleSecond } = item;
                  return (
                    <div
                      key={index}
                      className="flex mb-6 lg:last:mb-0 py-2 mt-4"
                    >
                      <div className="text-2xl mr-2 lg:text-3xl">
                        <IoIosCheckmarkCircle />
                      </div>
                      <motion.div
                        variants={staggerContainer(0.3, 1)}
                        initial="hidden"
                        whileInView={"show"}
                      >
                        <motion.h3
                          variants={fadeIn("left", "tween", 0.4, 1.1)}
                          className="text-base lg:text-xl font-semibold mb-3"
                        >
                          {titleSecond}
                        </motion.h3>
                        <motion.div
                          variants={fadeIn("right", "tween", 0.4, 1.1)}
                          className="text-[14px]"
                        >
                          {subtitleSecond}
                        </motion.div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* image */}

            <motion.div
              variants={staggerContainer(0.3, 1)}
              initial="hidden"
              whileInView={"show"}
              className="flex-1 -order-1 w-full overflow-hidden "
            >
              <motion.div variants={fadeIn("left", "tween", 0.4, 1.1)}>
                <img
                  src={`/img/${imageSecond}.jpg`}
                  alt=""
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg hover:scale-105 transition-all duration-500"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
