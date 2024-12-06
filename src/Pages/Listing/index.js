import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Button from "@mui/material/Button";
import { FiMenu } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductCard from "../../Components/ProductCard";
import { products } from "../../assets/assets";
import Pagination from '@mui/material/Pagination';

const Listing = () => {
  const [productView, setProductView] = useState("four");
  const [anchorEl, setAnchorEl] = useState(null);
  const openDropDown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const gridClasses = {
    one: "grid-cols-1", // Single column
    two: "grid-cols-2", // Two columns
    three: "grid-cols-3", // Three columns
    four: "grid-cols-4", // Four columns
  };

  return (
    <>
      <section className="productListingPage px-20 py-4">
        <div className="container">
          <div className="flex gap-16">
            {/* left-content */}
            <Sidebar />

            {/* right-content */}
            <div className="right w-full flex flex-col gap-4">
              <img
                src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
                alt=""
                className="w-full rounded-xl"
              />

              <div className="showBy bg-[#F7F8FD] w-full h-[50px] rounded-lg px-3 flex items-center justify-between">
                <div className="flex items-center">
                  <Button
                    onClick={() => setProductView("one")}
                    className={`${productView === 'one' && 'act'} !h-[34px] !w-[34px] !min-w-[34px] !text-black !rounded-full`}
                  >
                    {" "}
                    <FiMenu size={20} />
                  </Button>
                  <Button
                    onClick={() => setProductView("two")}
                    className={`${productView === 'two' && 'act'} !h-[34px] !w-[34px] !min-w-[34px] !text-black !rounded-full`}
                  >
                    {" "}
                    <HiViewGrid size={18} />
                  </Button>
                  <Button
                    onClick={() => setProductView("three")}
                    className={`${productView === 'three' && 'act'} !h-[34px] !w-[34px] !min-w-[34px] !text-black !rounded-full`}
                  >
                    {" "}
                    <TbGridDots size={18} />
                  </Button>
                  <Button
                    onClick={() => setProductView("four")}
                    className={`${productView === 'four' && 'act'} !h-[34px] !w-[34px] !min-w-[34px] !text-black !rounded-full`}
                  >
                    {" "}
                    <TfiLayoutGrid4Alt size={18} />
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-semibold">Sort by latest </p>
                    <FaAngleDown size={14} />
                  </div>

                  <hr className="h-8 border" />

                  <div className="flex items-center gap-2">
                    <Button
                      className="!text-slate-500 !capitalize !flex !items-center !gap-2"
                      onClick={handleClick}
                    >
                      Show<span className="text-black font-semibold"> 12</span>
                      <FaAngleDown size={14} />
                    </Button>
                    <Menu
                      className="productDisplayCount"
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openDropDown}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>12</MenuItem>
                      <MenuItem onClick={handleClose}>24</MenuItem>
                      <MenuItem onClick={handleClose}>36</MenuItem>
                      <MenuItem onClick={handleClose}>48</MenuItem>
                    </Menu>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div
                className={`${gridClasses[productView]} productListing grid gap-2`}
              >
                {products.map((product) => (
                  <ProductCard key={product.id} item={product} itemView={productView} />
                ))}
              </div>

              <div className="flex items-center justify-center mt-4">
                <Pagination count={10} color="primary" size="large"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
