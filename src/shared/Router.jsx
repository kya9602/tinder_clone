import React from "react";
import { Routes, Route } from "react-router-dom";

import Chat from "../pages/Chat";
import Main from "../pages/Main";

const Router = () => {
    return(
        <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/chat/:person" exact element={<Chat />} />
        </Routes>

    )

}

export default Router;