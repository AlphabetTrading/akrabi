import React from "react";
import { Testimony } from "../../types/testimony";

type Props = {
  testimony: Testimony;
};

const Testimonial = ({ testimony }: Props) => {
  return (
    <div className="w-11/12 flex flex-col items-center gap-y-12">
      <p className="w-3/5 text-3xl text-center">{testimony.testimony}</p>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl uppercase">{testimony.name}</h1>
        <h1 className="text-lg text-text/60">{testimony.location}</h1>
      </div>
    </div>
  );
};

export default Testimonial;
