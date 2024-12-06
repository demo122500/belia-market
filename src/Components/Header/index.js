import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import CountryDropdown from "../CountryDropdown";
import Button from "@mui/material/Button";
import { HiShoppingBag } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { useContext } from "react";
import { MyContext } from "../../App";
import { MdOutlineSecurity } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper border-b pb-3">
        <div className="top-strip bg-pink">
          <p className="text-center text-[12px] font-medium">
            Due to <b>HIGH VOLUME of ORDERS</b>, order may be processed with a
            slight delay.
          </p>
        </div>

        <div className="border-b px-20 py-2">
          <div className="container flex justify-between">
            <ul className="flex items-center gap-4 list-none text-gray-600">
              <Link to="/" className="!no-underline"><li className="hover:text-[#fe3675] cursor-pointer">About Us</li></Link>
              <Link to="/" className="!no-underline"><li className="hover:text-[#fe3675] cursor-pointer">My Account</li></Link>
              <Link to="/" className="!no-underline"><li className="hover:text-[#fe3675] cursor-pointer">Wishlist</li></Link>
              <Link to="/" className="!no-underline"><li className="hover:text-[#fe3675] cursor-pointer">Order Tracking</li></Link>
            </ul>

            <div className="flex items-center gap-4 text-gray-600">
              <p className="flex items-center gap-2"><MdOutlineSecurity size={20}/> 100% Secure delivery without contacting the courier</p>
              <hr className="border h-4"/>
              <p>Need help? Call Us: <span className="text-[#fe3675] font-semibold hover:underline cursor-pointer">+ 0020 500</span></p>
              <hr className="border h-4"/>

              <div className="flex items-center gap-2 hover:text-[#fe3675] cursor-pointer">
                <p>English</p> <FaAngleDown />
              </div>

              <div className="flex items-center gap-2 hover:text-[#fe3675] cursor-pointer">
                <p>PHP</p> <FaAngleDown />
              </div>
            </div>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row justify-center">
              <div className="logoWrapper flex items-center col-sm-2">
                <Link to="/">
                  <img src={assets.mr_logo} alt="Logo" />
                </Link>
              </div>

              <div className="col-sm-9 flex items-center part2">
                {/* contry dropdown */}
                {context.countryList?.length !== 0 && <CountryDropdown />}

                {/* Header Search Bar */}
                <SearchBar />

                <div className="part3 flex items-center ml-auto">
                  <Button className="!text-[#fe3675] items-center justify-center !min-w-[120px] !h-[50px] !width-[120px] border !border-[#fe3675]/10 shadow-sm !rounded-full mr-3">
                    Sign In
                  </Button>

                  <div className="ml-auto cartTab flex items-center">
                    <div className="relative">
                      <Button className="!text-[#000] items-center justify-center !min-w-[50px] !h-[50px] !width-[50px] border !border-black/10 !rounded-full">
                        <HiShoppingBag className="text-slate-500" size={20} />
                      </Button>
                      <span className="flex items-center justify-center absolute -top-1 -right-2 bg-[#fe3675] rounded-full w-6 h-6 text-white">
                        0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <NavBar />
      </div>
    </>
  );
};

export default Header;
