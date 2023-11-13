import Concerns from "@/components/Deforestation/Concerns";
import Definition from "@/components/Deforestation/Definition";
import EURegulation from "@/components/Deforestation/EURegulation";
import LandingPage from "@/components/Deforestation/LandingPage";
import Roles from "@/components/Deforestation/Roles";
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
