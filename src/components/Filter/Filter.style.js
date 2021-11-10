import styled from "styled-components";

export const OrDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 50px;
  border: 2px solid #43456c;
  color: #43456c;
  text-decoration: none;
  overflow: hidden;
`;
export const Book = styled.div`
  background-color: #43456c;
  width: 140px;
  color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;
export const Rent = styled.div`
  color: #43456c;
  padding: 10px 0;
  width: 140px;
  display: flex;
  justify-content: center;
`;

export const CalDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 10px 0;
  h3 {
    padding: 10px;
  }
`;

export const CarChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 10px 0;
  padding: 5px;
  font-size: 10px;
  h1 {
    padding: 10px;
  }
`;

export const Choice = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
export const Btn = styled.div`
  border: 2px solid #43456c;
  background-color: #43456c;
  color: #fff;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    background-color: #fff;
    color: #43456c;
  }
`;
