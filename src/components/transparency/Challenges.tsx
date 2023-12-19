"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { EffectCoverflow, Mousewheel, Keyboard } from "swiper/modules";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const CHALLENGES = [
  {
    id: 1,
    title: "Complex and Fragmented Supply Chain",
    description:
      "Ethiopia's coffee sector is characterized by a complex and fragmented supply chain involving numerous intermediaries, including smallholder farmers, washing stations, exporters, roasters, and retailers. This complex network makes it difficult to track the movement of coffee beans from farm to cup and identify potential issues.",
    image: "/images/deforestation-landing-page.jpg",
  },
  {
    id: 2,
    title: "Limited Data Availability and Reliability",
    description:
      "Access to reliable and comprehensive data on coffee production, pricing, and trade is often limited, particularly at the farm level. This lack of data makes it challenging to verify claims of transparency, assess the true value of farmers' beans, and identify potential discrepancies or unfair practices.",
    image: "/images/deforestation-landing-page.jpg",
  },
  {
    id: 3,
    title: "Weak Infrastructure and Information Technology",
    description:
      "Inadequate infrastructure and access to information technology in rural areas hinder transparency efforts. Farmers may lack access to digital tools, reliable internet connectivity, or the knowledge to utilize technology for tracking and documenting their coffee production and sales.",
    image: "/images/deforestation-landing-page.jpg",
  },
  {
    id: 4,
    title: "Lack of Standardization",
    description:
      "The absence of standardized practices and terminology for transparency across the supply chain leads to inconsistencies in reporting and communication. This lack of standardization makes it difficult to compare and verify information from different sources, such as farmers, washing stations, and exporters.",
    image: "/images/deforestation-landing-page.jpg",
  },
  {
    id: 5,
    title: "Consumer Awareness and Demand",
    description:
      "The level of consumer awareness and demand for transparent coffee can influence transparency efforts. If consumers prioritize transparency and are willing to pay a premium for transparently sourced coffee, there will be greater incentives for businesses to invest in transparency initiatives.",
    image: "/images/deforestation-landing-page.jpg",
  },
];

const Challenges = (props: Props) => {
  const sliderRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const progressBarWidth = ((activeIndex + 1) / CHALLENGES.length) * 100;

  const goPrev = () => {
    sliderRef.current?.slickPrev();
    setActiveIndex(activeIndex === 0 ? CHALLENGES.length - 1 : activeIndex - 1);
  };

  const goNext = () => {
    sliderRef.current?.slickNext();
    setActiveIndex(activeIndex === CHALLENGES.length - 1 ? 0 : activeIndex + 1);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    afterChange: (index: number) => setActiveIndex(index),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-y-8">
      <div className="flex flex-col w-5/6 gap-y-4">
        <h1 className="w-full lg:w-1/2 text-2xl lg:text-5xl">
          Challenges to transparency in the Ethiopian coffee sector
        </h1>
        <p className="lg:text-xl">
          The Ethiopian coffee sector, renowned for its diverse and high-quality
          coffee beans, faces several challenges in achieving transparency
          throughout its supply chain. These challenges hinder the ability to
          track the origins and movement of coffee beans.
        </p>
      </div>
      <motion.div className="w-11/12 lg:self-end">
        <Slider
          ref={sliderRef}
          className="challenges relative overflow-visible transition-all duration-500 ease-in-out"
          {...settings}
        >
          {CHALLENGES.map((challenge, index) => (
            <div key={challenge.id} className="pr-2 md:pr-4 lg:pr-0">
              <div
                className={clsx(
                  "w-full lg:!w-[95%] h-[500px] flex justify-center items-center self-center justify-self-center relative transition-all duration-500 ease-in-out",
                )}
              >
                <Image fill alt={challenge.title} src={challenge.image} />
                <div className="absolute inset-0 p-5 lg:p-8 py-10 lg:py-12 flex flex-col gap-y-2 justify-end bg-black/40 text-white">
                  <h1 className="w-4/5 text-3xl font-semibold">
                    {challenge.title}
                  </h1>
                  <p>{challenge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      <div className="hidden md:flex w-11/12 lg:w-5/6 justify-between items-center gap-x-4 lg:gap-x-8">
        <div className="flex gap-x-8">
          <div className="flex gap-x-4">
            <button
              onClick={goPrev}
              className="custom-prev-button rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <g>
                  <path
                    d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z"
                    opacity="1"
                    fill="#000000"
                    data-original="#000000"
                  ></path>
                </g>
              </svg>
            </button>
            <button
              onClick={goNext}
              className="custom-next-button rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <g>
                  <path
                    d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z"
                    opacity="1"
                    fill="#000000"
                    data-original="#000000"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full h-4 bg-primary relative rounded-3xl overflow-hidden transition-all duration-150 ease-in-out">
          <div
            style={{
              width: `${progressBarWidth}%`,
            }}
            className="h-full absolute z-10 rounded-3xl bg-secondary transition-all duration-500 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
