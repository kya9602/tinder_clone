import React from "react";
import Chat from "../components/Chat";
import Header from "../components/Header";

function Chats() {
  return (
    <div className="chats">
            <Header />
            <Chat
                name="Jin"
                message="Hey! "
                timestamp="35 minuts ago"
                profilePic="https://img.hankyung.com/photo/202108/BF.27314751.1.jpg"
            />
            <Chat
                name="Heechul"
                message="Hi! "
                timestamp="55 minuts ago"
                profilePic="https://img.sbs.co.kr/newimg/news/20171110/201112289_1280.jpg"
            />
        </div>
  );
}

export default Chats;

