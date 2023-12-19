import React from "react";
import SolvingProblem from "./SolvingProblem";
import ECXRole from "./ECXRole";
import Challenges from "./Challenges";
import Involvement from "./Involvement";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className="w-full">
      <SolvingProblem />
      <ECXRole />
      <Challenges />
      <Involvement />
    </div>
  );
};

export default Content;
