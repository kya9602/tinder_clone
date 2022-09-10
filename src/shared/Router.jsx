import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";

const Router = () => {
    return(
        <Routes>
            <Route path="/" exact element={<Login />} />
           <Route path="/signup" exact element={<Signup />} />
           <Route path="/main" exact element={<Main />} />
           <Route path="/mypage" exact element={<Mypage />} />
            {/* <Route path="/message" exact element={<Message />} />*/}
            
        </Routes>

    )

}

export default Router;
