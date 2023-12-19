import React from "react";
import Image from "next/image";

type Props = {};

const ECXRole = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center py-12 gap-y-12">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 h-[55vh] lg:h-[75vh] relative">
            <Image
              className="h-full"
              fill
              src="/images/deforestation-landing-page.jpg"
              alt=""
            />
          </div>
          <div className="w-5/6 lg:w-1/2 flex flex-col items-center py-8 lg:p-12 lg:pr-16">
            <div className="w-full lg:w-5/6 flex flex-col gap-y-4">
              <h1 className="w-full text-2xl lg:text-5xl font-semibold">
                ECX&apos;s Role in Coffee Market Diminishes
              </h1>
              <p className="lg:text-xl">
                Ethiopia&apos;s modality for coffee exports has shifted from the
                Ethiopian Commodity Exchange (ECX) to vertical marketing. During
                the 2020/21 Ethiopian fiscal year that ended June 30, 2021, over
                90% of the 248,000 tons of coffee was exported through the new
                modality which is outside of ECX&apos;s platform - earning the
                nation a record high income of $970 million.
              </p>
              <p className="lg:text-xl">
                This value has only been in the range of $600-800 million during
                the past decade. The price of regular Ethiopian coffee also
                jumped in the international market from $2,800/ton two years ago
                to the current $4,000/ton - a surge of 35%. Specialty coffee
                fetched around $70/kg ($31.8/lbs). However, $370/kg ($167.8/lbs)
                was the winning bid of the Cup of Excellence coffee auction.
              </p>
            </div>
          </div>
        </div>
        <div className="w-5/6 flex flex-col lg:flex-row lg:text-xl lg:mt-8 gap-y-4">
          <p className="w-full lg:w-1/2 lg:text-xl lg:pr-12">
            Under vertical marketing, coffee growers and suppliers can export
            directly to international buyers. Under the ECX model, exporters
            approve high grade samples. However, the actual bulk coffee they
            receive is of low grade due to various malpractices at ECX
            warehouses where top-of-the-line coffees were replaced with
            second-rate beans. There were huge differences between samples and
            lots. Now grading is done through the Ethiopian Coffee and Tea
            Authority (ECTA), without ECX&apos;s intervention. 
          </p>
          <p className="w-full lg:w-1/2 lg:text-xl lg:pl-12">
            As of 2022, over 90% of Ethiopian coffee exported was processed
            through the vertical marketing model. Also under ECX&apos;s model,
            you pay for loading, unloading, warehouse rent, and commission for
            transaction facilitators. Prices are high through ECX, yet neither
            the supplier or exporter benefits. ECX&apos;s role will keep on
            diminishing unless it reforms its system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ECXRole;
