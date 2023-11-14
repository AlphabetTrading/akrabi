"use client";

import CompanyMotto from "@/components/home/CompanyMotto";
import LandingPage from "@/components/home/LandingPage";
import Process from "@/components/home/Process";
import Sustainability from "@/components/traceability/Sustainability";
import Regions from "@/components/home/Regions";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main
      data-scroll-container
      className="flex w-full min-h-screen flex-col items-center justify-between"
    >
      <LandingPage />
      <Process />
      <Regions />
      <CompanyMotto />
      {/* <Sustainability /> */}
      {/* <Clients/> */}
      {/* <Testimonials /> */}
      {/* <FAQs/> */}
    </main>
  );
}
