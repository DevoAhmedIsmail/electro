import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaCartArrowDownSolid } from "react-icons/lia";

type ProductProps = {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  brand: string;
};

const ProductSectionItem = ({ product }: { product: ProductProps }) => {
  return (
    <Link href="/" className="px-5 py-3">
      <p className="text-[var(--softTextColor)] text-[12px]">{product.brand}</p>
      <p className="text-[#0062bd] font-semibold">{product.title}</p>
      <div className="relative w-full h-44">
        <Image
          src={product.imgSrc}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-5">
          <p
            className={`text-xl ${
              product.discount
                ? "text-[var(--priceSaleColor)]"
                : "text-[var(--textColor)]"
            }`}
          >
            ${product.price}
          </p>
          {product.discount && (
            <p className="text-sm line-through text-[var(--softTextColor)]">
              ${product.oldPrice}
            </p>
          )}
        </div>
        <Link href="/" className="w-9 h-9 bg-[var(--softBg)] rounded-full flex justify-center items-center hover:bg-[var(--yellowColor)] hover:animate-bounce transition-all">
          <LiaCartArrowDownSolid size={20} color="#fff" />
        </Link>
      </div>
    </Link>
  );
};

export default ProductSectionItem;
