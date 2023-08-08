import styled from "styled-components";
import colors from "../../constants/colors";
import Button from "../../shared/Button";
import Input from "../../shared/Input";

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
  height: 3rem;
  border-radius: 0.5rem;
  width: 100%;
  align-self: center;
  transition: 0.2s all;

  &::before {
    display: none;
  }
`;

export const AddButton = styled(Button)`
  background-color: ${colors.states.correct};
  border: 1px solid ${colors.states.correctBorder};
  color: ${colors.states.correctColor};
  width: 25%;
  height: 3rem;
  border-radius: 5px;
  font-size: 1rem;
  transition: 0.2s all;
  &::before {
    display: none;
  }

  &:hover {
    background-color: #6de754;
  }

  &.limpiar {
    background-color: #fff;
    color: #000;
    border: 3px solid ${colors.softPrimary};
  }
`;

export const RemoveButton = styled(Button)`
  background-color: ${colors.states.warning};
  border: 1px solid ${colors.states.warningBorder};
  color: ${colors.states.warningColor};
  width: 25%;
  height: 3rem;
  border-radius: 5px;
  font-size: 1rem;
  transition: 0.2s all;

  &::before {
    display: none;
  }

  &:hover {
    background-color: #e44c4c;
  }
`;

export const FormInput = styled(Input)`
  background-color: ${colors.softPrimary};
  border: 1px solid ${colors.primary};
  height: 3rem;
  border-radius: 5px;
  padding-left: 1rem;
`;
