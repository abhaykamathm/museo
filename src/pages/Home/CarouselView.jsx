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
        loop={false}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        initialSlide={parseInt(auctionPieces.length / 2)}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: -80,
          modifier: 1.1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        breakpoints={{
          1920: {},
          2560: {},
          3840: {
            // slidesPerView: 3,
            // coverflowEffect: { depth: -240, rotate: 30 },
          },
        }}
      >
        {auctionPieces.map((piece, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className="br-8"
                src={piece.img_path}
                // onClick={(e) => {
                //   if (
                //     e.target.parentNode.classList
                //       .toString()
                //       .includes("swiper-slide-active")
                //   ) {
                //     console.log(e.target);
                //   }
                // }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
