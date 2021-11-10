import React from "react";

import Persontwo from "../../images/persontwo.jpg";
import Carimage from "../../images/volvobig.jpg";
import { LINK, Star } from "../List/List.style";
import { Button } from "../Button.style";
import { AppContainer } from "../Container.style";

import {
  ImgContainer,
  CarImg,
  ImgWrapper,
  CarInfoContainer,
  Title,
  UserInfo,
  Rating,
  UserImgWrapper,
  UserImg,
  CarTextContainer,
  ButtonContainer,
} from "./CarInfo.style";

import * as ROUTES from "../../constants/routes";
import { withAuthorization } from "../Session";

const CarInfoPage = () => (
  <AppContainer>
    <ImgSection />
    <CarInfoSection />
    <CarTextSection />
    <ButtonSection />
  </AppContainer>
);

const ImgSection = () => (
  <ImgContainer>
    <ImgWrapper>
      <CarImg src={Carimage} />
    </ImgWrapper>
    <svg
      width="82"
      height="10"
      viewBox="0 0 82 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="36" width="10" height="10" rx="5" fill="#C4C4C4" />
      <rect x="54" width="10" height="10" rx="5" fill="#C4C4C4" />
      <rect x="72" width="10" height="10" rx="5" fill="#C4C4C4" />
      <path
        d="M18 5C18 2.23858 20.2386 0 23 0C25.7614 0 28 2.23858 28 5C28 7.76142 25.7614 10 23 10C20.2386 10 18 7.76142 18 5Z"
        fill="#C4C4C4"
      />
      <path
        d="M0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5Z"
        fill="#6A6A6A"
      />
    </svg>
  </ImgContainer>
);

const CarInfoSection = () => (
  <CarInfoContainer>
    <Title>
      <h1>Volov XC60</h1>
      <p>2019</p>
    </Title>
    <UserInfo>
      <p>owner</p>
      <h1>Per Persson</h1>
      <Rating>
        <p>
          <Star />
          4.6
        </p>
      </Rating>
      <UserImgWrapper>
        <UserImg src={Persontwo} />
      </UserImgWrapper>
    </UserInfo>
  </CarInfoContainer>
);

const CarTextSection = () => (
  <CarTextContainer>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum
      velit sed felis egestas, ac mollis nibh pharetra. Sed laoreet nulla sem, a
      fringilla purus iaculis ut. Cras vulputate tempor pellentesque. Cras ut
      ornare nisi, id interdum sem.
    </p>
  </CarTextContainer>
);

const ButtonSection = () => (
  <ButtonContainer>
    <LINK to={ROUTES.HOME}>
      <Button backgroundColor="#43456C" textColor="#fff">
        BOOK NOW
      </Button>
    </LINK>
  </ButtonContainer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(CarInfoPage);
