import React from "react";

type Props = {};

const Regions = (props: Props) => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-10">
      <div className="md:col-span-7 bg-secondary flex flex-col gap-y-2 p-16 px-20">
        <h1 className="uppercase text-6xl text-white font-semibold">
          Sidamo Region
        </h1>
        <div className="w-full md:w-3/5 text-white py-2">
          <h1 className="font-light">
            Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis
            turpis egestas egestas sem. Neque ligula vel id varius imperdiet
            pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis.
            Volutpat venenatis lacinia ornare risus ut.
          </h1>
        </div>
        <div className="flex items-end text-white">
          <h1 className="text-5xl">01</h1>
          <h1 className="text-2xl">/05</h1>
          <div className="ml-5 mx-2 p-1 border border-white rounded-full">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7L10 12L15 17"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="p-1 border border-white rounded-full">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 7L15 12L10 17"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-center h-[580px]">
          <img src="/images/sidamo.svg" alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="md:col-span-3 bg-primary flex flex-col gap-y-5 p-16 px-20">
        <div className="flex flex-col">
          <h1 className="uppercase text-3xl text-[#414141] font-semibold">
            Farmers
          </h1>
          <h1 className="text-8xl text-[#414141] font-bold">1000+</h1>
          <h1 className="text-sm text-[#414141]/60 mt-2">
            Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis
            turpis egestas egestas sem. Neque ligula vel id varius imperdiet
            pellentesque.{" "}
          </h1>
        </div>
        <h1>
          ...........................................................................................
        </h1>
        <div className="flex flex-col">
          <h1 className="uppercase text-3xl text-[#414141] font-semibold">
            Farms
          </h1>
          <h1 className="text-8xl text-[#414141] font-bold">35</h1>
          <h1 className="text-sm text-[#414141]/60  mt-2">
            Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis
            turpis egestas egestas sem. Neque ligula vel id varius imperdiet
            pellentesque.{" "}
          </h1>
        </div>
        <h1>
          ...........................................................................................
        </h1>
        <div className="flex flex-col">
          <h1 className="uppercase text-3xl text-[#414141] font-semibold">
            Hectares
          </h1>
          <h1 className="text-8xl text-[#414141] font-bold">91</h1>
          <h1 className="text-sm text-[#414141]/60  mt-2">
            Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis
            turpis egestas egestas sem. Neque ligula vel id varius imperdiet
            pellentesque.{" "}
          </h1>
        </div>
        <h1>
          ...........................................................................................
        </h1>
      </div>
    </div>
  );
};

export default Regions;
