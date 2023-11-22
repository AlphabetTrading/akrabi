"use client";

import React from "react";

type Props = {};

const roles = [
  {
    id: 1,
    title: "Soil Erosion and Water Pollution",
    description:
      "When forests are cleared for coffee farms, the exposed soil is vulnerable to erosion, leading to reduced soil fertility. The use of pesticides and fertilizers in coffee cultivation can lead to water pollution, harming aquatic ecosystems and potentially affecting local communities that rely on clean water sources for drinking and agriculture.",
  },
  {
    id: 2,
    title: "Habitat Destruction and Biodiversity Loss",
    description:
      "Deforestation in coffee-growing areas disrupts local ecosystems, displaces wildlife, and threatens many plant and animal species. This loss of habitat contributes to biodiversity decline and can even lead to species extinction.",
  },
  {
    id: 3,
    title: "Local Communities",
    description:
      "Many coffee-producing regions are home to indigenous and local communities. Deforestation can displace these communities, depriving them of their traditional lands and livelihoods. It can also lead to conflicts over land rights and resources between local communities and coffee producers or large corporations.",
  },
  {
    id: 4,
    title: "Climate Change and Carbon Emissions",
    description:
      "Coffee farms in previously forested areas are responsible for increased greenhouse gas emissions. Climate change can also affect coffee crops themselves, leading to changing growing conditions, reduced yields, and increased vulnerability to pests and diseases.",
  },
];

const Roles = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center gap-y-6">
      <div className="w-11/12 lg:w-5/6 flex flex-col">
        <h1 className="text-3xl lg:text-5xl font-semibold">
          Role of Coffee Production
        </h1>
      </div>
      <div className="w-full bg-secondary flex flex-col items-center">
        <div className="grid grid-cols-12">
          {roles.map((role: any, index: number) => {
            return (
              <div
                key={index}
                className="w-full col-span-12 lg:col-span-6 flex flex-col items-center border border-dashed border-white py-8 lg:py-16"
              >
                <div className="w-4/5 lg:w-2/3 flex flex-col text-white gap-y-4">
                  <div className="flex items-center gap-x-3">
                    <img src="/icons/farm-detail-check.svg" />
                    <h1 className="text-lg lg:text-2xl uppercase font-semibold">
                      {role.title}
                    </h1>
                  </div>
                  <p className="lg:text-xl">{role.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roles;
