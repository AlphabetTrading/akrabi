import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

type Props = {};

const keyPoints = [
  {
    id: 1,
    title: "Environmental Conservation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Justo senectus nibh in senectus viverra pretium risus tincidunt faucibus. Ut tortor imperdiet sit tortor. Scelerisque non porttitor enim vitae aenean enim nec. Pharetra nibh auctor donec ornare ipsum vitae lacus.",
    image: "/images/traceability/traceability.jpg",
  },
  {
    id: 2,
    title: "Environmental Conservation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Justo senectus nibh in senectus viverra pretium risus tincidunt faucibus. Ut tortor imperdiet sit tortor. Scelerisque non porttitor enim vitae aenean enim nec. Pharetra nibh auctor donec ornare ipsum vitae lacus.",
    image: "/images/traceability/sustainability.jpg",
  },
  {
    id: 3,
    title: "Environmental Conservation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Justo senectus nibh in senectus viverra pretium risus tincidunt faucibus. Ut tortor imperdiet sit tortor. Scelerisque non porttitor enim vitae aenean enim nec. Pharetra nibh auctor donec ornare ipsum vitae lacus.",
    image: "/images/traceability/transparency.jpg",
  },
];
const Sustainability = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center py-5 xl:py-20 ">
      <div className="w-11/12 lg:w-5/6 flex flex-col gap-y-8">
        <div className="flex flex-col lg:flex-row gap-y-5 items-center lg:gap-x-20">
          <h1 className="uppercase text-2xl font-semibold">
            Social Responsibility
          </h1>
          <p className="lg:text-lg text-center lg:text-start">
            Our green coffee production reflects our unwavering commitment to
            social responsibility. We prioritize fair wages, safe working
            conditions, and community development for coffee farmers. By
            choosing our beans, you support a sustainable and equitable coffee
            industry. Together, we cultivate a brighter future for all involved
            in the journey of our green coffee exports
          </p>
        </div>
        <div className="bg-primary flex flex-col lg:flex-row xl:mt-16">
          <div className="border w-full lg:w-1/2 relative">
            <Image
              className="object-cover"
              fill
              src="/images/traceability/sustainability.jpg"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-y-6 p-5 lg:p-10 xl:py-16">
            <h1 className="w-full xl:w-5/6 font-semibold text-xl">
              Did you hear about the EU regulation aiming to minimize
              deforestation and forest degradation practices?
            </h1>
            <p>
              Coffee is grown in areas with a high risk of deforestation, rich
              in biodiversity and with high (potential) carbon storage. The
              regulation aims to minimize deforestation and forest degradation
              in selected agricultural commodities in areas at risk of
              deforestation, including palm oil, soy, wood, cocoa, coffee and
              beef. While no commodities or raw materials from specific
              countries will be banned, companies placing products on the EU
              market must exercise due diligence to evaluate risks in their
              supply chain. The current text for the EU deforestation regulation
              states December 31, 2020 as a cut-off date for commodities and
              products not adhering to the regulation not being allowed to enter
              or exit the EU market.
            </p>
            <div className="bg-black p-3 px-6 w-fit">
              <h1 className="text-white">Learn More</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-between mt-5 xl:mt-16">
          {keyPoints.map((point: any, index: number) => {
            return (
              <div
                className="w-full xl:w-[30%] flex flex-col gap-y-6"
                key={index}
              >
                <h1 className="font-semibold text-xl uppercase">
                  {point.title}
                </h1>
                <p className="font-light">{point.description}</p>
                <div className="flex gap-x-2 items-center">
                  <h1 className="font-semibold uppercase">Read More</h1>
                  <AiOutlineArrowRight />
                </div>
                <div className="h-[300px] my-4 relative">
                  <Image
                    className="object-cover inset-0"
                    fill
                    src={point.image}
                    alt={point.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
