import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../pages/Main";

const Router = () => {
    return(
        <Routes>
            <Route path="/" exact element={<Login />} />
           <Route path="/signup" exact element={<Signup />} />
           <Route path="/main" exact element={<Main />} />
            {/* <Route path="/message" exact element={<Message />} />
            <Route path="/mypage" exact element={<Mypage />} /> */}
        </Routes>

    )

}

export default Router;
