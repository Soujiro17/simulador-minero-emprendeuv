import styled, { css } from "styled-components";
import colors from "../../constants/colors";
import Button from "../../shared/Button";
import Input from "../../shared/Input";

const roundedFixedSize = css`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  text-align: center;
  font-size: 1.3rem;
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
`;

export const FormGroupContainer = styled.div``;

export const ErrorText = styled.p`
  margin: 0;
  margin-top: 4px;
  width: 100%;
  padding: 2px;
  background-color: ${colors.states.incorrectBackground};
`;

export const FormGroup = styled.div`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap || "1rem"};
`;

export const ButtonSimular = styled(Button)`
  border-radius: 50%;
  height: 3rem;
  background-color: unset;
  color: ${colors.black[0]};
  border: 2px solid ${colors.black[0]};
  width: 70%;
  align-self: center;
  transition: 0.2s all;

  &:hover {
    background-color: ${colors.black[5]};
  }

  &::before {
    display: none;
  }
`;

export const AddButton = styled(Button)`
  background-color: ${colors.states.correct};
  color: ${colors.black[0]};
  ${roundedFixedSize}
  transition: .2s all;
  &::before {
    display: none;
  }

  &:hover {
    background-color: #6de754;
  }
`;

export const RemoveButton = styled(Button)`
  background-color: ${colors.states.incorrect};
  color: ${colors.black[0]};
  ${roundedFixedSize}
  transition: .2s all;

  &::before {
    display: none;
  }

  &:hover {
    background-color: #e44c4c;
  }
`;

export const FormInput = styled(Input)`
  background-color: ${colors.black[0]};
  ${roundedFixedSize}
  padding-left: 1rem;
`;
