import React from "react";

import FordGrassImg from "../../images/fordongrasspic.jpg";
import { LINK } from "../List/List.style";
import { AppContainer } from "../Container.style";
import {
  BarWrapper,
  TitleContainer,
  Title,
  ButtonContainer,
  FoundCarContainer,
  Btn,
  CarImageWrapperSmall,
} from "./RentOut.Style";
import { SmallNav } from "../Account";

import * as ROUTES from "../../constants/routes";
import { withAuthorization } from "../Session";

const RentOutPageStepThree = () => (
  <AppContainer>
    <SmallNav />
    <ProgressBar />
    <TitleBox />
    <FoundCar />

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
      <circle cx="112.5" cy="7.5" r="7.5" fill="#C4C4C4" />
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
      <p>Upload images</p>
    </Title>
  </TitleContainer>
);

const FoundCar = () => (
  <FoundCarContainer>
    <CarImageWrapperSmall>
      <img alt="" src={FordGrassImg} />
    </CarImageWrapperSmall>
  </FoundCarContainer>
);

const ButtonBox = () => (
  <ButtonContainer>
    <LINK to={ROUTES.RENTOUTSTEPFOUR}>
      <Btn>Next</Btn>
    </LINK>
  </ButtonContainer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(RentOutPageStepThree);
