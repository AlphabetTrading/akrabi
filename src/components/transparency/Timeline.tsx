"use client";

import clsx from "clsx";
import React, { useState } from "react";

type Props = {
  steps: any[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  sliderRef?: React.MutableRefObject<any>;
};

const Timeline = ({ steps, activeIndex, setActiveIndex, sliderRef }: Props) => {
  const goToSlide = (index: Number) => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  return (
    <div className="w-full hidden lg:flex justify-between py-4 mt-8">
      {steps.map((step: any, index: number) => {
        return (
          <div
            key={index}
            onClick={() => {
              setActiveIndex(step.id - 1);
              goToSlide(step.id - 1);
            }}
            className={clsx(
              "w-full flex justify-between relative py-6 transition-all duration-300",
              step.id == steps.length ? "" : "border-t-2 border-dashed",
              step.id <= activeIndex ? "border-[#FFC700]" : "border-black/50",
            )}
          >
            <div
              className={clsx(
                "w-6 h-6 absolute -top-3 -left-1 rounded-full",
                step.id - 1 <= activeIndex
                  ? "border border-[#FFC700] animate-pulse duration-300"
                  : "",
              )}
            ></div>
            <div
              className={clsx(
                "w-4 h-4 absolute -top-2 left-0 rounded-full z-50",
                step.id - 1 <= activeIndex ? "bg-[#FFC700]" : "bg-gray-600",
              )}
            ></div>
            <h1
              className={clsx(
                "w-2/3",
                activeIndex === step.id - 1
                  ? "font-semibold text-black"
                  : "text-gray-400",
              )}
            >
              {step.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
