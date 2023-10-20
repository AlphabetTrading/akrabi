"use client";

import CTA from "@/components/Farms/CTA";
import Details from "@/components/Farms/Details";
import Gallery from "@/components/Farms/Gallery";
import LandingPage from "@/components/Farms/LandingPage";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <LandingPage />
      <div className="my-12">
        <CTA />
      </div>
      <Details />
      {/* <Gallery /> */}
    </div>
  );
};

export default Page;
