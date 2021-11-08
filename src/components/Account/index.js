import React from "react";

import Image from "../../images/personone.jpg";
import { withAuthorization } from "../Session";
import { AppContainer } from "../Container.style";
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
} from "./Account.style";

const AccountPage = () => (
  <AppContainer>
    <Header />
  </AppContainer>
);

const Header = () => (
  <ProfileContainer>
    <Profile>
      <ImgWrapper>
        <ProfileImg src={Image} />
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
          <span>__</span>
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

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
