"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import "./globals.css";

import { Barlow_Condensed } from "next/font/google";

import Cursor from "@/components/common/Cursor";
import ScrollToTop from "@/components/common/ScrollToTop";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import clsx from "clsx";
import locomotiveScroll from "locomotive-scroll";
import React from "react";
import LocomotiveScroll from "locomotive-scroll";

const barlow_condensed = Barlow_Condensed({
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
    <html lang="en" className="w-full flex flex-col items-center">
      <body className={clsx(barlow_condensed.className)}>
        <Cursor />
        {/* <Navbar /> */}
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
