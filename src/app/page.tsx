"use client";

import Footer from "@/components/commonn/Footer";
import Loader from "@/components/commonn/Loader";
import ScrollToTop from "@/components/commonn/ScrollToTop";
import CompanyMotto from "@/components/homee/CompanyMotto";
import LandingPage from "@/components/homee/LandingPage";
import Process from "@/components/homee/Process";
import Regions from "@/components/homee/Regions";
import Sustainability from "@/components/homee/Sustainability";

export default function Home() {
  return (
    <main
      data-scroll-container
      className="landing-page flex w-full min-h-screen flex-col items-center justify-between"
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
