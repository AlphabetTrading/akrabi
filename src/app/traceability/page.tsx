import CTA from "@/components/Traceability/CTA";
import LandingPage from "@/components/Traceability/LandingPage";
import Sustainability from "@/components/Traceability/Sustainability";
import Traceability from "@/components/Traceability/Traceability";
import React from "react";

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
