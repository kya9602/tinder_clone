import React from "react";
import Chat from "../components/chat/Chat";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
function Chats() {
  return (
    <div className="chats">
            <Header />
            <Chat
                name="안유진"
                message="안녕~! "
                timestamp="35 minuts ago"
                profilePic="https://post-phinf.pstatic.net/MjAyMDAzMDFfMTIx/MDAxNTgzMDQ5ODEzODc5.eLwaHPGkxYlj-RGPp5zE7Ghs__H9tYjvXaxdZehOo_cg.yopbH7--a4HJPuHxo_6-gx-gojvo0V0dqSgaem-d1mwg.JPEG/%EC%95%88%EC%9C%A0%EC%A7%842.JPG?type=w1200"
            />
            <Chat
                name="이영지"
                message="안녕하세요!(괄괄) "
                timestamp="55 minuts ago"
                profilePic="data:image/jpeg;base64,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"
            />
            <Footer />
        </div>
  );
}

export default Chats;

