import React from "react";
import { SpinnerSpan, SpinnerWrapper } from "./style";

const Spinner = ({ fullScreen = false, minHeight }) => {
  return (
    <SpinnerWrapper fullScreen={fullScreen} minHeight={minHeight}>
      <SpinnerSpan />
    </SpinnerWrapper>
  );
};

export default Spinner;
