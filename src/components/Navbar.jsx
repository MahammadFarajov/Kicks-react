import React, { useRef, useState } from 'react'
import Logo from "../assets/Logo (2).png"
import { MdKeyboardArrowDown } from 'react-icons/md'
import { IoIosSearch } from 'react-icons/io'
import { HiUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Menu from './Menu'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);
export default function Navbar() {
  const headerRef = useRef()
  const [isOpen, setIsOpen] = useState(false)
  useGSAP(
    () => {
      gsap.to("#nav", {
        backdropFilter: "blur(px)",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          scrub: 1,
        }
      });
      gsap.to("#logo", {
        opacity: 0,
        display: "none",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          scrub: 1,
        }
      });
      gsap.to("#nav", {
        maxWidth: "1000px",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          scrub: 1,
        }
      });
    },  
    { scope: headerRef }
  )
  return (
    <header ref={headerRef} className='sticky sm:px-4 top-0 md:pt-4 z-50'>
      <nav id='nav' className='p-8 container bg-customwhite rounded-[24px] mt-8 mb-6 flex justify-between items-center'>
          <AnimatePresence>
            {isOpen && <Menu />}
          </AnimatePresence>
          <motion.div animate={isOpen ? "open" : "closed"} onClick={() => setIsOpen(!isOpen)} className='w-[120px] z-50 static md:hidden cursor-pointer h-6 flex flex-col justify-between items-center'>
                    <motion.div 
                    variants={{
                      open: {
                        height: "2px",
                        width: "100%",
                        marginLeft: "auto",
                      },
                      closed: {
                        height: "2px",
                        width: "100%",
                        marginLeft: "auto",
                      },
                    }}
                    className='h-0.5 bg-customblack w-full'></motion.div>
                    <motion.div
                    variants={{
                      open: {
                        height: "2px",
                        width: "75%",
                        marginLeft: "auto",
                      },
                      closed: {
                        height: "2px",
                        width: "100%",
                        marginLeft: "auto",
                      },
                    }}
                    className='h-0.5 bg-customblack w-full'></motion.div>
                    <motion.div
                    variants={{
                      open: {
                        height: "2px",
                        width: "50%",
                        marginLeft: "auto",
                      },
                      closed: {
                        height: "2px",
                        width: "100%",
                        marginLeft: "auto",
                      },
                    }}
                    className='h-0.5 bg-customblack w-full'></motion.div>
          </motion.div>
        <ul className='flex md:gap-10 sm:bg-customwhite md:flex  md:h-fit md:p-0 md:static md:w-auto sm:hidden md:flex-row items-center'>
            <li className='list-none text-[#232321] font-semibold flex items-center gap-1'>New Drops 🔥</li>
            <li className='list-none text-[#232321] font-semibold flex items-center gap-1'>Men <MdKeyboardArrowDown /></li>
            <li className='list-none text-[#232321] font-semibold flex items-center gap-1'>Women <MdKeyboardArrowDown /></li>
        </ul>
        <img id='logo' src={Logo} className='sm:hidden md:block' alt="" />
        <ul className='flex md:gap-10 sm:gap-[10.5px] items-center'>
            <li className='sm:hidden md:block'><IoIosSearch size={24} /></li>
            <Link to={"/cart"}><HiUser size={24} /></Link>
            <p className='bg-customorange text-customblack p-[5px] px-3 rounded-full'>0</p>
        </ul>
      </nav>
    </header>
  )
}