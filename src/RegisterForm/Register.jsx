import React, { useState } from 'react';
import style from './Register.module.css';
import UploadImg from './UploadImg';
import 'antd/dist/antd.css';
import { PlusOutlined, DownOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Typography, Dropdown, Menu  } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import hatImg from '../img/hat.png';
import clothesImg from '../img/shirts.png';
import pantsImg from '../img/pants.png';
import shoesImg from '../img/shoes.png';
import character1 from "../img/per2.png"
import character2 from "../img/per1.png"


const { Option } = Select;
let index = 0;

function Register() {
    const navigate = useNavigate();
    const [clotheLenthOne, setClotheLenthOne] = useState("");
    const [checkFebrickOne, setCheckFebrickOne] = useState("");
    const [checkThickOne, setCheckThickOne] = useState("");
    const [clotheLenthTwo, setClotheLenthTwo] = useState("");
    const [checkFebrickTwo, setCheckFebrickTwo] = useState("");
    const [checkThickTwo, setCheckThickTwo] = useState("");
    const [clotheLenthThree, setClotheLenthThree] = useState("");
    const [checkFebrickThree, setCheckFebrickThree] = useState("");
    const [checkThickThree, setCheckThickThree] = useState("");
    const [hat, setHat] = useState("");
    const [shoe, setShoe] = useState("");
    const [clotheLenthBottom, setClotheLenthBottom] = useState("");
    const [checkFebrickBottom, setCheckFebrickBottom] = useState("");
    const [checkThickBottom, setCheckThickBottom] = useState("");

    const [inputValue, setInputValue] = useState("");

    const onChangeHat = (valueObj) => {
        let value = valueObj.value;
        setHat(value);
    }

    const onChangeLenthOne = (valueObj) => {
        let value = valueObj.value;
        setClotheLenthOne(value);
    }

    const onChangeFebrickOne = (valueObj) => {
        let value = valueObj.value;
        setCheckFebrickOne(value);
    }

    const onChangeThickOne = (valueObj) => {
        let value = valueObj.value;
        setCheckThickOne(value);
    }
    const onChangeLenthTwo = (valueObj) => {
        let value = valueObj.value;
        setClotheLenthTwo(value);
    }

    const onChangeFebrickTwo = (valueObj) => {
        let value = valueObj.value;
        setCheckFebrickTwo(value);
    }

    const onChangeThickTwo = (valueObj) => {
        let value = valueObj.value;
        setCheckThickTwo(value);
    }
    const onChangeLenthThree= (valueObj) => {
        let value = valueObj.value;
        setClotheLenthThree(value);
    }

    const onChangeFebrickThree = (valueObj) => {
        let value = valueObj.value;
        setCheckFebrickThree(value);
    }

    const onChangeThickThree = (valueObj) => {
        let value = valueObj.value;
        setCheckThickThree(value);
    }
    const onChangeLenthBottom= (valueObj) => {
        let value = valueObj.value;
        setClotheLenthBottom(value);
    }

    const onChangeFebrickBottom = (valueObj) => {
        let value = valueObj.value;
        setCheckFebrickBottom(value);
    }

    const onChangeThickBottom = (valueObj) => {
        let value = valueObj.value;
        setCheckThickBottom(value);
    }
    const onChangeShoe = (valueObj) => {
        let value = valueObj.value;
        setShoe(value);
    }

    const onChangeInputValue=(valueObj)=>{
        let value = valueObj.value;
        setInputValue(value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        window.localStorage.setItem('cody', inputValue);
        console.log("??????", hat, "??????1", clotheLenthOne, checkFebrickOne, checkThickOne, "??????2", clotheLenthTwo, checkFebrickTwo, checkThickTwo,
            "??????3", clotheLenthThree, checkFebrickThree, checkThickThree, "??????", clotheLenthBottom, checkFebrickBottom, checkThickBottom,
            "??????", shoe, localStorage.getItem('cody'))

        await axios.post("http://localhost:8080/weather/recommend", {
            set: [
                {
                    category: "??????1",
                    length: "???",
                    fabric: "???",
                    thick: "?????????"
                },
                {
                    category: "??????2",
                    length: "???",
                    fabric: "???",
                    thick: "?????????"
                },
                {
                    category: "??????3",
                    length: "???",
                    fabric: "???",
                    thick: "?????????"
                },
                {
                    category: "??????",
                    length: "???",
                    fabric: "???",
                    thick: "?????????"
                },
            ]
        })
            .then(function (response) {
                console.log(response.data)
            }).catch(function (error) {
                console.log(error)
            }).then(function () {
                // ?????? ??????
            });
        navigate("/list")
    }

    const HeaderMainText=styled.h1`
        color: white;
        text-shadow: 1px 1px 7px rgba(0,0,0,1);
    `

    const InfoBox=styled.div`
    
    `

    const ContentSpanText=styled.h4`
        color:white;
        font-size:1.5rem;
    `
    return (
        <div>
        <div className={style.container}>
            <form onSubmit={onSubmit}>
                <div className={style.infoWrap}>
                    <InfoBox>
                        <img src={character2} style={{width:"350px" ,position:"relative", top:"80px", left:"-50px"}}/>
                    </InfoBox>
                    <InfoBox>
                        <HeaderMainText><img src={clothesImg} style={{width:"40px"}}/>????????? ??????</HeaderMainText>
                        <div className={style.registerBox}>
                            <p>
                                <ContentSpanText>?????? ??????</ContentSpanText>
                                <Select
                                    labelInValue
                                    defaultValue={{ value: "0", label: "?????? ??????" }}
                                    bordered={true}
                                    dropdownStyle={{
                                        borderRadius:"20px",
                                    }}
                                    style={{
                                        marginLeft: "5px",
                                        width: "120px",
                                        marginBottom:"60px",
                                    }}
                                    onChange={onChangeLenthOne}
                                >
                                    <Option value="??????">??????</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="??????">??????</Option>
                                </Select>
                            </p>
                            <p>
                                <ContentSpanText>?????? ??????</ContentSpanText>
                                <Select
                                    labelInValue
                                    defaultValue={{ value: "1", label: "??????" }}
                                    style={{
                                        marginLeft: "20px",
                                        width: "180px",
                                        marginBottom:"60px",
                                    }}
                                    onChange={onChangeFebrickOne}
                                >
                                    <Option value="???">???</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="???">???</Option>
                                    <Option value="??????????????????">??????????????????</Option>
                                    <Option value="?????????">?????????</Option>
                                    <Option value="?????????">?????????</Option>
                                    <Option value="?????????">?????????</Option>
                                </Select>
                            </p>
                            <p>
                                <ContentSpanText>?????? ??? ??????</ContentSpanText>
                                <Select
                                    labelInValue
                                    defaultValue={{ value: "2", label: "??? ??????" }}
                                    style={{
                                        marginLeft: "20px",
                                        width: "180px",
                                        marginBottom:"60px",
                                    }}
                                    onChange={onChangeThickOne}
                                >
                                    <Option value="????????????">?????? ??????</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="?????????">?????????</Option>
                                    <Option value="???????????????">?????? ?????????</Option>
                                </Select>
                            </p>
                        </div>
                    </InfoBox>
                    <InfoBox>
                        <HeaderMainText><img src={clothesImg} style={{width:"40px"}}/>????????? ??????</HeaderMainText>
                        <div className={style.registerBox}>
                            <p>
                                <ContentSpanText>?????? ??? ??????</ContentSpanText>
                                <Select
                                    labelInValue
                                    defaultValue={{ value: "0", label: "??? ??????" }}
                                    style={{
                                        marginLeft: "5px",
                                        width: "120px",
                                        marginBottom:"60px",
                                    }}
                                    onChange={onChangeLenthTwo}
                                >
                                    <Option value="??????">??????</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="??????">??????</Option>
                                </Select>
                            </p>
                            <p>
                                <ContentSpanText>?????? ??????</ContentSpanText>
                                <Select
                                    labelInValue
                                    defaultValue={{ value: "1", label: "??????" }}
                                    style={{
                                        marginLeft: "20px",
                                        width: "180px",
                                        marginBottom:"60px",
                                    }}
                                    onChange={onChangeFebrickTwo}
                                >
                                    <Option value="???">???</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="???">???</Option>
                                    <Option value="??????????????????">??????????????????</Option>
                                    <Option value="?????????">?????????</Option>
                                    <Option value="?????????">?????????</Option>
                                    <Option value="?????????">?????????</Option>
                                </Select>
                            </p>
                            <p>
                                <ContentSpanText>?????? ??? ??????</ContentSpanText>
                                <Select
                                    labelInValue
                                    defaultValue={{ value: "2", label: "??? ??????" }}
                                    style={{
                                        marginLeft: "20px",
                                        width: "180px",
                                        marginBottom:"60px",
                                    }}
                                    onChange={onChangeThickTwo}
                                >
                                    <Option value="????????????">?????? ??????</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="?????????">?????????</Option>
                                    <Option value="???????????????">?????? ?????????</Option>
                                </Select>
                            </p>
                        </div>
                    </InfoBox>
                    <InfoBox>
                        <HeaderMainText><img src={clothesImg} style={{width:"40px"}}/>????????? ??????</HeaderMainText>
                        <div className={style.registerBox}>
                            <p>
                                <ContentSpanText>?????? ??? ??????</ContentSpanText>
                                <Select
                                    labelInValue
                                    defaultValue={{ value: "0", label: "??? ??????" }}
                                    style={{
                                        marginLeft: "5px",
                                        width: "120px",
                                        marginBottom:"60px",
                                    }}
                                    onChange={onChangeLenthThree}
                                >
                                    <Option value="??????">??????</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="??????">??????</Option>
                                </Select>
                            </p>
                            <p>
                                <ContentSpanText>?????? ??????</ContentSpanText>
                                <Select
                                    labelInValue
                                    defaultValue={{ value: "1", label: "??????" }}
                                    style={{
                                        marginLeft: "20px",
                                        width: "180px",
                                        marginBottom:"60px",
                                    }}
                                    onChange={onChangeFebrickThree}
                                >
                                    <Option value="???">???</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="???">???</Option>
                                    <Option value="??????????????????">??????????????????</Option>
                                    <Option value="?????????">?????????</Option>
                                    <Option value="?????????">?????????</Option>
                                    <Option value="?????????">?????????</Option>
                                </Select>
                            </p>
                            <p>
                                <ContentSpanText>?????? ??? ??????</ContentSpanText>
                                <Select
                                    labelInValue
                                    defaultValue={{ value: "2", label: "??? ??????" }}
                                    style={{
                                        marginLeft: "20px",
                                        width: "180px",
                                        marginBottom:"60px",
                                    }}
                                    onChange={onChangeThickThree}
                                >
                                    <Option value="????????????">?????? ??????</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="?????????">?????????</Option>
                                    <Option value="???????????????">?????? ?????????</Option>
                                </Select>
                            </p>
                        </div>
                    </InfoBox>
                    <InfoBox>
                        <HeaderMainText><img src={pantsImg} style={{width:"40px"}}/>??????</HeaderMainText>
                        <div className={style.registerBox}>
                            <p>
                                <ContentSpanText>?????? ??????</ContentSpanText>
                                <Select
                                    labelInValue
                                    defaultValue={{ value: "0", label: "??? ??????" }}
                                    style={{
                                        marginLeft: "5px",
                                        width: "120px",
                                        marginBottom:"60px",
                                    }}
                                    onChange={onChangeLenthBottom}
                                >
                                    <Option value="?????????">?????????</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="?????????">?????????</Option>
                                </Select>
                            </p>
                            <p>
                                <ContentSpanText>?????? ??????</ContentSpanText>
                                <Select
                                    labelInValue
                                    defaultValue={{ value: "1", label: "??????" }}
                                    style={{
                                        marginLeft: "20px",
                                        width: "180px",
                                        marginBottom:"60px",
                                    }}
                                    onChange={onChangeFebrickBottom}
                                >
                                    <Option value="???">???</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="???">???</Option>
                                    <Option value="??????????????????">??????????????????</Option>
                                    <Option value="?????????">?????????</Option>
                                    <Option value="?????????">?????????</Option>
                                    <Option value="?????????">?????????</Option>
                                </Select>
                            </p>
                            <p>
                                <ContentSpanText>?????? ??? ??????</ContentSpanText>
                                <Select
                                    labelInValue
                                    defaultValue={{ value: "2", label: "??? ??????" }}
                                    style={{
                                        marginLeft: "20px",
                                        width: "180px",
                                        marginBottom:"60px",
                                    }}
                                    onChange={onChangeThickBottom}
                                >
                                    <Option value="????????????">?????? ??????</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="??????">??????</Option>
                                    <Option value="?????????">?????????</Option>
                                    <Option value="???????????????">?????? ?????????</Option>
                                </Select>
                            </p>
                        </div>
                    </InfoBox>
                        {/*{*/}
                        {/*    checkArr.map((item, idx) => (*/}
                        {/*        <p className={style.checkList}>*/}
                        {/*            <span>{item}</span>*/}
                        {/*            {*/}
                        {/*                checkLenth.map((check) => (*/}
                        {/*                    <label>*/}
                        {/*                        <input*/}
                        {/*                            id={idx}*/}
                        {/*                            type='radio'*/}
                        {/*                            name={idx}*/}
                        {/*                            value={check.value}*/}
                        {/*                            onChange={onChangeCheck}*/}
                        {/*                        />{check.name} </label>*/}
                        {/*                ))*/}
                        {/*            }*/}
                        {/*        </p>*/}

                        {/*    ))*/}
                        {/*}*/}
                </div>

                <Input placeholder="??? ?????? ????????? ??????????????????!"
                       style={{
                           marginRight: "20px",
                           width: "230px",
                       }}
                       onChange={onChangeInputValue}
                />
                {!(inputValue) ?
                    ( <input type="submit" style={{ cursor: 'pointer'}}/> )
                    : (<div>?????? ????????? ??????????????????!</div>)


                }

            </form>
        </div>
        </div>
    );
}

export default Register;