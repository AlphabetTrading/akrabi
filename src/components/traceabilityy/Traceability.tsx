"use client";

import Image from "next/image";
import React, { useState } from "react";
import Timeline from "./Timeline";

type Props = {};

const steps = [
  {
    id: 1,
    title: "Harvesting",
    image: "/images/qpd/harvesting.svg",
    description:
      "Coffee beans are typically harvested by hand-picking when they reach the desired level of ripeness (Red is the most desired color). At this step, most of the expense is related to labor. Skilled laborers are required to hand-pick the ripe coffee cherries",
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

const Traceability = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full flex flex-col items-center my-16">
      <div className="w-5/6 flex flex-col gap-y-8">
        <div className="flex gap-x-2">
          <img src="/icons/farm-detail-check.svg" />
          <h1 className="text-2xl font-semibold uppercase">Overview</h1>
        </div>
        <h1 className="text-5xl font-semibold">Traceability</h1>
        <div className="flex justify-between">
          <p className="mr-12 text-xl">
            In the world of green coffee export, traceability serves as the
            cornerstone of our commitment to quality and transparency. It&apos;s
            a meticulous process that allows us to trace the journey of each
            individual green coffee bean from its humble beginnings on coffee
            farms to its destination at your roastery. This unwavering
            dedication to traceability ensures that as a roaster, you receive
            green coffee beans of the utmost caliber, allowing you to craft
            exceptional coffee experiences for your customers.
          </p>
          <p className="ml-12 text-xl">
            In practice, green coffee traceability involves the use of
            technology and rigorous record-keeping to maintain the integrity of
            the supply chain. It empowers stakeholders to verify the
            authenticity and quality of coffee beans while complying with
            regulations and promoting ethical and sustainable practices
            throughout the coffee industry. Green coffee traceability plays a
            vital role in creating a more transparent, responsible, and
            environmentally conscious coffee industry.
          </p>
        </div>
        <div>
          <div className="flex items-center h-80 transition-all duration-300">
            <div className="relative w-1/2 h-full mr-8 rounded-xl overflow-hidden">
              <Image
                fill
                className="h-full object-cover"
                alt=""
                src={steps[activeIndex].image}
              />
            </div>
            <div className="w-1/2 flex flex-col gap-y-3 ml-8">
              <div className="flex gap-x-2">
                <img src="/icons/farm-detail-check.svg" />
                <h1 className="text-2xl font-semibold uppercase">
                  Step {steps[activeIndex].id}
                </h1>
              </div>
              <h1 className="text-3xl font-semibold">
                {steps[activeIndex].title}
              </h1>
              <p className="w-4/5 text-[#646464] text-lg">
                {steps[activeIndex].description}
              </p>
            </div>
          </div>
          <Timeline
            steps={steps}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Traceability;
