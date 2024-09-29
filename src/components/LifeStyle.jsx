import React from 'react'
import shoestart from '../assets/Frame 10.png'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import shoead from "../assets/Rectangle 5.png"
import { IoFilterOutline } from 'react-icons/io5'
export default function LifeStyle() {
  return (
    <div className='mt-20 sm:px-4 md:p-0 mb-[52px] container'>
        <img src={shoestart} className='w-full mb-8' alt="" />
        <div className='flex justify-between my-6 items-center'>
          <button className='text-customblack flex justify-between items-center font-semibold bg-[#F4F2F2] rounded-2xl p-4 gap-12'>Trending <MdKeyboardArrowDown color='#232321' size={24} /></button>
          <button className='text-customblack flex justify-between items-center font-semibold bg-[#F4F2F2] rounded-2xl p-4 gap-12'>Filters <IoFilterOutline color='#232321' size={24} /></button>
        </div>
        <div className='flex flex-col w-full gap-8'>
          <div className='flex justify-between w-full items-center'>
              <div className='flex flex-col gap-3'>
                  <p className='text-4xl text-customblack font-semibold'>Life Style Shoes</p>
                  <p className='text-customblack font-semibold opacity-80'>122 items</p>
              </div>
              <button className='uppercase text-customblack sm:hidden md:flex flex justify-between items-center font-semibold bg-[#F4F2F2] rounded-2xl p-4 gap-12'>Trending <MdKeyboardArrowDown color='#232321' size={24} /></button>
          </div>
          <div className='flex justify-between gap-[18.75px]'>

            <div className='md:flex sm:hidden md:flex-col md:gap-6'>
              <p className='text-2xl text-customblack font-semibold'>Filters</p>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                  <p className='text-customblack uppercase font-semibold'>Refine by</p>
                  <MdKeyboardArrowDown color='#232321' size={24} />
                </div>
                <div className='flex items-center gap-4'>
                  <button className='bg-customblue text-white py-3 text-[12px] font-semibold px-4 rounded-xl w-fit'>Mens</button>
                  <button className='bg-customblue text-white py-3 text-[12px] font-semibold px-4 rounded-xl w-fit'>New Release</button>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                  <p className='text-customblack uppercase font-semibold'>Color</p>
                  <MdKeyboardArrowDown color='#232321' size={24} />
                </div>
                <div className='flex items-center gap-[18.75px]'>
                  <button className='px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack'>38</button>
                  <button className='px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack'>39</button>
                  <button className='px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack'>40</button>
                  <button className='px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack'>41</button>
                  <button className='px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack'>42</button>
                </div>
                <div className='flex items-center gap-[18.75px]'>
                  <button className='px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack'>43</button>
                  <button className='px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack'>44</button>
                  <button className='px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack'>45</button>
                  <button className='px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack'>46</button>
                  <button className='px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack'>47</button>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                  <p className='text-customblack uppercase font-semibold'>Color</p>
                  <MdKeyboardArrowDown color='#232321' size={24} />
                </div>
                <div className='flex items-center gap-[18.75px]'>
                  <div className='rounded-lg bg-customblue w-12 h-12'></div>
                  <div className='rounded-lg bg-customorange w-12 h-12'></div>
                  <div className='rounded-lg bg-customblack w-12 h-12'></div>
                  <div className='rounded-lg bg-[#234D41] w-12 h-12'></div>
                  <div className='rounded-lg bg-[#353336] w-12 h-12'></div>
                </div>
                <div className='flex items-center gap-[18.75px]'>
                  <div className='rounded-lg bg-[#F08155] w-12 h-12'></div>
                  <div className='rounded-lg bg-[#C9CCC6] w-12 h-12'></div>
                  <div className='rounded-lg bg-[#677282] w-12 h-12'></div>
                  <div className='rounded-lg bg-[#925513] w-12 h-12'></div>
                  <div className='rounded-lg bg-[#BB8056] w-12 h-12'></div>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                  <p className='text-customblack uppercase font-semibold'>Size</p>
                  <MdKeyboardArrowDown color='#232321' size={24} />
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-5'>
                    <input type="checkbox" />
                    <p className='font-semibold text-customblack'>Casual shoes</p>
                  </div>
                  <div className='flex items-center gap-5'>
                    <input type="checkbox" />
                    <p className='font-semibold text-customblack'>Casual shoes</p>
                  </div>
                  <div className='flex items-center gap-5'>
                    <input type="checkbox" />
                    <p className='font-semibold text-customblack'>Casual shoes</p>
                  </div>
                  <div className='flex items-center gap-5'>
                    <input type="checkbox" />
                    <p className='font-semibold text-customblack'>Casual shoes</p>
                  </div>
                  <div className='flex items-center gap-5'>
                    <input type="checkbox" />
                    <p className='font-semibold text-customblack'>Casual shoes</p>
                  </div>
                  <div className='flex items-center gap-5'>
                    <input type="checkbox" />
                    <p className='font-semibold text-customblack'>Casual shoes</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                  <p className='text-customblack uppercase font-semibold'>Gender</p>
                  <MdKeyboardArrowDown color='#232321' size={24} />
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-5'>
                    <input type="checkbox" />
                    <p className='font-semibold text-customblack'>Casual shoes</p>
                  </div>
                  <div className='flex items-center gap-5'>
                    <input type="checkbox" />
                    <p className='font-semibold text-customblack'>Casual shoes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid md:gap-x-4 md:gap-y-[38px] sm:grid-cols-2 sm:gap-y-[24px] sm:gap-x-4 md:grid-cols-3'>
            <div className='flex flex-col items-center relative gap-6'>
            <p className='bg-customorange absolute left-2 top-2 py-3 px-6 text-customblack rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
            <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
            <div className='flex flex-col gap-4'>
              <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - $125</Link>
            </div>
          </div>
          <div className='flex flex-col items-center relative gap-6'>
            <p className='bg-customorange absolute left-2 top-2 py-3 px-6 text-customblack rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
            <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
            <div className='flex flex-col gap-4'>
              <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - $125</Link>
            </div>
          </div>
          <div className='flex flex-col items-center relative gap-6'>
            <p className='bg-customorange absolute left-2 top-2 py-3 px-6 text-customblack rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
            <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
            <div className='flex flex-col gap-4'>
              <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - $125</Link>
            </div>
          </div>
          <div className='flex flex-col items-center relative gap-6'>
            <p className='bg-customorange absolute left-2 top-2 py-3 px-6 text-customblack rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
            <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
            <div className='flex flex-col gap-4'>
              <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - $125</Link>
            </div>
          </div>
          <div className='flex flex-col items-center relative gap-6'>
            <p className='bg-customorange absolute left-2 top-2 py-3 px-6 text-customblack rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
            <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
            <div className='flex flex-col gap-4'>
              <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - $125</Link>
            </div>
          </div>
          <div className='flex flex-col items-center relative gap-6'>
            <p className='bg-customorange absolute left-2 top-2 py-3 px-6 text-customblack rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
            <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
            <div className='flex flex-col gap-4'>
              <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - $125</Link>
            </div>
          </div>
          <div className='flex flex-col items-center relative gap-6'>
            <p className='bg-customorange absolute left-2 top-2 py-3 px-6 text-customblack rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
            <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
            <div className='flex flex-col gap-4'>
              <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - $125</Link>
            </div>
          </div>
          <div className='flex flex-col items-center relative gap-6'>
            <p className='bg-customorange absolute left-2 top-2 py-3 px-6 text-customblack rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
            <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
            <div className='flex flex-col gap-4'>
              <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - $125</Link>
            </div>
          </div>
          <div className='flex flex-col items-center relative gap-6'>
            <p className='bg-customorange absolute left-2 top-2 py-3 px-6 text-customblack rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
            <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
            <div className='flex flex-col gap-4'>
              <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - $125</Link>
            </div>
          </div>
          <div className='flex flex-col items-center relative gap-6'>
            <p className='bg-customblue absolute left-2 top-2 py-3 px-6 text-white rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
            <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
            <div className='flex flex-col gap-4'>
              <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - <span className='text-customorange text-[14px]'>$125($250)</span></Link>
            </div>
          </div>
          <div className='flex flex-col items-center relative gap-6'>
            <p className='bg-customorange absolute left-2 top-2 py-3 px-6 text-customblack rounded-br-[42px] rounded-tl-[42px] font-semibold'>20% off</p>
            <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
            <div className='flex flex-col gap-4'>
              <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - $125</Link>
            </div>
          </div>
          <div className='flex flex-col items-center relative gap-6'>
            <p className='bg-customblue absolute left-2 top-2 py-3 px-6 text-white rounded-br-[42px] rounded-tl-[42px] font-semibold'>New</p>
            <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
            <div className='flex flex-col gap-4'>
              <p className='text-customblack text-[24px] font-semibold'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
              <Link to={"/product"} className='mt-6 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>View Product - $125</Link>
            </div>
          </div>
            </div>
          </div>
        </div>
    </div>
  )
}

{/* <div className='p-8 container bg-customwhite rounded-[24px] mt-8 mb-6 flex justify-between items-center'>
<ul className='flex md:gap-10 sm:flex-col sm:gap-10 sm:w-1/2 sm:bg-customgray sm:z-50 sm:h-screen sm:fixed sm:left-0 sm:top-0 items-center'>
    <li className='list-none text-[#232321] font-semibold flex items-center gap-1'>New Drops 🔥</li>
    <li className='list-none text-[#232321] font-semibold flex items-center gap-1'>Men <MdKeyboardArrowDown /></li>
    <li className='list-none text-[#232321] font-semibold flex items-center gap-1'>Women <MdKeyboardArrowDown /></li>
</ul>
<img src={Logo} alt="" />
<ul className='flex md:gap-10 sm:gap-[10.5px] items-center'>
    <li className='sm:hidden md:block'><IoIosSearch size={24} /></li>
    <Link to={"/cart"}><HiUser size={24} /></Link>
    <p className='bg-customorange text-customblack p-[5px] px-3 rounded-full'>0</p>
</ul>
</div> */}