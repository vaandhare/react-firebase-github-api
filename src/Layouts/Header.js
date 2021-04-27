import React, { useState, useContext } from "react";

import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="primary" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          VA
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <NavbarText className="text-white m-auto">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink className="text-white" onClick={() => context.setUser(null)}>
                LogOut
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/SignUp">
                  SignUp
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/SignIn">
                  SignIn
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
