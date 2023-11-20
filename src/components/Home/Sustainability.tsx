import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Sustainability = (props: Props) => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <Image
        fill

        className="z-10 object-cover object-center w-full h-full  "
        src="/images/home/sustainability.jpg"
        alt=""
      />
      <div className="absolute inset-0 bg-black/40 z-20"></div>
      <div className="w-full flex flex-col items-center gap-y-6 z-20">
        <div className="w-11/12 lg:w-5/6 h-5/6 flex flex-col gap-y-6 text-white">
          <h1 className="w-[95%] lg:w-2/3 text-3xl lg:text-6xl font-semibold">
            Promoting sustainable agriculture and forestry practices that
            minimize environmental impacts.
          </h1>
          <h1 className="uppercase text-base lg:text-xl font-semibold">
            Protecting Forests
          </h1>
        </div>
        <div className="w-full flex justify-center py-5 bg-[#F8F1E4]/[15%] border-[#F8F1E4]">
          <div className="w-11/12 lg:w-5/6 h-5/6 flex flex-col gap-y-6 z-20 text-white">
            <p className="w-11/12 lg:w-1/2 text-base lg:text-xl">
              We prioritize the promotion of eco-friendly agricultural and
              forestry methods that minimize environmental footprints. Our
              dedication lies in fostering sustainable cultivation techniques,
              ensuring minimal impact on the environment while consistently
              delivering premium quality green coffee to global markets. Join us
              in our mission towards a greener, more sustainable future in the
              coffee industry.
            </p>
            <div
              onClick={() => {
                router.push("/deforestation");
              }}
              className="w-fit border border-white px-4 lg:px-6 py-2 cursor-pointer"
            >
              <h1 className="font-semibold text-base lg:text-lg">See more</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
