import Button from "@mui/material/Button";
import { assets } from "../../assets/assets";
import { HiArrowLongRight } from "react-icons/hi2";
import ProductItem from "../ProductItem";

const Hero = () => {
  return (
    <div className="homeProducts px-20 w-full">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="sticky">
              <div className="w-[300px]">
                <img
                  src={assets.side_banner}
                  alt=""
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <div className="w-[300px] mt-4">
                <img
                  src={assets.side_banner2}
                  alt=""
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="col-md-9 px-0 pr-4">
            {/* Best sellers */}
            <div className="flex items-center justify-between mb-2">
              <div className="info">
                <h3 className="font-semibold text-lg">BEST SELLERS</h3>
                <p className="text-slate-400">
                  Do not miss the current offers until the end of November.
                </p>
              </div>

              <Button className="!px-4 border !rounded-full !text-slate-400 !capitalize hover:!border-black/30 hover:!text-black/90">
                View All <HiArrowLongRight size={20} className="ml-2" />
              </Button>
            </div>

            <div className="productRow">
              <ProductItem />
            </div>

            {/* New Product */}
            <div className="flex items-center justify-between mb-2 mt-4">
              <div className="info">
                <h3 className="font-semibold text-lg">NEW PRODUCTS</h3>
                <p className="text-slate-400">
                  New products with updated stocks.
                </p>
              </div>

              <Button className="!px-4 border !rounded-full !text-slate-400 !capitalize hover:!border-black/30 hover:!text-black/90">
                View All <HiArrowLongRight size={20} className="ml-2" />
              </Button>
            </div>

            <div className="productRow p-0 m-0">
              <ProductItem useSlider={false} />
            </div>

            {/* banner bottom */}
            <div className="w-full flex items-center justify-between my-8 gap-8">
              <div className="w-full rounded-md">
                <img
                  src={assets.banner4}
                  alt=""
                  className="w-full h-full object-contain py-2"
                />
              </div>
              <div className="w-full rounded-md">
                <img
                  src={assets.banner5}
                  alt=""
                  className="w-full h-full object-contain py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
