import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoClose } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiArrowsDownUpLight } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import QuantityBox from "../QuantityBox";
import ProductZoom from "../ProductZoom";

const ProductModal = (props) => {

  return (
    <Dialog
      open={true}
      onClose={() => props.closeProductModal()}
      className="productModal relative"
    >
      <Button
        onClick={() => props.closeProductModal()}
        className="!absolute top-2 right-2 border !bg-[#ececec7c] !rounded-full !w-[38px] !min-w-[38px] !h-[38px]"
      >
        <IoClose size={20} className="text-black" />
      </Button>

      <h1 className="text-2xl mb-3">
        All Natural Italian-Style Chicken Meatballs
      </h1>
      <div className="flex items-center gap-4 border-b pb-8">
        <p className="text-gray-600">
          Brands: <span className="text-black/80 font-semibold">Welch's</span>
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
          <span className="text-black/80 font-semibold uppercase">ZU49VOR</span>
        </p>
      </div>

      <div className="row items-center">
        <div className="col-md-5 p-2 px-4">
          <ProductZoom />
        </div>

        <div className="col-md-7 p-4 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <p className="text-[16px] line-through text-slate-400 font-semibold">
              ₱150
            </p>
            <p className="text-xl text-red-600 font-semibold">₱138</p>
          </div>

          <p className="p-1 px-3 text-sm text-green-600 bg-green-200 rounded-full mb-2">
            In Stock
          </p>
          <p className="text-gray-600 text-[16px] mb-2">
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
            malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
          </p>

          <div className="flex items-center gap-4 mb-4">
            <QuantityBox />

            <Button className="!text-white !font-semibold !capitalize !w-[220px] h-[50px] border relative !rounded-full !bg-[#fe3675] hover:!bg-[#fe3675]/90">Add to cart</Button>
          </div>

          <div className="flex items-center gap-2">
            <Button className="!text-black !capitalize w-[200px] border !rounded-full"><IoMdHeartEmpty size={20}/> &nbsp; Add to wishlist</Button>
            <Button className="!text-black !capitalize w-[200px] border !rounded-full"><PiArrowsDownUpLight size={20}/> &nbsp; Compare</Button>
          </div>

          <div className="flex flex-col items-start gap-2">
            <p className="text-black/90 flex items-center gap-2"><FaCheck size={14} color="#31B853"/> &nbsp; Type: <span className="text-gray-600">Organic</span></p>
            <p className="text-black/90 flex items-center gap-2"><FaCheck size={14} color="#31B853"/> &nbsp; MFG: <span className="text-gray-600">Oct 18.2000</span></p>
            <p className="text-black/90 flex items-center gap-2"><FaCheck size={14} color="#31B853"/> &nbsp; LIFE: <span className="text-gray-600">70 days</span></p>
          </div>

          <hr className="w-full my-3"/>
          <p className="text-gray-600">Categories: <span className="text-black/70 hover:text-black hover:underline cursor-pointer">Biscuits & Snacks</span></p>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModal;
