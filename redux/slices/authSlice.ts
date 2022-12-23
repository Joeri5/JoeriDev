import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {login, logout, register} from "../thunks/authThunks";

interface AuthSlice {
    user: any | null;
    loading: boolean;
    status: number;
    token: string | null;
}

const initialState: AuthSlice = {
    user: null,
    loading: false,
    status: 0,
    token: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.rejected, (state, action: any) => {
                state.loading = false;
                state.status = action.payload.status;
            })
            .addCase(register.fulfilled, (state, action: any) => {
                state.loading = false;
                state.status = action.payload.status;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.rejected, (state, action: any) => {
                state.loading = false;
                state.status = action.payload.status;
            })
            .addCase(login.fulfilled, (state, action: any) => {
                state.loading = false;
                state.status = action.payload.status;
                state.token = action.payload.data.accessToken;
            })
            .addCase(logout.pending, (state) => {
                state.loading = true;
            })
            .addCase(logout.rejected, (state, action: any) => {
                state.loading = false;
                state.status = action.payload.status;
            })
            .addCase(logout.fulfilled, (state, action: any) => {
                state.loading = false;
                state.status = action.payload.status;
                state.token = null;
            });
    }
});

export const {setToken} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
