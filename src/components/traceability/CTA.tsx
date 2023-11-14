"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className="h-[600px] w-full flex">
      <div className="w-1/2 h-full bg-primary flex items-center justify-end px-16">
        <div className="w-11/12 h-full flex flex-col justify-center gap-y-5">
          <h1 className="text-5xl font-semibold uppercase">
            Exploring Sustainable Coffee Export
          </h1>
          <p className="text-[#646464] text-lg">
            Our green coffee is sustainably sourced, promoting environmental
            stewardship and fair livelihoods for coffee farmers.
          </p>
          <div className="bg-black p-3 px-6 w-fit">
            <h1 className="text-white">Take a look</h1>
          </div>
        </div>
      </div>
      <div className="bg-red-500 w-1/2 h-full relative border-2">
        <Image
          className="object-cover"
          src="/images/traceability/traceability.jpg"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default CTA;
