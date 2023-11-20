"use client";

import CTA from "@/components/farmss/CTA";
import Details from "@/components/farmss/Details";
import LandingPage from "@/components/farmss/LandingPage";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <LandingPage />
      <div className="my-12">
        <CTA />
      </div>
      <Details />
      {/* <Gallery /> */}
    </div>
  );
};

export default Page;
