import { loginThunk, logOutThunk } from "./thunk";
import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "./initialState";

export const UserSlice = createSlice({
    name: "User",
    initialState: userInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.idToken = action.payload?.idToken;
            state.name = action.payload?.user.name;
            state.email = action.payload?.user.email;
            state.photo = action.payload?.user.photo;
        });
        builder.addCase(logOutThunk.fulfilled, (state) => {
            state.idToken = "";
            state.name = "";
            state.email = "";
            state.photo = "";
        });
    }
});


export default UserSlice.reducer;