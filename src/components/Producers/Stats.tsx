"use client";
import React from "react";

type Props = {};

const stats = [
  {
    title: "Farmers",
    value: "50+",
  },
  {
    title: "Farms",
    value: "2",
  },
  {
    title: "Washing Stations",
    value: "4",
  },
  {
    title: "Experience (yrs)",
    value: "6",
  },
];

const Stats = (props: Props) => {
  return (
    <div className="w-full bg-primary flex flex-col md:flex-row items-center md:justify-center py-16">
      <div className="w-5/6 flex justify-between">
        {stats.map((stat: any, index: number) => {
          return (
            <div
              key={index}
              className="p-3 px-5 border-l-2 border-dotted border-black"
            >
              <h1 className="uppercase text-2xl font-semibold">{stat.title}</h1>
              <h1 className="uppercase text-6xl font-bold">{stat.value}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
