"use client";

import React from "react";
import LandingPage from "@/components/Deforestation/LandingPage";
import Concerns from "@/components/Deforestation/Concerns";
import Definition from "@/components/Deforestation/Definition";
import EURegulation from "@/components/Deforestation/EURegulation";
import Roles from "@/components/Deforestation/Roles";

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
