import React from 'react'
import { motion } from 'framer-motion';

function Maequee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-[7vw]  rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden  whitespace-nowrap'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "liner", duration: 10}} className='text-[24vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-10 -mb-[7vw] pr-20 '>We are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "liner", duration: 10}} className='text-[24vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-10 -mb-[7vw] pr-20 '>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Maequee