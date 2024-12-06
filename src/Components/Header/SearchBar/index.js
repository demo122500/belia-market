import { IoSearchOutline } from "react-icons/io5";
import Button from "@mui/material/Button";

const SearchBar = () => {
  return (
    <div className="flex relative items-center p-2 w-[60%] h-[50px] bg-[#f3f4f7] ml-3 mr-3 rounded-md border !border-black/10">
      <input
        type="text"
        className="w-full p-2 bg-transparent outline-none text-[14px]"
        placeholder="Search for products, brands and more..."
      />
      <Button className="absolute -right-1 !rounded-full z-100 !min-w-[40px] !h-[40px]">
        <IoSearchOutline className="text-[#000]" size={20} />
      </Button>
    </div>
  );
};

export default SearchBar;
