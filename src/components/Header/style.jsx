import styled from "styled-components";
import colors from "../../constants/colors";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.primary};
  border-bottom: 10px solid ${colors.accent};
  color: ${colors.black[0]};
  align-items: center;
`;

export default HeaderContainer;
