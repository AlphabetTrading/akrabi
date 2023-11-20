import React, { useLayoutEffect } from "react";
import styles from "./steps.module.css";
import clsx from "clsx";
import Image from "next/image";
import { gsap } from "gsap";

type Props = {};

const Steps = (props: Props) => {
  useLayoutEffect(() => {
    gsap.from(".process-image-b", {
      yPercent: -6,
      duration: 1,
      scrollTrigger: {
        trigger: ".process-image-b",
        id: "process-image-b",
        start: "top center",
        end: "bottom top",
        // markers:true,
        scrub: 1,
      },
    });
    gsap.from(".process-image", {
      yPercent: 6,
      duration: 1,
      scrollTrigger: {
        trigger: ".process-image",
        id: "process-image",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);
  return (
    <div
      className={clsx(
        styles.container,
        "w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh]",
      )}
    >
      <div className={clsx("process-image", styles.first)}>
        <Image
          fill
          className="w-full h-full object-cover object-center"
          src="/images/home/steps/flower_phase.jpg"
          alt=""
        />
      </div>
      <div className={clsx("process-image-b", styles.second)}>
        <Image
          fill
          className="w-full h-full object-cover object-center"
          alt="image two"
          src="/images/home/steps/green_cherry_phase.jpeg"
        />
      </div>
      <div className={clsx("process-image", styles.third)}>
        <Image
          fill
          className="w-full h-full object-cover object-center"
          alt="image two"
          src="/images/home/steps/red_cherry_phase.jpg"
        />
      </div>
      <div className={clsx("process-image-b", styles.fourth)}>
        <Image
          fill
          className="w-full h-full object-cover object-center"
          alt="image two"
          src="/images/home/steps/dried_phase.jpg"
        />
      </div>
      <div className={clsx("process-image", styles.fifth)}>
        <Image
          fill
          className="w-full h-full object-cover object-center"
          alt="image two"
          src="/images/home/steps/depulped_phase.jpg"
        />
      </div>
    </div>
  );
};

export default Steps;
