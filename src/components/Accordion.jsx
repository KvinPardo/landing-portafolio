import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { fadeInRight } from "../variants";

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Destructure accordion
  const { question, answer } = accordion;

  return (
    <motion.div variants={fadeInRight} className="max-w-[550px]">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className=" bg-white cursor-pointer rounded-[10px] h-[90px] px-[35px] flex items-center"
      >
        <div className="w-full flex justify-between items-center">
          {/* title */}
          <p className="font-medium max-w-[400px]">{question}</p>
          {/* icons */}
          <div className="transition-all duration-500">
            {isOpen ? (
              <motion.div initial="initial" animate={{ rotate: 180 }}>
                <HiOutlineMinus className="text-[28px] text-red-400" />
              </motion.div>
            ) : (
              <motion.div initial="initial" animate={{ rotate: 0 }}>
                <HiOutlinePlus className="text-[28px] text-blue-400" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* answer */}
      <div
        className={`${
          isOpen
            ? "max-h-[160px] p-8 bg-[#fff7f5] rounded-[10px] drop-shadow-primary my-2"
            : "max-h-0"
        } h-[160px] overflow-hidden transition-all`}
      >
        <p className="lead leading-[30px] mt-2">{answer}</p>
      </div>
    </motion.div>
  );
};

export default Accordion;
