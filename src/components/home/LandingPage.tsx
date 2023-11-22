"use client";

import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./gallery.module.css";
import clsx from "clsx";
import Image from "next/image";
import gsap from "gsap";
import useSplitWords from "@/hooks/splitLetters";
import PronounceButton from "./PronounceAkraabi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Gallery from "./Gallery";

gsap.registerPlugin(ScrollTrigger);

type Props = {};
const phrase: string =
  "Welcome to Akraabi, the hub of global coffee connections. We link passionate coffee producers directly to roasters worldwide, revolutionizing the green coffee trade. Explore exceptional beans, foster direct relationships, and redefine your coffee experience with us.";

const LandingPage = (props: Props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { refs, splitWords } = useSplitWords({ phrase });
  const headerText = useRef(null);
  const container = useRef(null);

  const handleScroll = (e: any) => {
    e.preventDefault();
    const element = document.querySelector(e.currentTarget.hash);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        // end: "bottom",
        end: `+=${window.innerHeight}`,
      },
      color: "black",
      fontWeight: 600,
      ease: "none",
      stagger: 0.1,
    });
  };
  useEffect(() => {
    createAnimation();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.from(".landing-text", {
        yPercent: 50,
        duration: 2,
        delay: 1,
        ease: "expo.inOut",
      });
      tl.from(".landing-image", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, mainRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div
      ref={mainRef}
      data-scroll-section
      className={clsx(
        "bg-primary w-full min-h-screen flex flex-col items-center",
      )}
    >
      <div
        ref={container}
        className={clsx(
          "landing-text flex flex-col justify-center items-center pt-20 xl:pt-14",
          styles.headerContainer,
        )}
      >
        <h1
          data-scroll
          data-scroll-speed="0.05"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
          className="text-6xl md:text-7xl xl:text-8xl uppercase font-bold mt-10"
        >
          Akraabi
        </h1>
        <h1
          data-scroll
          data-scroll-speed="0.01"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
          className="text-text text-2xl flex items-center gap-x-2"
        >
          <span>[ækræ.bi]</span>
          <PronounceButton audioPath="/audio/akraabi.mp3" />{" "}
        </h1>
        <div
          className={clsx(
            "flex flex-col max-h-32 justify-center items-center !w-4/5 md:!w-2/3 my-5",
            // styles.headerText
          )}
        >
          <div
            ref={headerText}
            className={clsx(
              // "flex flex-col max-h-32 justify-center items-center !w-4/5 md:!w-2/3 my-5",
              "flex justify-center max-h-[150px] overflow-y-hidden flex-wrap text-text/60 md:text-xl xl:text-2xl text-center leading-5",
              styles.headerText,
            )}
          >
            {/* Welcome to Akraabi, the hub of global coffee connections. We link
          passionate coffee producers directly to roasters worldwide,
          revolutionizing the green coffee trade. Explore exceptional beans,
          foster direct relationships, and redefine your coffee experience with
          us. */}
            {splitWords()}
          </div>
        </div>
      </div>
      <div className="landing-image w-11/12 md:w-5/6 mb-16">
        <Gallery />
      </div>
      {/* <a
        href={"#processSection"}
        onClick={handleScroll}
        className={clsx(styles.scrollDownBtn)}
      >
        .
      </a> */}
    </div>
  );
};

export default LandingPage;
