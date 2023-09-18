"use client";

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./HeaderSlider.css";
import SliderItem from "./SliderItem";

const HeaderSlider = () => {
  return (
    <div className="header-slider">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <SliderItem />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem />
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default HeaderSlider;
