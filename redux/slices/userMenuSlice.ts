import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface UserMenuState {
    value: boolean;
}

const initialState: UserMenuState = {
    value: false,
}

export const userMenuSlice = createSlice({
        name: "userMenu",
        initialState,
        reducers: {
            toggleUserMenu: (state) => {
                state.value = !state.value;
            },
            clearUserMenu: (state) => {
                state.value = false;
            }
        }
    }
);

export const {toggleUserMenu, clearUserMenu} = userMenuSlice.actions;

export const selectUserMenu = (state: RootState) => state.userMenu.value;

export default userMenuSlice.reducer;
