import {createSlice} from "@reduxjs/toolkit";
import {Rootstate} from "../store";

interface FileState {
    value: boolean;
}

const initialState: FileState = {
    value: false,
}

export const fileSlice = createSlice({
        name: "menu",
        initialState,
        reducers: {
            toggleFile: (state) => {
                state.value = !state.value;
            }
        }
    }
);

export const {toggleFile} = fileSlice.actions;

export const selectFile = (state: Rootstate) => state.file.value;

export default fileSlice.reducer;
