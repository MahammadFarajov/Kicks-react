import React from 'react'
import { Link } from 'react-router-dom';
import shoead from "../assets/Rectangle 5.png"
import useCartStore from '../hooks/useCart';
import { LuCheck } from 'react-icons/lu';

export default function Productadd( { data } ) {
    const {top, name, img, button, id} = data;
    const { cartItems, addToCart, removeFromCart } = useCartStore()

    const isInCart = cartItems.filter((item) => item.id === id).length > 0
    console.log(isInCart);
  return (
    <div className='flex flex-col items-center relative gap-6'>
        <p className='bg-customblue absolute left-2 top-2 py-3 px-6 text-white rounded-br-[42px] rounded-tl-[42px] font-semibold'>{top}</p>
        <img src={shoead} className='border-8 w-full border-customwhite rounded-[45px]' alt="" />
        <div className='flex flex-col gap-4'>
            <p className='text-customblack text-[24px] font-semibold'>{name}</p>
            <Link onClick={() => {
                if(isInCart){
                    removeFromCart(data) 
                } else{
                    addToCart(data) 
                }
            }}  to={"/product"} className='mt-6 cursor-pointer items-center gap-2 font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]'>{button} {isInCart ? (<LuCheck size={24} color='#FFA52F' />) : ("")}</Link>
        </div>
    </div>  
  )
}
