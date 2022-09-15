import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getMember, __signUp } from "../../redux/modules/member";
/* import { __signUp,__getMember } from "../../../redux/modules/member"; */
// import { __chkId } from "../../../redux/modules/check/id";
// import { __chkName } from "../../../redux/modules/check/name";

//회원가입페이지 회원가입시 이미지 업로드 미들웨어 되는지 확인해볼것 아닐시 이미지전용 미들웨어가 필요하면 구축할것
const FormSignup = () => {

    const userid = useSelector((state) => state.id);
    const username = useSelector((state)=> state.name);
    //const [gender, setGender] = useState<"M" | "F">("M");


    let Navigate = useNavigate();
    let dispatch = useDispatch();
    

    const[pw,setPw] = useState("")
    const [sex,setSex]= useState(""); 
    const[Img,setImg]=useState("");
    const[chkid, setChkid] = useState(false);   
    const[chkpw, setChkpw] = useState(false);
    const [chkname,setChkname] = useState(false);
    const [upload,setUpload] = useState(false)
    
    
    let regId = /^[0-9a-z]+$/;
    let regPw = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/
    let regName = /^[0-9가-힣a-zA-Z]+$/;;


    let initialState = {
        id: "",
        nickName: "",
        password: "",
        sex : "성별",
        img : "이미지",
        
    };

    let [member,setMember] = useState(initialState);
    //수정되는 내용과 member이 가진 값을 매칭하여 state변경
    const onChangeHandler = (event) => {
        const {name,value} = event.target;
        setMember({...member,[name]:value});
    };

    //form을 통한 제줄이라 submit
    const onSubmitHandler = (event) => {
        event.preventDefault();
        //아이디 닉네임 비밀번호 유효성검사(한글,숫자,영어,특수문자, 글자길이등)
        if(!chkid &&!chkname && !chkpw) {
            //중복검사 성공여부 유효성 검사
            if(userid.data.data.success && username.data.data.success) {
                dispatch(__signUp(member,Img));
                setMember(initialState);
                Navigate("/login")
            }
            else {
                alert("중복확인 해주세요");
            } 
            }else {
                alert("양식에 맞는 정보인지 확인해주세요");
            }
        };
    useEffect(() => {
        if (member.id !== "" && !regId.test(member.id))
            setChkid(true);
        else
            setChkid(false);
    }, [member.id])
    //닉네임의 state가 변할때마다 유효성검사 시행
    useEffect(() => {
        if (member.nickName !== "" && !regName.test(member.nickName))
            setChkname(true);
        else
            setChkname(false);
    },[member.nickName])
    //패스워드의state가 변할때마다 유효성검사 시행
    useEffect(() => {
        if (pw !== "" && member.password !== "" && member.password !== pw)
           setChkpw(true);
        else {
            if(!regPw.test(pw))
                setChkpw(true);
            if(!regPw.test(member.password))
                setChkpw(true);
            setChkpw(false);
        }
    })

    // useEffect를 통한 불필요한 비동기 동작 제어
    /* useEffect(() => {
        // 토큰이 존재하지않으면 로그인창으로 방출
        if(localStorage.getItem("token1")===null){
            Navigate("/login")
        }
        if(localStorage.getItem("token2")===null){
            Navigate("/login")
        // 토큰 내용을 확인하여 이미지 및 정보를 불러옴
        }else{
            dispatch(__getMember());
            
        }
    }, [dispatch]); */

    const img = useSelector((state)=>state.image)
    var fileForm = /(.*?)\.(jpg|jpeg|png|gif|bmp|pdf)$/;

    const handleChange = (e,type) => {
        const value = e.target.value;
        if(type==='sex'){
            setSex(value);
            console.log('성별반영완료');
        }
    }

    const onChange = async(e) => {
        // input file에서 선택된 file을 img로 지정
        setImg(e.target.files[0]);
        // 이미지 파일이 아니면 이후 동작을 생략하고 경고문구 출력
        
    
    }
    
    
    return (
        
        <AddInputGroup>
        <form onSubmit={onSubmitHandler} className="add-form">
        <div>
            <Sttitle>회원가입</Sttitle>
        <Label>
            <Input
            placeholder="아이디를 입력해주세요"
            onChange={onChangeHandler}
            name="id"
            type="text"/>
            </Label>
        {chkid?
            <div style={{color:"red"}}>아이디를 확인해주세요.(영문,숫자)</div> :null}
        
        <div>
        <Label>
        <Input
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangeHandler}
            name="password"
            value={member.password}
            type="password"/>
        </Label>
        </div>
        
        <div>
        <Label>
            <Input
            placeholder="비밀번호를 확인해주세요"
            onChange={(e)=> {setPw(e.target.value)}}
            name="passwordConfirm"
            value={pw}
            type="password"/>
        </Label>
        </div>
        {chkpw?
        <div style={{color:"red"}}>패스워드를 확인해주세요</div> :null}
        <div>
        <Label>
            <Input
            placeholder="닉네임을 적어주세요"
            onChange={onChangeHandler}
            name="nickName"
            value={member.nickName}
            type="text"/>
            
        </Label>
        {chkname ?
        <div style={{color:"red"}}>닉네임을 확인해주세요.(한글,영문,숫자)</div> :null}
        </div>


        <div>
        <SLabel>
  <div>
  <label htmlFor="male">남성</label>
  <input id="male" type="radio"  value="남성" name="sex" onChange={handleChange}/>
  <label htmlFor="female">여성</label>
  <input id="female" type="radio" defaultChecked value="여성" name="sex"onChange={handleChange}/>
  </div>
  </SLabel>
              
        
  <Label>  
                <PhotoInput
                type='file' 
                accept='image/*' 
                name='profile_img' 
                onChange={onChange}
                src={img?.data?.data}/>
               
                < CkButton onClick={()=>{
                    if(!upload) {setUpload(true);}
                    else {setUpload(false);}
                }}>프로필사진업로드</ CkButton>
                
            
         </Label>
        </div>
        <NextButton onClick={() => { Navigate("/useagree") }}>다음단계</NextButton>
        
        </div>
        </form>
        </AddInputGroup>
        
    )

}

