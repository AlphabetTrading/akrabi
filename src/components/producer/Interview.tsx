"use client";

import React from "react";

type Props = {};

const Interview = (props: Props) => {
  return (
    <div className="h-screen grid grid-cols-12 items-center">
      <div className="h-full col-span-9 relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/producers-photo.svg"
        />
        {/* <div
          style={{
            width: 142,
            height: 142,
            background: "rgba(217, 217, 217, 0.01)",
            borderRadius: 9999,
            border: "1px #D9D9D9 solid",
            backdropFilter: "blur(10px)",
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            style={{
              width: 58,
              height: 58,
              paddingLeft: 2.9,
              paddingRight: 2.9,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img className="z-30" src="/icons/play.svg" />
          </div>
        </div> */}
        <div
          style={{
            background: "rgba(217, 217, 217, 0.01)",
            backdropFilter: "blur(10px)",
          }}
          className="w-36 h-36 rounded-full border border-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-125"
        >
          <div className="w-16 h-16 pl-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img onClick={() => {}} src="/icons/play.svg" />
          </div>
        </div>
      </div>
      <div className="h-full bg-secondary flex flex-col col-span-3 justify-center items-center">
        <div className="w-3/4 flex flex-col gap-y-8">
          <h1 className="uppercase underline font-medium text-5xl text-white">
            Hear his story
          </h1>
          <p className="text-xl text-white">
            Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis
            turpis egestas egestas sem. Neque ligula vel id varius imperdiet
            pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis.
            Volutpat venenatis lacinia ornare risus ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interview;
