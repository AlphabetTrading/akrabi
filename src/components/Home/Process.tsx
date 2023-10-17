import React from "react";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

type Props = {};

const Process = (props: Props) => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-10 py-16 gap-x-4 justify-between items-center">
      <div className="md:col-span-3 flex flex-col gap-y-2 pr-12">
        <img src="/images/every-step.svg" />
      </div>
      <div className="md:col-span-7 flex flex-col gap-y-5 px-16">
        <div className="w-11/12 grid grid-cols-1 gap-y-8">
          <Title text="Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis turpis egestas egestas sem." />
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
      </div>
    </div>
  );
};

export default Process;
