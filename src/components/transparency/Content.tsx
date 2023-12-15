import React from "react";
import SolvingProblem from "./SolvingProblem";
import ECXRole from "./ECXRole";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className="w-full py-24">
      <SolvingProblem />
      <ECXRole />
    </div>
  );
};

export default Content;
