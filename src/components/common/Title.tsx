import React from "react";

type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return (
    <h1 className="text-2xl lg:text-4xl xl:text-5xl font-semibold underline leading-normal">
      {text}
    </h1>
  );
};

export default Title;
