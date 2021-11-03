import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #43456c;
  height: 88px;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  bottom: 0;
  z-index: 10;
  transition: 0.5s all ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88px;
  z-index: 1;
  width: 100vw;
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 100%;
`;

export const NavItem = styled.li`
  height: 88px;
`;

export const NavLinks = styled(Link)`
  color: gray;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 2px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s;
`;
