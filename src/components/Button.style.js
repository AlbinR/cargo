import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";

export const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  border: 2px solid #43456c;
  border-radius: 50px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  text-align: center;
  align-items: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 10px 0;
  cursor: pointer;
`;

export const BackButton = styled(IoMdArrowBack)`
  color: #000;
  font-size: 20px;
`;
