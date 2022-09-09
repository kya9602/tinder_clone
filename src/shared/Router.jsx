import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";

const Router = () => {
    return(
        <Routes>
            <Route path="/" exact element={<Main />} />
            {/* <Route path="/login" exact element={<login />} />
            <Route path="/message" exact element={<message />} />
            <Route path="/mypage" exact element={<mypage />} /> */}
        </Routes>

    )

}

export default Router;
