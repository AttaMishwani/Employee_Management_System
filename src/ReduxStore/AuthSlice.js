import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userData: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            const { role, data } = action.payload;
            state.user = role;
            state.userData = data;
            localStorage.setItem("loggedInUser", JSON.stringify({ role, data }));
        },
        logout: (state) => {
            state.user = null;
            state.userData = null;
            localStorage.removeItem("loggedInUser");
        },
        loadUserFromStorage: (state) => {
            const storedUser = localStorage.getItem("loggedInUser");
            if (storedUser) {
                try {
                    const { role, data } = JSON.parse(storedUser);
                    state.user = role || null;
                    state.userData = data || null;
                } catch (error) {
                    console.error("Error parsing stored user:", error);
                    state.user = null;
                    state.userData = null;
                }
            } else {
                state.user = null;
                state.userData = null;
            }
        },
    },
});

export const { login, logout, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;
