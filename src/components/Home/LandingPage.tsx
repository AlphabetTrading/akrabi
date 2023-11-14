import Link from "next/link";
import React from "react";
import styles from "./landing_page.module.css";
import clsx from "clsx";
import Image from "next/image";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="bg-primary w-full h-[80vh] xl:min-h-screen flex flex-col justify-center items-center py-5 xl:py-8">
      <h1 className="text-6xl md:text-7xl xl:text-8xl uppercase font-bold mt-10">
        Akraabi
      </h1>
      <h1 className="text-text text-2xl">[ækræ.bi]</h1>
      <div className="w-11/12 md:w-2/3 2xl:w-1/2 pt-4">
        <p className="text-text/60 md:text-xl xl:text-2xl text-center leading-5">
          Welcome to Akraabi, the hub of global coffee connections. We link
          passionate coffee producers directly to roasters worldwide,
          revolutionizing the green coffee trade. Explore exceptional beans,
          foster direct relationships, and redefine your coffee experience with
          us.
        </p>
      </div>
      <div className="w-11/12 md:w-5/6">
        <img className="w-full" src="/images/homepage.svg" />
        {/* <div className={clsx(
          styles.imageContainer,
          "h-[80vh] w-full relative flex justify-center items-center"
        )}>
          <div className={styles.Two}>
            <Image alt="image two" fill objectFit="cover" src="/images/producers-photo.svg" />
          </div>
          <div className={styles.One}>
            <Image alt="image two" fill objectFit="cover" src="/images/producers-photo.svg" />

          </div>
          <div className={styles.Three}>
            <Image alt="image three" fill objectFit="cover" src="/images/producers-photo.svg" />
          </div>
          <div className={styles.Four}>
            <Image alt="image two" fill objectFit="cover" src="/images/producers-photo.svg" />
          </div>
          <div className={styles.Five}>
            <Image alt="image two" fill objectFit="cover" src="/images/producers-photo.svg" />
          </div>
          <div className={styles.Six}>
            <Image alt="image two" fill objectFit="cover" src="/images/producers-photo.svg" />
          </div>
          <div className={styles.Seven}>
            <Image alt="image two" fill objectFit="cover" src="/images/producers-photo.svg" />
          </div>
        </div> */}
      </div>
      {/* <div className="flex flex-col gap-y-1 border items-start">
        <img className="w-8" src="/icons/quotes.svg" />
        <p className="w-1/3">
          Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis
          turpis egestas egestas sem. Neque ligula vel id varius imperdiet
          pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis.
          Volutpat venenatis lacinia ornare risus ut.
        </p>
        <h1>-Lorem Ipsum</h1>
      </div> */}
    </div>
  );
};

export default LandingPage;
