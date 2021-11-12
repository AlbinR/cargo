import React from "react";

import Persontwo from "../../images/persontwo.jpg";
import { withAuthorization } from "../Session";
import { AppContainer } from "../Container.style";
import {
  HeadContainer,
  UserImgWrapper,
  UserImg,
  InfoBox,
  Name,
  Ratings,
  Rating,
  Number,
  Star,
  Tag,
  SPAN,
  ButtonContainer,
  Button,
} from "./UserProfile.style";
import { SmallNav, AboutSection, ReviewSection } from "../Account";

const UserPage = () => (
  <AppContainer>
    <SmallNav />

    <Header />
    <AboutSection />
    <ReviewSection />
  </AppContainer>
);

const Header = () => (
  <HeadContainer>
    <UserImgWrapper>
      <UserImg src={Persontwo} />
    </UserImgWrapper>
    <InfoBox>
      <Name>Per Persson</Name>
      <Ratings>
        <Rating>
          <Number>
            <Star />
            4.8
          </Number>
          <Tag>renter</Tag>
        </Rating>
        <SPAN>__</SPAN>
        <Rating>
          <Number>
            <Star />
            3.1
          </Number>
          <Tag>owner</Tag>
        </Rating>
      </Ratings>
    </InfoBox>
    <ButtonContainer>
      <Button>Send a Message</Button>
    </ButtonContainer>
  </HeadContainer>
);

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(UserPage);
