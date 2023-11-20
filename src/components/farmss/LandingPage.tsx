"use client";

import React from "react";
import Title from "../commonn/Title";
import SubTitle from "../commonn/SubTitle";

type Props = {};

const attributes = [
  {
    icon: "/icons/temperature.svg",
    title: "Average Temperature",
    value: "20°c",
  },
  {
    icon: "/icons/soil-type.svg",
    title: "Soil Type",
    value: "Clay",
  },

  {
    icon: "/icons/rainfall.svg",
    title: "Rainfall",
    value: "1200mm",
  },

  {
    icon: "/icons/humidity.svg",
    title: "Humidity",
    value: "60-80%",
  },

  {
    icon: "/icons/altitude.svg",
    title: "Altitude",
    value: "1800-2100masl",
  },
];

const LandingPage = (props: Props) => {
  return (
    <div className="h-screen grid grid-cols-12">
      <div
        className="h-full col-span-8 flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: `url('/images/farms-landing-page-main.png')`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-4/5 text-white">
          <div className="w-5/6 flex flex-col gap-y-6">
            <h1 className="uppercase text-7xl font-semibold">
              Discover the quality of yirgacheffe coffee
            </h1>
            <p className="w-3/4 text-lg">
              Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus
              iaculis turpis egestas egestas sem. Neque ligula vel id varius
              imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor
              lobortis. Volutpat venenatis lacinia ornare risus ut.
            </p>
          </div>
        </div>
        <div className="w-full h-36 flex flex-col items-center justify-center bg-gradient-to-b from-black/0 to-black absolute bottom-0">
          <div className="w-[86%] flex justify-between">
            {attributes.map((attribute: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex p-3 border-l-2 border-dotted border-white text-white"
                >
                  <img className="mr-2" src={attribute.icon} />

                  <div className="w-full flex flex-col">
                    <h1 className="text-white/80">{attribute.title}</h1>
                    <h1 className="text-xl font-semibold">{attribute.value}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-full col-span-4 flex flex-col items-center">
        <div
          style={{
            backgroundImage: `url('/images/farms-landing-page.svg')`,
          }}
          className="w-full flex justify-evenly items-center h-72"
        >
          {[
            {
              title: "Latitude",
              value: "9.0192° N",
            },
            {
              title: "Longitude",
              value: "38.7525° E",
            },
          ].map((attribute: any, index: number) => {
            return (
              <div
                key={index}
                className="p-1 px-3 border-l-2 border-dotted border-black text-black"
              >
                <h1>{attribute.title}</h1>
                <h1 className="text-xl font-semibold">{attribute.value}</h1>
              </div>
            );
          })}
        </div>
        <div className="w-5/6 flex flex-col gap-y-6">
          <Title text="Gizaw Dori Farm #1" />
          <SubTitle text="Oveview" />
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis
            turpis egestas egestas sem. Neque ligula vel id varius imperdiet
            pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis.
            Volutpat venenatis lacinia ornare risus ut.
          </p>
          <div className="flex justify-around">
            {[
              {
                icon: "/icons/annual-production.svg",
                title: "Annual Production",
                value: "5400MT",
              },

              {
                icon: "/icons/number-of-employees.svg",
                title: "Number of Employees",
                value: "602",
              },
            ].map((attribute: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex p-3 py-1 border-l-2 border-dotted border-black text-black"
                >
                  <img className="mr-2" src={attribute.icon} />

                  <div className="w-full flex flex-col">
                    <h1>{attribute.title}</h1>
                    <h1 className="text-xl font-semibold">{attribute.value}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
