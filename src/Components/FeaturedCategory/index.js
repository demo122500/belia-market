import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { featuredCategory } from "../../assets/assets";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FeaturedCategory = () => {
  useEffect(() => {
    const swiper = document.querySelector(".swiper").swiper;

    if (swiper) {
      swiper.navigation.init();
      swiper.navigation.update();

      // Update button styles on Swiper events
      const updateButtonStates = () => {
        const prevButton = document.querySelector(".custom-prev-btn");
        const nextButton = document.querySelector(".custom-next-btn");

        if (swiper.isBeginning) {
          prevButton.classList.add("disabled");
        } else {
          prevButton.classList.remove("disabled");
        }

        if (swiper.isEnd) {
          nextButton.classList.add("disabled");
        } else {
          nextButton.classList.remove("disabled");
        }
      };

      // Attach event listeners
      swiper.on("slideChange", updateButtonStates);
      swiper.on("reachBeginning", updateButtonStates);
      swiper.on("reachEnd", updateButtonStates);

      // Initialize button states
      updateButtonStates();
    }
  }, []);

  return (
    <div className="featuredCategory py-12 px-20">
      <div className="container relative">
        <div className="info mb-2">
          <h3 className="font-semibold text-lg">FEATURED CATEGORIES</h3>
          <p className="text-slate-400">
            Do not miss the current offers until the end of November.
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev-btn absolute top-[60%] -left-1 z-10 -translate-y-[60%] bg-[#fff] shadow-md border text-black/50 rounded-full p-[12px]">
          <FaChevronLeft />
        </button>
        <button className="custom-next-btn absolute top-[60%] -right-1 z-10 -translate-y-[60%] bg-[#fff] shadow-md border text-black/50 rounded-full p-[12px]">
          <FaChevronRight />
        </button>
        <Swiper
          slidesPerView={8}
          spaceBetween={8}
          slidesPerGroup={1}
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next-btn",
            prevEl: ".custom-prev-btn",
          }}
        >
          {featuredCategory.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="item text-center border p-2 rounded-xl">
                <img src={category.image} alt={category.name} />
                <p className="text-[16px] font-semibold truncate">
                  {category.name}
                </p>
                <span className="text-gray-500 text-[12px]">
                  {category.items} Items
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCategory;
