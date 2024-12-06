import React, { useRef } from "react";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import { assets } from "../../assets/assets";

const ProductZoom = () => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  return (
    <div className="productZoom">
      <div className="productZoom w-full h-auto overflow-hidden rounded-2xl my-4">
        <Slider {...settings2} ref={zoomSliderBig} className="!w-full">
          <div>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={assets.productInfo1}
            />
          </div>
          <div>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={assets.productInfo2}
            />
          </div>
          <div>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src={assets.productInfo3}
            />
          </div>
        </Slider>
        <span className="absolute top-12 left-12 rounded-lg bg-[#fe3675] p-1 !px-[14px] text-white text-[12px]">
          30%
        </span>
      </div>

      {/* zoom slider */}
      <Slider {...settings} ref={zoomSlider} className="zoomSlider">
        <div className="item border cursor-pointer" onClick={() => goto(0)}>
          <img src={assets.productInfo1} alt="" className="w-100" />
        </div>
        <div className="item border cursor-pointer" onClick={() => goto(1)}>
          <img src={assets.productInfo2} alt="" className="w-100" />
        </div>
        <div className="item border cursor-pointer" onClick={() => goto(2)}>
          <img src={assets.productInfo3} alt="" className="w-100" />
        </div>
      </Slider>
    </div>
  );
};

export default ProductZoom;
