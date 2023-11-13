import CTA from "@/components/Farms/CTA";
import LandingPage from "@/components/Home/LandingPage";
import Sustainability from "@/components/Traceability/Sustainability";
import Traceability from "@/components/Traceability/Traceability";

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
