import React from "react";
import styles from "../Home/gallery.module.css";
import clsx from "clsx";
import Image from "next/image";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <div className="relative h-full w-11/12 md:w-5/6">
      <Image
        fill
        className="w-full absolute flex lg:hidden object-contain object-top "
        src="/images/homepage-small.png"
        alt="hero image"
      />
      <Image
        fill
        className="w-full absolute inset-0 hidden lg:flex "
        src="/images/homepage.png"
        alt="hero image"
      />
      {/* <div
        className={clsx(
          styles.container_full,
          "h-[80vh] hidden w-full relative lg:flex justify-center items-center",
        )}
      >
        <div
          className={clsx(
            // "bg-gradient-to-b from-[#936747] to-[#6C4427]",
            styles.Second,
          )}
        >
          <Image
            className="z-10 inset-0 overflow-visible object-cover object-center"
            alt="image two"
            fill
            src="/images/home/landing_page/second.png"
          />
        </div>
        <div
          className={clsx(
            // "bg-gradient-to-b from-[#EB5A54] to-[#712125]",
            styles.First,
          )}
        >
          <Image
            className="z-50 inset-0 overflow-visible  object-cover object-[75%]"
            alt="image two"
            fill
            src="/images/home/landing_page/first.png"
          />
        </div>
        <div
          className={clsx(
            // "bg-gradient-to-b from-[#DDB14D] to-[#A97D19]",
            styles.Third,
          )}
        >
          <Image
            className="z-10 inset-0 overflow-visible overflo object-cover object-center w-full h-full"
            alt="image three"
            fill
            src="/images/home/landing_page/third.png"
          />
        </div>
        <div
          className={clsx(
            // "bg-gradient-to-b from-[#831E51] to-[#501030]",
            styles.Fourth,
          )}
        >
          <Image
            className="z-20 inset-0 overflow-visible overflo object-cover object-[30%] w-full h-full"
            alt="image two"
            fill
            src="/images/home/landing_page/fourth.png"
          />
        </div>
        <div
          className={clsx(
            // "bg-gradient-to-b from-[#DF7831] to-[#AA581F]",
            styles.Fifth,
          )}
        >
          <Image
            className="z-10 inset-0 overflow-visible overflo object-cover object-center w-full h-full"
            alt="image two"
            fill
            src="/images/home/landing_page/fifth.png"
          />
        </div>
        <div
          className={clsx(
            // "bg-gradient-to-b from-[#96D3E3] to-[#297F95]",
            styles.Sixth,
          )}
        >
          <Image
            className="z-20 inset-0 overflow-visible overflo object-cover object-center w-full h-full"
            alt="image two"
            fill
            src="/images/home/landing_page/sixth.png"
          />
        </div>
        <div
          className={clsx(
            // "bg-gradient-to-b from-[#FDDAA7] to-[#D09238]",
            styles.Seventh,
          )}
        >
          <Image
            className="z-20 bottom-10 overflow-visible overflo object-cover w-full h-full "
            alt="image two"
            fill
            src="/images/home/landing_page/seventh.png"
          />
        </div>
      </div> */}
      {/* <div
        className={clsx(
          styles.container,
          "h-[40vh] lg:hidden w-full relative flex justify-center items-center border-4"
        )}
      >
        <div
          className={clsx(
            // "bg-gradient-to-b from-[#936747] to-[#6C4427]",
            styles.Second
          )}
        >
          <Image
            className="z-10 inset-0 overflow-visible object-cover object-center w-full h-full"
            alt="image two"
            fill
            src="/images/home/landing_page/second.png"
          />
        </div>
        <div
          className={clsx(
            // "bg-gradient-to-b from-[#EB5A54] to-[#712125]",
            styles.First
          )}
        >
          <Image
            className="z-50 inset-0 overflow-visible object-cover object-[80%]"
            alt="image two"
            fill
            src="/images/home/landing_page/first.png"
          />
        </div>
        <div
          className={clsx(
            // "bg-gradient-to-b from-[#DDB14D] to-[#A97D19]",
            styles.Third
          )}
        >
          <Image
            className="z-10 inset-0 overflow-visible object-cover object-center w-full h-full"
            alt="image three"
            fill
            src="/images/home/landing_page/third.png"
          />
        </div>
        <div
          className={clsx(
            // "bg-gradient-to-b from-[#831E51] to-[#501030]",
            styles.Fourth
          )}
        >
          <Image
            className="z-20 inset-0 overflow-visible object-cover object-center w-full h-full"
            alt="image two"
            fill
            src="/images/home/landing_page/fourth.png"
          />
        </div>
        <div
          className={clsx(
            // "bg-gradient-to-b from-[#DF7831] to-[#AA581F]",
            styles.Fifth
          )}
        >
          <Image
            className="z-10 inset-0 overflow-visible object-cover object-center w-full h-full"
            alt="image two"
            fill
            src="/images/home/landing_page/fifth.png"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Gallery;
