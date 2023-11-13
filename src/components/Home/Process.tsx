import React from "react";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

type Props = {};

const Process = (props: Props) => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-10 py-16 gap-x-4 justify-between items-center">
      <div className="md:col-span-3 flex flex-col gap-y-2 pr-12">
        <img src="/images/every-step.svg" />
      </div>
      <div className="md:col-span-7 flex flex-col gap-y-5 px-16">
        <div className="w-11/12 grid grid-cols-1 gap-y-8">
          <h1 className="text-5xl">
            <span className="font-semibold">
              Coffee&apos;s Journey from Blossom to Brew
            </span>
            : A Story of Elegance, Transformation, and Global Connections
          </h1>
          <SubTitle text="Every step of the process" />
          <div className="w-full grid grid-cols-2 gap-8 gap-x-12">
            <p>
              We delicately pick the ripe cherries, ensuring that only the most
              exceptional fruits are chosen to undergo the meticulous process of
              crafting unparalleled coffee.
            </p>
            <p>
              With a focus on quality, we employ great techniques to harvest and
              select the ripe cherries, setting the foundation for a coffee
              experience defined by precision and care.
            </p>
            <p>
              Witness the magic as our experts transform the harvested cherries
              into green coffee beans, preserving the subtle flavors that make
              each origin distinctive.
            </p>
            <p>
              After our meticulous process, we present these transformed beans
              to roasters worldwide. They&apos;re ready to be expertly roasted,
              creating exceptional coffee moments for you to enjoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
