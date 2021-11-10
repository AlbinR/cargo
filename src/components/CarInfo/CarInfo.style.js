import styled from "styled-components";

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  width: 377px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const CarImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
`;

export const CarInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  min-width: 377px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  p {
    color: #7c7c7c;
  }
`;
export const UserInfo = styled.div`
  min-width: 377px;
  display: flex;
  justify-content: left;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  h1 {
    font-size: 16px;
    margin: 0 10px;
  }
  p {
    color: #696969;
    font-size: 16px;
  }
`;
export const Rating = styled.div`
  p {
    font-size: 15px;
  }
`;

export const UserImgWrapper = styled.div`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 15px;
  margin-left: 5px;
`;

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const CarTextContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 330px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  Button {
    width: 250px;
    height: 50px;
  }
`;
