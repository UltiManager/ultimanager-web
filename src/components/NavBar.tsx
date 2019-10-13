import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { baseTextStyles } from "./BaseText";
import Container from "./Container";
import Logo from "./Logo";

const BREAKPOINT_WIDTH = "20rem";

const NavWrapper = styled.nav`
  background: #333;
`;

const NavContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 0.5em;

  @media screen and (min-width: ${BREAKPOINT_WIDTH}) {
    align-items: center;
    flex-direction: row;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media screen and (min-width: ${BREAKPOINT_WIDTH}) {
    justify-content: flex-end;
    flex-direction: row;
  }
`;

const CustomNavLink = styled(NavLink)`
  ${baseTextStyles};
  color: ${props => props.theme.colors.primary};
  display: inline-block;
  font-size: 1.15rem;
  position: relative;
  text-decoration: none;

  &::before {
    background: ${props => props.theme.colors.primary};
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    transition: width 0.25s ease-out;
    width: 0;
  }

  &:hover::before {
    width: 100%;
  }

  &.active::before {
    width: 100%;
  }

  @media screen and (min-width: ${BREAKPOINT_WIDTH}) {
    margin-left: 1em;
  }
`;

const NavBar: React.FunctionComponent = () => (
  <NavWrapper>
    <NavContainer>
      <Link to={"/"}>
        <Logo />
      </Link>
      <NavLinks>
        <CustomNavLink to="/register">Register</CustomNavLink>
        <CustomNavLink to="/log-in">Log In</CustomNavLink>
      </NavLinks>
    </NavContainer>
  </NavWrapper>
);

export default NavBar;
