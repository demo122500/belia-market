import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Sidebar = () => {
  const [value, setValue] = useState([100, 5000]);

  return (
    <div className="productListingSidebar w-[30%]">
      <div className="sticky top-8 flex flex-col gap-12">
        <div className="productCategories">
          <h1 className="uppercase text-black/90 mb-4 font-semibold">
            Product Categories
          </h1>

          <div className="scroll pl-2 max-h-[190px] overflow-y-scroll overflow-x-hidden">
            <ul>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Men"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Women"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Kids"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Men"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Women"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Kids"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Men"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Women"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Kids"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Men"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Women"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Kids"
                  className="w-full"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="productPriceRange">
          <h1 className="uppercase text-black/90 mb-4 font-semibold">
            Filter by Price
          </h1>

          <RangeSlider
            value={value}
            onInput={setValue}
            min={100}
            max={5000}
            step={5}
          />

          <div className="flex py-2">
            <p className="text-gray-500 text-[16px]">
              Price:{" "}
              <span className="text-black font-semibold">₱{value[0]}</span> --{" "}
              <span className="text-black font-semibold">₱{value[1]}</span>
            </p>
          </div>
        </div>

        <div className="productStatus">
          <h1 className="uppercase text-black/90 mb-4 font-semibold">
            Product Status
          </h1>

          <div className="scroll pl-2 max-h-[190px] overflow-y-scroll overflow-x-hidden">
            <ul>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="In Stock"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="On Sale"
                  className="w-full"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="productStatus">
          <h1 className="uppercase text-black/90 mb-4 font-semibold">Brands</h1>

          <div className="scroll pl-2 max-h-[190px] overflow-y-scroll overflow-x-hidden">
            <ul>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Nike"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Adidas"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="World Balance"
                  className="w-full"
                />
              </li>
              <li className="w-full">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Penshope"
                  className="w-full"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
            alt=""
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
