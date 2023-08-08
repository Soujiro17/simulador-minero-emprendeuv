import { NavLink as NL } from "react-router-dom";
import styled from "styled-components";
import colors from "../../constants/colors";

export const Nav = styled.nav`
  height: 80px;
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  height: 100%;
  margin: 0;
`;

export const NavItem = styled.li`
  height: 100%;
  flex: 1;
  text-align: center;
`;

export const NavLink = styled(NL)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: ${colors.black[0]};
  position: relative;
  z-index: 1;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    height: 0%;
    width: 100%;
    z-index: -1;
    transition: 0.2s all;
  }

  &:hover {
    color: ${colors.black[9]};
    &::before {
      height: 100%;
      background-color: ${colors.black[0]};
    }
  }

  &.active {
    color: ${colors.black[9]};
    background-color: ${colors.black[0]};
  }
`;
