"use client";
import React from "react";

type Props = {};

const concerns = [
  {
    id: 1,
    title: "Erosion and Land Degradation",
    description:
      "Trees and their root systems help hold soil in place, preventing erosion. Without them, soil erosion can become a significant problem, degrading the land and reducing its productivity.",
  },
  {
    id: 2,
    title: "Loss of Biodiversity",
    description:
      "Forests are incredibly diverse ecosystems that house a wide variety of plant and animal species. When forests are cleared, many of these species lose their habitats and can face extinction. This loss of biodiversity can disrupt ecosystems and weaken their resilience.",
  },
  {
    id: 3,
    title: "Climate Change",
    description:
      "Trees absorb and store significant amounts of carbon dioxide, a greenhouse gas responsible for global warming. When forests are cut down or burned, the stored carbon is released into the atmosphere, contributing to climate change.",
  },
  {
    id: 4,
    title: "Disruption of Water Cycles",
    description:
      "Forests play a crucial role in regulating local and global water cycles. They help maintain soil moisture, prevent erosion, and release water slowly into rivers and streams. Deforestation can lead to disrupted water flows, increased flooding, and reduced water quality.",
  },
  {
    id: 5,
    title: "Impact on Indigenous Communities",
    description:
      "Many indigenous people depend on forests for their livelihoods and cultural identity. Deforestation often displaces these communities, leading to social and economic challenges.",
  },
  {
    id: 6,
    title: "Negative Economic Effects",
    description:
      "While deforestation may provide short-term economic gains, it often leads to long-term economic problems, including reduced agricultural productivity, water shortages, and increased costs for mitigating the effects of environmental damage.",
  },
];

const Concerns = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center py-32">
      <div className="w-5/6 flex flex-col gap-y-8">
        <h1 className="text-5xl font-semibold capitalize text-black">
          Why is it a significant concern?
        </h1>
        <div className="grid grid-cols-12 gap-8">
          {concerns.map((concern: any, index: number) => {
            return (
              <div
                key={index}
                className="bg-[#EEEEEE] col-span-12 md:col-span-6 xl:col-span-4 h-[420px] flex flex-col justify-between p-6 px-8 rounded-2xl"
              >
                <div className="">
                  <h1 className="text-3xl mb-12">0{concern.id}</h1>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex items-center gap-x-3">
                    <img src="/icons/farm-detail-check.svg" />
                    <h1 className="text-2xl font-semibold">{concern.title}</h1>
                  </div>
                  <div>
                    <div className="w-1/2 border-black border-dashed border-t-2 py-2"></div>
                    <p className="text-xl">{concern.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Concerns;
