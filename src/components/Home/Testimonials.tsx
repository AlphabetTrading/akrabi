"use client";

import React, { useState } from "react";
import Testimonial from "./Testimonial";
import { Testimony } from "../../../types/testimony";

type Props = {};

const testimonials: Testimony[] = [
  {
    id: 1,
    name: "Gizaw Dori",
    location: "Yirgacheffe, Idido",
    testimony:
      "Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis turpis egestas egestas sem. Neque ligula vel id varius imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis. Volutpat",
  },
];
const Testimonials = (props: Props) => {
  const [currentTestimony, setCurrentTestimony] = useState(0);

  const handlePrev = () => {
    setCurrentTestimony((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentTestimony((prevIndex) =>
      prevIndex + 1 === testimonials.length ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="w-full bg-primary flex flex-col items-center py-16">
      <img className="w-12 h-10 mb-8" src="/icons/quotes.svg" />
      <Testimonial testimony={testimonials[currentTestimony]} />
      <div className="flex gap-x-2 my-4">
        <img
          onClick={handlePrev}
          className="w-8 h-8 cursor-pointer"
          src="/icons/chevron-left.svg"
        />
        <img
          onClick={handleNext}
          className="w-8 h-8 cursor-pointer"
          src="/icons/chevron-right.svg"
        />
      </div>
    </div>
  );
};

export default Testimonials;
