"use client";

import React, { useLayoutEffect } from "react";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import TraceabilityIcon from "@/icons/traceabilityIcon";
import TransparencyIcon from "@/icons/transparencyIcon";
import SustainabilityIcon from "@/icons/sustainabilityIcon";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

const CompanyMotto = (props: Props) => {
  useLayoutEffect(() => {
    gsap.to(".circle", {
      rotation: 360,
      duration: 3,
      transformOrigin: "50% 50%",
      scrollTrigger: {
        trigger: ".motto-container",
        // markers: true,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="motto-container flex flex-col lg:flex-row gap-y-16 items-center justify-start py-16 w-full">
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-11/12 xl:w-3/4 flex flex-col items-center gap-y-4">
          <div className="flex justify-center lg:justify-start items-start gap-x-3 xl:gap-x-5">
            <TransparencyIcon />
            <div className="flex flex-col w-3/4 gap-y-3 border-b-2 border-black border-dotted pb-10">
              <h1 className="font-semibold uppercase text-2xl">Transparency</h1>
              <p>
                Uncover the journey of our coffee, from the lush farms to your
                cup. We believe in open communication and sharing the story
                behind each bean, fostering trust in our transparent supply
                chain.
              </p>
              <Link
                href={"/"}
                className="w-fit p-1 px-5 border-2 border-black group relative overflow-hidden"
              >
                <span className="relative group-hover:text-white delay-75 duration-200 z-10">
                  See more
                </span>
                <div className="min-w-full  group-hover:flex duration-500 min-h-full ease-in-out z-0 scale-x-[1.5] scale-y-150 -translate-x-[125%] group-hover:translate-x-[5%] translate-y-1/2 group-hover:-translate-y-0  transition-all rounded-full absolute inset-0 bg-secondary"></div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start items-start gap-x-3 xl:gap-x-5">
            <TraceabilityIcon />
            <div className="flex flex-col w-3/4 gap-y-3 border-b-2 border-black border-dotted pb-10">
              <h1 className="font-semibold uppercase text-2xl">Traceability</h1>
              <p>
                Explore the origins of your coffee with our traceability
                feature. Follow the path from farm to export, ensuring each cup
                is a testament to responsible sourcing and a direct link to the
                hardworking hands behind it.
              </p>

              <Link
                href={"/"}
                className="w-fit p-1 px-5 border-2 border-black group relative overflow-hidden"
              >
                <span className="relative group-hover:text-white delay-75 duration-200 z-10">
                  See more
                </span>
                <div className="min-w-full  group-hover:flex duration-500 ease-in-out min-h-full z-0 scale-x-[1.5] scale-y-150 -translate-x-[125%] group-hover:translate-x-[5%] translate-y-1/2 group-hover:-translate-y-0  transition-all rounded-full absolute inset-0 bg-secondary"></div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start items-start gap-x-3 xl:gap-x-5">
            <SustainabilityIcon />

            <div className="flex flex-col w-3/4 gap-y-3 border-b-2 border-black border-dotted pb-10">
              <h1 className="font-semibold uppercase text-2xl">
                Sustainability
              </h1>
              <p>
                Discover our commitment to sustainable practices. From
                eco-friendly cultivation to fair wages, we prioritize the
                well-being of our planet and the livelihoods of the communities
                that nurture our exceptional green coffee.
              </p>
              <Link
                href={"/"}
                className="w-fit p-1 px-5 border-2 border-black group relative overflow-hidden"
              >
                <span className="relative group-hover:text-white delay-75 duration-200 z-10">
                  See more
                </span>
                <div className="min-w-full  group-hover:flex duration-500 ease-in-out min-h-full z-0 scale-x-[1.5] scale-y-150 -translate-x-[125%] group-hover:translate-x-[5%] translate-y-1/2 group-hover:-translate-y-0  transition-all rounded-full absolute inset-0 bg-secondary"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center gap-y-8">
        <div className="w-5/6 flex flex-col gap-y-8">
          <h1 className="text-3xl md:text-4xl xl:text-5xl">
            <span className="font-semibold">The Green Trail</span>:
            Transparency, Traceability, and Sustainability in Coffee Export
          </h1>
          {/* <SubTitle text="Every step of the process" /> */}
          <p className="w-11/12 lg:w-2/3 text-lg">
            In the green coffee export industry, transparency, traceability, and
            sustainability are essential. They ensure accountability across
            social, environmental, and economic aspects of production, fostering
            an ethically managed supply chain.
          </p>
          <p className="w-11/12 lg:w-2/3 text-lg">
            Transparency builds trust through open communication, traceability
            connects consumers to the coffee&apos;s journey, and sustainability
            reflects a commitment to environmentally friendly practices and fair
            economic relationships. Together, these principles embody a
            conscientious approach, shaping a future where every sip of coffee
            resonates with responsible and ethical sourcing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyMotto;