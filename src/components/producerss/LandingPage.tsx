"use client";

import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/producers-landing.svg')`,
      }}
    >
      <div className="w-5/6 flex gap-x-12 items-center">
        <div className="rounded-full overflow-clip">
          <img src="/images/producers-photo.svg" />
        </div>
        <div>
          <h1 className="text-3xl uppercase text-white">
            Gedeb Woreda Gedeo Zone Oromia, Ethiopia
          </h1>
          <h1 className="text-6xl font-semibold text-white">Tibebu Roba</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
