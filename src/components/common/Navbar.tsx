"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import NavbarMenu from "./NavbarMenu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

type Props = {
  isOpen: boolean;
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Path = (props: any) => (
  <motion.path
    fill={props.color}
    strokeWidth="3"
    stroke={props.color}
    strokeLinecap="round"
    {...props}
    className="flex flex-col items-center"
  />
);

const menuitem_parent_variants = {
  open: {
    height: "100%",
  },
  closed: {
    height: 0,
  },
};

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

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          self.direction === -1
            ? showNav.current.play()
            : showNav.current.reverse();
        },
      });
      // gsap.to(".active-nav-link", {
      //   textDecoration: "line-through",
      //   color:"white",
      //   opacity:1
      // });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // toggle the direction of our timeline
    // document.querySelector("body")?.style.overflowY("hidden");
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
          "nav-bar flex fixed top-0 w-full z-50 justify-space-around items-center h-16 bg-transparent"
        }
      >
        <h1 className="logo text-2xl font-semibold text-black pl-5 lg:pl-12">
          AKRAABI
        </h1>
        <button
          className="flex flex-col items-center justify-center outline-none border-none cursor-pointer absolute top-3 right-4 w-12 h-12 bg-transparent rounded-full z-[100]"
          onClick={() => {
            toggleOpen((prev) => !prev);
          }}
        >
          <div className="sr-only">Menu</div>
          {isOpen ? (
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-4 h-4 lg:fill-black fill-white"
              viewBox="0 0 21 21"
            >
              <path
                d="M1.02556 20.9998C0.822736 20.9998 0.624454 20.9397 0.455797 20.827C0.287141 20.7143 0.155687 20.5542 0.0780629 20.3668C0.000439235 20.1794 -0.0198669 19.9732 0.0197132 19.7743C0.0592932 19.5754 0.156981 19.3926 0.300421 19.2492L19.2493 0.300364C19.4416 0.108044 19.7025 0 19.9744 0C20.2464 0 20.5073 0.108044 20.6996 0.300364C20.8919 0.492684 20.9999 0.753526 20.9999 1.02551C20.9999 1.29749 20.8919 1.55833 20.6996 1.75065L1.75071 20.6995C1.65557 20.7949 1.54253 20.8705 1.41809 20.922C1.29365 20.9735 1.16025 20.9999 1.02556 20.9998Z"
                // fill="black"
              />
              <path
                d="M19.9744 20.9998C19.8397 20.9999 19.7063 20.9735 19.5819 20.922C19.4574 20.8705 19.3444 20.7949 19.2492 20.6995L0.300364 1.75065C0.108044 1.55833 0 1.29749 0 1.02551C0 0.753526 0.108044 0.492684 0.300364 0.300364C0.492684 0.108044 0.753526 0 1.02551 0C1.29749 0 1.55833 0.108044 1.75065 0.300364L20.6995 19.2492C20.843 19.3926 20.9406 19.5754 20.9802 19.7743C21.0198 19.9732 20.9995 20.1794 20.9219 20.3668C20.8443 20.5542 20.7128 20.7143 20.5441 20.827C20.3755 20.9397 20.1772 20.9998 19.9744 20.9998Z"
                // fill="black"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="512"
              height="512"
              x="0"
              y="0"
              viewBox="0 0 812 812"
              // style="enable-background:new 0 0 512 512"
              xmlSpace="preserve"
              className=""
            >
              <g>
                <path
                  d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"
                  opacity="1"
                  className="text-black"
                ></path>
              </g>
            </svg>
          )}
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
