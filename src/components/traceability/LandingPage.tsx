import Image from "next/image";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";

type Props = {};

const info = [
  {
    id: 1,
    name: "Transparency",
    image: "/images/traceability/transparency.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis turpis egestas egestas sem. Neque ligula vel id varius imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis. Volutpat venenatis lacinia ornare risus ut.",
  },
  {
    id: 2,
    name: "Traceability",
    image: "/images/traceability/traceability.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis turpis egestas egestas sem. Neque ligula vel id varius imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis. Volutpat venenatis lacinia ornare risus ut.",
  },
  {
    id: 3,
    name: "Sustainability",
    image: "/images/traceability/sustainability.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis turpis egestas egestas sem. Neque ligula vel id varius imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis. Volutpat venenatis lacinia ornare risus ut.",
  },
];
const LandingPage = (props: Props) => {
  return (
    <div className="min-h-screen grid grid-cols-12 relative">
      <div className="absolute inset-0  bg-gradient-to-b from-[#1A1F28]/0 to-[#1A1F28] z-10"></div>
      {info.map((singleInfo: any, index: number) => {
        return (
          <div
            key={index}
            className="group col-span-4 overflow-hidden relative"
          >
            <Image
              className="group-hover:scale-105 transition-all duration-500"
              fill
              src={singleInfo.image}
              alt=""
            />
            <div className="absolute p-16 z-20 inset-0 flex flex-col justify-end gap-y-3">
              <div className="flex items-center gap-x-3">
                <img src="/icons/round-bullet.svg" />
                <h1 className="text-white text-2xl uppercase">
                  {singleInfo.name}
                </h1>
              </div>
              <div className="invisible group-hover:visible flex items-center gap-x-2">
                <div className="p-2 border rounded-full">
                  <AiOutlineDown color="#ffffff" />
                </div>
                <h1 className="text-white text-2xl font-light">Take a look</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LandingPage;
