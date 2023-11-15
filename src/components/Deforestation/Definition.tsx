"use client";

import Image from "next/image";
import React from "react";

type Props = {};

const Definition = (props: Props) => {
  return (
    <div className="bg-secondary w-full h-fit flex flex-col items-center py-24">
      <div className="w-5/6 flex items-center">
        <div className="w-full flex flex-col px-16 items-center">
          <div className="w-11/12 flex flex-col gap-y-4 text-white">
            <div className="flex items-center gap-x-2">
              <img src="/icons/farm-detail-check.svg" />
              <h1 className="text-2xl uppercase font-semibold">Overview</h1>
            </div>
            <h1 className="text-5xl">What is Deforestation?</h1>
            <p className="text-xl">
              Deforestation, the widespread clearing of forests, is a critical
              global concern. In coffee production, it becomes particularly
              relevant due to its impact on the environment, wildlife, and local
              communities. Forests are often cleared for coffee plantations,
              leading to biodiversity loss, increased carbon emissions,
              disrupted water resources, and hardships for local communities.
              Sustainable coffee farming practices aim to mitigate these issues,
              preserving forests and improving the well-being of both nature and
              communities. As a responsible coffee exporter, we are committed to
              sustainable practices for a more ethical and eco-friendly coffee
              industry.
            </p>
          </div>
        </div>
        <div className="w-2/3 h-96 relative">
          <Image fill src="/images/deforestation-landing-page.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Definition;
