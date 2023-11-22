"use client";

import React, { useLayoutEffect, useRef } from "react";
import SubTitle from "../common/SubTitle";
import Steps from "./Steps";
import { gsap } from "gsap";

type Props = {};

const Process = (props: Props) => {
  const stepsRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // or we can use refs
      gsap.from(".process-image-b", {
        yPercent: 15,
        scrollTrigger: {
          scrub: 1,
          trigger: stepsRef.current,
        },
        stagger: 0.2,
      });
      gsap.from(".process-image", {
        yPercent: -10,
        scrollTrigger: {
          scrub: 1,
          trigger: stepsRef.current,
        },
        stagger: 0.2,
      });
    }, stepsRef);

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <div  id="processSection" ref={stepsRef} className="w-full h-full flex justify-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-10 py-8 xl:py-16 gap-x-4 gap-y-6 justify-between items-center">
        <div className="md:col-span-3 flex flex-col gap-y-2 px-6">
          <Steps />
        </div>
        <div className="md:col-span-7 flex flex-col xl:gap-y-5 px-4 xl:px-16">
          <div className="w-full grid grid-cols-1 gap-y-5 xl:gap-y-8">
            <h1 className="text-3xl xl:text-5xl">
              <span className="font-semibold">
                Coffee&apos;s Journey from Blossom to Brew
              </span>
              : A Story of Elegance, Transformation, and Global Connections
            </h1>
            <SubTitle text="Every step of the process" />
            <div className="w-full lg:w-5/6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 gap-x-5 md:gap-x-6 xl:gap-x-12">
              <p className="w-full lg:w-5/6">
                We delicately pick the ripe cherries, ensuring that only the
                most exceptional fruits are chosen to undergo the meticulous
                process of crafting unparalleled coffee.
              </p>
              <p className="w-full lg:w-5/6">
                With a focus on quality, we employ great techniques to harvest
                and select the ripe cherries, setting the foundation for a
                coffee experience defined by precision and care.
              </p>
              <p className="w-full lg:w-5/6">
                Witness the magic as our experts transform the harvested
                cherries into green coffee beans, preserving the subtle flavors
                that make each origin distinctive.
              </p>
              <p className="w-full lg:w-5/6">
                After our meticulous process, we present these transformed beans
                to roasters worldwide. They&apos;re ready to be expertly
                roasted, creating exceptional coffee moments for you to enjoy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
