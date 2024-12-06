import Button from "@mui/material/Button";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { GiClothes } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav>
      <div className="container">
        <div className="row justify-center">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper relative">
              <Button
                className="!bg-[#fe3675]/80 w-full !py-3 text-white !rounded-full items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                <IoMenu className="mr-2" size={20} />
                <span className="text">ALL CATEGORIES</span>
                <FaAngleDown className="ml-2" size={16} />
              </Button>

              <div
                className={`${
                  isOpen === true ? "open" : ""
                } sideBarNav absolute top-[65px] left-0 w-[300px] opacity-0 ease-in-out p-4 bg-[#fff] list-none border`}
              >
                <ul>
                  <li className="static">
                    <Link to="/">
                      <Button className="w-full !text-[#000] !justify-between !capitalize hover:!text-[#fe3675]">
                        &nbsp; Men <FaAngleRight />
                      </Button>
                    </Link>

                    <div className="sub-menu absolute -top-[1px] left-[104%] w-[250px] h-[100.3%] bg-[#fff] border z-100 py-4">
                      <Link className="block w-full" to="/">
                        <Button className="!capitalize !text-md w-full !rounded-none !justify-start !text-[#000] p-2 px-4 hover:!text-[#fe3675]">
                          Clothing
                        </Button>
                      </Link>
                      <Link className="block w-full" to="/">
                        <Button className="!capitalize !text-md w-full !rounded-none !justify-start !text-[#000] p-2 px-4 hover:!text-[#fe3675]">
                          Footwear
                        </Button>
                      </Link>
                      <Link className="block w-full" to="/">
                        <Button className="!capitalize !text-md w-full !rounded-none !justify-start !text-[#000] p-2 px-4 hover:!text-[#fe3675]">
                          Watches
                        </Button>
                      </Link>
                      <Link className="block w-full" to="/">
                        <Button className="!capitalize !text-md w-full !rounded-none !justify-start !text-[#000] p-2 px-4 hover:!text-[#fe3675]">
                          Clothing
                        </Button>
                      </Link>
                      <Link className="block w-full" to="/">
                        <Button className="!capitalize !text-md w-full !rounded-none !justify-start !text-[#000] p-2 px-4 hover:!text-[#fe3675]">
                          Footwear
                        </Button>
                      </Link>
                      <Link className="block w-full" to="/">
                        <Button className="!capitalize !text-md w-full !rounded-none !justify-start !text-[#000] p-2 px-4 hover:!text-[#fe3675]">
                          Watches
                        </Button>
                      </Link>
                    </div>
                  </li>
                  <li className="static">
                    <Link to="/">
                      <Button className="w-full !text-[#000] !justify-between !capitalize hover:!text-[#fe3675]">
                        &nbsp; Women <FaAngleRight color="#000" />
                      </Button>
                    </Link>

                    <div className="sub-menu absolute -top-[1px] left-[104%] w-[250px] h-[100.5%] bg-[#fff] border z-100 py-4">
                      <Link className="block w-full" to="/">
                        <Button className="!capitalize !text-md w-full !rounded-none !justify-start !text-[#000] p-2 px-4 hover:!text-[#fe3675]">
                          Clothing
                        </Button>
                      </Link>
                      <Link className="block w-full" to="/">
                        <Button className="!capitalize !text-md w-full !rounded-none !justify-start !text-[#000] p-2 px-4 hover:!text-[#fe3675]">
                          Footwear
                        </Button>
                      </Link>
                      <Link className="block w-full" to="/">
                        <Button className="!capitalize !text-md w-full !rounded-none !justify-start !text-[#000] p-2 px-4 hover:!text-[#fe3675]">
                          Watches
                        </Button>
                      </Link>
                      <Link className="block w-full" to="/">
                        <Button className="!capitalize !text-md w-full !rounded-none !justify-start !text-[#000] p-2 px-4 hover:!text-[#fe3675]">
                          Clothing
                        </Button>
                      </Link>
                      <Link className="block w-full" to="/">
                        <Button className="!capitalize !text-md w-full !rounded-none !justify-start !text-[#000] p-2 px-4 hover:!text-[#fe3675]">
                          Footwear
                        </Button>
                      </Link>
                      <Link className="block w-full" to="/">
                        <Button className="!capitalize !text-md w-full !rounded-none !justify-start !text-[#000] p-2 px-4 hover:!text-[#fe3675]">
                          Watches
                        </Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button className="w-full !text-[#000] !justify-between !capitalize hover:!text-[#fe3675]">
                        &nbsp; Electronics <FaAngleRight color="#000" />
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button className="w-full !text-[#000] !justify-between !capitalize hover:!text-[#fe3675]">
                        &nbsp; Bakery <FaAngleRight color="#000" />
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button className="w-full !text-[#000] !justify-between !capitalize hover:!text-[#fe3675]">
                        &nbsp; Grocery <FaAngleRight color="#000" />
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button className="w-full !text-[#000] !justify-between !capitalize hover:!text-[#fe3675]">
                        &nbsp; Mobiles <FaAngleRight color="#000" />
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button className="w-full !text-[#000] !justify-between !capitalize hover:!text-[#fe3675]">
                        &nbsp; Men <FaAngleRight color="#000" />
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button className="w-full !text-[#000] !justify-between !capitalize hover:!text-[#fe3675]">
                        &nbsp; Women <FaAngleRight color="#000" />
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button className="w-full !text-[#000] !justify-between !capitalize hover:!text-[#fe3675]">
                        &nbsp; Electronics <FaAngleRight color="#000" />
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button className="w-full !text-[#000] !justify-between !capitalize hover:!text-[#fe3675]">
                        &nbsp; Bakery <FaAngleRight color="#000" />
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button className="w-full !text-[#000] !justify-between !capitalize hover:!text-[#fe3675]">
                        &nbsp; Grocery <FaAngleRight color="#000" />
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button className="w-full !text-[#000] !justify-between !capitalize hover:!text-[#fe3675]">
                        &nbsp; Mobiles <FaAngleRight color="#000" />
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-9 flex items-center w-full navPart2">
            <ul className="mb-0 ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <HiHome size={20} />
                    &nbsp; Home
                  </Button>
                </Link>
              </li>

              <li className="list-inline-item relative">
                <Link to="/cat/products">
                  <Button>
                    <GiClothes size={20} />
                    &nbsp; Fashion &nbsp;
                    <FaAngleDown />
                  </Button>
                </Link>
                <div className="sub-menu absolute top-12 left-0 min-w-[200px] bg-[#fff] shadow-2xl rounded-md">
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Clothing
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Footwear
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Watches
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Clothing
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Footwear
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Watches
                    </Button>
                  </Link>
                </div>
              </li>

              <li className="list-inline-item relative">
                <Link to="/">
                  <Button>
                    <MdLocalGroceryStore size={20} />
                    &nbsp; Grocery &nbsp;
                    <FaAngleDown />
                  </Button>
                </Link>

                <div className="sub-menu absolute top-12 left-0 min-w-[200px] bg-[#fff] shadow-2xl rounded-md">
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Clothing
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Footwear
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Watches
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Clothing
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Footwear
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Watches
                    </Button>
                  </Link>
                </div>
              </li>

              <li className="list-inline-item relative">
                <Link to="/">
                  <Button>
                    <FaMobile size={20} />
                    &nbsp; Mobiles &nbsp;
                    <FaAngleDown />
                  </Button>
                </Link>

                <div className="sub-menu absolute top-12 left-0 min-w-[200px] bg-[#fff] shadow-2xl rounded-md">
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Clothing
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Footwear
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Watches
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Clothing
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Footwear
                    </Button>
                  </Link>
                  <Link className="block w-full" to="/">
                    <Button className="!capitalize !text-md w-full !rounded-none !justify-start">
                      Watches
                    </Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaBlog size={20} />
                    &nbsp; Blog
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <MdContactMail size={20} />
                    &nbsp; Contact Us
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
