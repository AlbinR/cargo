import React, { Component, useState } from "react";
import Calendar from "react-calendar";
import { withRouter, Link } from "react-router-dom";

import { Button } from "../Button.style";
import { AppContainer, Wrapper } from "../Container.style";
import { Book, Rent, OrDiv, CalDiv } from "./Filter.style";
import "./calendar.css";

import * as ROUTES from "../../constants/routes";

import { withAuthorization } from "../Session";

const FilterPage = () => (
  <AppContainer>
    <Wrapper>
      <RentOrRentout />
      <Cal />
      <CarChoice />
    </Wrapper>
  </AppContainer>
);

const RentOrRentout = () => (
  <>
    <OrDiv>
      <Book>Book a car</Book>
      <Link to="/">
        <Rent>Rent your car</Rent>
      </Link>
    </OrDiv>
  </>
);

function Cal() {
  const [value, onChange] = useState(new Date());

  return (
    <CalDiv>
      <p>When do you need a car?</p>
      <Calendar onChange={onChange} value={value} />
    </CalDiv>
  );
}
const CarChoice = () => (
  <div>
    What type of car?
    <div>
      Large storage?
      <div>
        <div>yes</div>no<div></div>
      </div>
    </div>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(FilterPage);