export default FormSignup;


const Sttitle = styled.div`
 font-size: 35px;
 font-family: 'Noto Sans KR', sans-serif;
 font-weight: bold;
 margin-bottom: 5rem;
`

const SLabel = styled.div`
  border: 2px solid #eee;
  border-radius: 30px;
  padding: 15px 20px;
  font-size: 15px;
  outline: 0;
  width: 350px;
  justify-content: space-between;
`

const Input = styled.input `
  border: none;
  border-radius: 30px;
  padding: 15px 20px;
  font-size: 15px;
  outline: 0;
  width: 350px;
  input.placeholder {
    text-align: left;
  }
  ::-webkit-input-placeholder {
    text-align: left;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    text-align: left;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
  }
  :-ms-input-placeholder {
    text-align: center;
  }
  :not([type="submit"]) {
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: border-color 0.3s ease-in-out;
    :focus {
      border-color: #f34967;
    }
  }
`;



const Label = styled.label`
  
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AddInputGroup = styled.div`
position: absolute;
left: 38%;
width:450px;
height: 930px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 2rem;
border : 4px solid #eee;
border-radius: 12px;

`;


const CkButton = styled.button`
    border:none;  
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    text-transform: uppercase;
    z-index: 10px;
    top:695px;
    right: 160px;
    cursor: pointer;
    background-color: #fff;
    &:hover {  
    background-color: #fff;
    color: #333;
    font-size: 15px;
    }
`;

const PhotoInput = styled.input`
width: 100px;
margin-top:1rem;
margin-bottom: 1rem;
height: 120px;
background: #acacac;
border-radius: 30px;
`
const NextButton = styled.button`
    outline: none;
    height: 60px;
    width: 400px;
    border-radius: 30px;
    border-style: solid;
    align-items: center;
    color : #fff;
    border: none;
    background:#ff5555;
    font-size: 22px;
    
    font-weight: 800;
`


