import React from 'react'
import { Link } from 'react-router-dom';
import shoead from "../assets/Rectangle 5.png"

export default function Productmain( { data } ) {
    const {top, name, img, button1, button2} = data;
  return (
    <div className='flex flex-col items-center relative gap-6'>
        <p className='bg-customblue absolute left-2 top-2 py-3 px-6 text-white rounded-br-[42px] rounded-tl-[42px] font-semibold'>{top}</p>
        <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
        <div className='flex flex-col gap-4'>
            <p className='text-customblack text-[24px] font-semibold'>{name}</p>
            <Link to={"/product"} className='mt-6 font-medium flex justify-center gap-2 text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>{button1}<span className='text-customorange text-[14px]'>{button2}</span></Link>
        </div>
    </div>  
  )
}
