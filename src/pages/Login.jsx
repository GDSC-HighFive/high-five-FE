import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate, Link, useParam } from "react-router-dom";
import "../App.css";
import Header from "./Header.js";
import GoogleLoginImg from "../img/GoogleLogin.png";
import axios from "axios";
import GoogleLogin from "react-google-login";

const Login = () => {
  const navigate = useNavigate();

  const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=454750140046-q40o3mkvduuou4ih9peuflk7vid0lji4.apps.googleusercontent.com&
response_type=token&
redirect_uri=https://localhost:3000&
scope=https://www.googleapis.com/auth/userinfo.email`;

  const oAuthHandler = () => {
    window.location.assign(oAuthURL);
  };
  const onClickSocialLogin = () => {
    navigate("/cal");
  };
  const [data, setData] = useState(null);

  const onGoogleSignInSuccess = (res) => {
    console.log(res);
  };
  const onFailure = (error) => {
    console.log(error);
    console.log("실패");
  };

  return (
    <>
      <Header />
      <Container>
        <LoginBox>
          <LoginText>로그인</LoginText>
          {/* <GoogleLogin
            src={GoogleLoginImg}
            onClick={oAuthHandler}
          ></GoogleLogin> */}
          <div>
            <GoogleLogin
              clientId={
                "539285932773-ui7ddmt9b3rstiifb2e7i84km0kmpuq4.apps.googleusercontent.com"
              }
              onSuccess={onGoogleSignInSuccess}
              onFailure={onFailure}
              buttonText="구글로 계속하기"
              cookiePolicy="single_host_origin"
            />
          </div>
        </LoginBox>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 45.5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2c2c2c;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 586px;
  height: 330px;
  border-radius: 78px;
  box-shadow: 1px 1px 30px 5px white;
  background: white;
`;

const LoginText = styled.div`
  position: absolute;
  font-family: GmarketSans-Bold;
  font-size: 2.38em;
  margin-top: -200px;
`;

// const GoogleLogin = styled.img`
//   position: relative;
//   width: 462px;
//   height: 80px;
//   margin-top: 60px;
//   cursor: pointer;
// `;
export default Login;
