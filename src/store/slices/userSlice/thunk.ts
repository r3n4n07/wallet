import type { GoogleSignInData } from "./model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const loginThunk = createAsyncThunk(
    "Login/User",
    async (_, { rejectWithValue }) => {
        try {
            await GoogleSignin.hasPlayServices();
            const { data } = await GoogleSignin.signIn();
            if(!data?.idToken){
                throw new Error();
            }
            return data as GoogleSignInData;
        } catch (error) {
            return rejectWithValue("Erro ao realizar login")
        }
    }
);


export const logOutThunk = createAsyncThunk(
    "LogOut/User",
    async (_, { rejectWithValue }) => {
        try {
            await GoogleSignin.signOut();
        } catch (error) {
            return rejectWithValue("Falha ao efetuar logout")
        }
    }
);