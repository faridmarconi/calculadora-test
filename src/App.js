import React from "react";
import Calculator from "./components/calculator/Calculator";
import RegraDeTres from "./components/regradetres/Regradetres";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "./index.css";

import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><Calculator /></SwiperSlide>
        <SwiperSlide><RegraDeTres/></SwiperSlide>
        
      </Swiper>
    </>
  );
}