import React from "react";
import Image from "next/image";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="w-full h-screen relative">
      <Image
        fill
        src="/images/deforestation-landing-page.jpg"
        alt="deforestation-landing-page"
        className="object-cover object-center w-full h-full"
      />
      <div className="bg-gradient-to-b from-[#1C3E5A]/0 to-[#1A1F28] absolute inset-0"></div>
      <div className="absolute top-1/3 left-[40%] transform -translate-x-[40%] -translate-y-1/3 text-white">
        <h1 className="uppercase text-lg lg:text-2xl">
          Unveiling Coffee&apos;s Journey
        </h1>
        <h1 className="text-4xl lg:text-7xl font-semibold">
          A Transparent Approach to Export
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
