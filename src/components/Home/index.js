import React, { Component, useState } from "react";
import { withRouter, Link } from "react-router-dom";

import { Input } from "../Input.style";
import Image from "../../images/map.jpg";
import { MobileNav } from "../MobileNav";
import {
  HomeBg,
  MapBg,
  MapOrList,
  MapBtn,
  ListBtn,
  HomeContent,
  InputContainer,
} from "./Home.style";
import { AppContainer } from "../Container.style";

import * as ROUTES from "../../constants/routes";
import { withAuthorization } from "../Session";

const HomePage = () => (
  <AppContainer>
    <HomeBg>
      <MapBg src={Image} alt="map" type="image/jpg" />
    </HomeBg>
    <HomeContent>
      <MapOrList>
        <MapBtn>Map</MapBtn>
        <ListBtn>List</ListBtn>
      </MapOrList>
      <InputContainer>
        <Input placeholder="Search" />
      </InputContainer>
    </HomeContent>
    <MobileNav />
  </AppContainer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
