import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import ChatScreen from "../components/ChatScreen";
import Chats from "../pages/Chats";
=======
import Login from "../pages/Login";
import Signup from "../pages/Signup";
>>>>>>> a0463cca703a2b12d13e64e6b88cddaebf3a65cf
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";
import Choice from "../components/category/Choice";
const Router = () => {
    return(
        <Routes>
<<<<<<< HEAD
            <Route path="/" exact element={<Main />} />
            <Route path="/chat" exact element={<Chats />} />
            <Route path="/chat/:person" exact element={<ChatScreen />} />
=======
            <Route path="/" exact element={<Login />} />
           <Route path="/signup" exact element={<Signup />} />
           <Route path="/main" exact element={<Main />} />
           <Route path="/mypage" exact element={<Mypage />} />
           <Route path="/choice" exact element={<Choice/>} />
            {/* <Route path="/message" exact element={<Message />} />*/}
            
>>>>>>> a0463cca703a2b12d13e64e6b88cddaebf3a65cf
        </Routes>

    )

}

export default Router;