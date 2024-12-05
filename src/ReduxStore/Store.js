import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import authReducer from "./AuthSlice";
import tasksReducer from "./tasksSlice"


const store = configureStore({
    reducer: {
        users: userReducer,
        auth: authReducer,
        tasks: tasksReducer,

    },
});

export default store;
