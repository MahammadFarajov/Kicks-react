import React from 'react'
import { motion } from 'framer-motion'
import addlogo from "../assets/Vector.png"
import kickslogo from "../assets/Group (7).png"
import kickslogobig from "../assets/Logo (3).png" 
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
export default function Footer() {
  return (
    <div>
        <div className='rounded-[48px] w-full relative overflow-hidden container h-[931px] sm:h-[1489px] bg-customblue'>
            <div className='flex pt-16 pl-[72px] sm:flex-col md:flex-row sm:gap-10  md:items-center md:justify-between'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-4 items-start'>
                <p className='text-white text-[48px] sm:text-6xl uppercase font-semibold'>Join our KicksPlus <br /> Club & get 15% off</p>
                <p className='font-semibold text-xl text-customgray'>Sign up for free! Join the community.</p>
                </div>
                <div className='flex gap-1'>
                    <div className='relative'>
                        <input className='py-[14.5px] peer bg-customblue w-[330px] text-customgray border focus:outline-none border-customwhite rounded-lg px-4' type="email" id='email' name='email' placeholder='' />
                        <label className='absolute top-3 left-2 scale-90 peer-focus:top-3 peer-focus:scale-[0.8] text-customgray peer-focus:left-3 peer-placeholder-shown:scale-100 transition-all duration-300 peer-placeholder-shown:left-3 peer-placeholder-shown:top-1/2 -translate-y-1/2' htmlFor="email">Email address</label>
                    </div>
                    <button className='bg-customblack text-white font-medium text-[14px] px-6 py-[15.5px] rounded-lg'>Submit</button>
                </div>
            </div>
            <div className='relative md:ml-auto sm:mr-auto'>
                <motion.img initial={{ x: 0, y: -28 }} transition={{ duration: 1 }}  whileInView={{ x: 320, y: -28, rotate: 360, duration: 0.5}} src={addlogo} className='absolute' alt="" />
                <img src={kickslogo} alt="" />
            </div>
            </div>
            <motion.div initial={{ y: 600 }} transition={{ duration: 1 }} whileInView={{ y: 0}}  className='bg-customblack flex-col sm:mt-10 md:mt-64 sm:h-[900px] sm:w-full pt-10 px-12 flex absolute justify-between rounded-[48px] w-[1536px] md:h-[926px]'>
            <div className='flex md:flex-row justify-between sm:gap-10 sm:mb-[45px] sm:flex-col w-full'>
                <div className='flex flex-col gap-1'>
                <p className='text-[36px] font-semibold text-customorange'>About us</p>
                <p className='text-customgray text-lg font-semibold'>We are the biggest hyperstore in the universe. <br /> We got you all cover with our exclusive <br /> collections and latest drops.</p>
                </div>
                <div className='flex md:flex-row md:justify-between sm:flex-col sm:gap-6 md:gap-[128px]'>
                <div className='flex flex-col gap-2'>
                    <p className='text-customorange text-2xl font-semibold mb-4'>Categories</p>
                    <p className='text-customgray text-lg font-semibold'>Runners</p>
                    <p className='text-customgray text-lg font-semibold'>Runners</p>
                    <p className='text-customgray text-lg font-semibold'>Runners</p>
                    <p className='text-customgray text-lg font-semibold'>Runners</p>
                    <p className='text-customgray text-lg font-semibold'>Runners</p>
                    <p className='text-customgray text-lg font-semibold'>Runners</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-customorange text-2xl font-semibold mb-4'>Categories</p>
                    <p className='text-customgray text-lg font-semibold'>Runners</p>
                    <p className='text-customgray text-lg font-semibold'>Runners</p>
                    <p className='text-customgray text-lg font-semibold'>Runners</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-customorange text-2xl font-semibold mb-4'>Categories</p>
                    <div className='flex items-center gap-4'>
                    <FaFacebook color='white' size={20} />
                    <FaInstagram color='white' size={20} />
                    <FaTwitter color='white' size={20} />
                    <FaTiktok color='white' size={20} />
                    </div>
                </div>
                </div>
            </div>
            <img src={kickslogobig} alt="" />
            </motion.div>
        </div>
        <p className='mb-[18px] mt-7 gap-1 container sm:text-center flex justify-center border-b-black border-b w-fit'>© All rights reserved | Made with ❤️ by <span className='text-customblue'>Visiata Systems International</span></p>
    </div> 
  )
}
