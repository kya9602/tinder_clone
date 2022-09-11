import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatScreen from "../components/ChatScreen";
import Chats from "../pages/Chats";
import Main from "../pages/Main";

const Router = () => {
    return(
        <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/chat" exact element={<Chats />} />
            <Route path="/chat/:person" exact element={<ChatScreen />} />
        </Routes>

    )

}

export default Router;