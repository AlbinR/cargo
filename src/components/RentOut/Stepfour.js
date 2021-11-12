import React from "react";

import { LINK } from "../List/List.style";
import { AppContainer } from "../Container.style";
import {
  BarWrapper,
  TitleContainer,
  Title,
  ButtonContainer,
  Btn,
  ChoosePriceContainer,
} from "./RentOut.Style";
import { SmallNav } from "../Account";

import * as ROUTES from "../../constants/routes";
import { withAuthorization } from "../Session";

const RentOutPageStepFour = () => (
  <AppContainer>
    <SmallNav />
    <ProgressBar />
    <TitleBox />
    <ChoosePrice />
    <ButtonBox />
  </AppContainer>
);

const ProgressBar = () => (
  <BarWrapper>
    <svg
      width="225"
      height="16"
      viewBox="0 0 225 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="7.5" r="7.5" fill="#43456C" />
      <line x1="15" y1="7.5" x2="35" y2="7.5" stroke="black" />
      <circle cx="42.5" cy="7.5" r="7.5" fill="#43456C" />
      <line x1="50" y1="7.5" x2="70" y2="7.5" stroke="black" />
      <circle cx="77.5" cy="7.5" r="7.5" fill="#43456C" />
      <line x1="85" y1="7.5" x2="105" y2="7.5" stroke="black" />
      <circle cx="112.5" cy="7.5" r="7.5" fill="#43456C" />
      <line x1="120" y1="7.5" x2="140" y2="7.5" stroke="black" />
      <circle cx="147.5" cy="7.5" r="7.5" fill="#C4C4C4" />
      <line x1="155" y1="7.5" x2="175" y2="7.5" stroke="black" />
      <circle cx="182.5" cy="7.5" r="7.5" fill="#C4C4C4" />
      <line x1="190" y1="7.5" x2="210" y2="7.5" stroke="black" />
      <circle cx="217.5" cy="7.5" r="7.5" fill="#C4C4C4" />
    </svg>
  </BarWrapper>
);

const TitleBox = () => (
  <TitleContainer>
    <Title>
      <p>Choose price</p>
    </Title>
  </TitleContainer>
);

const ChoosePrice = () => (
  <ChoosePriceContainer>
    <p>Recomended daily price for your car is $35.00</p>
    <p>Set your daily price</p>
    <input type="text" placeholder="$"></input>
  </ChoosePriceContainer>
);

const ButtonBox = () => (
  <ButtonContainer>
    <LINK to={ROUTES.RENTOUTSTEPFIVE}>
      <Btn>Next</Btn>
    </LINK>
  </ButtonContainer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(RentOutPageStepFour);
