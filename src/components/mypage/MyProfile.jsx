import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MyProfileUploader from "../MyProfileUpload";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Mypage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
    //이미지 내컴퓨터에서 가져오기
    const fileInput = React.useRef(null);
  
  
    const handleChange = e => {
      console.log(e.target.files[0]);
    };


    const changeProfile = () => {
      let frm = new FormData();
      frm.append("imageUrl", );
      frm.append("sex", );
      dispatch((frm)).then(() => {
        alert("변경되었습니다!");
        navigate("/mypage");
      });
    };


  return (
  <>
    
    <MyHeader>
    <BoldTitle> 프로필 수정 </BoldTitle>
       <SaveBtn  onClick={() => {changeProfile();}}> 완료 </SaveBtn> {/* 네비게이션수정해주기 */}
    </MyHeader>
    <NavigationBar>
    <ColorTitle> 수정 </ColorTitle>
    </NavigationBar>
    <Body>
      <BoldTitle>프로필 사진</BoldTitle>
       <StContainer>
          <MyProfileUploader />
      </StContainer>
      {/* <FontAwesomeIcon
              icon={faPlus}
              size="2x"
              style={{ color: "white" }}
            /> */}
            <br/>
       <BoldTitle>성별</BoldTitle>
        <SDiv>
          
        {/* <select>
          <option>남자　　　　　　　　</option>
          <option>여자　　　　　　　　</option>
        </select> */}
        </SDiv> 
    </Body> 
  </>  
    )
}

export default Mypage;

const MyHeader = styled.div`
  background-color: #fffff;
  height: 50px;
`;

const SaveBtn = styled.button`
  position: absolute;
  top: 20px;
  right: calc(50vw - 230px);
  width: 40px;
  height: 30px;
  @media screen and (max-width: 500px) {
    left: 20px;
  }
  color: white;
  font-weight: bold;
  background-color: #fd4f68;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const NavigationBar = styled.div`
  background-color: #ffffff;
  height: 50px;
`;

const StContainer = styled.div`
  width: 250px;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 30px;
  border-width: 4px;
  border-style: dashed;
  border-color: #b0b0b0;
  background-color: #dad9d9;
  border-radius: 10px;
  cursor: pointer;
  /* padding:12px 24px 24px 24px; */
`;

const Body = styled.div`
  background-color: #f5f5f5;
  height: 83vh;
  padding-top: 30px;
`

const BoldTitle = styled.p`
  text-align: center;
  margin: 20px;
  font-weight: bold;
  font-size: 20px;
`;

const ColorTitle = styled.p`
  text-align: center;
  margin: 20px;
  font-weight: bold;
  font-size: 20px;
  color: #fd4f68;
`;

const SDiv = styled.div`
  width: 250px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 10px;
  border-width: 4px;
  background-color: #dad9d9;
  cursor: pointer;
  /* padding:12px 24px 24px 24px; */
`;