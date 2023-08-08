import React from "react";
import CardContainer from "./style";

const Card = ({ children, height, width, minHeight, bgColor }) => {
  return (
    <CardContainer
      height={height}
      width={width}
      minHeight={minHeight}
      bgColor={bgColor}
    >
      {children}
    </CardContainer>
  );
};

export default Card;
