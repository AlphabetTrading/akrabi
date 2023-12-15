import React from "react";
import Image from "next/image";

type Props = {};

const SolvingProblem = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-y-24">
      <div className="w-full flex items-center">
        <div className="w-1/3 h-[90vh] relative">
          <Image
            className="h-full"
            fill
            src="/images/deforestation-landing-page.jpg"
            alt=""
          />
        </div>
        <div className="w-2/3 flex flex-col items-start p-12 pl-16">
          <div className="w-5/6 flex flex-col gap-y-4">
            <h1 className="w-4/5 text-2xl lg:text-5xl font-semibold mb-4">
              Solving an age-old problem
            </h1>
            <p className="lg:text-2xl">
              Agriculture has always been the backbone of Ethiopia&apos;s
              economy. Yet, lifting millions of Ethiopians out of poverty
              requires a transformation from centuries-old subsistence
              agriculture to dynamic, technology-driven, market-oriented
              production.
            </p>
            <p className="lg:text-2xl">
              Ethiopia&apos;s marketing system, like its agriculture, is based
              on age-old tradition. To date, agricultural markets have been
              characterized by high costs and high risks of transacting, forcing
              much of Ethiopia into global isolation. With only one third of
              output reaching the market, commodity buyers and sellers tend to
              trade only with those they know, to avoid the risk of being
              cheated or default.
            </p>
            <p className="lg:text-2xl">
              Trade is done on the basis of visual inspection because there is
              no assurance of product quality or quantity, which drives up
              marketing costs, leading to high consumer prices. For their part,
              small scale farmers, who produce 95 percent of Ethiopia&apos;s
              output, come to market with little information and are at the
              mercy of merchants in the nearest and only market they know,
              unable to negotiate better prices or reduce their market risk.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex items-center">
          <div className="w-1/2 flex flex-col items-center p-12 pr-16">
            <div className="w-5/6 flex flex-col gap-y-4">
              <p className="lg:text-2xl">
                The country was looking for a marketing system that coordinates
                better, that links faster and that protects the interests of
                both sides of the trade. And that is where the ECX came in. The
                Ethiopia Commodity Exchange, or ECX, established April 2008, is
                a marketplace, where buyers and sellers come together to trade,
                assured of quality, delivery and payment. The first of its kind
                in Ethiopia,
              </p>
              <p className="lg:text-2xl">
                ECX trading covers six target commodities, selected in terms of
                their importance to either coffee, sesame, pea bean, teff,
                wheat, and maize. Together, they represent roughly a total value
                of US $1 billion of physical trade.
              </p>
            </div>
          </div>
          <div className="w-1/2 h-[60vh] relative">
            <Image
              className="h-full"
              fill
              src="/images/deforestation-landing-page.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="w-5/6 lg:text-2xl">
          <p>ECX is a national multi-commodity exchange that </p>
          <ul className="w-2/3 list-disc pl-10">
            <li>
              provides market integrity, by guaranteeing the product grade and
              quantity and operating a system of daily clearing and settling of
              contracts 
            </li>
            <li>
              enhances market efficiency by operating a trading system where
              buyers and sellers can coordinate in a seamless way on the basis
              of standardized contracts 
            </li>
            <li>
              enables market transparency by disseminating market information in
              real time to all market players, and 
            </li>
            <li>
              allows risk management by offering contracts for future delivery,
              providing sellers and buyers a way to hedge against price risk.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolvingProblem;
