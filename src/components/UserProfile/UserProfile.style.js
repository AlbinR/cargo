import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";

export const HeadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const UserImgWrapper = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 25px;
`;
export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 220px;
`;
export const Name = styled.div`
  font-size: 20px;
  padding-top: 15px;
`;
export const Ratings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
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
  padding-right: 3px;
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
  margin: 0 20px;
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  width: 190px;
  height: 40px;
  border-radius: 50px;
  border: none;
  color: white;
  background-color: #43456c;
  font-size: 16px;
`;
