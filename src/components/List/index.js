import React, { Component, useState } from "react";
import { withRouter, Link } from "react-router-dom";

import {
  ToggleContainer,
  Toggles,
  SelectedAlt,
  Alt,
  Head,
  Title,
  Sort,
  CarListContainer,
  CarPair,
  Car,
  CarImg,
  CarInfo,
  CarText,
  CarName,
  CarOwner,
  CarRating,
  Star,
  StyledHr,
} from "./List.style";
import Image from "../../images/volvo.png";
import { MobileNav } from "../MobileNav";
import { AppContainer } from "../Container.style";

import * as ROUTES from "../../constants/routes";
import { withAuthorization } from "../Session";

const ListPage = () => (
  <AppContainer>
    <Header />
    <CarList />
    <MobileNav />
  </AppContainer>
);

const Header = () => (
  <Head>
    <Title>Available Cars</Title>
    <StyledHr />
    <Sort>Sort</Sort>
    <SortingToggles />
  </Head>
);

const SortingToggles = () => (
  <ToggleContainer>
    <Toggles>
      <Alt>Rating</Alt>
      <SelectedAlt>Newest</SelectedAlt>
      <Alt>Closest</Alt>
    </Toggles>
    <Toggles>
      <Alt>Map</Alt>
      <SelectedAlt>List</SelectedAlt>
    </Toggles>
  </ToggleContainer>
);

const CarList = () => (
  <CarListContainer>
    <CarPair>
      <CarItem />
      <CarItem />
    </CarPair>
    <CarPair>
      <CarItem />
      <CarItem />
    </CarPair>
    <CarPair>
      <CarItem />
      <CarItem />
    </CarPair>
    <CarPair>
      <CarItem />
      <CarItem />
    </CarPair>
    <CarPair>
      <CarItem />
      <CarItem />
    </CarPair>
    <CarPair>
      <CarItem />
      <CarItem />
    </CarPair>
    <CarPair>
      <CarItem />
      <CarItem />
    </CarPair>
    <CarPair>
      <CarItem />
      <CarItem />
    </CarPair>
  </CarListContainer>
);

const CarItem = () => (
  <Car>
    <CarImg src={Image} />
    <CarInfo>
      <CarText>
        <CarName>Volvo XC60</CarName>
        <CarOwner>Owner: Per Persson</CarOwner>
      </CarText>
      <CarRating>
        <Star />
        4.9
      </CarRating>
    </CarInfo>
  </Car>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ListPage);
