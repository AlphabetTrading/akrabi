"use client";

import React from "react";
import LandingPage from "@/components/deforestationn/LandingPage";
import Concerns from "@/components/deforestationn/Concerns";
import Definition from "@/components/deforestationn/Definition";
import EURegulation from "@/components/deforestationn/EURegulation";
import Roles from "@/components/deforestationn/Roles";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full">
      <LandingPage />
      <Definition />
      <Concerns />
      <Roles />
      <EURegulation />
    </div>
  );
};

export default Page;
