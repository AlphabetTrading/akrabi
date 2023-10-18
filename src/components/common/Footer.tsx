import { GetCurrentYear } from "@/helpers/getCurrentYear";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-5/6 grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="grid col-span-3 gap-y-8">
          <h1 className="uppercase text-5xl font-semibold">
            Akrabi<span className="text-[#FFB800]">.</span>
          </h1>
          <p className="text-lg text-text/70">
            Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis
            turpis egestas egestas sem. Neque ligula vel id varius imperdiet
            pellentesque.
          </p>
          <div className="flex gap-x-3">
            <img src="/icons/facebook.svg" />
            <img src="/icons/instagram.svg" />
            <img src="/icons/x.svg" />
          </div>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-7">
          <div className="flex gap-x-16">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-2xl font-semibold mb-3">Quick Links</h1>
              <h1 className="text-xl">Home</h1>
              <h1 className="text-xl">Producers</h1>
              <h1 className="text-xl">Farms</h1>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-2xl font-semibold mb-3">Resources</h1>
              <h1 className="text-xl">Traceability</h1>
              <h1 className="text-xl">Deforestation</h1>
              <h1 className="text-xl">Sustainabih1ty</h1>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-2xl font-semibold mb-3">About</h1>
              <h1 className="text-xl">About Us</h1>
              <h1 className="text-xl">Contact Us</h1>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full col-span-12 mt-16 my-6 bg-black/20"></div>
        <div className="col-span-3 text-lg text-[#7E7E7E]">
          <h1>© {GetCurrentYear()} Akrabi. All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
