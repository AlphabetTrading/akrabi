"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import NavbarMenu from "./NavbarMenu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  isOpen: boolean;
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// const Path = (props: any) => (
//   <motion.path
//     fill={props.color}
//     strokeWidth="3"
//     stroke={props.color}
//     strokeLinecap="round"
//     {...props}
//     className="flex flex-col items-center"
//   />
// );

// const menuitem_parent_variants = {
//   open: {
//     height: "100%",
//   },
//   closed: {
//     height: 0,
//   },
// };

const Navbar = ({ isOpen, toggleOpen }: Props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const tl = useRef<any>(null);
  const showNav = useRef<any>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          paused: true,
        })
        .to(".nav-menu", {
          yPercent: 100,
          ease: "expo.inOut",
        })
        .to(
          ".nav-bar",
          {
            background: "transparent",
          },
          "<",
        )
        .to(
          ".logo",
          {
            color: "white",
          },
          "<",
        )
        .from(
          ".nav-item",
          {
            opacity: 0,
            yPercent: -50,
            duration: 1,
            stagger: 0.2,
            ease: "back.inOut",
          },
          "<",
        );

      showNav.current = gsap
        .fromTo(".nav-bar", { yPercent: -100 }, { yPercent: 0, duration: 0.5 })
        .progress(1);

      gsap.to(".nav-bar", {
        background: "#FFFFFF",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "150px end",
          end: "155px 20%",
          // markers: true,
          id: "nav",
          scrub: 1,
        },
      });
      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          self.direction === -1
            ? showNav.current.play()
            : showNav.current.reverse();
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    // <AnimatePresence>
    //   <motion.nav
    //     initial={false}
    //     animate={isOpen ? "open" : "closed"}
    //     variants={menuitem_parent_variants}
    //     className="fixed w-full items-center"
    //   >
    <div ref={mainRef}>
      <div
        className={
          "nav-bar flex fixed top-0 w-full max-w-[2048px] z-50 justify-between items-center h-16 bg-transparent pr-5"
        }
      >
        <h1 className="logo text-2xl font-semibold text-black pl-5 lg:pl-12">
          <Link href={"/"}>AKRAABI</Link>
        </h1>
        <button
          className="flex w-8 h-8 lg:w-9 lg:h-9 relative items-center justify-center bg-transparent rounded-full z-[100] "
          onClick={() => {
            toggleOpen((prev) => !prev);
          }}
        >
          <div className="sr-only">Menu</div>
          <AnimatePresence>
            <motion.svg
              className="close-icon lg:fill-black/70 fill-white "
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
            >
              <motion.g
                initial={isOpen ? { opacity: 0 } : { opacity: 1 }}
                animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7 }}
              >
                <motion.path fill="none" d="M0 0h24v24H0V0z"></motion.path>
                <motion.path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></motion.path>
              </motion.g>

              <motion.g
                initial={isOpen ? { opacity: 1 } : { opacity: 0 }}
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <motion.path
                  d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
                  fill="currentColor"
                ></motion.path>
                <motion.path
                  d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
                  fill="currentColor"
                ></motion.path>
                <motion.path
                  d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
                  fill="currentColor"
                ></motion.path>
              </motion.g>
            </motion.svg>
          </AnimatePresence>
        </button>
      </div>

      <NavbarMenu isOpen={isOpen} toggleOpen={toggleOpen} />
    </div>
  );
  {
    /* </motion.nav>
    </AnimatePresence> */
  }
};

export default Navbar;
