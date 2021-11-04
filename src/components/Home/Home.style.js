import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const MapBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
export const HomeContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const MapOrList = styled.div`
  width: 270px;
  height: 38px;
  border: 1px solid #43456c;
  background-color: #f1f1f1;
  top: 30px;
  z-index: 3;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 50px;
  font-size: 16px;
`;

export const MapBtn = styled.div`
  border-radius: 50px;
  background-color: #fff;
  padding: 7px 48px;
  margin: 0 3px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ListBtn = styled.div`
  padding: 0 48px;
  text-decoration: none;
`;

export const InputContainer = styled.div`
  position: absolute;
  width: 95vw;
  bottom: 90px;
`;
