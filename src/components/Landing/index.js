import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../Button.style";
import { AppContainer, Wrapper, Box } from "../Container.style";
import { Logo, Description } from "./Landing.style";

import * as ROUTES from "../../constants/routes";

const Landing = () => (
  <AppContainer>
    <Wrapper>
      <Box>
        <Logo>Cargo</Logo>
        <Description>
          Choose between hundreds of cars in Swedens largest cities. Rent cars
          faster and easier.
        </Description>
        <Link to={ROUTES.SIGN_UP}>
          <Button backgroundColor="#43456C" textColor="#fff">
            SIGN UP
          </Button>
        </Link>
        <Link to={ROUTES.SIGN_IN}>
          <Button backgroundColor="#fff" textColor="#43456C">
            LOGIN
          </Button>
        </Link>
      </Box>
    </Wrapper>
  </AppContainer>
);

export default Landing;
