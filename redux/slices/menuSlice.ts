import {createSlice} from "@reduxjs/toolkit";
import {Rootstate} from "../store";

interface MenuState {
    value: boolean;
}

const initialState: MenuState = {
    value: false,
}

export const menuSlice = createSlice({
        name: "menu",
        initialState,
        reducers: {
            toggleMenu: (state) => {
                state.value = !state.value;
            }
        }
    }
);

export const {toggleMenu} = menuSlice.actions;

export const selectMenu = (state: Rootstate) => state.menu.value;

export default menuSlice.reducer;
