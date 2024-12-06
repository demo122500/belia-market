import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import ProductZoom from "../../Components/ProductZoom";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiArrowsDownUpLight } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { GiThreeLeaves } from "react-icons/gi";
import { TbCurrencyPeso } from "react-icons/tb";
import { assets, products } from "../../assets/assets";
import ProductCard from "../../Components/ProductCard";
import { HiShoppingBag } from "react-icons/hi2";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);

  const isActive = (index) => {
    setActiveSize(index);
  }

  return (
    <>
      <section className="productDetails px-20 py-12">
        <div className="container py-8 bg-[#fff] p-8 rounded-md border">
          <div className="px-8">
            <h1 className="text-2xl font-bold text-black/80">
              All Natural Italian-Style Chicken Meatballs
            </h1>

            <div className="flex items-center gap-4 pt-3">
              <p className="text-gray-600">
                Brands:{" "}
                <span className="text-black/80 font-semibold">Welch's</span>
              </p>
              <hr className="h-3 border" />
              <div className="flex items-center gap-2">
                <Rating
                  name="read-only"
                  value={5}
                  readOnly
                  size="small"
                  precision={0.5}
                />
                <p className="text-gray-600">1 Review</p>
              </div>
              <hr className="h-3 border" />
              <p className="text-gray-600">
                SKU:{" "}
                <span className="text-black/80 font-semibold uppercase">
                  ZU49VOR
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-start justify-center p-4">
            <div className="col-md-5 p-2 px-4">
              <ProductZoom />
            </div>

            <div className="col-md-4 p-4 flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <p className="text-[16px] line-through text-slate-400 font-semibold">
                  ₱150
                </p>
                <p className="text-xl text-red-600 font-semibold">₱138</p>
              </div>

              <p className="p-1 px-3 text-sm text-green-600 bg-green-200 rounded-full">
                In Stock
              </p>
              <p className="text-gray-600 text-[16px]">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent
              </p>

              <div className="flex items-center gap-2 py-4">
                <p className="font-semibold">Size / Weight:</p>
                <ul className="flex items-center gap-3">
                  <li onClick={() => isActive(0)} className={`${activeSize === 0 ? "bg-[#fe3675] text-white" : ""} p-1 rounded-md text-black border !border-[#fe3675] w-[50px] text-center cursor-pointer text-[12px]`}>50g</li>
                  <li onClick={() => isActive(1)} className={`${activeSize === 1 ? "bg-[#fe3675] text-white" : ""} p-1 rounded-md text-black border !border-[#fe3675] w-[50px] text-center cursor-pointer text-[12px]`}>100g</li>
                  <li onClick={() => isActive(2)} className={`${activeSize === 2 ? "bg-[#fe3675] text-white" : ""} p-1 rounded-md text-black border !border-[#fe3675] w-[50px] text-center cursor-pointer text-[12px]`}>200g</li>
                  <li onClick={() => isActive(3)} className={`${activeSize === 3 ? "bg-[#fe3675] text-white" : ""} p-1 rounded-md text-black border !border-[#fe3675] w-[50px] text-center cursor-pointer text-[12px]`}>300g</li>
                </ul>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <QuantityBox />

                <Button className="!text-white !font-semibold !capitalize !w-[220px] h-[50px] border relative !rounded-full !bg-[#fe3675] hover:!bg-[#fe3675]/90">
                  <HiShoppingBag className="text-white" size={20} />
                  &nbsp;
                  Add to cart
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button className="!text-black !capitalize w-[200px] border !rounded-full">
                  <IoMdHeartEmpty size={20} /> &nbsp; Add to wishlist
                </Button>
                <Button className="!text-black !capitalize w-[200px] border !rounded-full">
                  <PiArrowsDownUpLight size={20} /> &nbsp; Compare
                </Button>
              </div>

              <div className="flex flex-col items-start gap-2">
                <p className="text-black/90 flex items-center gap-2">
                  <FaCheck size={14} color="#31B853" /> &nbsp; Type:{" "}
                  <span className="text-gray-600">Organic</span>
                </p>
                <p className="text-black/90 flex items-center gap-2">
                  <FaCheck size={14} color="#31B853" /> &nbsp; MFG:{" "}
                  <span className="text-gray-600">Oct 18.2000</span>
                </p>
                <p className="text-black/90 flex items-center gap-2">
                  <FaCheck size={14} color="#31B853" /> &nbsp; LIFE:{" "}
                  <span className="text-gray-600">70 days</span>
                </p>
              </div>

              <hr className="w-full my-3" />
              <p className="text-gray-600">
                Categories:{" "}
                <span className="text-black/70 hover:text-black hover:underline cursor-pointer">
                  Biscuits & Snacks
                </span>
              </p>
              <p className="text-gray-600">
                Tags:{" "}
                <span className="text-black/70 hover:text-black hover:underline cursor-pointer">
                  chicken,
                </span>
                &nbsp;
                <span className="text-black/70 hover:text-black hover:underline cursor-pointer">
                  natural,
                </span>
                &nbsp;
                <span className="text-black/70 hover:text-black hover:underline cursor-pointer">
                  organic
                </span>
              </p>

              <div className="flex items-center gap-1 mt-8">
                <img className="w-[35px] hover:opacity-90 cursor-pointer" src={assets.facebook} alt="" />
                <img className="w-[35px] hover:opacity-90 cursor-pointer" src={assets.twitter} alt="" />
                <img className="w-[35px] hover:opacity-90 cursor-pointer" src={assets.pinterest} alt="" />
                <img className="w-[35px] hover:opacity-90 cursor-pointer" src={assets.linkedin} alt="" />
                <img className="w-[35px] hover:opacity-90 cursor-pointer" src={assets.github} alt="" />
                <img className="w-[35px] hover:opacity-90 cursor-pointer" src={assets.whatsapp} alt="" />
              </div>
            </div>

            <div className="col-sm-3 flex flex-col gap-4 items-center justify-center">
              <h2 className="bg-[#fe3675]/30 px-4 p-2 rounded-md text-sm text-[#fe3675]">
                Covid-19 Info: We keep delivering.
              </h2>

              <div className="p-4 mx-3 flex flex-col items-center gap-6 rounded-md text-sm bg-black/5">
                <div className="flex items-center gap-4">
                  <TbTruckDelivery size={30} />
                  <p>Free Shipping apply to all orders over ₱100</p>
                </div>
                <div className="flex items-center gap-4">
                  <GiThreeLeaves size={30} />
                  <p>Guranteed 100% Organic from natural farmas</p>
                </div>
                <div className="flex items-center gap-4">
                  <TbCurrencyPeso size={30} />
                  <p>1 Day Returns if you change your mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="productDetails px-18 py-4">
        <div className="container px-16">
          <h3 className="font-semibold text-lg uppercase mb-2">Related products</h3>
          <div className="grid grid-cols-4 gap-2">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </div>
       </div>
      </section>
    </>
  );
};

export default ProductDetails;
