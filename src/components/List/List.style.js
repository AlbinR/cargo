import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  width: 100vw;
`;

export const Toggles = styled.div`
  width: 290px;
  height: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f1f1f1;
  border-radius: 50px;
  margin: 5px;
`;

export const Alt = styled.div``;

export const SelectedAlt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 35px;
  width: 90px;
  border-radius: 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex-direction: column;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const StyledHr = styled.div`
  height: 1px;
  width: 90px;
  border-top: 1px solid black;
  margin: 2px 0 10px 0;
`;

export const Sort = styled.p`
  font-size: 14px;
`;

//Carlist
export const CarListContainer = styled.div`
  width: 100%;
  margin-bottom: 88px;
`;
export const CarPair = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

//CarItem
export const Car = styled.div`
  height: 140px;
  width: 170px;
  background-color: #f1f1f1;
  margin: 5px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
export const CarImg = styled.img`
  width: 100%;
  height: 100px;
  -o-object-fit: contain;
  object-fit: contain;
`;
export const CarInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  background-color: #f1f1f1;
`;
export const CarText = styled.div``;

export const CarName = styled.p`
  font-size: 14px;
`;
export const CarOwner = styled.p`
  font-size: 12px;
`;
export const CarRating = styled.div`
  font-size: 14px;
  color: #696969;
`;
export const Star = styled(BsStarFill)`
  color: #cca747;
`;
