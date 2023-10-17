import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="bg-primary w-full min-h-screen flex flex-col justify-center items-center py-8">
      <h1 className="text-text text-8xl uppercase font-bold">Akrabi</h1>
      <div className="w-1/2 pt-4">
        <p className="text-text/60 text-xl text-center">
          Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis
          turpis egestas egestas sem. Neque ligula vel id varius imperdiet
          pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis.
          Volutpat venenatis lacinia ornare risus ut.
        </p>
      </div>
      <div className="w-5/6">
        <img className="w-full" src="/images/homepage.svg" />
      </div>
      <div className="flex flex-col gap-y-1 border items-start">
        <img className="w-8" src="/icons/quotes.svg" />
        <p className="w-1/3">
          Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis
          turpis egestas egestas sem. Neque ligula vel id varius imperdiet
          pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis.
          Volutpat venenatis lacinia ornare risus ut.
        </p>
        <h1>-Lorem Ipsum</h1>
      </div>
    </div>
  );
};

export default LandingPage;
