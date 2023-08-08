import styled from "styled-components";
import colors from "../../constants/colors";

const HeaderContainer = styled.header`
  height: 12vh;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  justify-content: center;
  background-color: ${colors.primary};
  border-bottom: 10px solid ${colors.black[0]};
  color: ${colors.black[0]};
  align-items: center;
`;

export default HeaderContainer;
