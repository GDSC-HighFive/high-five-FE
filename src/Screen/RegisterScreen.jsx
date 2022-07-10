import '../App.css';
import "antd/dist/antd.min.css";
import Register from '../RegisterForm/Register';
import Header from '../Header/Header';
import axios from "axios";
import {useEffect,useState} from "react";
import styled from "styled-components";
import character1 from "../img/per2.png"
import character2 from "../img/per1.png"

function RegisterScreen() {
    // const [data,setData]=useState([]);

    // useEffect(()=> {axios({
    //     method: "GET",
    //     url: "http://hana-umc.shop:8080/list",
    //     headers: {
    //         withCredentials: true,
    //         "Access-Control-Allow-Origin": "http://localhost:3000",
    //         'Accept': 'application/json',
    //     }
    // })
    //     .then((response) => setData(response.data))
    // });

    const RegisterScreenBackground = styled.div`
      background: #323232;
      height:800px;
      display:flex;
      justify-content:center;
      align-items:center;
    `;

    const RegisterPadding=styled.div`
          padding-left:15px;
          padding-top:20px;
          color:white;
          font-family: "Gmarket Sans Bold";
    `

    return (
        <div>
        <Header/>
        <RegisterScreenBackground>
            <RegisterPadding>
                <Register/>
            </RegisterPadding>
        </RegisterScreenBackground>
        </div>
    );
}

export default RegisterScreen;