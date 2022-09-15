import { configureStore } from "@reduxjs/toolkit";
import login from "../modules/login";
import member from "../modules/member";

const store = configureStore({
    reducer:{
        member:member.reducer,
        login:login.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
            }),
})

export default store;
