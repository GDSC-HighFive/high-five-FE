import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate, Link, useParam } from "react-router-dom";
import "../App.css";
import Header from "./Header.js";
import MainImg1 from "../img/MainImg1.png";
import MainImg2 from "../img/MainImg2.png";
import AddClothButton from "../img/AddClothButton.png";
import Outfit1Img from "../img/Outfit1.png";
import Outfit2Img from "../img/Outfit2.png";
import Outfit3Img from "../img/Outfit3.png";
import Outfit4Img from "../img/Outfit4.png";
import Outfit5Img from "../img/Outfit5.png";
import Outfit6Img from "../img/Outfit6.png";
import Outfit7Img from "../img/Outfit7.png";
import axios from "axios";

const MainPage = () => {
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate("/registerScreen");
  };
  const [isLogin, setIsLogin] = useState(false);
  const isLogins = useState(false);
  const onLogout = () => {
    //로그아웃 처리하기
    navigate("/cal");
  };


  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <Container>
        <BodyContainer>
          <FirstFont>당신의 기분을</FirstFont>
          <SecondFont>날씨에 맞추지 마세요</SecondFont>
          <FirstImg src={MainImg1} />
          <SecondImg src={MainImg2} />
          <ThirdFontHighLight>Dreather</ThirdFontHighLight>
          <ThirdFont>가 당신의 옷에</ThirdFont>
          <FourthFont>날씨를 맞춥니다.</FourthFont>
          <RegisterButton
              src={AddClothButton}
              onClick={onClickLogin}
          ></RegisterButton>}
        </BodyContainer>
        <FootContainer>
          <Line />
          <FooterMainFont>이런 코디 어때요?</FooterMainFont>
          <ScrollContainer>
            <OutfitImg src={Outfit1Img}></OutfitImg>
            <OutfitImg src={Outfit2Img}></OutfitImg>
            <OutfitImg src={Outfit3Img}></OutfitImg>
            <OutfitImg src={Outfit4Img}></OutfitImg>
            <OutfitImg src={Outfit5Img}></OutfitImg>
            <OutfitImg src={Outfit7Img}></OutfitImg>
          </ScrollContainer>
        </FootContainer>
      </Container>
    </>
  );
};
const OutfitImg = styled.img`
  // width: 24.06em;
  width: 30.06em;
  height: 34.63em;
  padding: 20px;
`;
const Container = styled.div`
  width: 100%;
  height: 135.2em;
  background-color: #2c2c2c;
`;
const BodyContainer = styled.div`
  width: 100%;
  height: 85em;
  display: flex;
  justify-content: space-between;
`;
const FootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ScrollContainer = styled.div`
  margin-top: 43px;
  width: 100%;
  padding: 20px;
  overflow: scroll;
  color: #112031;

  /* 가로 스크롤 */
  overflow: auto;
  white-space: nowrap;
`;
const Line = styled.div`
  height: 3px;
  width: 35.5em;
  background-color: white;
`;
const FirstFont = styled.div`
  position: absolute;
  font-family: GmarketSans-Bold;
  font-size: 60px;
  color: white;
  margin-top: 191px;
  margin-left: 68px;
`;
const SecondFont = styled.div`
  font-family: GmarketSans-Bold;
  font-size: 60px;
  color: white;
  margin-top: 267px;
  margin-left: 167px;
`;
const ThirdFontHighLight = styled.div`
  position: absolute;
  font-family: GmarketSans-Bold;
  font-size: 60px;
  font-color: #2c2c2c;
  background-color: white;
  margin-top: 755px;
  margin-left: 930px;
`;
const ThirdFont = styled.div`
  position: absolute;
  font-family: GmarketSans-Bold;
  font-size: 60px;
  color: white;
  margin-top: 755px;
  margin-left: 1236px;
`;
const FourthFont = styled.div`
  font-family: GmarketSans-Bold;
  position: absolute;
  font-size: 60px;
  color: white;
  margin-top: 840px;
  margin-left: 1188px;
`;
const FirstImg = styled.img`
  width: 31.88em;
  height: 36.94em;
  margin-top: 67px;
  margin-right: -300px;
`;
const SecondImg = styled.img`
  position: absolute;
  width: 31.88em;
  height: 42.88em;
  margin-top: 452px;
  margin-left: 100px;
`;

const RegisterButton = styled.img`
  position: absolute;
  width: 40.88em;
  height: 5.14em;
  margin-top: 967px;
  right: 90px;
  cursor: pointer;
`;

const FooterMainFont = styled.div`
  font-family: GmarketSans-Bold;
  font-size: 3.13em;
  color: white;
  margin-top: 59px;
`;

const SmallButton = styled.div`
  font-family: GmarketSans-Medium;
  font-size: 1.56em;
  padding: 0.5rem;
  margin-right: 5rem;
  cursor: pointer;
`;

export default MainPage;
