import React from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";


const Formlogin = () => {

    const Navigate = useNavigate();

    return (
<div>
    <StForm>
    <div>
        
            <Input
            placeholder="동무 아이디 입력하라우"
            type="text"/>

        
        
    </div>
    <div>

            <Input
            placeholder="동무 비밀번호 입력하라우"
            type="text"/>

    </div>
    <div>
        <button onClick={()=>{Navigate("/main")
   }}>들어가라우</button>
        <button onClick={()=>{Navigate("/signup")
   }}>회원가입</button>
        
    </div>
    </StForm>
</div>

    )
};

export default Formlogin;

const Input = styled.input `
  width: 250px;
  height: 50px;
  border: none;
  overflow: hidden;
  display: flex;
  border-radius: 100px;
  padding: 0 48px;
  justify-content: center;
  margin : auto;
  font-size: 18px;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 20px;
  
  border: 1px solid red;

`

const StForm = styled.div`
width:450px;
margin: 0 auto;
margin-top: 4rem;
border-width: 2px;
border : 4px solid #eee;
border-radius: 12px;
padding:12px 24px 24px 24px;
background-size: 240px;

`
