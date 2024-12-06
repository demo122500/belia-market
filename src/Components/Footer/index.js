import { IoIosMail } from "react-icons/io";
import { assets } from "../../assets/assets";
import Button from "@mui/material/Button";
import { GiMilkCarton } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { TbCurrencyPeso } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <section className="newsLetter relative px-20 w-full h-auto overflow-hidden py-28 bg-pink mt-8 flex items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-[#fff] text-lg font-normal">
                ₱1000 discount for your first order
              </p>
              <h2 className="text-3xl text-[#fff] font-semibold mb-3">
                Join our newsletter and get...
              </h2>
              <p className="text-[14px] text-[#fff]/50">
                Join our email subscription now to get updates <br /> on
                promotions and coupons.
              </p>

              <form
                action=""
                className="w-full h-[60px] bg-[#fff] relative p-4 flex items-center gap-4 mt-4 rounded-md"
              >
                <IoIosMail size={30} />
                <input
                  type="text"
                  className="w-full h-[50px] text-[16px] !bg-[#fff] !outline-none !border-none"
                  placeholder="Your email address"
                />
                <Button className="!bg-[#fe3675] hover:!bg-[#fe3675]/90 !p-[14px] !px-8 !text-[#fff] !absolute !right-1 !capitalize">
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="col-md-6 !static">
              <img
                src={assets.newsLetter}
                alt=""
                className="absolute bottom-0 right-72"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="promotions w-full px-20">
        <div className="container border-b">
          <div className="row">
            <div className="col-md-12 flex items-center justify-between p-8 px-12">
              <div className="flex items-center gap-2">
                <GiMilkCarton size={30} />
                <p className="text-[#000] font-medium text-[16px]">
                  Everyday fresh products
                </p>
              </div>
              <hr className="border h-full" />
              <div className="flex items-center gap-2">
                <TbTruckDelivery size={30} />
                <p className="text-[#000] font-medium text-[16px]">
                  Free delivery for order over ₱1000
                </p>
              </div>
              <hr className="border h-full" />
              <div className="flex items-center gap-2">
                <CiDiscount1 size={30} />
                <p className="text-[#000] font-medium text-[16px]">
                  Daily Mega Discounts
                </p>
              </div>
              <hr className="border h-full" />
              <div className="flex items-center gap-2">
                <TbCurrencyPeso size={30} />
                <p className="text-[#000] font-medium text-[16px]">
                  Best price on the market
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footerLink w-full px-20">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="flex items-start justify-between py-16 uppercase text-[16px] text-black">
                <div>
                  <li className="mb-2">Fruits & Vegetables</li>
                  <div className="submenu">
                    <ul>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Fresh Vegetables
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Fresh Fruits
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Cuts & Sprouts
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Exotic Fruits & Veggies
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Packaged Produce
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Party Trays
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <li className="mb-2">Breakfast & Dairy</li>
                  <div className="submenu">
                    <ul>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Milk & Flavoured Milk
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Butter and Margarine
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Cheese
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Eggs Substitutes
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Honey
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Marmalades
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Sour Cream and Dips
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Yogurt
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <li className="mb-2">Meat & Seafood</li>
                  <div className="submenu">
                    <ul>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Breakfast Sausage
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Dinner Sausage
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Beef
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Chicken
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Sliced Deli Meat
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Shrimp
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Wild Caught Fillets
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Crab and Shelfish
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Farm Raised Fillets
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <li className="mb-2">Beverages</li>
                  <div className="submenu">
                    <ul>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Water
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Sparkling Water
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Soda & Pop
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Coffee
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Milk & Plant-Based Milk
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Tea & Kombucha
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Drink Boxes & Pouches
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Craft Beer
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Wine
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <li className="mb-2">Breads & Bakery</li>
                  <div className="submenu">
                    <ul>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Milk & Flavored Milk
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Butter and Margarine
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Cheese
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Eggs Substitutes
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Honey
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Marmalades
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Sour Cream and Dips
                      </li>
                      <li className="text-sm capitalize leading-6 text-gray-600">
                        Yogurt
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="footerPart3 w-full bg-white border px-20">
        <div className="container border-b">
          <div className="row">
            <div className="w-full py-12 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Button className="!min-w-[50px] !w-[50px] !h-[50px] !rounded-full border !shadow-lg">
                  <FiPhoneCall size={20} className="text-black/70" />
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-black">8 800 555-55</h1>
                  <p className="text-sm text-gray-600">
                    Working hours: 8:00 - 22:00
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex flex-col items-end">
                  <h2 className="text-[16px] font-bold text-black">
                    Download App on Mobile :
                  </h2>
                  <span className="text-sm text-gray-600">
                    15% discount on your first purchase
                  </span>
                </div>
                <img
                  src={assets.playstoreLogo}
                  alt=""
                  className="w-[140px] rounded-md"
                />
                <img
                  src={assets.appstoreLogo}
                  alt=""
                  className="w-[140px] rounded-md"
                />

                <div className="socials flex items-center gap-1">
                  <Button className="!min-w-[40px] !w-[40px] !h-[40px] !rounded-full border shadow-md">
                    <FaFacebookF size={16} color="#fe3675" />
                  </Button>
                  <Button className="!min-w-[40px] !w-[40px] !h-[40px] !rounded-full border shadow-md">
                    <FaTwitter size={16} color="#fe3675" />
                  </Button>
                  <Button className="!min-w-[40px] !w-[40px] !h-[40px] !rounded-full border shadow-md">
                    <FaInstagram size={16} color="#fe3675" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="container flex items-center justify-between">
            <p className="text-gray-500">
              Copyright 2024 © Shoppy. All rights reserved. Powered by RSBDev.
            </p>
            <div className="flex items-center gap-4">
              <ul className="flex items-center gap-4 text-gray-500">
                <li className="list-none hover:text-[#fe3675] cursor-pointer">
                  Privacy Policy
                </li>
                <li className="list-none hover:text-[#fe3675] cursor-pointer">
                  Terms and Conditions
                </li>
                <li className="list-none hover:text-[#fe3675] cursor-pointer">
                  Cookie
                </li>
              </ul>
              <img
                src={assets.paymentGateways}
                alt=""
                className="w-[300px] shadow-sm border rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
