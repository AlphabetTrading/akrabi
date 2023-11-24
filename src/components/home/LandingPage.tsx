"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./landing_page.module.css";
import clsx from "clsx";
import Image from "next/image";
import gsap from "gsap";
import useSplitWords from "@/hooks/splitLetters";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import PronounceButton from "./PronounceAkraabi";
import Gallery from "./Gallery";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

type Props = {};
const phrase: string =
  "Welcome to Akraabi, the hub of global coffee connections. We link passionate coffee producers directly to roasters and coffee traders worldwide, revolutionizing the green coffee trade. Explore exceptional beans, foster direct relationships, and redefine your coffee experience with us.";

const LandingPage = (props: Props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { refs, splitWords } = useSplitWords({ phrase });
  const headerText = useRef(null);
  const container = useRef(null);
  const scrollButtonRef = useRef<HTMLButtonElement | null>(null);

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
      let tl = gsap.timeline({ delay: 3.5 });
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

    return () => {
      ctx.revert();
    };
  }, []);

  const handleScroll = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#processSection",
      overwrite: "auto",
    });
  };

  useLayoutEffect(() => {
    if (scrollButtonRef.current) {
      console.log("scroll button ref", scrollButtonRef.current);
      scrollButtonRef.current.addEventListener("click", handleScroll);
    }
    // clean up both gsap context, scroll trigger, and event listener
    return () => {
      if (scrollButtonRef.current)
        scrollButtonRef.current.removeEventListener("click", () => {
          gsap.to(window, {
            duration: 1,
            scrollTo: "#processSection",
            overwrite: "auto",
          });
        });
    };
  }, []);

  return (
    <div
      ref={mainRef}
      data-scroll-section
      className={clsx(
        "bg-primary w-full min-h-screen h-screen lg:h-[105vh] xl:h-[110vh]  flex flex-col items-center justify-between sm:justify-start relative",
      )}
    >
      <div
        ref={container}
        className={clsx(
          "landing-text flex flex-col mt-16 md:mt-20 justify-center items-center h-[35%] sm:h-[40%] md:h-[25%] lg:h-[30%] xl:h-[25%] w-full",
          styles.headerContainer,
        )}
      >
        <h1
          data-scroll
          data-scroll-speed="0.05"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
          className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl uppercase font-bold mt-10"
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
            "flex flex-col  lg:max-h-32 justify-center items-center !w-5/6 md:!w-2/3 my-3 lg:my-5",
            // styles.headerText
          )}
        >
          <div
            ref={headerText}
            className={clsx(
              // "flex flex-col max-h-32 justify-center items-center !w-4/5 md:!w-2/3 my-5",
              "flex justify-center max-h-[150px] overflow-y-hidden flex-wrap text-text/60 md:text-xl xl:text-2xl text-center leading-4 md:leading-5",
              styles.headerText,
            )}
          >
            {splitWords()}
          </div>
        </div>
      </div>
      <div className="landing-image w-full flex justify-center items-center  h-[65%] md:h-[60%] lg:h-[65%] xl:h-[70%]">
        <Gallery />
      </div>
      <button
        ref={(el: any) => {
          scrollButtonRef.current = el;
        }}
        id="scrollDownBtn"
        className={clsx(styles.scrollDownBtn)}
      >
        .
      </button>
    </div>
  );
};

export default LandingPage;
