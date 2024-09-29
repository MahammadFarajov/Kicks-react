import React, { useEffect, useState } from 'react'
import shoe from "../assets/image 14.png"
import shoesm from "../assets/image 14 (1).png"
import shoead_1 from "../assets/image 31.png"
import shoead_2 from "../assets/image 31 (1).png"
import shoemini from "../assets/Rectangle 1.png"
import shoemini1 from "../assets/Rectangle 2.png"
import shoead from "../assets/Rectangle 5.png"
import shoead1 from "../assets/shoead.png"
import { motion } from 'framer-motion'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import usercircle from "../assets/Ellipse 1.png"
import { FaFacebook, FaInstagram, FaStar, FaTiktok, FaTwitter } from 'react-icons/fa'
import kickslogo from "../assets/Group (7).png"
import addlogo from "../assets/Vector.png"
import kickslogobig from "../assets/Logo (3).png" 
import { Link } from 'react-router-dom'
import { RiArrowRightUpLine } from 'react-icons/ri'
import axios from 'axios'
import Productmain from './Productmain'
export default function Home() {
  const [products, SetProducts] = useState(null)
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      SetProducts(res.data)
    });
  }, [])
  return (
    <div className='flex flex-col overflow-x-hidden'>
      <div className='flex container flex-col mb-[74px] gap-6'>
        <p className='text-customblack font-bold text-[256.5px] sm:text-[106px] leading-none'>DO IT <span className='text-customblue sm:text-[106px] font-bold text-[256.5px] leading-none'>RIGHT</span></p>
        <div className='relative flex'>
          <img src={shoe} className='w-full md:block sm:hidden' alt="" />
          <img src={shoesm} className='w-full md:hidden sm:block' alt="" />
          <motion.p whileInView={{ y: 160, rotate: 90 }} transition={{ duration: 0.5 }} initial={{ y: 300, rotate: 90 }} className='rotate-90 text-customgray font-semibold md:p-8 sm:p-2 bg-customblack w-fit absolute rounded-t-xl -left-[76px]'>Nike product of the year </motion.p>
          <div className='absolute px-12 pb-12 items-center w-full flex justify-between bottom-0'>
            <div className='flex flex-col sm:mt-auto items-start'>
              <p className='font-semibold text-white sm:text-5xl md:text-[74px]'>NIKE AIR MAX</p>
              <p className='text-customgray sm:text-[20px] md:text-[24px]'>Nike introducing the new air max for <br /> everyone's comfort</p>
              <button className='mt-6 text-white bg-customblue uppercase sm:py-[7.5px] sm:text-2xl sm:px-4 md:py-[15.5px] md:px-[32px] rounded-[5px]'>Shop now</button>
            </div>
            <div className='flex flex-col gap-4'>
              <img src={shoemini} alt="" />
              <img src={shoemini1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-8 container w-full'>
        <div className='flex justify-between'>
          <p className='md:uppercase text-customblack sm:text-5xl md:text-[74px] sm:normal-case font-semibold leading-[95%]'>Don’t miss out <br /> new drops</p>
          <button className=' text-white bg-customblue uppercase mt-auto sm:py-[11.5.5px] sm:text-2xl sm:px-4 md:py-[15.5px] md:px-[32px] h-fit sm:rounded-[8px] rounded-[5px]'>Shop New Drops</button>
        </div>
        <div className='md:flex md:items-center md:justify-between sm:grid sm:grid-cols-2 gap-4'>
          {products?.map((product) => (
            <Productmain data={product} key={product.key} />
          ))}
        </div>
      </div>
      <div className='bg-customblack my-[128px]'>
        <div className='w-full pt-[90px] flex flex-col gap-16'>
          <div className='flex w-full container sm:px-4 justify-between'>
            <p className='uppercase text-white text-[74px] font-semibold leading-[95%]'>Categories</p>
            <div className='flex items-center gap-4 mt-auto'>
              <button className='rounded-lg bg-customwhite transition-colors duration-150 hover:bg-customgraydark px-[10.5px] py-[8.5px]'><MdKeyboardArrowLeft size={24} /></button>
              <button className='rounded-lg bg-customwhite transition-colors duration-150 hover:bg-customgraydark px-[10.5px] py-[8.5px]'><MdKeyboardArrowRight size={24} /></button>
            </div>
          </div>
          <div className='rounded-tl-3xl relative sm:px-4 md:px-0 overflow-hidden sm:grid sm:grid-cols-1   md:flex md:items-center'>
            <div className='bg-[#ECEEF0] w-full  flex flex-col relative justify-between items-center px-12 pb-[30px]'>
              <img src={shoead_1} className='relative ' alt="" />
              <div className='flex justify-between items-center w-full z-50 '>
                <p className='text-customblack text-4xl font-semibold'>Lifestyle <br />
                Shoes</p> 
                <Link to={"/lifestyle"} className='rounded-lg bg-customblack transition-colors duration-150 px-[10.5px] py-[8.5px]'><RiArrowRightUpLine color='#E7E7E3' size={24} /></Link>
              </div>
            </div>
            <div className='bg-[#F6F6F6] w-full flex flex-col relative justify-between items-center px-12 pb-[30px]'>
              <img src={shoead_2} className='relative ' alt="" />
              <div className='flex justify-between items-center w-full '>
                <p className='text-customblack text-4xl font-semibold'>Lifestyle <br />
                Shoes</p>
                <button className='rounded-lg bg-customblack transition-colors duration-150 px-[10.5px] py-[8.5px]'><RiArrowRightUpLine color='#E7E7E3' size={24} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container flex flex-col gap-12 mb-[128px]'>
        <div className='flex justify-between w-full'>
          <p className='md:uppercase text-customblack sm:text-5xl md:text-[74px] sm:normal-case font-semibold leading-[95%]'>Reviews</p>
          <button className=' text-white bg-customblue uppercase sm:py-[11.5.5px] sm:text-2xl sm:px-4 mt-auto md:py-[15.5px] md:px-[32px] h-fit rounded-[5px]'>See all</button>
        </div>
        <div className='flex justify-between gap-[16.23px] items-center'>
          <div className='flex flex-col w-full h-full gap-0'>
            <div className='bg-customwhite p-8 rounded-t-3xl flex flex-col gap-2'>
              <div className='flex justify-between items-start'>
                <div className='flex flex-col gap-2 w-full'>
                  <p className='font-semibold md:text-2xl sm:text-4xl text-customblack'>Good Quality </p>
                  <p className='text-customblack md:text-base sm:text-2xl opacity-80'>I highly recommend shopping from kicks</p>
                </div>
                <img src={usercircle} alt="" />
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex items-center gap-1'>
                  <FaStar color='#FFA52F' size={20} />
                  <FaStar color='#FFA52F' size={20} />
                  <FaStar color='#FFA52F' size={20} />
                  <FaStar color='#FFA52F' size={20} />
                  <FaStar color='#FFA52F' size={20} />
                </div>
                <p className='font-semibold md:text-base sm:text-2xl text-customblack'>5.0</p>
              </div>
            </div>
            <img src={shoead1} className='rounded-b-3xl' alt="" />
          </div>
          <div className='flex sm:hidden md:flex w-full h-full md:flex-col gap-0'>
            <div className='bg-customwhite p-8 rounded-t-3xl flex flex-col gap-2'>
              <div className='flex justify-between items-start'>
                <div className='flex flex-col gap-2 w-full'>
                  <p className='font-semibold text-2xl text-customblack'>Good Quality </p>
                  <p className='text-customblack opacity-80'>I highly recommend shopping from kicks</p>
                </div>
                <img src={usercircle} alt="" />
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex items-center gap-1'>
                  <FaStar color='#FFA52F' size={20} />
                  <FaStar color='#FFA52F' size={20} />
                  <FaStar color='#FFA52F' size={20} />
                  <FaStar color='#FFA52F' size={20} />
                  <FaStar color='#FFA52F' size={20} />
                </div>
                <p className='font-semibold text-customblack'>5.0</p>
              </div>
            </div>
            <img src={shoead1} className='rounded-b-3xl' alt="" />
          </div>
          <div className='flex sm:hidden md:flex w-full h-full flex-col gap-0'>
            <div className='bg-customwhite p-8 md:w-full rounded-t-3xl flex flex-col gap-2'>
              <div className='flex justify-between w-full items-start'>
                <div className='flex flex-col gap-2 w-full'>
                  <p className='font-semibold text-2xl text-customblack'>Good Quality </p>
                  <p className='text-customblack opacity-80'>I highly recommend shopping from kicks</p>
                </div>
                <img src={usercircle} alt="" />
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex items-center gap-1'>
                  <FaStar color='#FFA52F' size={20} />
                  <FaStar color='#FFA52F' size={20} />
                  <FaStar color='#FFA52F' size={20} />
                  <FaStar color='#FFA52F' size={20} />
                  <FaStar color='#FFA52F' size={20} />
                </div>
                <p className='font-semibold text-customblack'>5.0</p>
              </div>
            </div>
            <img src={shoead1} className='rounded-b-3xl' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <div className='md:flex md:items-center md:justify-between sm:grid sm:grid-cols-2 gap-4'>
<div className='flex flex-col items-center relative gap-6'>
  <p className='bg-customblue absolute left-2 top-2 py-3 px-6 text-white rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
  <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
  <div className='flex flex-col gap-4'>
    <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
    <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - <span className='text-customorange text-[14px]'>$125</span></Link>
  </div>
</div>
<div className='flex flex-col items-center relative gap-6'>
  <p className='bg-customblue absolute left-2 top-2 py-3 px-6 text-white rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
  <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
  <div className='flex flex-col gap-4'>
    <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
    <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - <span className='text-customorange text-[14px]'>$125</span></Link>
  </div>
</div>
<div className='flex flex-col items-center relative gap-6'>
  <p className='bg-customblue absolute left-2 top-2 py-3 px-6 text-white rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
  <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
  <div className='flex flex-col gap-4'>
    <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
    <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - <span className='text-customorange text-[14px]'>$125</span></Link>
  </div>
</div>
<div className='flex flex-col items-center relative gap-6'>
  <p className='bg-customblue absolute left-2 top-2 py-3 px-6 text-white rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
  <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
  <div className='flex flex-col gap-4'>
    <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
    <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - <span className='text-customorange text-[14px]'>$125</span></Link>
  </div>
</div>
</div> */}