import clsx from "clsx";
import React, { useState } from "react";

type Props = {
  steps: any[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Timeline = ({ steps, activeIndex, setActiveIndex }: Props) => {
  return (
    <div className="w-full flex justify-between py-4 mt-8">
      {steps.map((step: any, index: number) => {
        return (
          <div
            key={index}
            onClick={() => setActiveIndex(step.id - 1)}
            className="w-full flex justify-between border-t-2 border-dashed border-black/50 relative py-6 transition-all duration-300"
          >
            <div
              className={clsx(
                "w-6 h-6 absolute -top-3 -left-1 rounded-full",
                activeIndex === step.id - 1
                  ? "border border-[#FFC700] animate-pulse duration-300"
                  : "",
              )}
            ></div>
            <div
              className={clsx(
                "w-4 h-4 absolute -top-2 left-0 rounded-full z-50",
                activeIndex === step.id - 1 ? "bg-[#FFC700]" : "bg-gray-600",
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
