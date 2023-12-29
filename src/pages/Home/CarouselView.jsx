import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "./CarouselView.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

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
          slideShadows: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        breakpoints={{
          1920: {},
          2560: {},
          3840: {},
        }}
      >
        {auctionPieces.map((piece, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="br-8" src={piece.img_path} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
