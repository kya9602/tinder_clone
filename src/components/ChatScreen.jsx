import React, { useState } from 'react'
import styled from 'styled-components'

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name:"Jin",
            image:"https://img.hankyung.com/photo/202108/BF.27314751.1.jpg",
            message:"안녕!",
        },
        {
            name:"Jin",
            image:"https://img.hankyung.com/photo/202108/BF.27314751.1.jpg",
            message:"지금 뭐해!",
        },
        {            
            message:"번달 번줌 ?",
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message : input }]);
        setInput('');
    }

  return (
    <div>
      <TimeStamp>... 분 전에 매치 되었습니다.</TimeStamp>
      
      {messages.map((message)=>(
        message.name?(
            
            <Screenbox>
                <div>                
                <ImgBox src={message.image} /> {message.name}
                <YouMessage>{message.message}</YouMessage>
                </div>
            </Screenbox>
        ):(
            <Screenbox>
                <MyMessage>{message.message}</MyMessage>
            </Screenbox>
        )
      ))}
      <ChatContainer>
            <Input value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="메세지를 입력하세요..."
            type="text"
            />
            <InputButton onClick={handleSend}>전송</InputButton>
      </ChatContainer>
      
    </div>
  )
}

export default ChatScreen


const TimeStamp = styled.p`
    text-align:center;
    padding: 20px;
    color: gray;
`
const Screenbox = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`

const ImgBox = styled.img`
    width: 40px;
    height: 40px; 
    border-radius: 70%;
    overflow: hidden;   
`

const MyMessage = styled.p`
    margin-left: auto;
    background-color: #29b3cd;
    padding: 15px;
    border-radius: 20px;
    color: white;
`

const YouMessage = styled.p`
    margin-left: 10px;
    background-color: lightgray;
    padding: 15px;
    border-radius: 20px;
`

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
`

const InputButton = styled.button`    
    width: 60px;
    border: none;
    margin-right: 32px;
    background-color: white;
    font-weight: bolder;
    color: #fe3d71;
`

const ChatContainer = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid lightgray;
`