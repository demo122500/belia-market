import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import ProductModal from "../ProductModal";
import { PiArrowsDownUpLight } from "react-icons/pi";

const ProductCard = ({ item = {}, itemView }) => {
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const isSingleView = itemView === "one";
  const isDoubleView = itemView === "two";

  // product modal
  const viewProductDetails = (id) => {
    setIsOpenProductModal(true);
  };

  const closeProductModal = () => {
    setIsOpenProductModal(false);
  };

  if (!item || Object.keys(item).length === 0) {
    return <div>Product data is missing!</div>;
  }

  return (
    <>
      <div
        className={`${itemView} productCard item w-full hover:shadow-md hover:rounded-lg`}
      >
        <div
          className={`${
            isSingleView ? "flex items-center" : ""
          } imgWrapper border relative overflow-hidden cursor-pointer`}
        >
          <Link to="/product/product-details">
            <img
              src={item.productImg}
              alt=""
              className={`${isDoubleView ? "centerImg" : ""}`}
            />
          </Link>
          <span className="absolute top-4 left-4 rounded-lg bg-[#fe3675] p-1 !px-[14px] text-white text-[12px]">
            {item.discount}
          </span>
          <div className="infoWishlist absolute top-4 -right-12 flex flex-col items-center gap-2">
            <Button
              onClick={viewProductDetails}
              className="!rounded-full !min-w-[40px] !w-[40px] !h-[40px] !bg-white !shadow-xl hover:!bg-[#fe3675] border"
            >
              <AiOutlineFullscreen size={20} className="text-gray-500" />
            </Button>
            <Button className="!rounded-full !min-w-[40px] !w-[40px] !h-[40px] !bg-white !shadow-xl hover:!bg-[#fe3675] border">
              <IoMdHeartEmpty size={20} className="text-gray-500" />
            </Button>
          </div>
          <div
            className={`${
              isSingleView ? "flex flex-col gap-1" : ""
            } productInfo px-4 space-y-2 py-2 cursor-default`}
          >
            <Link to="/product/product-details" className="!no-underline">
              <h4 className="text-base leading-[18px] cursor-pointer transition-all 0.3s ease-in-out hover:text-[#fe3675]">
                {item.title}
              </h4>
            </Link>
            <span className="block text-green-500 text-[12px] uppercase">
              {item.stock}
            </span>
            <Rating
              name="read-only"
              value={5}
              readOnly
              size="small"
              precision={0.5}
            />
            <div className="flex items-center gap-2 m-0">
              <p className="text-[14px] line-through text-slate-400 font-semibold">
                ₱{item.origPrice}
              </p>
              <p className="text-lg text-red-600 font-semibold">
                ₱{item.salePrice}
              </p>
            </div>

            {isSingleView ? (
              <div className="flex items-center gap-2">
                <Button className="!text-black !capitalize w-[200px] border !rounded-full">
                  <IoMdHeartEmpty size={20} /> &nbsp; Add to wishlist
                </Button>
                <Button className="!text-black !capitalize w-[200px] border !rounded-full">
                  <PiArrowsDownUpLight size={20} /> &nbsp; Compare
                </Button>
              </div>
            ) : (
              ""
            )}

            <Button className="w-full p-2 my-3 border relative !rounded-full !border-[#fe3675] hover:!bg-[#fe3675]">
              <Link to="/">Add to cart</Link>
            </Button>
          </div>
        </div>
      </div>

      {isOpenProductModal === true && (
        <ProductModal closeProductModal={closeProductModal} />
      )}
    </>
  );
};

export default ProductCard;
