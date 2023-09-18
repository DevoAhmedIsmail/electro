import Image from "next/image";
import Link from "next/link";
import React from "react";

type CategoryType = {
  category: {
    id: number;
    title: string;
    href: string;
    imgSrc: string;
    count: number;
  };
};

const Category = ({ category }: CategoryType) => {
  return (
    <div className="flex flex-col items-center justify-between bg-[var(--bgCategory)] text-[var(--textColor)] h-[150px] rounded-2xl">
      <Link href={category.href}>
        <div className="relative w-[150px] h-[150px] mt-[-80px]">
          <Image
            src={category.imgSrc}
            alt={category.title}
            fill
            className="object-contain"
            style={{ top: "-65px!important" }}
          />
        </div>
      </Link>
      <div className="flex-1 w-full px-3">
        <Link href={category.href} className="group">
          <div className="border-t-2 border-slate-400/20 text-center pt-2">
            <p className="font-semibold">{category.title}</p>
            <p className="text-sm group-hover:text-[var(--yellowColor)] transition-colors duration-300">{category.count} Products</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
