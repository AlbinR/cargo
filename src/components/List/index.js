import React, { Component, useState } from "react";
import { withRouter, Link } from "react-router-dom";

import { Input } from "../Input.style";
import Image from "../../images/map.jpg";
import { MobileNav } from "../MobileNav";
import {} from "./List.style";
import { AppContainer } from "../Container.style";

import * as ROUTES from "../../constants/routes";
import { withAuthorization } from "../Session";

const ListPage = () => (
  <AppContainer>
    <h1>List page</h1>
  </AppContainer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ListPage);
