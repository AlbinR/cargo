import React, { Component, useState } from "react";
import Calendar from "react-calendar";
import { withRouter, Link } from "react-router-dom";

import { Button } from "../Button.style";
import { AppContainer, Wrapper, Box } from "../Container.style";
import {
  Book,
  Rent,
  OrDiv,
  CalDiv,
  CarChoiceContainer,
  Choice,
  BtnWrap,
  Btn,
} from "./Filter.style";
import "./calendar.css";

import * as ROUTES from "../../constants/routes";

import { withAuthorization } from "../Session";

const FilterPage = () => (
  <AppContainer>
    <Wrapper>
      <Box>
        <RentOrRentout />
        <Cal />
        <CarChoice />
        <Link to={ROUTES.HOME}>
          <Button backgroundColor="#43456C" textColor="#fff">
            DONE
          </Button>
        </Link>
      </Box>
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
      <h3>When do you need a car?</h3>
      <Calendar onChange={onChange} value={value} />
    </CalDiv>
  );
}
const CarChoice = () => (
  <CarChoiceContainer>
    <h1>What type of car?</h1>
    <Choice>
      <p>Large storage</p>
      <BtnWrap>
        <Btn>yes</Btn>
        <Btn>no</Btn>
      </BtnWrap>
    </Choice>
    <Choice>
      <p>Amount of seats</p>
      <BtnWrap>
        <Btn>2</Btn>
        <Btn>3</Btn>
        <Btn>5</Btn>
        <Btn>9</Btn>
      </BtnWrap>
    </Choice>
  </CarChoiceContainer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(FilterPage);
