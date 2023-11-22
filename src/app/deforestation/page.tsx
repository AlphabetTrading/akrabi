"use client";

import React from "react";
import LandingPage from "@/components/deforestation/LandingPage";
import Concerns from "@/components/deforestation/Concerns";
import Definition from "@/components/deforestation/Definition";
import EURegulation from "@/components/deforestation/EURegulation";
import Roles from "@/components/deforestation/Roles";

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
