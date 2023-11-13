import React from "react";

type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return <h1 className="text-5xl font-semibold">{text}</h1>;
};

export default Title;
