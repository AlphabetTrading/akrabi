import React from "react";

type Props = {
  text: string;
};

const SubTitle = ({ text }: Props) => {
  return <h1 className="uppercase text-xl font-semibold">{text}</h1>;
};

export default SubTitle;
