import React, { Component, useState } from "react";
import { withRouter, Link } from "react-router-dom";

import { Nav, NavbarContainer, NavMenu, NavLinks, NavItem } from "./Home.style";
import { AppContainer } from "../Container.style";

import * as ROUTES from "../../constants/routes";
import { withAuthorization } from "../Session";

const HomePage = () => (
  <AppContainer>
    <MobileNav />
  </AppContainer>
);

const MobileNav = () => (
  <>
    <Nav>
      <NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">A</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="portfolio">P</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">C</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  </>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
