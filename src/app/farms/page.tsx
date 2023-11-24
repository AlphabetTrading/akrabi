"use client";

import CTA from "@/components/farms/CTA";
import Details from "@/components/farms/Details";
import LandingPage from "@/components/farms/LandingPage";
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
