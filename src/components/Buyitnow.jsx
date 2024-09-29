import React from 'react'
import shoead from "../assets/Rectangle 5.png"

export default function Buyitnow() {
  return (
    <div className='flex flex-col sm:px-4 md:p-0 text-customblack container mb-8'>
        <div className='flex justify-between mb-8 items-center'>
            <div className='flex flex-col w-full gap-8 items-start'>
                <p className='text-xl w-fit font-semibold border-b border-b-[#79767C]'>Login and Checkout faster</p>
                <div className='flex flex-col gap-2'>
                    <p className='text-[32px] font-semibold'>Contact Details</p>
                    <p className='font-semibold opacity-80'>We will use these details to keep you inform about your delivery.</p>
                </div>
                <div className='relative'>
                    <input className='py-[14.5px] peer bg-customgray w-[330px] border focus:outline-none border-customblack rounded-lg px-4' type="email" id='email' name='email' placeholder='' />
                    <label className='absolute top-3 left-2 scale-90 peer-focus:top-3 peer-focus:scale-[0.8] text-[#79767C] peer-focus:left-3 peer-placeholder-shown:scale-100 transition-all duration-300 peer-placeholder-shown:left-3 peer-placeholder-shown:top-1/2 -translate-y-1/2' htmlFor="email">Email</label>
                </div>
                <div className='flex flex-col gap-8'>
                    <p className='text-[32px] font-semibold'>Contact Details</p>
                    <div className='gap-5 flex flex-col'>
                        <div className='flex gap-5 justify-between'>
                            <div className='relative'>
                                <input className='py-[14.5px] peer bg-customgray w-full border focus:outline-none border-customblack rounded-lg px-4' type="text" id='email' name='email' placeholder='' />
                                <label className='absolute top-3 left-2 scale-90 peer-focus:top-3 peer-focus:scale-[0.8] text-[#79767C] peer-focus:left-3 peer-placeholder-shown:scale-100 transition-all duration-300 peer-placeholder-shown:left-3 peer-placeholder-shown:top-1/2 -translate-y-1/2' htmlFor="email">First Name*</label>
                            </div>
                            <div className='relative'>
                                <input className='py-[14.5px] peer bg-customgray w-full border focus:outline-none border-customblack rounded-lg px-4' type="text" id='email' name='email' placeholder='' />
                                <label className='absolute top-3 left-2 scale-90 peer-focus:top-3 peer-focus:scale-[0.8] text-[#79767C] peer-focus:left-3 peer-placeholder-shown:scale-100 transition-all duration-300 peer-placeholder-shown:left-3 peer-placeholder-shown:top-1/2 -translate-y-1/2' htmlFor="email">Last Name*</label>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='relative'>
                                <input className='py-[14.5px] peer bg-customgray w-full border focus:outline-none border-customblack rounded-lg px-4' type="text" id='email' name='email' placeholder='' />
                                <label className='absolute top-3 left-2 scale-90 peer-focus:top-3 peer-focus:scale-[0.8] text-[#79767C] peer-focus:left-3 peer-placeholder-shown:scale-100 transition-all duration-300 peer-placeholder-shown:left-3 peer-placeholder-shown:top-1/2 -translate-y-1/2' htmlFor="email">Find Delivery Address*</label>
                            </div>
                            <p className='text-sm text-[#36323B]'>Start typing your street address or zip code for suggestion</p>
                        </div> 
                        <div className='flex flex-col gap-1'>
                            <div className='relative'>
                                <input className='py-[14.5px] peer bg-customgray w-full border focus:outline-none border-customblack rounded-lg px-4' type="number" id='email' name='email' placeholder='' />
                                <label className='absolute top-3 left-2 scale-90 peer-focus:top-3 peer-focus:scale-[0.8] text-[#79767C] peer-focus:left-3 peer-placeholder-shown:scale-100 transition-all duration-300 peer-placeholder-shown:left-3 peer-placeholder-shown:top-1/2 -translate-y-1/2' htmlFor="email">Phone Number*</label>
                            </div>
                            <p className='text-sm text-[#36323B]'>E.g. (123) 456-7890</p>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full justify-between gap-12'>
                <div className='md:flex ml-auto md:flex-col md:p-6 bg-customwhite w-full sm:p-4 rounded-2xl md:w-auto md:gap-6'>
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
                </div>
                <div className='bg-customwhite flex flex-col gap-6 rounded-2xl p-6'>
                    <p className='text-[24px] text-customblack font-semibold'>Your Bag</p>
                    <div className='flex items-center gap-6'>
                        <img src={shoead} className=' w-auto h-[240px]' alt="" />
                        <div className='flex flex-col gap-20 justify-between'>
                            <div className='flex gap-20 justify-between'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-[20px] text-customblack font-semibold'>DROPSET TRAINER SHOES</p>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-customblack font-semibold text-[14px] opacity-80'>Men’s Road Running Shoes </p>
                                            <p className='text-customblack font-semibold text-[14px] opacity-80'>Enamel Blue/ University White</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-10'>
                                        <p className='text-customblack font-semibold text-[14px] opacity-80'>Size 10</p>
                                        <p className='text-customblack font-semibold text-[14px] opacity-80'>Quantity 1</p>
                                    </div>
                                    <p className='text-[20px] text-customblue font-semibold'>$130</p>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
        </div>
        <div className='flex flex-col text-customblack gap-8'>
            <p className='text-[32px] font-semibold'>Delivery Options</p>
            <div className='flex flex-col gap-6'>
                <div className='flex p-4 rounded-2xl bg-customwhite gap-2'>
                    <div className='flex w-full flex-col gap-2'>
                        <p className='text-[20px] text-customblack font-semibold'>Standard Delivery</p>
                        <p className='font-semibold opacity-80'>Enter your address to see when you’ll get your order</p>
                    </div>
                    <p className='text-[20px] text-customblue font-semibold'>$6.00</p>
                </div>
                <div className='flex p-4 rounded-2xl border border-customblack bg-none gap-2'>
                    <div className='flex w-full flex-col gap-2'>
                        <p className='text-[20px] text-customblack font-semibold'>Collect in store</p>
                        <p className='font-semibold opacity-80'>Pay now, collect in store</p>
                    </div>
                    <p className='text-[20px] text-customblack font-semibold'>Free</p>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" className='checked:bg-customblack' />
                    <p className='font-semibold opacity-80'>My billing and delivery information are the same </p>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" className='checked:bg-customblack' />
                    <p className='font-semibold opacity-80'>I’m 13+ year old</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-sm opacity-80'>Also want product updates with our newsletter?</p>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" className='checked:bg-customblack' />
                        <p className='font-semibold opacity-80'>Yes, I’d like to receive emails about exclusive sales and more.</p>
                    </div>
                </div>
            </div>
        </div>
        <button className='font-medium flex justify-center w-fit text-white text-[14px] bg-customblack uppercase py-[15.5px] mt-12 px-[122.5px] rounded-[5px]'>Review AND PAY</button>
    </div>
  )
}
