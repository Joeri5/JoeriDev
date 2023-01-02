import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface FormState {
    name: string;
    email: string;
    message: string;
}

const initialState: FormState = {
    name: "",
    email: "",
    message: "",
}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        clearForm: (state) => {
            state.name = "";
            state.email = "";
            state.message = "";
        }
    }
});

export const {setName, setEmail, setMessage, clearForm} = formSlice.actions;

export const selectName = (state: RootState) => state.form.name;
export const selectEmail = (state: RootState) => state.form.email;
export const selectMessage = (state: RootState) => state.form.message;

export default formSlice.reducer;
