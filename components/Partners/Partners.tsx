"use client";

import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Partners.css";
import Container from "../Container";
import Image from "next/image";

const Partners = () => {
  return (
    <Container>
      <div className="partners-slider py-6 border-y-[1px] border-slate-500/50">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
        //   slidesPerView={6}
          breakpoints={{
            320: {
              slidesPerView: 2, 
            },
            640: {
              slidesPerView: 4, 
            },
            1024: {
              slidesPerView: 6, 
            },
          }}
          navigation
        >
          <SwiperSlide>
            <Image
              src="/images/Partners/themeforest1.png"
              alt="partner"
              width={210}
              height={63}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/Partners/themeforest2.png"
              alt="partner"
              width={210}
              height={63}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/Partners/themeforest2-1.png"
              alt="partner"
              width={210}
              height={63}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/Partners/themeforest3.png"
              alt="partner"
              width={210}
              height={63}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/Partners/themeforest4.png"
              alt="partner"
              width={210}
              height={63}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/Partners/themeforest5.png"
              alt="partner"
              width={210}
              height={63}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/Partners/themeforest6.png"
              alt="partner"
              width={210}
              height={63}
              objectFit="contain"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Partners;
