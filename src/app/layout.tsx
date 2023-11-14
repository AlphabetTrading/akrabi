"use client";
import { useEffect } from "react";
import "./globals.css";

import { Barlow_Condensed } from "next/font/google";

import Cursor from "@/components/common/Cursor";
import ScrollToTop from "@/components/common/ScrollToTop";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import clsx from "clsx";

const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({});
    })();
  }, []);
  return (
    <html lang="en">
      <body
        className={clsx(
          barlow_condensed.className,
          "w-screen overflow-x-hidden",
        )}
      >
        <Cursor />
        {/* <Navbar /> */}
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
