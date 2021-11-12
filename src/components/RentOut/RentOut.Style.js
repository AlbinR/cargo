import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";

export const BarWrapper = styled.div`
  width: 100vw;
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
    padding-bottom: 5px;
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
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  width: 230px;
  height: 50px;
  border-radius: 50px;
  border: none;
  background-color: #43456c;
  color: #fff;
  font-size: 20px;
`;

export const SmallBtn = styled.button`
  width: 140px;
  height: 45px;
  border-radius: 50px;
  border: none;
  background-color: #43456c;
  color: #fff;
  font-size: 20px;
  margin: 10px;
`;

export const FoundCarContainer = styled.div`
  width: 100%;
  height: 300px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CarImageWrapper = styled.div``;

export const CarImageWrapperSmall = styled.div`
  overflow: hidden;
  width: 160px;
  height: 140px;
  border-radius: 30px;
  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const ChoosePriceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  input {
    background-color: #f6f6f6;
    border-radius: 50px;
    border: 2px solid #e8e8e8;
    padding-left: 20px;
    height: 50px;
    width: 300px;
  }
  p {
    width: 300px;
    margin-bottom: 30px;
  }
`;

export const ChooseTimeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 350px;
`;

export const CalDiv = styled.div`
  border: 1px solid black;
  border-radius: 20px;
`;

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 350px;
  p {
    width: 240px;
    padding-bottom: 20px;
  }
`;

export const Icon = styled(BsCheckCircleFill)`
  font-size: 180px;
  color: #43456c;
`;
