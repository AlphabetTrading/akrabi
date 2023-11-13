import CompanyMotto from "@/components/Home/CompanyMotto";
import LandingPage from "@/components/Home/LandingPage";
import Process from "@/components/Home/Process";
import Regions from "@/components/Home/Regions";
import Testimonials from "@/components/Home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <LandingPage />
      <Process />
      <Regions />
      <CompanyMotto />
      {/* <Sustainability/>
      <Clients/> */}
      {/* <Testimonials /> */}
      {/* <FAQs/> */}
    </main>
  );
}
