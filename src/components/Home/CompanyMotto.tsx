import React from "react";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

type Props = {};

const CompanyMotto = (props: Props) => {
  return (
    <div className="flex items-center justify-center py-16 w-11/12">
      <div className="w-full flex justify-center">
        <div className="w-3/4 flex flex-col items-center gap-y-4">
          <div className="flex items-start gap-x-5">
            <img src="/icons/transparency.svg" alt="" />
            <div className="flex flex-col gap-y-3">
              <h1 className="font-semibold uppercase text-2xl">Transparency</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus
                iaculis turpis egestas egestas sem. Neque ligula vel id varius
                imperdiet pellentesque. Ullamcorper amet dignissim volutpat
                tortor lobortis. Volutpat venenatis lacinia ornare risus ut.
              </p>
              <button className="w-fit p-1 px-5 border-2 border-black">
                See more
              </button>
            </div>
          </div>
          <h1>
            .....................................................................................................................................................................................
          </h1>
          <div className="flex items-start gap-x-5">
            <img src="/icons/traceability.svg" alt="" />
            <div className="flex flex-col gap-y-3">
              <h1 className="font-semibold uppercase text-2xl">Traceability</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus
                iaculis turpis egestas egestas sem. Neque ligula vel id varius
                imperdiet pellentesque. Ullamcorper amet dignissim volutpat
                tortor lobortis. Volutpat venenatis lacinia ornare risus ut.
              </p>
              <button className="w-fit p-1 px-5 border-2 border-black">
                See more
              </button>
            </div>
          </div>
          <h1>
            ....................................................................................................................................................................................
          </h1>

          <div className="flex items-start gap-x-5">
            <img src="/icons/sustainability.svg" alt="" />
            <div className="flex flex-col gap-y-3">
              <h1 className="font-semibold uppercase text-2xl">
                Sustainability
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus
                iaculis turpis egestas egestas sem. Neque ligula vel id varius
                imperdiet pellentesque. Ullamcorper amet dignissim volutpat
                tortor lobortis. Volutpat venenatis lacinia ornare risus ut.
              </p>
              <button className="w-fit p-1 px-5 border-2 border-black">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 flex flex-col gap-y-2">
        <Title text="Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis turpis" />
        <br />
        <SubTitle text="Every step of the process" />
        <br />
        <p className="w-2/3">
          Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis
          turpis egestas egestas sem. Neque ligula vel id varius imperdiet
          pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis.
          Volutpat venenatis lacinia ornare risus ut.
        </p>
        <p className="w-2/3">
          Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis
          turpis egestas egestas sem. Neque ligula vel id varius imperdiet
          pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis.
          Volutpat venenatis lacinia ornare risus ut.
        </p>
      </div>
    </div>
  );
};

export default CompanyMotto;
