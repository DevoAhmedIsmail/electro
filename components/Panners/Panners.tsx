import React from "react";
import Container from "../Container";
import Image from "next/image";

const Panners = () => {
  return (
    <Container>
      <div className="py-6">
        <div className="flex justify-between flex-col xl:flex-row gap-4">
          <div className="relative w-full h-[80px] sm:h-[140px] lg:h-[160px] flex-auto xl:flex-1 ">
            <Image
              src="/images/panners/banner-h12-1.avif"
              alt="panner 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center flex-auto xl:flex-1 gap-4">
            <div className="relative w-full h-[80px] sm:h-[140px] lg:h-[160px] ">
              <Image
                src="/images/panners/banner-h12-2.png"
                alt="panner 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[80px] sm:h-[140px] lg:h-[160px] ">
              <Image
                src="/images/panners/banner-h12-3.avif"
                alt="panner 1"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Panners;
