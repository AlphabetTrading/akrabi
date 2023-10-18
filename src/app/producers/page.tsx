import Bio from "@/components/Producers/Bio";
import Interview from "@/components/Producers/Interview";
import LandingPage from "@/components/Producers/LandingPage";
import Stats from "@/components/Producers/Stats";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full">
      <LandingPage />
      <Bio />
      <Interview />
      <Stats />
    </div>
  );
};

export default page;
