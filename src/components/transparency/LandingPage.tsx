import React from "react";
import Image from "next/image";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="w-full h-screen relative">
      <Image
        fill
        src="https://akraabi.s3.amazonaws.com/transparency/transparency-hero.webp"
        alt="transparency-landing-page"
        className="object-cover object-center w-full h-full"
      />
      <div className="bg-gradient-to-b from-[#1C3E5A]/0 to-[#1A1F28] absolute inset-0"></div>
      <div className="absolute top-2/3 left-[35%] lg:left-[25%] transform -translate-x-[35%] -translate-y-1/3 text-white">
        <h1 className="uppercase text-lg lg:text-2xl">Crystal View</h1>
        <h1 className="text-4xl lg:text-7xl font-semibold">
          Revealing Origins,<br></br>Crafting Transparent Coffee.
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
