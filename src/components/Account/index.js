import React from "react";

import Personone from "../../images/personone.jpg";
import Persontwo from "../../images/persontwo.jpg";
import CarImage from "../../images/volvo.png";
import { withAuthorization } from "../Session";
import { AppContainer } from "../Container.style";
import { LINK } from "../List/List.style";

import {
  ProfileContainer,
  Profile,
  ProfileImg,
  InfoBox,
  Name,
  Ratings,
  Rating,
  Number,
  Tag,
  Star,
  ImgWrapper,
  SPAN,
  SNavContainer,
  BackIcon,
  OptionsIcon,
  CardContainer,
  CarImg,
  CardInfo,
  Title,
  Year,
  Availability,
  Buttons,
  Btn,
  UVehiclesContainer,
  AddVBtn,
  CarImgWrapper,
  CarName,
  Dot,
  AboutContainer,
  AboutText,
  ReviewContainer,
  Toggle,
  Alt,
  SelAlt,
  CommentContainer,
  CommentImgWrapper,
  CommentImg,
  CommentInfo,
  CommentName,
  ComRating,
  ComDate,
  ComText,
  ComHeading,
} from "./Account.style";
import * as ROUTES from "../../constants/routes";

const AccountPage = () => (
  <AppContainer>
    <SmallNav />
    <Header />
    <UserVehicles />
    <AboutSection />
    <ReviewSection />
  </AppContainer>
);

export const SmallNav = () => (
  <SNavContainer>
    <LINK to={ROUTES.HOME}>
      <BackIcon />
    </LINK>
    <OptionsIcon />
  </SNavContainer>
);

const Header = () => (
  <ProfileContainer>
    <Profile>
      <ImgWrapper>
        <ProfileImg src={Personone} />
      </ImgWrapper>
      <InfoBox>
        <Name>Per Persson</Name>
        <Ratings>
          <Rating>
            <Number>
              <Star />
              2.5
            </Number>
            <Tag>renter</Tag>
          </Rating>
          <SPAN>__</SPAN>
          <Rating>
            <Number>
              <Star />
              2.5
            </Number>
            <Tag>owner</Tag>
          </Rating>
        </Ratings>
      </InfoBox>
    </Profile>
  </ProfileContainer>
);

const UserVehicles = () => (
  <UVehiclesContainer>
    <LINK to={ROUTES.RENTOUT}>
      <AddVBtn>Add Vehicle</AddVBtn>
    </LINK>
    <p>Owned cars</p>
    <VehicleCard />
    <p>Rented cars</p>
    <VehicleCard />
  </UVehiclesContainer>
);

const VehicleCard = () => (
  <CardContainer>
    <CarImgWrapper>
      <CarImg src={CarImage} />
    </CarImgWrapper>
    <CardInfo>
      <Title>
        <CarName>Volvo XC60</CarName> <Year>2021</Year>
      </Title>
      <Availability>
        <Dot />
        Available to rent out
      </Availability>
      <Buttons>
        <Btn>Availibility</Btn>
        <Btn>Pricing</Btn>
      </Buttons>
    </CardInfo>
  </CardContainer>
);

export const AboutSection = () => (
  <AboutContainer>
    <p>About me</p>
    <AboutText>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum
        velit sed felis egestas, ac mollis nibh pharetra. Sed laoreet nulla sem,
        a fringilla purus iaculis ut.
      </p>
    </AboutText>
  </AboutContainer>
);

export const ReviewSection = () => (
  <ReviewContainer>
    <p>Reviews</p>
    <Toggle>
      <SelAlt>as owner</SelAlt>
      <Alt>as renter</Alt>
    </Toggle>
    <ReviewComment />
    <ReviewComment />
    <ReviewComment />
  </ReviewContainer>
);

const ReviewComment = () => (
  <CommentContainer>
    <CommentInfo>
      <ComHeading>
        <CommentImgWrapper>
          <CommentImg src={Persontwo} />
        </CommentImgWrapper>
        <CommentName>
          <h1>Ola Svensson</h1>
        </CommentName>
        <ComRating>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </ComRating>
        <ComDate>10 Aug</ComDate>
      </ComHeading>
      <ComText>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          rutrum velit sed felis egestas
        </p>
      </ComText>
    </CommentInfo>
  </CommentContainer>
);

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
