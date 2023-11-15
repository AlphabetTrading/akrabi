"use client";

import React from "react";

type Props = {};

const EURegulation = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center py-24">
      <div className="w-5/6 flex justify-end">
        <div className="w-3/5 flex flex-col gap-y-4">
          <h1 className="w-2/3 text-5xl font-semibold">
            The new EU Regulation on deforestation
          </h1>
          <div className="w-5/6 flex flex-col gap-y-4 text-2xl">
            <p>
              The EU&apos;s new Deforestation Regulation is a groundbreaking
              piece of legislation that aims to reduce the EU&apos;s impact on
              global deforestation and forest degradation. It entered into force
              on 29 June 2023 and will apply to all operators and traders who
              place or make available on the EU market, or export from the EU,
              the following commodities and products derived from them:
            </p>
            <ul className="list-disc pl-10">
              <li>Cattle</li>
              <li>Cocoa</li>
              <li>Coffee</li>
              <li>Oil palm</li>
              <li>Rubber</li>
              <li>Soy</li>
              <li>Wood</li>
            </ul>
            <p>
              Operators and traders will be required to conduct due diligence to
              ensure that their products are deforestation-free, meaning that
              they have not been produced on land that was deforested or
              degraded after 31 December 2020. They must also comply with all
              applicable laws in the country of production and make a due
              diligence declaration attesting to the deforestation-free nature
              of their products.
            </p>
            <p>
              The regulation also includes a number of other provisions, such
              as:
            </p>
            <ul className="list-disc pl-10">
              <li>
                A ban on the placing on the EU market of certain commodities and
                products derived from them if they are associated with
                deforestation or forest degradation.
              </li>
              <li>
                A requirement for operators and traders to provide information
                to consumers about the deforestation risk associated with their
                products.
              </li>
              <li>
                A support mechanism for small and medium-sized enterprises to
                help them comply with the new rules
              </li>
            </ul>
            <p>
              The EU Deforestation Regulation is a significant step forward in
              the fight against deforestation. It is expected to have a major
              impact on the global production and trade of the commodities
              covered by the Regulation and to help reduce the EU&apos;s
              contribution to deforestation and forest degradation.
            </p>
            <p>
              Here are some of the key benefits of the EU Deforestation
              Regulation:
            </p>
            <ul className="list-disc pl-10">
              <li>
                It will help to protect forests, which are essential for
                biodiversity and climate change mitigation.
              </li>

              <li>
                It will promote sustainable agricultural practices and reduce
                the environmental impact of the EU&apos;s consumption of
                commodities.
              </li>
              <li>
                It will support the rights of indigenous peoples and
                forest-dependent communities.
              </li>
              <li>
                It will create a level playing field for businesses and help to
                ensure that deforestation-free products are competitive.
              </li>
            </ul>
            <p>
              The EU Deforestation Regulation is a complex piece of legislation,
              but it is an important step in the fight against deforestation. It
              is important for businesses and consumers to be aware of the new
              rules and to take steps to comply with them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EURegulation;
