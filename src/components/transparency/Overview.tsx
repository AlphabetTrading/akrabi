import React from "react";
import Image from "next/image";

type Props = {};

const Overview = (props: Props) => {
  return (
    <div className="bg-primary w-full h-fit flex flex-col items-center py-12 lg:py-24">
      <div className="w-11/12 lg:w-5/6 flex items-center">
        <div className="w-full flex flex-col lg:px-10 items-center">
          <div className="w-11/12 flex flex-col gap-y-4 text-secondary">
            <div className="flex items-center gap-x-2">
              <img src="/icons/farm-detail-check.svg" />
              <h1 className="text-lg lg:text-2xl uppercase font-semibold">
                Overview
              </h1>
            </div>
            <h1 className="text-2xl lg:text-5xl">
              What is transparency in the coffee industry?
            </h1>
            <p className="lg:text-xl">
              Transparency within the coffee export industry is essential for
              establishing a fair and sustainable coffee ecosystem. It
              encompasses tracking coffee beans from farm to cup, disclosing
              prices paid to farmers, and highlighting sustainable agricultural
              practices. This educates and empowers consumers to make informed
              choices while fostering ethical sourcing practices.
            </p>
            <p className="lg:text-xl">
              Understanding the intricate supply chain dynamics is crucial.
              Transparency encourages documentation and disclosure of fair
              compensation for coffee farmers. Revealing prices paid to farmers
              sheds light on the value chain, ensuring they receive equitable
              remuneration, fortifying their livelihoods and supporting local
              economies.
            </p>
          </div>
        </div>
        <div className="hidden lg:block w-2/3 h-96 relative">
          <Image fill src="/images/deforestation-landing-page.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
