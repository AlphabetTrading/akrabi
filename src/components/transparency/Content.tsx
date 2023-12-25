import React from "react";
import SolvingProblem from "./SolvingProblem";
import ECXRole from "./ECXRole";
import Challenges from "./Challenges";
import Involvement from "./Involvement";
import Steps from "./Steps";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className="w-full">
      <SolvingProblem />
      <ECXRole />
      <Challenges />
      <Involvement />
      <Steps />
    </div>
  );
};

export default Content;
