import React from "react";
import Slider from "react-slick";
import { assets } from "../../assets/assets";

const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="homeBanner w-[54%] relative">
      <Slider {...settings} className="left-[58%] top-6">
        <div className="!outline-none">
          <img src={assets.banner1} className="rounded-md h-[460px]" alt="" />
        </div>
        <div className="!outline-none">
          <img src={assets.banner2} className="rounded-md h-[460px]" alt="" />
        </div>
        <div className="!outline-none">
          <img src={assets.banner3} className="rounded-md h-[460px]" alt="" />
        </div>
        <div className="!outline-none">
          <img src={assets.banner2} className="rounded-md h-[460px]" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
