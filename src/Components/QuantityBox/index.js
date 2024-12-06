import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { useState } from "react";

const QuantityBox = () => {
  const [quantity, setQuantity] = useState(1);

  const minus = () => {
    setQuantity(quantity - 1);

    if (quantity <= 1) {
      setQuantity(1);
    }
  };

  const plus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={minus}
        className="!bg-[#ececec7c] !rounded-full !w-[38px] !min-w-[38px] !h-[38px] border"
      >
        <FaMinus color="black" />
      </Button>
      <p className=" text-black/80 text-lg">{quantity}</p>
      <Button
        onClick={plus}
        className="!bg-[#ececec7c] !rounded-full !w-[38px] !min-w-[38px] !h-[38px] border"
      >
        <FaPlus color="black" />
      </Button>
    </div>
  );
};

export default QuantityBox;
