import { ProductsType } from "@/types/productsType";
import React from "react";
import ProductOptions from "./ProductOptions";
import { BiCartDownload } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCheckout = ({productData}: {productData: ProductsType}) => {
  return (
    <div className="pl-4 text-[var(--textColor)]">
      <div className="border rounded-xl p-6 shadow">
        <p className="text-[13px] text-[var(--softTextColor)] border-b pb-2">
          Available: <span className="text-green-600 font-bold">In stock</span>
        </p>

        <div className="flex items-center gap-6 pt-3">
          <p className="text-3xl">${productData.price}</p>
          <p className="line-through text-[var(--softTextColor)] text-sm">${productData.oldPrice}</p>
        </div>

        <div className="mt-6 space-y-5">
          <ProductOptions optionType="size" optionData={["M","S","L"]} />
          <ProductOptions optionType="color" optionData={["#a8572d","#f471a8","#527ac8","#2525d0"]} />
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <button
            className = "flex justify-center items-center gap-2 text-white bg-[var(--yellowColor)] text-[var(--textColor)] py-3 px-8 rounded-lg font-semibold">
            <BiCartDownload size={24}  />Add to cart
          </button>
          <button className="bg-[var(--secondText)] text-[var(--bgMode)] py-3 px-8 rounded-lg font-semibold ">
            Buy now
          </button>
          <button className="flex items-center gap-2 w-fit"><AiOutlineHeart /> Wishlist</button>
        </div>
  
      </div>
    </div>
  );
};

export default ProductCheckout;
