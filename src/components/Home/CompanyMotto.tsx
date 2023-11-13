import React from "react";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

type Props = {};

const CompanyMotto = (props: Props) => {
  return (
    <div className="flex items-center justify-center py-16 w-11/12">
      <div className="w-full flex justify-center">
        <div className="w-3/4 flex flex-col items-center gap-y-4">
          <div className="flex items-start gap-x-5">
            <img src="/icons/transparency.svg" alt="" />
            <div className="flex flex-col gap-y-3">
              <h1 className="font-semibold uppercase text-2xl">Transparency</h1>
              <p>
                Uncover the journey of our coffee, from the lush farms to your
                cup. We believe in open communication and sharing the story
                behind each bean, fostering trust in our transparent supply
                chain.
              </p>
              <button className="w-fit p-1 px-5 border-2 border-black">
                See more
              </button>
            </div>
          </div>
          <h1>
            .....................................................................................................................................................................................
          </h1>
          <div className="flex items-start gap-x-5">
            <img src="/icons/traceability.svg" alt="" />
            <div className="flex flex-col gap-y-3">
              <h1 className="font-semibold uppercase text-2xl">Traceability</h1>
              <p>
                Explore the origins of your coffee with our traceability
                feature. Follow the path from farm to export, ensuring each cup
                is a testament to responsible sourcing and a direct link to the
                hardworking hands behind it.
              </p>
              <button className="w-fit p-1 px-5 border-2 border-black">
                See more
              </button>
            </div>
          </div>
          <h1>
            ....................................................................................................................................................................................
          </h1>

          <div className="flex items-start gap-x-5">
            <img src="/icons/sustainability.svg" alt="" />
            <div className="flex flex-col gap-y-3">
              <h1 className="font-semibold uppercase text-2xl">
                Sustainability
              </h1>
              <p>
                Discover our commitment to sustainable practices. From
                eco-friendly cultivation to fair wages, we prioritize the
                well-being of our planet and the livelihoods of the communities
                that nurture our exceptional green coffee.
              </p>
              <button className="w-fit p-1 px-5 border-2 border-black">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 flex flex-col gap-y-2">
        <h1 className="text-5xl">
          <span className="font-semibold">The Green Trail</span>: Transparency,
          Traceability, and Sustainability in Coffee Export
        </h1>
        <br />
        {/* <SubTitle text="Every step of the process" /> */}
        <br />
        <p className="w-2/3">
          In the green coffee export industry, transparency, traceability, and
          sustainability are essential. They ensure accountability across
          social, environmental, and economic aspects of production, fostering
          an ethically managed supply chain.
        </p>
        <p className="w-2/3">
          Transparency builds trust through open communication, traceability
          connects consumers to the coffee&apos;s journey, and sustainability
          reflects a commitment to environmentally friendly practices and fair
          economic relationships. Together, these principles embody a
          conscientious approach, shaping a future where every sip of coffee
          resonates with responsible and ethical sourcing.
        </p>
      </div>
    </div>
  );
};

export default CompanyMotto;
