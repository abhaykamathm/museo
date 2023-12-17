import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./CarouselView.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function CarouselView({ auctionPieces }) {
  return (
    <>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: -80,
          modifier: 1.1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
      >
        {auctionPieces.map((piece, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={piece.img_path} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-pagination"></div>
    </>
  );
}
