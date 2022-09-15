import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatScreen from "../components/chat/ChatScreen";
import ChatDetail from "../components/chat/TestChat";
import MemberList from "../components/swipeCard/Memberlist";
import Chats from "../pages/Chats";
import Like from "../pages/Like";
import Main from "../pages/Main";
import Tour from "../pages/Tour";
import Mypage from "../pages/Mypage";
import MyProfile from "../components/mypage/MyProfile";
import Agrees from "../pages/Agree";
import UseAgree from "../pages/useAgree";
import Gold from "../pages/Gold";
import Start from "../components/formLogin/Start";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Router = () => {
    return(
        <Routes>
            <Route path="/" exact element={<Start />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/main" exact element={<Main />} />
            <Route path="/agrees" exact element={<Agrees />} />
            <Route path="/useagree" exact element={<UseAgree />} />
            <Route path="/gold" exact element={<Gold />} />



            <Route path="/main" exact element={<Main />} />
            <Route path="/chat" exact element={<Chats />} />
            <Route path="/chat/:person" exact element={<ChatScreen />} />
            <Route path="/chattest" exact element={<ChatDetail />} />
            <Route path="/member" exact element={<MemberList />} />
            <Route path="/tour" exact element={<Tour />} />
            <Route path="/like" exact element={<Like />} />
            <Route path="*" element={<div>404 error 없는페이지입니다</div>} />
            <Route path="/mypage" exact element={<Mypage />} />
           <Route path="/img" exact element={<MyProfile />} />
        </Routes>

    )

}

export default Router;