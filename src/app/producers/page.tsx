"use client";

import Bio from "@/components/producerss/Bio";
import Interview from "@/components/producerss/Interview";
import LandingPage from "@/components/producerss/LandingPage";
import Stats from "@/components/producerss/Stats";
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
