"use client";

import { GetCurrentYear } from "@/helpers/getCurrentYear";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-11/12 lg:w-5/6 flex flex-col items-center">
        <div className="flex w-full justify-between gap-y-5 min-h-[200px] flex-col lg:flex-row">
          <div className="flex-3 gap-y-8 flex-col justify-between h-full gap-y-3">
            <div className="flex flex-col w-2/3 leading-tight ">
              <h1 className="uppercase text-5xl font-semibold leading-tight my-1">
                Akrabi<span className="text-[#FFB800]">.</span>
              </h1>
              <p className="text-lg text-text/70 leading-tight ">
                <span className="font-semibold">
                  Green Coffee, Global Reach
                </span>
                : Elevate your brew with ugs
              </p>
            </div>
            <ul className="flex items-center gap-x-3 h-10 my-3">
              {[
                {
                  id: 1,
                  alt: "facebook",
                  image: "/icons/facebook.svg",
                  link: "/#",
                },
                {
                  id: 2,
                  alt: "instagram",
                  image: "/icons/instagram.svg",
                  link: "/#",
                },
                {
                  // fill with twitter
                  id: 3,
                  alt: "x",
                  image: "/icons/x.svg",
                  link: "/#",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="group hover:scale-110 cursor-pointer transition-all duration-200 w-8 h-8 relative flex justify-center items-center"
                >
                  <Link
                    href={item.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="relative z-10"
                  >
                    <img src={item.image} alt={item.alt} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex-9 flex justify-center items-center">
            <div className="grid w-full grid-cols-2 gap-y-3 lg:flex flex-col xl:flex-row lg:gap-x-16">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-semibold mb-3">Quick Links</h1>
                <ul className="text-xl">
                  <li className="hover:scale-105 cursor-pointer transition-all duration-200">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:scale-105 cursor-pointer transition-all duration-200">
                    <Link href="/producers">Producers</Link>
                  </li>
                  <li className="hover:scale-105 cursor-pointer transition-all duration-200">
                    <Link href="/farms">Farms</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-semibold mb-3">Resources</h1>
                <ul className="text-xl">
                  <li className="hover:scale-105 cursor-pointer transition-all duration-200">
                    <Link href="/traceability">Traceability</Link>
                  </li>
                  <li className="hover:scale-105 cursor-pointer transition-all duration-200">
                    <Link href="/deforestation">Deforestation</Link>
                  </li>
                  <li className="hover:scale-105 cursor-pointer transition-all duration-200">
                    <Link href="/sustainability">Sustainability</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-semibold mb-3">About</h1>
                <ul className="text-xl">
                  {/* <li className="hover:scale-105 cursor-pointer transition-all duration-200">
                  <Link href="/about-us">About Us</Link>
                </li> */}
                  <li className="hover:scale-105 cursor-pointer transition-all duration-200">
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="h-0.5 w-full col-span-12 mt-16 my-6 bg-black/20"></div>
        <div className="col-span-3 text-lg text-[#7E7E7E]">
          <h1>© {GetCurrentYear()} Akrabi. All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
