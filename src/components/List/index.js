import React, { Component, useState } from "react";
import { withRouter, Link } from "react-router-dom";

import { Toggles, Alt } from "./List.style";

import { Input } from "../Input.style";
import Image from "../../images/map.jpg";
import { MobileNav } from "../MobileNav";
import {} from "./List.style";
import { AppContainer } from "../Container.style";

import * as ROUTES from "../../constants/routes";
import { withAuthorization } from "../Session";

const ListPage = () => (
  <AppContainer>
    <SortingToggles />
    <MobileNav />
  </AppContainer>
);

const Header = () => <div></div>;

const SortingToggles = () => (
  <Toggles>
    <div>
      <Alt>Rating</Alt>
      <Alt>Newest</Alt>
      <Alt>Closest</Alt>
    </div>
    <div>
      <Alt>Map</Alt>
      <Alt>List</Alt>
    </div>
  </Toggles>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ListPage);
