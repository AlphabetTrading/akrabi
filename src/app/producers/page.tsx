"use client";

import Bio from "@/components/producers/Bio";
import Interview from "@/components/producers/Interview";
import LandingPage from "@/components/producers/LandingPage";
import Stats from "@/components/producers/Stats";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full">
      <LandingPage />
      <Bio />
      <Interview />
      <Stats />
    </div>
  );
};

export default Page;
