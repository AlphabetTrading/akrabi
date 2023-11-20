"use client";

import React from "react";
import CTA from "@/components/traceabilityy/CTA";
import LandingPage from "@/components/traceabilityy/LandingPage";
import Sustainability from "@/components/traceabilityy/Sustainability";
import Traceability from "@/components/traceabilityy/Traceability";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full">
      <LandingPage />
      <Traceability />
      {/* <Transparency/> */}
      <CTA />
      <Sustainability />
    </div>
  );
};

export default Page;
