"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const details = [
  {
    title: "Promoting sustainable and environmentally friendly practices",
    subtitle: "Sustainability",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis turpis egestas egestas sem. Neque ligula vel id varius imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis.",
    link: "",
  },
  {
    title: "Promoting sustainable and environmentally friendly practices",
    subtitle: "Transparency",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis turpis egestas egestas sem. Neque ligula vel id varius imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis.",
    link: "",
  },
  {
    title: "Promoting sustainable and environmentally friendly practices",
    subtitle: "Traceability",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis turpis egestas egestas sem. Neque ligula vel id varius imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis.",
    link: "",
  },

  {
    title: "Promoting sustainable and environmentally friendly practices",
    subtitle: "Deforestation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis turpis egestas egestas sem. Neque ligula vel id varius imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis.",
    link: "",
  },
];
const Details = (props: Props) => {
  const router = useRouter();
  return (
    <div className="bg-primary px-10 py-16">
      <div className="flex gap-x-8">
        {details.map((detail: any, index: number) => {
          return (
            <div key={index} className="flex flex-col gap-y-4">
              <h1 className="font-semibold text-3xl">{detail.title}</h1>
              <div className="flex gap-x-4">
                <img src="/icons/farm-detail-check.svg" />
                <h1 className="uppercase font-semibold text-xl">
                  {detail.subtitle}
                </h1>
              </div>
              <p className="text-lg">{detail.description}</p>
              <div
                // onClick={() => {
                //   router.push(detail.link);
                // }}
                className="flex gap-x-2"
              >
                <h1 className="text-xl font-semibold">Learn more</h1>
                <img src="/icons/farm-detail-learn-more.svg" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
