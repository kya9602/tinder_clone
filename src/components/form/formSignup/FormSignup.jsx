import React from "react";
import { Navigate,useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormSignup = () => {

    const Navigate = useNavigate();

    return (
   <AddInputGroup>
   <div>
        <Label>
            <Input
            placeholder="프로그람 아이디"
            name=""id
            type="text"/>
            <CkButton>중복임네까?</CkButton>
        </Label>
        <Label>
            <Input
            placeholder="프로그람 비밀번호"
            name="password"
            type="text"/>
        </Label>
        <Label>
            <Input
            placeholder="비밀번호 한번 더 확인해보라우"
            name="passwordConfirm"
            type="text"/>
        </Label>
        <Label>
            <Input
            placeholder="동무 별명 적으라"
            name="nikeName"
            type="text"/>
            <CkButton>중복임네까?</CkButton>
        </Label>
        <Label>
            <Input
            placeholder="성별검사"
            name="sex"
            type="text"/>
           

        </Label>
        <Label>
        <Input
            type='file' 
            accept='image/*' 
            name='profile_img' 
               />
               <p>사진은 필수다 동무</p>

        </Label>
        <button onClick={() => { Navigate("/") }}>고조 가보자우</button>
        </div>
        </AddInputGroup>
    )

}

export default FormSignup;

const Input = styled.input `
  width: 80%;
  height: 40px;
  border: none;
  overflow: hidden;
  display: flex;
  border-radius: 100px;
  padding: 0 48px;
  justify-content: center;
  margin : auto;
  font-size: 20px;
  font-family: 'Yeon Sung', cursive;
  align-items: center;
  
  border: 5px solid #C30D23;

`

const Label = styled.label`
    overflow: hidden;
    display: flex;
    width: 100%;
    margin: 0 0 8px 0;
    border: 1px solid transparent;
    color: transparent;
`;
const AddInputGroup = styled.div`
width:450px;
margin: 0 auto;
margin-top: 4rem;
border : 4px solid #eee;
border-radius: 12px;
padding:12px 24px 24px 24px;
background-size: 240px;

`;

const CkButton = styled.button`
    border: 1px;
    margin: 15px 0 0;
    display: inline-block;
    text-align: center;
    box-sizing: border-box;
    text-transform: uppercase;
`

