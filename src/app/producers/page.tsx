"use client";

import Bio from "@/components/producer/Bio";
import Interview from "@/components/producer/Interview";
import LandingPage from "@/components/producer/LandingPage";
import Stats from "@/components/producer/Stats";
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
