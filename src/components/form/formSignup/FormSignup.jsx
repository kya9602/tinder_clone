import React from "react";
import { Navigate,useNavigate } from "react-router-dom";


const FormSignup = () => {

    const Navigate = useNavigate();

    return (
<div>
        <div>
            <input
            placeholder="프로그람 아이디"
            name=""id
            type="text"/>
            <button>중복임네까?</button>
        </div>
        <div>
            <input
            placeholder="프로그람 비밀번호"
            name="password"
            type="text"/>
        </div>
        <div>
            <input
            placeholder="비밀번호 한번 더 확인해보라우"
            name="passwordConfirm"
            type="text"/>
        </div>
        <div>
            <input
            placeholder="동무 별명 적으라"
            name="nikeName"
            type="text"/>
            <button>중복임네까?</button>
        </div>
        <div>
            <input
            placeholder="성별검사"
            name="sex"
            type="text"/>
           

        </div>
        <div>
        <input 
            type='file' 
            accept='image/*' 
            name='profile_img' 
               />
               <p>사진은 필수다 동무</p>

        </div>
        <button onClick={() => { Navigate("/") }}>고조 가보자우</button>
        </div>
    )

}

export default FormSignup;