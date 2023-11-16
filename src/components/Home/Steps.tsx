import React from "react";
import styles from "./steps.module.css";
import clsx from "clsx";
import Image from "next/image";

type Props = {};

const Steps = (props: Props) => {
  return (
    <div
      className={clsx(
        styles.container,
        "w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh]",
      )}
    >
      <div className={clsx(styles.first)}>
        <Image
          fill
          className="w-full h-full object-cover object-center"
          src="/images/home/steps/flower_phase.jpg"
          alt=""
        />
      </div>
      <div className={clsx(styles.second)}>
        <Image
          fill
          className="w-full h-full object-cover object-center"
          alt="image two"
          src="/images/home/steps/green_cherry_phase.jpeg"
        />
      </div>
      <div className={clsx(styles.third)}>
        <Image
          fill
          className="w-full h-full object-cover object-center"
          alt="image two"
          src="/images/home/steps/red_cherry_phase.jpg"
        />
      </div>
      <div className={clsx(styles.fourth)}>
        <Image
          fill
          className="w-full h-full object-cover object-center"
          alt="image two"
          src="/images/home/steps/dried_phase.jpg"
        />
      </div>
      <div className={clsx(styles.fifth)}>
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
