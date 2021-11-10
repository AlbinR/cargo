import styled from "styled-components";

export const BarWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  background-color: #f8f8f8;
  height: 130px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    border-bottom: 1px solid black;
    width: fit-content;
  }
`;

export const Title = styled.div`
  width: 310px;
`;

export const RegContainer = styled.div`
  height: 300px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 310px;
    margin-bottom: 10px;
  }
  input {
    background-color: #f6f6f6;
    border-radius: 50px;
    border: 2px solid #e8e8e8;
    padding-left: 20px;
    height: 50px;
    width: 340px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  Button {
    width: 230px;
    height: 50px;
  }
`;
