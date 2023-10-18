import React from "react";
import SubTitle from "../common/SubTitle";
import Title from "../common/Title";

type Props = {};

const Bio = (props: Props) => {
  return (
    <div className="w-full h-full grid grid-cols-12 py-16 gap-x-4 justify-between items-center">
      <div className="h-full col-span-1 flex flex-col gap-y-2"></div>
      <div className="h-full col-span-3 flex flex-col gap-y-2">
        <img className="w-40 h-40" src="/icons/quotes.svg" />
      </div>
      <div className="col-span-6 flex flex-col gap-y-5">
        <div className="w-full grid grid-cols-1 gap-y-12">
          <div className="w-2/3">
            <Title text="Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis turpis egestas egestas sem." />
          </div>
          <SubTitle text="Every step of the process" />
          <div className="w-full grid grid-cols-2 gap-8 gap-x-12">
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus
              iaculis turpis egestas egestas sem. Neque ligula vel id varius
              imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor
              lobortis. Volutpat venenatis lacinia ornare risus ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus
              iaculis turpis egestas egestas sem. Neque ligula vel id varius
              imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor
              lobortis. Volutpat venenatis lacinia ornare risus ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus
              iaculis turpis egestas egestas sem. Neque ligula vel id varius
              imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor
              lobortis. Volutpat venenatis lacinia ornare risus ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus
              iaculis turpis egestas egestas sem. Neque ligula vel id varius
              imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor
              lobortis. Volutpat venenatis lacinia ornare risus ut.
            </p>
          </div>
        </div>
        <div className="h-full md:col-span-1 flex flex-col gap-y-2"></div>
      </div>
    </div>
  );
};

export default Bio;
