import React from "react";
import {
  LandingContainer,
  LandingWrapper,
  LandingContent,
  Logo,
  Body,
  ButtonDiv,
} from "./landingElements";

import {
  StyledButtonDark,
  StyledButtonLight,
} from "../styledComponents/styledElements";

import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <LandingContainer>
        <LandingWrapper>
          <LandingContent>
            <Logo>
              <h1>Cargo</h1>
            </Logo>
            <Body>
              <p>
                Choose between hundreds of cars in Swedens largest cities. Rent
                cars faster and easier.
              </p>
            </Body>
            <ButtonDiv>
              <Link to={ROUTES.SIGN_UP}>
                <StyledButtonDark>SIGN UP</StyledButtonDark>
              </Link>
              <Link to={ROUTES.SIGN_IN}>
                <StyledButtonLight>LOGIN</StyledButtonLight>
              </Link>
            </ButtonDiv>
          </LandingContent>
        </LandingWrapper>
      </LandingContainer>
    </>
  );
};

export default Landing;
