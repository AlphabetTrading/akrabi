import React from "react";
import Image from "next/image";

type Props = {};

const Overview = (props: Props) => {
  return (
    <div className="bg-secondary w-full h-fit flex flex-col items-center py-12 lg:py-24">
      <div className="w-11/12 lg:w-5/6 flex items-center">
        <div className="w-full flex flex-col lg:px-10 items-center">
          <div className="w-11/12 flex flex-col gap-y-4 text-primary">
            <div className="flex items-center gap-x-2">
              <img src="/icons/farm-detail-check.svg" />
              <h1 className="text-lg lg:text-2xl uppercase font-semibold">
                Overview
              </h1>
            </div>
            <h1 className="text-2xl lg:text-5xl font-semibold">
              What is transparency and traceability in the coffee industry?
            </h1>
            <p className="lg:text-xl">
              Transparency and traceability are vital in coffee exports,
              ensuring fairness and sustainability. Transparency reveals the
              bean journey, prices to farmers, and sustainable methods.
              Traceability tracks beans meticulously, ensuring authenticity and
              accountability. This approach empowers consumers, supports fair
              farmer compensation, promotes sustainability, and fosters an
              informed coffee community.
            </p>
            <p className="lg:text-xl">
              The combination of transparency and traceability not only educates
              consumers about the origin and journey of their coffee but also
              ensures that ethical and sustainable practices are followed. This
              approach encourages fair compensation for farmers, promotes
              environmental stewardship, and empowers individuals to support
              ethical coffee sourcing.
            </p>
          </div>
        </div>
        <div className="hidden lg:block w-2/3 h-96 relative">
          <Image
            className="object-cover object-center w-full h-full"
            fill
            src="https://akraabi.s3.amazonaws.com/transparency/transparency-overview.webp"
            alt="transparency-overview"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
