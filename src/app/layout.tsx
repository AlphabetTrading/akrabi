"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";

import { Barlow_Condensed } from "next/font/google";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

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
      <body className={barlow_condensed.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
