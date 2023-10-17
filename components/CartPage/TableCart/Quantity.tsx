import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const Quantity = ({
  quantity,
  handleQuantity,
}: {
  quantity: number;
  handleQuantity: (action: string) => void;
}) => {
  return (
    <div className="border border-slate-300 rounded-full py-2 px-4 flex items-center justify-between text-[11px] w-full min-[920px]:w-[160px] mx-auto">
      <p>{quantity}</p>
      <div className="flex items-center gap-2">
        <button
          className="bg-slate-100 flex items-center justify-center p-1 rounded-full"
          onClick={() => handleQuantity("add")}
        >
          <BiPlus />
        </button>
        <button
          className="bg-slate-100 flex items-center justify-center p-1 rounded-full"
          onClick={() => handleQuantity("remove")}
        >
          <BiMinus />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
