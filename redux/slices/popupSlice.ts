import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface PopupState {
    value: boolean;
}

const initialState: PopupState = {
    value: false,
}

export const popupSlice = createSlice({
        name: "popup",
        initialState,
        reducers: {
            togglePopup: (state) => {
                state.value = !state.value;
            },
            clearPopup: (state) => {
                state.value = false;
            }
        }
    }
);

export const {togglePopup, clearPopup} = popupSlice.actions;

export const selectPopup = (state: RootState) => state.popup.value;

export default popupSlice.reducer;
