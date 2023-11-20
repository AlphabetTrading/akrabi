"use client";
import React, { useEffect, useRef, useState } from "react";
import CustomCountUp from "../commonn/CustomCountUp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const regions = [
  {
    id: 1,
    name: "Yirgacheffe",
    description:
      "Yirgacheffe coffee is considered one of the best coffees in the world. The small town in Gedeo zone is well known for growing a distinctively floral and fruit toned coffee varieties. Our varieties include Kochere, Idido, Shashmene, Aricha and Konga",
    image: "/images/home/yirgacheffe.svg",
  },
  {
    id: 2,
    name: "Guji",
    description:
      "Coffee has been the crucial product for Guji farmers for more than 500 years. This long tradition of coffee has led to Guji becoming one of the most sought after coffees in the world. The Guji coffee is an organically grown coffee that has flavors associated with dark chocolate, peaches, and nectarines. Our collection of Guji coffee includes, Hambela Wamena, Oda Shakiso, Dimtu, Ela farda, Bilbirsa, Kercha, Layu, Uraga, Dimtu",
    image: "/images/home/guji.svg",
  },
  {
    id: 3,
    name: "Sidamo",
    description:
      "Sidamo Coffee is a name associated with spice and citrus notes, crisp acidity, and a rich body. It’s also the major source of grade 1 and grade 2 coffee of Ethiopia. Sidamo coffee’s fame is a result the fertile highlands and lakes. Our selections include Bensa, Chire, Aroresa and Nensebo ",
    image: "/images/home/sidamo.svg",
  },
  {
    id: 4,
    name: "Gedeb",
    description:
      "Coffee from Gedeb district is known and loved for its fragrant & floral aroma, sweet & balanced taste and smooth acidity. We curate Chelchele, Chelbesa, Worka Sakaro and Banko Gotiti.",
    image: "/images/home/gedeb.svg",
  },
  {
    id: 5,
    name: "Limmu",
    description:
      "Limmu is a high-quality wet-processed (washed) Ethiopian coffee that exhibits a relatively low yet sharp acidity and well-knit structure. Many specialty roasters consider washed Limmu coffee from Ethiopia to be a premium gourmet coffee.",
    image: "/images/home/limmu.svg",
  },
];

const Regions = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const goPrev = () => {
    sliderRef.current?.slickPrev();
    setActiveIndex(activeIndex === 0 ? regions.length - 1 : activeIndex - 1);
  };

  const goNext = () => {
    sliderRef.current?.slickNext();
    setActiveIndex(activeIndex === regions.length - 1 ? 0 : activeIndex + 1);
  };
  const sliderRef = useRef<any>(null);
  const prevButton = useRef<HTMLDivElement>(null);
  const nextButton = useRef<HTMLDivElement>(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplaySpeed: 2000,
    autoplay: true,
    afterChange: (index: number) => setActiveIndex(index),
    arrows: false,
  };

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-10">
      <div className="md:col-span-7 min-h-[85vh] bg-secondary flex flex-col gap-y-2 p-5 px-6 xl:p-16 xl:px-20">
        <div className="flex justify-between md:justify-start items-end text-white">
          <div className="w-20 flex items-baseline">
            <h1 className="text-5xl">0{activeIndex + 1}</h1>
            <h1 className="text-2xl">/05</h1>
          </div>
          <div className="flex items-baseline">
            <div
              ref={prevButton}
              onClick={goPrev}
              className="custom-prev-button ml-5 mx-2 p-1 border border-white rounded-full"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7L10 12L15 17"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              ref={nextButton}
              onClick={goNext}
              className="custom-next-button p-1 border border-white rounded-full"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 7L15 12L10 17"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className=" w-full ">
          <Slider ref={sliderRef} className="relative " {...settings}>
            {regions.map((region) => (
              <div key={region.id} className="flex flex-col gap-y-3">
                <h1 className="uppercase text-4xl lg:text-5xl xl:text-6xl text-white font-semibold">
                  {region.name} Region
                </h1>
                <div className="w-full md:w-3/5 min-h-[200px] text-white py-2">
                  <h1 className="font-light">{region.description}</h1>
                </div>
                <div className=" flex justify-center h-[300px] md:h-[400px] xl:h-[580px]">
                  <img
                    src={region.image}
                    alt={`${region.name}_maps`}
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="md:col-span-3 bg-primary flex flex-col justify-center gap-y-3 xl:gap-y-5 p-5 px-6 xl:p-16 xl:px-20">
        <div className="flex flex-col">
          <h1 className="uppercase text-3xl text-[#414141] font-semibold">
            Farmers
          </h1>
          <h1 className="text-6xl  md:text-7xl xl:text-8xl text-[#414141] font-bold">
            <CustomCountUp end={1000} duration={10} />+
          </h1>
          <h1 className="text-sm text-[#414141]/60 mt-2">
            Our farmers nurture each coffee plant with dedication, ensuring
            every cup carries their passion.
          </h1>
        </div>
        <h1>
          ...........................................................................................
        </h1>
        <div className="flex flex-col">
          <h1 className="uppercase text-3xl text-[#414141] font-semibold">
            Farms
          </h1>
          <h1 className="text-6xl md:text-7xl xl:text-8xl text-[#414141] font-bold">
            <CustomCountUp end={35} duration={10} />+
          </h1>
          <h1 className="text-sm text-[#414141]/60  mt-2">
            Discover the heart of our coffee journey, where the magic begins
            amidst nature&apos;s beauty.
          </h1>
        </div>
        <h1>
          ...........................................................................................
        </h1>
        <div className="flex flex-col">
          <h1 className="uppercase text-3xl text-[#414141] font-semibold">
            Hectares
          </h1>
          <h1 className="text-6xl  md:text-7xl xl:text-8xl text-[#414141] font-bold">
            <CustomCountUp end={91} duration={10} />+
          </h1>
          <h1 className="text-sm text-[#414141]/60  mt-2">
            Across expansive fertile land, our coffee thrives, soaking up the
            richness of the earth to bring you a truly exceptional experience.
          </h1>
        </div>
        <h1>
          ...........................................................................................
        </h1>
      </div>
    </div>
  );
};

export default Regions;
