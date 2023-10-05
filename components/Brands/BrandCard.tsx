import Image from "next/image";
import Link from "next/link";
import React from "react";

type BrandType = {
  id: number;
  brandImg: string;
  productImg: string;
  description: string;
  href: string;
};

const BrandCard = ({ brand }: { brand: BrandType }) => {
  return (
    <Link href={brand.href} className="bg-[var(--bgCategory)] w-full px-4 pt-8 pb-12 rounded-lg relative">
      <Image
        src={brand.brandImg}
        alt="brand"
        width={140}
        height={60}
        className="object-contain"
      />
      <p className="text-[var(--softTextColor)] mt-2 pr-[70px] text-[14px]">
        {brand.description}
      </p>
      <div className="absolute bottom-[-40px] right-[-15px] sm:right-[-45px] z-30">
        <Image
          src={brand.productImg}
          alt="brand product"
          width={150}
          height={130}
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default BrandCard;
