import React from "react";
import { Nav, NavLink, NavItem, NavList } from "./style";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/" end>
            Inicio
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink to="/informacion" end>
            Información
          </NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink to="/instructivo" end>
            Instructivo
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/simulador" end>
            Simulador
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/registros" end>
            Registros
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
