/* eslint-disable no-nested-ternary */
import styled, { css, keyframes } from "styled-components";
import colors from "../../constants/colors";

const spinnerFullScreen = css`
  height: 100vh;
  &::before {
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    content: "";
    z-index: -1;
    background-color: ${colors.black[4]};
    opacity: 0.6;
  }
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const spinnerAbsolute = css`
  z-index: 10000;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.7;
  position: absolute;
  inset: 0;
  margin: auto;
`;

const scaleUp = keyframes`
  0% { transform: translate(-50%, -50%) scale(0) }
  60% , 100% { transform: translate(-50%, -50%)  scale(1)}
`;

const pulse = keyframes`
  0% , 60% , 100%{ transform:  scale(1) }
  80% { transform:  scale(1.2)}
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  min-height: ${(props) => props.minHeight};
  ${(props) =>
    props.fullScreen
      ? spinnerFullScreen
      : props.absolute
      ? spinnerAbsolute
      : ""};
`;

export const SpinnerSpan = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid ${colors.black[2]};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: ${pulse} 1s linear infinite;

  &::after {
    content: "";
    position: absolute;
    width: 48px;
    height: 48px;
    border: 5px solid ${colors.black[2]};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: ${scaleUp} 1s linear infinite;
  }
`;
