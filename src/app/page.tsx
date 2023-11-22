"use client";

import Footer from "@/components/common/Footer";
import Loader from "@/components/common/Loader";
import ScrollToTop from "@/components/common/ScrollToTop";
import CompanyMotto from "@/components/home/CompanyMotto";
import LandingPage from "@/components/home/LandingPage";
import Process from "@/components/home/Process";
import Regions from "@/components/home/Regions";
import Sustainability from "@/components/home/Sustainability";

export default function Home() {
  return (
    <main
      data-scroll-container
      className="landing-page flex w-full min-h-screen flex-col items-center justify-between "
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
