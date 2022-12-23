import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
    "auth/register",
    async (body: any, thunkAPI) => {
        try {
            return await axios.post("/api/v1/auth/register", body);
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (body: any, thunkAPI) => {
        try {
            return await axios.post("/api/v1/auth/login", body);
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response);
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (arg: any, thunkAPI) => {
        try {
            return await axios.post("/api/v1/auth/logout", undefined, {
                headers: {
                    authorization: `Bearer ${arg}`
                }
            });
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response);
        }
    }
);
