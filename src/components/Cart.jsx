import React from 'react'
import shoead from "../assets/Rectangle 5.png"
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { GoHeart } from 'react-icons/go'
import { IoTrashBinOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import addlogo from "../assets/Vector.png"
import kickslogo from "../assets/Group (7).png"
import kickslogobig from "../assets/Logo (3).png" 
import { FaFacebook, FaInstagram, FaStar, FaTiktok, FaTwitter } from 'react-icons/fa'
import useCartStore from '../hooks/useCart'
import Productadd from './Productadd'
export default function Cart() {
  const {cartItems} = useCartStore()
  return (
    <div className='flex flex-col sm:px-4 md:p-0 mt-8 container'>
        <div className='flex flex-col px-5 gap-2 mb-8'>
            <p className='text-[32px] text-customblack font-semibold'>Saving to celebrate </p>
            <p className='text-customblack font-semibold text-[14px] opacity-80'>Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.</p>
            <p className='text-customblack font-semibold opacity-80'>Join us  or Sign-in</p>
        </div>
          <div className='flex justify-betweenr gap-[47px] md:flex-row mb-5 sm:flex-col items-center w-full px-5'>
              {/* <div className='bg-customwhite flex flex-col gap-12 rounded-2xl p-6'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[32px] text-customblack font-semibold'>Your Bag</p>
                    <p className='text-customblack font-semibold opacity-80'>Items in your bag not reserved- check out now to make them yours.</p>
                </div>
                <div className='flex items-center gap-6'>
                    <img src={shoead} className='h-[225px] w-auto' alt="" />
                    <div className='flex flex-col gap-20 justify-between'>
                        <div className='flex gap-20 justify-between'>
                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-[24px] text-customblack font-semibold'>DROPSET TRAINER SHOES</p>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-customblack font-semibold text-[14px] opacity-80'>Men’s Road Running Shoes </p>
                                        <p className='text-customblack font-semibold text-[14px] opacity-80'>Enamel Blue/ University White</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-10'>
                                    <div className='flex items-center gap-6'>
                                        <p className='text-customblack font-semibold text-[14px] opacity-80'>Size 10</p>
                                        <MdKeyboardArrowDown size={24} />
                                    </div>
                                    <div className='flex items-center gap-6'>
                                        <p className='text-customblack font-semibold text-[14px] opacity-80'>Quantity 1</p>
                                        <MdKeyboardArrowDown size={24} />
                                    </div>
                                </div>
                            </div>
                            <p className='text-[24px] text-customblue font-semibold'>$130</p>
                        </div>
                        <div className='flex items-center gap-7'>
                            <GoHeart size={32} />
                            <IoTrashBinOutline size={32} />
                        </div>
                    </div>
                </div>
              </div> */}
              {cartItems.map((item) => <Productadd key={item.id} data={item} />)}
            <div className='md:flex ml-auto md:flex-col sm:bg-customwhite sm:w-full sm:p-4 rounded-2xl md:w-auto md:bg-transparent md:gap-6'>
                <p className='text-[32px] text-customblack mr-40 font-semibold'>Order Summary </p>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <p className='text-customblack font-semibold text-[14px]'>1 ITEM</p>
                        <p className='text-customblack font-semibold text-[14px] opacity-80'>$130.00</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-customblack font-semibold text-[14px]'>Delivery</p>
                        <p className='text-customblack font-semibold text-[14px] opacity-80'>$6.99</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-customblack font-semibold text-[14px]'>Sales Tax</p>
                        <p className='text-customblack font-semibold text-[14px] opacity-80'>-</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[24px] text-customblack font-semibold'>Total</p>
                        <p className='text-[24px] text-customblack font-semibold opacity-80'>$136.99</p>
                    </div>
                </div>
                <button className='font-medium flex justify-center w-full text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>Checkout</button>
                <p className='text-customblack font-semibold w-fit border-b border-b-customblack text-[14px]'>User a promo code</p>
            </div>
          </div>
        <div className='flex flex-col gap-8'>
            <div className='flex justify-between items-center'>
                <p className='text-5xl text-customblack font-semibold'>You may also like</p>
                <div className='flex items-center gap-4 mt-auto'>
                    <button className='rounded-lg bg-customblack transition-colors text-customwhite duration-150 hover:bg-customgraydark px-[10.5px] py-[8.5px]'><MdKeyboardArrowLeft size={24} /></button>
                    <button className='rounded-lg bg-customblack transition-colors text-customwhite duration-150 hover:bg-customgraydark px-[10.5px] py-[8.5px]'><MdKeyboardArrowRight size={24} /></button>
                </div>
            </div>
            <div className='md:flex md:items-center md:justify-between sm:grid sm:grid-cols-2 gap-4 mb-8'>
                <div className='flex flex-col items-center relative gap-6 '>
                  <p className='bg-customblue absolute left-2 top-2 py-3 px-6 text-white rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
                  <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
                  <div className='flex flex-col gap-4'>
                  <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
                  <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - <span className='text-customorange text-[14px]'>$125</span></Link>
                </div>
            </div>
            <div className='flex flex-col relative items-center gap-6'>
                <p className='bg-customblue absolute left-2 top-2 py-3 px-6 text-white rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
                <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
                <div className='flex flex-col gap-4'>
                <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
                <button className='mt-6 font-medium text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - <span className='text-customorange text-[14px]'>$125</span></button>
            </div>
            </div>
            <div className='flex flex-col relative items-center gap-6'>
            <p className='bg-customblue absolute left-2 top-2 py-3 px-6 text-white rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>

                <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
                <div className='flex flex-col gap-4'>
                <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
                <button className='mt-6 font-medium text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - <span className='text-customorange text-[14px]'>$125</span></button>
                </div>
            </div>
            <div className='flex flex-col relative items-center gap-6'>
                <p className='bg-customblue absolute left-2 top-2 py-3 px-6 text-white rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
                <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
                <div className='flex flex-col gap-4'>
                <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
                <button className='mt-6 font-medium text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - <span className='text-customorange text-[14px]'>$125</span></button>
                </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center mb-[60px] items-center'>
            <div className='flex items-center gap-2'>
                <div className='bg-customblack opacity-25 w-10 h-1 rounded-lg hover:opacity-100 hover:bg-customblue'></div>
                <div className='bg-customblack opacity-25 w-10 h-1 rounded-lg hover:opacity-100 hover:bg-customblue'></div>
                <div className='bg-customblack opacity-25 w-10 h-1 rounded-lg hover:opacity-100 hover:bg-customblue'></div>
                <div className='bg-customblack opacity-25 w-10 h-1 rounded-lg hover:opacity-100 hover:bg-customblue'></div>
            </div>
        </div>
    </div>
  )
}
