import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Timeline from "./Timeline";

type Props = {};

const steps = [
  {
    id: 1,
    title: "Harvesting",
    image: "/images/qpd/harvesting.svg",
    description:
      "Coffee beans are typically harvested by hand-picking when they reach the desired level of ripeness (Red is the most desired color). At this step, most of the expense is acquiring the red cherry. Skilled laborers are required to hand-pick these ripe coffee cherries",
  },
  {
    id: 2,
    title: "Sorting and Cleaning",
    image: "/images/qpd/cleaning.svg",
    description:
      "It involves removing any debris, leaves, or unripe cherries, as well as sorting them by size and quality. This step helps to ensure uniformity in the final product. This process mostly involves manual labor and equipment. The costs can include labor wages, equipment maintenance, and infrastructure expenses.",
  },
  {
    id: 3,
    title: "Processing",
    image: "/images/qpd/drying.svg",
    description:
      "In the wet processing method, the cherries are pulped to remove the outer skin and fruit pulp, exposing the beans which are then fermented in water tanks to remove the remaining mucilage. After fermentation, the beans are thoroughly washed and dried. This process typically involves more machinery and water usage compared to dry processing. The costs include labor for pulping, fermentation, washing, and drying, as well as equipment and water resources.",
  },
  {
    id: 4,
    title: "Milling and Hulling",
    image: "/images/qpd/milling.svg",
    description:
      "Milling and hulling are essential steps after the beans are fully dried. They involve removing the parchment layer and silver skin from the beans to enhance their quality. These processes further refine the beans' quality. The costs associated with milling and hulling include labor wages, equipment maintenance, and energy consumption. Specialized machinery is used for these processes.",
  },
  {
    id: 5,
    title: "Sorting and Grading",
    image: "/images/qpd/sorting_grading.svg",
    description:
      "The beans are sorted based on size, color, density, and quality. Specialized equipment is used to separate the beans into different grades. This ensures consistency. Sorting and grading involve labor wages for skilled workers and the use of specialized equipment. The costs can also vary depending on the number of grades and the thoroughness of the sorting process. Since this is a Grade 2 coffee, it requires more effort hence higher cost.",
  },
  {
    id: 6,
    title: "Quality Control",
    image: "/images/qpd/quality_control.svg",
    description:
      "After samples are taken, various parameters, such as moisture content, bean defects, and cupping evaluations, are assessed to ensure the beans meet the desired standards. Quality control testing involves labor costs for the trained cuppers and quality control personnel.",
  },
  {
    id: 7,
    title: "Packaging",
    image: "/images/qpd/warehouse.svg",
    description:
      "Once the beans pass quality control, they are packaged in jute bags. The bag is designed to protect the beans from moisture, light, and other external factors that can affect their quality. As a result, the bags need to be durable and protective to maintain the quality of the beans during storage and transportation. Packaging costs include the price of the jute bags, as well as labor for packing the beans.",
  },
  {
    id: 8,
    title: "Storage and Shipping",
    image: "/images/qpd/shipment.svg",
    description:
      "The packaged coffee beans are then stored in appropriate warehouses to maintain their freshness. When ready for shipment, the beans are loaded into shipping containers and transported. Costs related to storage and shipping include warehousing expenses, transportation costs, insurance, and documentation fees.",
  },
];

const Steps = (props: Props) => {
  const sliderRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    afterChange: (index: number) => setActiveIndex(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center py-12">
      <div className="w-11/12 lg:w-5/6">
        <div className="w-11/12">
          <h1 className="text-2xl lg:text-5xl font-semibold mb-4 lg:mb-8">
            Every step of the process
          </h1>
          <p className="w-full lg:w-11/12 lg:text-xl my-4 lg:my-8">
            Discover the detailed process behind Washed Grade 2 coffee
            production. Explore each essential step, from harvesting and
            processing to grading, packaging, and global export. Gain insight
            into the careful production that defines the quality and flavor of
            this renowned coffee variety.
          </p>
        </div>
        <Slider ref={sliderRef} className="relative" {...settings}>
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="!w-full !flex flex-col lg:!flex-row items-center lg:h-80 gap-8 lg:gap-16 lg:mx-1"
            >
              <div className="relative w-full lg:w-1/2 h-64 lg:h-full overflow-hidden rounded-xl">
                <Image
                  fill
                  className="absolute inset-0 h-full object-cover"
                  alt=""
                  src={step.image}
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-y-1 lg:gap-y-3">
                <div className="flex gap-x-2">
                  <img src="/icons/farm-detail-check.svg" />
                  <h1 className="lg:text-2xl font-semibold uppercase">
                    Step {step.id}
                  </h1>
                </div>
                <h1 className="text-xl lg:text-3xl font-semibold">
                  {step.title}
                </h1>
                <p className="w-full lg:w-4/5 text-[#646464] lg:text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <Timeline
          steps={steps}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          sliderRef={sliderRef}
        />
      </div>
    </div>
  );
};

export default Steps;
