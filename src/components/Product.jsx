import React, { useEffect, useState } from "react";
import shoead from "../assets/Rectangle 8.png";
import shoeadsm from "../assets/Rectangle 8 (1).png";
import shoead1 from "../assets/Rectangle 9.png";
import shoead2 from "../assets/Rectangle 10.png";
import shoead6 from "../assets/Rectangle 10 (1).png";
import shoead4 from "../assets/Rectangle 13.png";
import shoead5 from "../assets/Rectangle 12.png";
import shoead7 from "../assets/Rectangle 11 (1).png";
import shoead3 from "../assets/Rectangle 11.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import Productadd from "./Productadd";
export default function Product() {
  const [curr, setCurr] = useState(0);
  const [productsadd, SetProductsadd] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3000/productsadd").then((res) => {
      SetProductsadd(res.data);
    });
  }, []);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? productsadd.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === productsadd.length - 1 ? 0 : curr + 1));
  return (
    <div className="flex flex-col sm:px-4 md:p-0 w-full container mt-8">
      <div className="md:flex md:justify-between  md:mb-[128px]">
        <div className="md:grid sm:hidden grid-cols-2 gap-4">
          <img src={shoead} alt="" />
          <img src={shoead1} alt="" />
          <img src={shoead2} alt="" />
          <img src={shoead3} alt="" />
        </div>
        <img src={shoeadsm} className="w-full md:hidden sm:block" alt="" />
        <div className="sm:flex md:hidden sm:items-center gap-2 my-6">
          <img src={shoead6} className="w-28" alt="" />
          <img src={shoead4} className="w-28" alt="" />
          <img src={shoead5} className="w-28" alt="" />
          <img src={shoead7} className="w-28" alt="" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <button className="bg-customblue text-white py-3 text-[12px] font-semibold px-4 rounded-xl w-fit">
              New Release
            </button>
            <p className="text-[32px] font-semibold text-customblack">
              ADIDAS 4DFWD X PARLEY <br className="sm: hidden md:block" />{" "}
              RUNNING SHOES
            </p>
            <p className="text-[24px] font-semibold text-customblue">$125.00</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="uppercase font-semibold">Color</p>
            <div className="flex items-center gap-4">
              <div className="bg-[#253043] p-2 stroke-customblack stroke-2 w-8 h-8 rounded-full"></div>
              <div className="bg-[#707E6E] w-8 h-8 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="w-full flex justify-between items-center">
              <p className="uppercase text-[14px] font-semibold">Size</p>
              <p className="uppercase text-[14px] font-medium">Size chart</p>
            </div>
            <div className="flex gap-1">
              <button className="px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack">
                38
              </button>
              <button className="px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack">
                39
              </button>
              <button className="px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack">
                40
              </button>
              <button className="px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack">
                41
              </button>
              <button className="px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack">
                42
              </button>
              <button className="px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack">
                43
              </button>
              <button className="px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack">
                44
              </button>
              <button className="px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack">
                45
              </button>
              <button className="px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack">
                46
              </button>
              <button className="px-[15.5px] py-[12px] rounded-lg hover:text-white hover:bg-customblack transition-colors duration-300 bg-white text-customblack">
                47
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Link
                to={"/product/#cards"}
                className="font-medium flex justify-center w-full text-white text-[14px] bg-customblack uppercase py-[15.5px] px-[32px] rounded-[5px]"
              >
                Add to cart
              </Link>
              <div className="font-medium flex justify-center text-white text-[14px] bg-customblack uppercase py-[19px] px-[20px] rounded-[5px]">
                <IoIosHeartEmpty />
              </div>
            </div>
            <Link
              to={"/buyitnow"}
              className="font-medium flex justify-center w-full text-white text-[14px] bg-customblue uppercase py-[15.5px] px-[32px] rounded-[5px]"
            >
              Buy it now
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-customblack uppercase font-semibold">
              About the product
            </p>
            <div className="text-customblack flex flex-col gap-4">
              <p>Shadow Navy / Army Green.</p>
              <p>
                This product is excluded from all promotional discounts and
                offers.
              </p>
              <div>
                <li>
                  Pay over time in interest-free installments with Affirm,
                  Klarna or Afterpay.
                </li>
                <li>
                  Join adiClub to get unlimited free standard shipping, returns,
                  & exchanges.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="#cards" className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <p className="text-5xl text-customblack font-semibold">
            You may also like
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <button
              onClick={prev}
              className="rounded-lg cursor-pointer bg-customblack transition-colors text-customwhite duration-150 hover:bg-customgraydark px-[10.5px] py-[8.5px]"
            >
              <MdKeyboardArrowLeft size={24} />
            </button>
            <button
              onClick={next}
              className="rounded-lg cursor-pointer bg-customblack transition-colors text-customwhite duration-150 hover:bg-customgraydark px-[10.5px] py-[8.5px]"
            >
              <MdKeyboardArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="overflow-x-hidden">
          <div
            className="flex transition-transform ease-out items-center relative duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            <div className="md:flex w-screen md:items-center md:justify-between sm:grid sm:grid-cols-2 gap-4">
              {productsadd?.map((productadd) => (
                <Productadd data={productadd} key={productadd.key} />
              ))}
            </div>
            <div className="md:flex w-screen md:items-center absolute h-[485px] top-0 left-[100%] md:justify-between sm:grid sm:grid-cols-2 gap-4">
              {productsadd?.map((productadd) => (
                <Productadd data={productadd} key={productadd.key} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-[60px] items-center">
        <div className="flex items-center gap-2">
          {productsadd.map((_, i) => (
            <div
              key={i}
              className={`transition-all bg-customblack w-8 h-1 rounded-lg ${
                curr === i
                  ? "bg-customblue bg-opacity-100 p-[3px]"
                  : "bg-customblack bg-opacity-20"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
