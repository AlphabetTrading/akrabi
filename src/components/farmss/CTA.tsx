"use client";

import React from "react";
import Title from "../commonn/Title";
import SubTitle from "../commonn/SubTitle";

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className="h-96 grid grid-cols-12 items-center">
      <div className="h-full col-span-4 relative">
        <img
          className="absolute h-full w-full inset-0 object-cover"
          src="/images/farms-cta.png"
        />
      </div>
      <div className="h-full col-span-8 flex flex-col justify-center ">
        <div className="w-2/3 flex flex-col gap-y-6 mx-16">
          <Title text="Promoting sustainable and environmentally friendly practices" />
          <SubTitle text="Overview" />
          <p className="w-2/3 text-xl">
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

export default CTA;
