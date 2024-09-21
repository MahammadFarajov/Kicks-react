import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { motion } from 'framer-motion'

export default function Menu() {
  return (
    <motion.ul
    initial={{
        clipPath: "circle(0.4% at 0 0)"
    }}
    animate={{
        clipPath: "circle(144.4% at 100% 0)",
    }}
    exit={{clipPath: "circle(0.4% at 0 0)"}}
    transition={{
    duration: 0.5,
    }}
    className='flex md:gap-10 sm:flex-col sm:gap-10 sm:w-1/2 sm:pt-44 sm:bg-customwhite sm:z-50 sm:h-screen md:h-fit md:p-0 md:static md:w-auto sm:fixed sm:left-0 sm:top-0 md:flex-row items-center'>
        <li className='list-none text-[#232321] font-semibold flex items-center gap-1'>New Drops 🔥</li>
        <li className='list-none text-[#232321] font-semibold flex items-center gap-1'>Men <MdKeyboardArrowDown /></li>
        <li className='list-none text-[#232321] font-semibold flex items-center gap-1'>Women <MdKeyboardArrowDown /></li>
    </motion.ul>
  )
}
