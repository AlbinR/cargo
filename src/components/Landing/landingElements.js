import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingContent = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;
export const Logo = styled.div`
  margin: 70px 0;
`;
export const Body = styled.div`
  width: 252px;
  margin-bottom: 60px;
  & p {
    font-family: "Comfortaa", cursive;
    font-size: 16px;
    line-height: 150%;
  }
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  margin-top: 100px;
`;
export const ButtonSignUp = styled.button`
  background-color: #43456c;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 50px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 8px 0;
  cursor: pointer;
`;
export const ButtonSignIn = styled.button`
  background-color: #fff;
  width: 100%;
  border: solid 2px #43456c;
  border-radius: 50px;
  color: #43456c;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 8px 0;
  cursor: pointer;
`;
