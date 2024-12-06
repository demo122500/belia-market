import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoSearchOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null); // for country tab selection
  const [countryList, setCountryList] = useState([]); // for country searchFilter

  const context = useContext(MyContext); // countryList context definition

  // country tab selection starts here
  const selectCountry = (index, country) => {
    setSelectedTab(index);
    setIsOpen(false);
    context.setSelectedCountry(country);
  };
  // country tab selection end here

  useEffect(() => {
    setCountryList(context.countryList);
  }, [context.countryList]);

  // country searchFilter starts here
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(list);
    } else {
      setCountryList(context.countryList);
    }
  };

  return (
    <div>
      <Button
        onClick={() => setIsOpen(true)}
        className="countryDrop !rounded-md"
      >
        <div className="info flex flex-col">
          <span className="label">Your Country</span>
          <span className="name truncate max-w-[120px]" title={context.selectedCountry!=="" ? context.selectedCountry : 'Select Country'}>{context.selectedCountry!=="" ? context.selectedCountry : 'Select Country'}</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        TransitionComponent={Transition}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="locationModal relative"
      >
        <h1 className="text-2xl ">Choose your delivery location</h1>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button
          className="!absolute top-2 right-2 border !bg-[#ececec7c] !rounded-full !w-[40px] !min-w-[40px] !h-[40px]"
          onClick={() => setIsOpen(false)}
        >
          <IoClose size={20} className="text-black" />
        </Button>

        <div className="flex relative items-center p-2 h-[50px] bg-[#f3f4f7] w-full rounded-md border !border-black/10 mt-3">
          <input
            type="text"
            className="w-full p-2 bg-transparent outline-none text-[14px]"
            placeholder="Search your location..."
            onChange={filterList}
          />
          <Button className="absolute -right-1 !rounded-full z-100 !min-w-[40px] !h-[40px]">
            <IoSearchOutline className="text-[#000]" size={20} />
          </Button>
        </div>

        <ul className="countryList mb-0 max-h-[400px] overflow-y-scroll no-scrollbar overflow-x-hidden mt-4">
          {/* countrylist start here */}
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index} className="list-none w-full">
                  <Button
                    onClick={() => selectCountry(index, item.country)}
                    className={`${
                      selectedTab === index ? "active" : ""
                    } w-full !capitalize !text-[#000] !p-3 !px-4`} // added selectedTab for country, active is set to bg-[#e2e2e2] in src/app.css
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
          {/* countrylist ends here */}
        </ul>
      </Dialog>
    </div>
  );
};

export default CountryDropdown;
