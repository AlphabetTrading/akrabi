import React from "react";
import Image from "next/image";

type Props = {};

const Involvement = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-y-4 py-8 lg:pt-12">
      <div className="w-full flex flex-col lg:flex-row items-center">
        <div className="w-11/12 lg:w-3/5 flex flex-col items-end py-4 lg:pr-16">
          <div className="w-full lg:w-5/6 flex flex-col gap-y-4 lg:text-right">
            <h1 className="w-4/5 text-2xl lg:text-5xl font-semibold lg:mb-4 lg:self-end">
              Our involvement<br></br> in the coffee value chain
            </h1>
            <p className="lg:text-xl">
              As an exporter specializing in Ethiopian coffee, our company
              operates within the intricate web of the Ethiopian coffee value
              chain. We engage directly with local producers who cultivate and
              harvest the finest coffee beans across diverse regions of
              Ethiopia.
            </p>
            <p className="lg:text-xl">
              Our role in this value chain is pivotal. We source coffee beans
              directly from these local producers, acting as a bridge between
              their farms and international markets. We prioritize forming
              lasting partnerships with these producers, ensuring fair
              compensation and adherence to ethical practices in our
              transactions.
            </p>
            <p className="lg:text-xl">
              Upon acquisition, we oversee the initial processing stages,
              maintaining the quality and integrity of the coffee beans. We
              meticulously handle the preparation and packaging of these green
              coffee beans, maintaining the unique flavors and characteristics
              for which Ethiopian coffee is renowned globally.
            </p>
            <p className="lg:text-xl">
              Bypassing tradehouses, we navigate the complexities of the
              Ethiopian Coffee Exchange (ECX) and export regulations
              independently. We take pride in upholding stringent quality
              standards and compliance measures, ensuring that our exported
              coffee meets the expectations of international buyers and adheres
              to respective market demands.
            </p>
            <p className="lg:text-xl">
              Ultimately, our aim is to showcase the diverse and exquisite
              flavors of Ethiopian coffee to consumers and coffee enthusiasts
              worldwide. Each batch of green coffee beans we export carries not
              only the unique essence of Ethiopia&apos;s coffee heritage but
              also the stories and dedication of the local producers we partner
              with.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/5 h-[50vh] lg:h-screen relative">
          <Image
            className="object-cover object-center w-full h-full"
            fill
            src="https://akraabi.s3.amazonaws.com/transparency/transparency-involvement.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Involvement;
