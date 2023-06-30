import { motion } from "framer-motion"
import Accordion from "./Accordion"
import { fadeInLeft, fadeInRight, staggerAccordionContainer } from "../variants"
import { faqData } from "../data"


const Faq = () => {

  const {pretitle, title, accordions, imageFaq } = faqData

  return (
    <section className="section bg-algas bg-cover w-full bg-center bg-no-repeat opacity-80 lg:mt-20 min-h-[1150px] relative">
      <div className="container mx-auto">
        {/* Top */}
        <motion.div 
        variants={staggerAccordionContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{ once: false, amount: 0.4}}
        className="relative flex flex-col lg:flex-row justify-center lg:justify-start items-center pt-8 pb-16 lg:pt-8 lg:pb-8">
          {/* text */}
          <motion.div 
            variants={fadeInRight}
            className="lg:max-w-[45%] z-20 drop-shadow-tertiary">
            <h3 className="text-5xl uppercase text-black drop-shadow-tertiary">{pretitle}</h3>
            <h2 className="mb-6 lg:mb-12 drop-shadow-tertiary text-[#FFC000]">{title}</h2>
          </motion.div>
        
         
        </motion.div>

        {/* accordion */}
        <motion.div 
          variants={staggerAccordionContainer}
          initial='initial'
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.1}}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[10px]">
          {accordions.map(( accordion, id) => {
            return <Accordion 
              accordion={accordion}
              key={id}/>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Faq