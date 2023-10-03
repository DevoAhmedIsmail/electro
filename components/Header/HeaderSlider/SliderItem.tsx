import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SliderItem = () => {
  return (
    <Container>
      <div className="px-16 py-[40px] lg:py-[0]">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="uppercase">
            <div className="text-[32px] lg:text-[48px] xl:text-[58px] text-[#333e48] leading-[0.9] font-[300]">
              <p className="mb-2">End season</p>
              <p>smartphones</p>
            </div>
            <div className="text-[#333e48] font-[700] flex-center gap-2 mt-4">
              last call for up to{" "}
              <p>
                <sup className="text-xl xl:text-4xl top-[-20px] xl:top-[-35px]">$</sup>
                <span className="text-2xl lg:text-5xl xl:text-7xl">250</span>
                <span>off!</span>
              </p>
            </div>
            <Link
              href="/"
              className="bg-[var(--yellowColor)] py-[12px] px-[58px] rounded-xl mt-5 capitalize text-[#333e48] block w-fit"
            >
              Start Buying
            </Link>
          </div>

          <div className="hidden lg:block w-[50%]">
            <div className="relative w-full h-96">
              <Image
                src="/images/slider-v12-image.png"
                alt=""
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SliderItem;
