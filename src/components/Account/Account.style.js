import styled from "styled-components";
import { BsStarFill, BsThreeDotsVertical, BsCircleFill } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Profile = styled.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div`
  width: 75px;
  height: 75px;
  overflow: hidden;
  border-radius: 15px;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Name = styled.div`
  font-size: 20px;
`;
export const Ratings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Star = styled(BsStarFill)`
  color: #cca747;
  font-size: 13px;
  padding-right: 2px;
`;

export const Number = styled.div`
  font-size: 14px;
  color: #696969;
`;
export const Tag = styled.div`
  font-size: 12px;
  color: #696969;
  padding: 2px;
`;

export const SPAN = styled.span`
  color: lightgray;
`;

export const SNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const BackIcon = styled(IoMdArrowBack)`
  font-size: 25px;
  margin: 15px;
`;

export const OptionsIcon = styled(BsThreeDotsVertical)`
  font-size: 20px;
  margin: 15px;
`;

// UserVehicles

export const UVehiclesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;

export const AddVBtn = styled.button`
  margin: 15px 0;
  border-radius: 50px;
  width: 140px;
  height: 34px;
  border: 1px solid #43456c;
  color: #fff;
  background-color: #43456c;
  font-size: 16px;
`;

//Car Card

export const CardContainer = styled.div`
  width: 340px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
  border-radius: 20px;
  overflow: hidden;
  margin: 10px 0;
`;
export const CarImgWrapper = styled.div`
  width: 130px;
`;
export const CarImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  background-color: #ededf1;
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 66.6%;
  margin: 0 15px 0 12px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CarName = styled.div`
  font-size: 14px;
`;

export const Year = styled.div`
  color: #696969;
  font-size: 14px;
`;
export const Availability = styled.div`
  font-size: 10px;
`;
export const Dot = styled(BsCircleFill)`
  color: #41d90c;
  font-size: 10px;
  margin-right: 3px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const Btn = styled.button`
  margin: 0 10px 0 0;
  border-radius: 20px;
  padding: 5px 15px;
  border: 1px solid #43456c;
  color: #fff;
  background-color: #43456c;
  font-size: 10px;
`;

//AboutSection

export const AboutContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 10px 0;
`;
export const AboutText = styled.div`
  font-size: 11px;
  width: 270px;
  margin: 10px 0;
  line-height: 1.5;
`;

//Review Section

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Toggle = styled.div`
  width: 290px;
  height: 45px;
  border-radius: 50px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
  font-size: 13px;
`;
export const Alt = styled.div`
  width: 135px;
  display: flex;
  justify-content: center;
`;
export const SelAlt = styled.div`
  width: 135px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

//ReviewComment

export const CommentContainer = styled.div`
  width: 290px;
  height: 80px;
  margin: 5px 0 5px 0;
`;
export const CommentImgWrapper = styled.div`
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 100%;
`;
export const CommentImg = styled.img``;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ComHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const CommentName = styled.div`
  font-size: 7px;
  margin-left: -10px;
`;
export const ComRating = styled.div`
  font-size: 5px;
`;
export const ComDate = styled.div`
  color: #696969;
  font-size: 12px;
`;
export const ComText = styled.div`
  font-size: 11px;
  padding-left: 44px;
  height: 30px;
`;
