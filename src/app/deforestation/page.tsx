"use client";

import Concerns from "@/components/deforestation/Concerns";
import Definition from "@/components/deforestation/Definition";
import EURegulation from "@/components/deforestation/EURegulation";
import LandingPage from "@/components/deforestation/LandingPage";
import Roles from "@/components/deforestation/Roles";
import React from "react";

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
