import React from "react";
import { SpinnerSpan, SpinnerWrapper } from "./style";

const Spinner = ({
  fullScreen = false,
  minHeight,
  absolute = false,
  customMessage = "",
}) => {
  return (
    <SpinnerWrapper
      absolute={absolute}
      fullScreen={fullScreen}
      minHeight={minHeight}
    >
      <SpinnerSpan />
      {customMessage}
    </SpinnerWrapper>
  );
};

export default Spinner;
