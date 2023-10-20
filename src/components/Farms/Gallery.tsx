import router from "next/router";
import React, { useCallback, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Mousewheel, Keyboard } from "swiper/modules";
import clsx from "clsx";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";

// import required modules

type Props = {};

const Gallery = (props: Props) => {
  const sliderRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div>
      <Swiper
        onActiveIndexChange={onSlideChange}
        ref={sliderRef}
        // effect={"coverflow"}
        // pagination={{ clickable: true }}
        mousewheel={false}
        keyboard={true}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        initialSlide={0}
        modules={[EffectCoverflow, Mousewheel, Keyboard]}
        className="flex items-center h-[26rem]  md:h-[36rem] relative overflow-hidden"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >
        {[
          "/images/producers-landing.svg",
          "/images/producers-photo.svg",
          "/images/homepage.svg",
          "/images/sidamo.svg",
          "/images/producers-landing.svg",
          "/images/producers-photo.svg",
          "/images/homepage.svg",
          "/images/sidamo.svg",
        ].map((item: any, idx: number) => {
          return (
            <SwiperSlide
              key={idx}
              className=" !flex !justify-center !items-center z-0 w-full sm:w-11/12 md:w-4/5 lg:w-4/5 "
            >
              {({ isActive }) => (
                <>
                  <input
                    type="checkbox"
                    className="peer"
                    hidden
                    defaultChecked={isActive}
                  />
                  <div
                    className={clsx(
                      "relative overflow-hidden transition-all duration-500 ease-in-out w-full h-72 md:h-[450px] flex justify-center items-center self-center justify-self-center peer-checked:bg-orange-700",
                      isActive ? "scale-x-110 scale-y-110" : "scale-100",
                      isActive ? "" : "",
                    )}
                  >
                    <Image
                      src={item}
                      alt=""
                      fill
                      className={clsx(
                        "object-cover",
                        isActive ? "!z-[100]" : "",
                      )}
                    />
                  </div>
                </>
              )}
            </SwiperSlide>
          );
        })}
        <div className="absolute z-10 text-xl top-1/2 left-0 lg:left-2 -translate-y-1/2">
          <GrPrevious
            onClick={() => {
              if (!sliderRef.current) return;
              sliderRef.current.swiper.slidePrev();
            }}
            size={24}
          />
        </div>
        <div className="absolute z-10 text-xl top-1/2 right-0 lg:right-2 -translate-y-1/2">
          <GrNext
            onClick={() => {
              if (!sliderRef.current) return;
              sliderRef.current.swiper.slideNext();
            }}
            className="font-bold"
            size={24}
          />
        </div>
      </Swiper>
    </div>
  );
};

export default Gallery;
