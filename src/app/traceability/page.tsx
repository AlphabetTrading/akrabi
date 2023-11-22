"use client";

import React from "react";
import CTA from "@/components/traceability/CTA";
import LandingPage from "@/components/traceability/LandingPage";
import Sustainability from "@/components/traceability/Sustainability";
import Traceability from "@/components/traceability/Traceability";

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
