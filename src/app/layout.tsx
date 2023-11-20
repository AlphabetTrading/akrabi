"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import "./globals.css";

import { Barlow_Condensed, Barlow } from "next/font/google";

import Cursor from "@/components/commonn/Cursor";
import ScrollToTop from "@/components/commonn/ScrollToTop";
import Navbar from "@/components/commonn/Navbar";
import Footer from "@/components/commonn/Footer";
import clsx from "clsx";
import React from "react";
<<<<<<< HEAD
=======
import Loader from "@/components/commonn/Loader";
>>>>>>> 0a9d4ff (add loader)

const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, toggleOpen] = useState(false);
  // const scrollRef = React.createRef<HTMLDivElement>();
  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current || undefined,
  //     smooth: true,
  //   });
  // });

  useEffect(() => {
    if (isOpen) {
      const html = document.querySelector("html");
      if (html) {
        html.style.overflow = "hidden";
        html.style.position = "fixed";
        html.style.inset = "0px";
      }
    } else {
      const html = document.querySelector("html");
      if (html) {
        html.style.overflow = "auto";
        html.style.position = "static";
        html.style.inset = "initial";
      }
    }
  }, [isOpen]);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        direction: "horizontal",
      });

      if (isOpen) {
        locomotiveScroll.stop();
        console.log("stop");
      } else {
        locomotiveScroll.start();
      }
    })();
  }, [isOpen]);

  return (
<<<<<<< HEAD
    <html lang="en" className="w-full flex flex-col items-center">
      <body className={clsx(barlow_condensed.className, "overflow-hidden")}>
=======
    <html lang="en">
      <body
        className={clsx(
          barlow_condensed.className,
          barlow.className,
          "w-full min-h-screen h-full flex flex-col items-center relative",
        )}
      >
        <Loader />
>>>>>>> 0a9d4ff (add loader)
        <Cursor />
        <Navbar isOpen={isOpen} toggleOpen={toggleOpen} />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
