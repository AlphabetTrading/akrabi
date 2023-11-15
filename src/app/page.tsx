"use client";

import CompanyMotto from "@/components/Home/CompanyMotto";
import LandingPage from "@/components/Home/LandingPage";
import Process from "@/components/Home/Process";
import Regions from "@/components/Home/Regions";
import Sustainability from "@/components/Home/Sustainability";

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
      <Sustainability />
      {/* <Clients/> */}
      {/* <Testimonials /> */}
      {/* <FAQs/> */}
    </main>
  );
}
