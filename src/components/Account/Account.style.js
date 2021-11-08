import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Profile = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 15px;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
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
`;

export const Number = styled.div`
  font-size: 16px;
  color: #696969;
`;
export const Tag = styled.div`
  font-size: 12px;
  color: #696969;
  padding: 2px;
`;
