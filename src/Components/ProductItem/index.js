import React from "react";
import Slider from "react-slick";
import { products } from "../../assets/assets";
import ProductModal from "../ProductModal";
import ProductCard from "../ProductCard";

const ProductItem = ({
  useSlider = true,
  viewProductDetails,
  closeProductModal,
  isOpenProductModal,
}) => {
  const productSliderOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  if (useSlider) {
    return (
      <>
        <Slider {...productSliderOptions} className={`w-[1028px]`}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              item={product}
              viewProductDetails={viewProductDetails}
              isOpenProductModal={isOpenProductModal}
              closeProductModal={closeProductModal}
            />
          ))}
        </Slider>

        {isOpenProductModal === true && (
          <ProductModal closeProductModal={closeProductModal} />
        )}
      </>
    );
  }

  return (
    <>
      <div className={`grid grid-cols-4 gap-2`}>
        {products.map((product) => (
        <ProductCard
        key={product.id}
          item={product}
          viewProductDetails={viewProductDetails}
          isOpenProductModal={isOpenProductModal}
          closeProductModal={closeProductModal}
        />
      ))}
      </div>

      {isOpenProductModal === true && (
        <ProductModal closeProductModal={closeProductModal} />
      )}
    </>
  );
};

// const ProductCard = ({ item, viewProductDetails }) => (
//   <>
//     <div className={`item w-full`}>
//       <div className="imgWrapper border relative overflow-hidden cursor-pointer">
//         <img src={item.productImg} alt="" />
//         <span className="absolute top-4 left-4 rounded-lg bg-[#fe3675] p-1 !px-[14px] text-[#fff] text-[12px]">
//           {item.discount}
//         </span>
//         <div className="infoWishlist absolute top-4 -right-12 flex flex-col items-center gap-2">
//           <Button onClick={() => viewProductDetails(1)} className="!rounded-full !min-w-[40px] !w-[40px] !h-[40px] !bg-white !shadow-xl hover:!bg-[#fe3675]">
//             <AiOutlineFullscreen size={20} className="text-gray-500" />
//           </Button>
//           <Button className="!rounded-full !min-w-[40px] !w-[40px] !h-[40px] !bg-white !shadow-xl hover:!bg-[#fe3675]">
//             <IoMdHeartEmpty size={20} className="text-gray-500" />
//           </Button>
//         </div>
//         <div className="productInfo px-4 space-y-2 py-2 cursor-default">
//           <h4 className="text-base leading-[18px] cursor-pointer transition-all 0.3s ease-in-out hover:text-[#fe3675]">
//             {item.title}
//           </h4>
//           <span className="block text-green-500 text-[12px] uppercase">
//             {item.stock}
//           </span>
//           <Rating
//             name="read-only"
//             value={5}
//             readOnly
//             size="small"
//             precision={0.5}
//           />
//           <div className="flex items-center gap-2 m-0">
//             <p className="text-[14px] line-through text-slate-400 font-semibold">
//               ₱{item.origPrice}
//             </p>
//             <p className="text-lg text-red-600 font-semibold">
//               ₱{item.salePrice}
//             </p>
//           </div>
//           <Button className="w-full p-2 my-3 border relative !rounded-full !border-[#fe3675] hover:!bg-[#fe3675]">
//             <Link to="/">Add to cart</Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   </>
// );

export default ProductItem;

// import React from "react";
// import Slider from "react-slick";
// import Button from "@mui/material/Button";
// import Rating from "@mui/material/Rating";
// import { AiOutlineFullscreen } from "react-icons/ai";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { products } from "../../assets/assets";

// const ProductItem = () => {
//   var productSliderOptions = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     // autoplay: true,
//     // autoplaySpeed: 3000,
//     // pauseOnHover: true,
//   };

//   return (
//     <Slider {...productSliderOptions} className="w-[1028px]">
//       {products.map((item, index) => (
//         <div className="item w-full" key={index}>
//           <div className="imgWrapper border relative overflow-hidden cursor-pointer">
//             <img src={item.productImg} alt="" />

//             <span className="absolute top-4 left-4 rounded-lg bg-[#fe3675] p-1 !px-[14px] text-[#fff] text-[12px]">
//               {item.discount}
//             </span>

//             {/* view deatil - wishlist */}
//             <div className="infoWishlist absolute top-4 -right-12 flex flex-col items-center gap-2">
//               <Button className="!rounded-full !min-w-[40px] z-1000 !w-[40px] !h-[40px] !bg-white !shadow-xl hover:!bg-[#fe3675]">
//                 <AiOutlineFullscreen size={20} className="text-gray-500" />
//               </Button>
//               <Button className="!rounded-full !min-w-[40px] z-1000 !w-[40px] !h-[40px] !bg-white !shadow-xl hover:!bg-[#fe3675]">
//                 <IoMdHeartEmpty size={20} className="text-gray-500" />
//               </Button>
//             </div>

//             <div className="productInfo px-4 space-y-2 py-2 cursor-default">
//               <h4 className="text-base leading-[18px] cursor-pointer transition-all 0.3s ease-in-out hover:text-[#fe3675]">
//                 {item.title}
//               </h4>
//               <span className="block text-green-500 text-[12px] uppercase">
//                 {item.stock}
//               </span>
//               <Rating
//                 name="read-only"
//                 value={5}
//                 readOnly
//                 size="small"
//                 precision={0.5}
//               />

//               <div className="flex items-center gap-2 m-0">
//                 <p className="text-[14px] line-through text-slate-400 font-semibold">
//                   ₱{item.origPrice}
//                 </p>
//                 <p className="text-lg text-red-600 font-semibold">₱{item.salePrice}</p>
//               </div>

//               <Button className="w-full p-2 my-3 border relative !rounded-full !border-[#fe3675] hover:!bg-[#fe3675]">
//                 <Link to="/">Add to cart</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default ProductItem;
